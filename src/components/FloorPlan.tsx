import { Magic } from "./Magic";

const Gang = () => {
  return (
    <div className="col-span-full row-span-2 bg-gray-100 font-semibold flex items-center justify-center">
      gang
    </div>
  );
};

export const FloorPlan = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-16 grid-rows-16 gap-2 bg-white p-4 h-[700px]">
        <Magic />
        <Magic />
        <Magic />
        <Magic />
        <Gang />
        <Magic />
        <Magic />
        <Magic />
        <Magic />
      </div>
    </div>
  );
};
