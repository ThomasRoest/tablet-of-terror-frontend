import { Button } from "./ui/button";
import {
  Dialog,
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

export const BookingForm = ({ value }: { value: string }) => {
  return (
    <Dialog>
      <DialogTrigger className="h-full w-full hover:bg-emerald-500 transition">
        {value}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reserveren: {value}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="booker" className="text-right">
              Naam
            </label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecteer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Thomas">Thomas</SelectItem>
                <SelectItem value="Annemiek">Annemiek</SelectItem>
                <SelectItem value="Andre">Andre</SelectItem>
                <SelectItem value="Tom">Tom</SelectItem>
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
          <Button
            type="button"
            onClick={() => console.log("Booking submitted")}
          >
            Reserveer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
