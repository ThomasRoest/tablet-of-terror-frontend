import { Bureaus } from "@/components/Bureaus";
import { getVergaderruimtes } from "@/lib/server";
import { useState, useEffect } from "react";

export const RuimtesPage = () => {
  const [personen, setPersonen] = useState<{ id: string }[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await getVergaderruimtes();

      const personen = Object.entries(result).map((item) => {
        return {
          id: item[0],
        };
      });
      setPersonen(personen);
    };
    getData();
  }, []);

  return (
    <>
      <ul className="max-w-[600px] mx-auto flex flex-col gap-2 mb-2">
        <h1 className="text-2xl">Ruimtes</h1>
        {personen.map((persoon) => {
          return (
            <li key={persoon.id} className="bg-white p-3 shadow rounded">
              {persoon.id}
            </li>
          );
        })}
      </ul>
      <Bureaus />
    </>
  );
};
