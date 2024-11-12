import { FormEvent, useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getWerknemers } from "@/lib/server";

export const BookingForm = ({
  value,
  onSubmit,
}: {
  value: string;
  onSubmit: (name: string, value: string) => void;
}) => {
  const [personen, setPersonen] = useState<{ id: string }[]>([]);

  const [naam, setNaam] = useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await getWerknemers();

      const personen = Object.entries(result).map((item) => {
        return {
          id: item[0],
        };
      });
      setPersonen(personen);
    };

    getData();
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      onSubmit(naam, value);
    },
    [naam, onSubmit, value]
  );

  return (
    <Dialog>
      <DialogTrigger className="h-full w-full hover:bg-gray-300 transition">
        {value}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Reserveren: {value}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="booker" className="text-right">
                Naam
              </label>
              <Select
                onValueChange={(value) => {
                  setNaam(value);
                }}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecteer" />
                </SelectTrigger>
                <SelectContent>
                  {personen.map((persoon) => {
                    return (
                      <SelectItem value={persoon.id}>{persoon.id}</SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="time" className="text-right">
                Tijd
              </label>
              <Select>
                <SelectTrigger id="time" className="col-span-3">
                  <SelectValue placeholder="Selecteer" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                    <SelectItem
                      key={hour}
                      value={`${hour.toString().padStart(2, "0")}:00`}
                    >
                      {`${hour.toString().padStart(2, "0")}:00`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="duration" className="text-right">
                Duur
              </label>
              <Select>
                <SelectTrigger id="duration" className="col-span-3">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 minuten</SelectItem>
                  <SelectItem value="60">1 uur</SelectItem>
                  <SelectItem value="90">1.5 uur</SelectItem>
                  <SelectItem value="120">2 uur</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Reserveer</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
