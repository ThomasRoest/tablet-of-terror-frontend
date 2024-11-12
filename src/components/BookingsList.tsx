"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { useState } from "react";

type Booking = {
  id: string;
  booker: string;
  date: Date;
  time: string;
  duration: string;
};

const bookings: Booking[] = [
  {
    id: "1",
    booker: "John Doe",
    date: new Date(2023, 5, 15),
    time: "09:00",
    duration: "1 hour",
  },
  {
    id: "2",
    booker: "Jane Smith",
    date: new Date(2023, 5, 16),
    time: "14:00",
    duration: "30 minutes",
  },
  {
    id: "3",
    booker: "Bob Johnson",
    date: new Date(2023, 5, 17),
    time: "11:00",
    duration: "2 hours",
  },
  {
    id: "4",
    booker: "Alice Brown",
    date: new Date(2023, 5, 18),
    time: "16:00",
    duration: "1.5 hours",
  },
  {
    id: "5",
    booker: "Charlie Davis",
    date: new Date(2023, 5, 19),
    time: "10:00",
    duration: "1 hour",
  },
];

export const BookingsList = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="h-full w-full">
        (1) Boeking
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Boardroom reserveringen</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booker</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.booker}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                      {format(booking.date, "MMMM d, yyyy")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 opacity-50" />
                      {booking.time}
                    </div>
                  </TableCell>
                  <TableCell>{booking.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
