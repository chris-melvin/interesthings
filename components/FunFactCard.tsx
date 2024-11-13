import { Fact } from "@/types/Facts";
import { Theme } from "@/types/theme";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { TopicIcon, TopicKey } from "./TopicIcon";

interface FunFactCardProps {
  theme: Theme;
  fontFamily: string;
  funFact: Fact;
  detailsLink?: string;
  displayType: "grid" | "list" | "swipe";
}

const FunFactCard: React.FC<FunFactCardProps> = ({
  theme,
  fontFamily,
  funFact,
  displayType,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Configure the animation
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const dimension =
    displayType === "grid"
      ? "w-60 h-80"
      : displayType === "list"
      ? "w-96 h-60"
      : "h-80 w-60";

  return (
    <div
      className={`
          relative
          max-w
       ${dimension}
        `}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <animated.div
        className="absolute w-full h-full rounded-lg shadow-lg p-6 cursor-pointer"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          backfaceVisibility: "hidden",
          backgroundColor: theme.bgColor,
          borderColor: theme.borderColor,
          fontFamily,
        }}
      >
        <div className="flex flex-col h-full justify-between">
          <h3
            className="text-xl font-semibold"
            style={{ color: theme.textColor }}
          >
            {funFact.fact}
          </h3>
          <TopicIcon
            topic={funFact.topic as TopicKey}
            color={theme.textColor}
          />
        </div>
      </animated.div>

      {/* back of card */}
      <animated.div
        className="absolute w-full h-full rounded-lg shadow-lg p-6 cursor-pointer"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateY(180deg)`),
          backfaceVisibility: "hidden",
          backgroundColor: theme.bgColor,
          borderColor: theme.borderColor,
          fontFamily,
        }}
      >
        <div className="flex flex-col h-full space-y-4 overflow-y-auto">
          <p style={{ color: theme.textColor }}>{funFact.details}</p>
          <div>
            <p
              className="font-semibold mb-2"
              style={{ color: theme.secondaryTextColor }}
            >
              References:
            </p>
            <ul className="text-sm text-blue-500 space-y-1">
              {funFact.references.map((ref, index) => (
                <li key={index}>
                  <a
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Source {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default FunFactCard;
