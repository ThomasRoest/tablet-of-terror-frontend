import { FormEvent, useCallback, useState } from "react";
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

const personsData = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com" },
  { id: "4", name: "Alice Brown", email: "alice@example.com" },
  { id: "5", name: "Charlie Davis", email: "charlie@example.com" },
];

export const BookingForm = ({
  value,
  onSubmit,
}: {
  value: string;
  onSubmit: (name: string, value: string) => void;
}) => {
  const [naam, setNaam] = useState("");
  
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
                  {personsData.map((persoon) => {
                    return (
                      <SelectItem key={persoon.id} value={persoon.name}>
                        {persoon.name}
                      </SelectItem>
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
