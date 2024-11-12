const Block = () => {
  return (
    <div className="bg-gray-100 col-span-1 border flex items-center justify-center">
      A
    </div>
  );
};

const Table = () => {
  return (
    <div className="bg-amber-500 col-span-1 border flex items-center justify-center">
      A
    </div>
  );
};

// 24 blocks ( 4 x 6 )
const RoomSmall = () => {
  return (
    <div className="col-span-4 row-span-7 bg-blue-200 font-semibold grid grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => {
        return <Block key={index} />;
      })}
      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      {Array.from({ length: 4 }).map((_, index) => {
        return <Block key={index} />;
      })}
    </div>
  );
};

// 48 ( 8 x 6 )
const RoomLarge = () => {
  return (
    <div className="col-span-8 row-span-7 bg-blue-200 font-semibold grid grid-cols-8">
      {Array.from({ length: 8 }).map((_, index) => {
        return <Block key={index} />;
      })}

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />

      <Block />
      <Table />
      <Table />
      <Block />
      
      {Array.from({ length: 8 }).map((_, index) => {
        return <Block key={index} />;
      })}
    </div>
  );
};

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
        <RoomSmall />
        <RoomSmall />
        <RoomLarge />
        <Gang />
        <RoomSmall />
        <RoomSmall />
        <RoomLarge />
      </div>
    </div>
  );
};
