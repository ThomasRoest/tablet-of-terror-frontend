import { BoardRoom } from "./BoardRoom";
import { Magic } from "./Magic";
import { Placeholder } from "./Placeholder";

const Gang = () => {
  return (
    <div className="col-span-full row-span-2 bg-gray-100 font-semibold flex items-center justify-center">
      gang
    </div>
  );
};

export const FloorPlan = () => {
  return (
    <div className="h-full w-[1200px] mx-auto">
      <div className="grid grid-cols-16 grid-rows-16 gap-2 bg-white p-4 h-[700px]">
        <Magic />
        <BoardRoom />
        <Placeholder />
        <Placeholder />
        <Gang />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </div>
  );
};
