import { Theme } from "@/types/theme";
import { Fact } from "@/types/Facts";
import FunFactCard from "./FunFactCard";

const List = ({
  theme,
  fontFamily,
  funFact,
}: {
  theme: Theme;
  fontFamily: string;
  funFact: Fact[];
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {funFact.map((fact) => (
        <FunFactCard
          key={`list-${fact.id}`}
          funFact={fact}
          theme={theme}
          fontFamily={fontFamily}
          displayType="list"
        />
      ))}
    </div>
  );
};

export default List;
