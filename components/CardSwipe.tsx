import { Fact } from "@/types/Facts";
import { Theme } from "@/types/theme";
import { useState, useRef, useEffect } from "react";
import FunFactCard from "./FunFactCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CardSwipe = ({
  onSwipeRight,
  onSwipeLeft,
  children,
  index,
}: {
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
  children: React.ReactNode;
  index: number;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - offsetX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setOffsetX(currentX - startX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    setOffsetX(currentX - startX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (offsetX > 100) {
      onSwipeRight();
    } else if (offsetX < -100) {
      onSwipeLeft();
    }
    setOffsetX(0);
  };

  useEffect(() => {
    const handleMouseUp = () => handleDragEnd();
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [offsetX, handleDragEnd]);
  return (
    <div
      ref={cardRef}
      className={`absolute z-1 shadow-md overflow-hidden cursor-grab active:cursor-grabbing transition-transform duration-300 ease-out ${
        isDragging ? "shadow-lg" : ""
      }`}
      style={{
        transform: `translateX(${offsetX}px) rotate(${
          offsetX * 0.1
        }deg) scale(${1 - index * 0.05})`,
        zIndex: 1000 - index,
        top: `${index * 10}px`,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

const CardStack = ({
  theme,
  fontFamily,
  funFact,
}: {
  theme: Theme;
  fontFamily: string;
  funFact: Fact[];
}) => {
  const [cards, setCards] = useState(funFact);
  const handleSwipeLeft = () => {
    setCards((prevCards) => prevCards.slice(1));
  };

  const handleSwipeRight = () => {
    setCards((prevCards) => prevCards.slice(1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handleSwipeLeft();
    } else if (e.key === "ArrowRight") {
      handleSwipeRight();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSwipeLeft, handleSwipeRight]);

  return (
    <div className="relative flex justify-center items-center h-80  overflow-hidden">
      {cards.map((fact, index) => (
        <CardSwipe
          key={index}
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
          index={index}
        >
          <FunFactCard
            theme={theme}
            fontFamily={fontFamily}
            funFact={fact}
            displayType="swipe"
          />
        </CardSwipe>
      ))}
      <button onClick={handleSwipeLeft} className="absolute left-0">
        <ArrowLeft />
      </button>
      <button onClick={handleSwipeRight} className="absolute right-0">
        <ArrowRight />
      </button>
    </div>
  );
};

export { CardSwipe, CardStack };
