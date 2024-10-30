import FunFactCard from "./FunFactCard";
import { Theme } from "@/types/theme";
import { Fact } from "@/types/Facts";

const Grid = ({
  theme,
  fontFamily,
  funFact,
}: {
  theme: Theme;
  fontFamily: string;
  funFact: Fact[];
}) => {
  return (
    <div className="grid grid-cols-autofit max-w-screen-lg mx-auto gap-4">
      {funFact.map((fact) => (
        <FunFactCard
          key={fact.id}
          theme={theme}
          fontFamily={fontFamily}
          funFact={fact}
          displayType="grid"
        />
      ))}
    </div>
  );
};

export default Grid;
