import useParts from "../../Hooks/useParts";
import PartsDetails from "./PartsDetails";

function Parts() {
  const [parts] = useParts([]);

  return (
    <div>
      <h1 className="pb-10 pt-48 text-center text-4xl uppercase font-bold">
        <span className="text-nature">Motor</span>
        <span className="text-primary "> Bike Parts</span>
        <span className="divider bg-primary h-[3px] w-1/4 mx-auto xl:mt-12 2xl:mt-12 lg:mt-8 mt-4"></span>
      </h1>
      <div className=" grid xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8 w-11/12 mx-auto">
        {parts.slice(0, 3).map((part, index) => (
          <PartsDetails part={part} key={index}></PartsDetails>
        ))}
      </div>
    </div>
  );
}

export default Parts;
