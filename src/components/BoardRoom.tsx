export const BoardRoom = () => {
    return (
      <div className="col-span-4 row-span-7 bg-blue-200 font-semibold grid grid-cols-4 border">
        <div className="bg-white col-span-4  flex items-center justify-center" />
  
        <div className="bg-white col-span-1 row-span-4 flex items-center justify-center" />
        <div className="bg-white col-span-1 row-span-2 border flex items-center justify-center">
          L
        </div>
        <div className="bg-white col-span-1 row-span-2 flex items-center justify-center" />
  
        <div className="bg-white col-span-1 row-span-4  flex items-center justify-center" />
        <div className="bg-white col-span-1 row-span-2 border flex items-center justify-center">
          M
        </div>
        <div className="bg-white col-span-1 row-span-2 border flex items-center justify-center">
          N
        </div>
  
        <div className="bg-white col-span-4 flex items-center justify-center">
          <span className="text-sm text-gray-500">Magic</span>
        </div>
      </div>
    );
  };
  