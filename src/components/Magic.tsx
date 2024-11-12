import { useState } from "react";
import { BookingForm } from "./BookingForm";

export const Magic = () => {
  const [selectedTables, setSelectedTables] = useState<
    { value: string; name: string }[]
  >([]);

  const isSelected = (value: string): boolean => {
    return selectedTables.map((item) => item.value).includes(value);
  };

  const onSubmit = (name: string, value: string): void => {
    setSelectedTables((state) => {
      return [...state, { name, value }];
    });
  };
  return (
    <div className="col-span-4 row-span-7 font-semibold grid grid-cols-4 border gap-1">
      <div className="bg-white col-span-4  flex items-center justify-center" />

      <div className="bg-white col-span-1 row-span-4 flex items-center justify-center" />
      <div
        className={`col-span-1 row-span-2 flex items-center justify-center  rounded ${
          isSelected("L") ? "bg-red-300" : "bg-emerald-300"
        }`}
      >
        <BookingForm value="L" onSubmit={onSubmit} />
      </div>
      <div className="bg-white col-span-1 row-span-2 flex items-center justify-center" />

      <div className="bg-white col-span-1 row-span-4  flex items-center justify-center" />
      <div
        className={`col-span-1 row-span-2 flex items-center justify-center  rounded ${
          isSelected("M") ? "bg-red-300" : "bg-emerald-300"
        }`}
      >
        <BookingForm value="M" onSubmit={onSubmit} />
      </div>
      <div
        className={`col-span-1 row-span-2 flex items-center justify-center  rounded ${
          isSelected("N") ? "bg-red-300" : "bg-emerald-300"
        }`}
      >
        <BookingForm value="N" onSubmit={onSubmit} />
      </div>
      <div className="bg-white col-span-4 flex items-center justify-center ">
        <span className="text-sm text-gray-500">Magic</span>
      </div>
    </div>
  );
};
