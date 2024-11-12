import { useState } from "react";
import { BookingForm } from "./BookingForm";
import { BookingsList } from "./BookingsList";

export const BoardRoom = () => {
  const [selected, setSelection] = useState<{
    value: string;
    name: string;
    van: string;
    tot: string;
  } | null>(null);

  const onSubmit = (name: string, value: string): void => {
    setSelection({ name, value, van: "13:00", tot: "14:00" });
  };

  return (
    <div className="col-span-4 row-span-7 font-semibold grid grid-cols-4 border">
      <div className="bg-white col-span-4 row-span-1 flex items-center justify-center" />
      <div className="bg-white col-span-1 row-span-2 flex items-center justify-center" />
      <div className=" col-span-2 row-span-2 flex items-center justify-center border bg-[#EDC69F]">
        {selected ? (
          <BookingsList />
        ) : (
          <BookingForm value="br" onSubmit={onSubmit} />
        )}
      </div>
      <div className="bg-white col-span-1 row-span-2 flex items-center justify-center" />
      <div className="bg-white col-span-4 flex items-center justify-center ">
        <span className="text-sm text-gray-500">Boardroom</span>
      </div>
    </div>
  );
};
