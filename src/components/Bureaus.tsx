import { getBureaus } from "@/lib/server";
import { useEffect, useState } from "react";

export const Bureaus = () => {
    const [bureaus, setbureaus] = useState<{ id: string }[]>([]);
    useEffect(() => {
      const getData = async () => {
        const result = await getBureaus();
  
        const bureaus = Object.entries(result).map((item) => {
          return {
            id: item[0],
          };
        });
        setbureaus(bureaus);
      };
      getData();
    }, []);
  
    return (
      <ul className="max-w-[600px] mx-auto flex flex-col gap-2">
        <h1 className="text-xl">Bureaus</h1>
        {bureaus.map((persoon) => {
          return <li key={persoon.id} className="bg-white p-3 shadow rounded">{persoon.id}</li>;
        })}
      </ul>
    );
  };
  