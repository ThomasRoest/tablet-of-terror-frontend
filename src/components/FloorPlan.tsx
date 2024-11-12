// const Example = () => {
//     return <div>my component</div>;
// };

const Block = () => {
  return (
    <div className="bg-white col-span-1 border flex items-center justify-center" />
  );
};

const Table = () => {
  return (
    <div className="bg-emerald-300 col-span-1 border flex items-center justify-center" />
  );
};

// 24 blocks ( 4 x 6 )
const RoomSmall = () => {
  return (
    <div className="col-span-4 row-span-7 bg-blue-200 font-semibold grid grid-cols-4">
      <div className="bg-white col-span-4 border flex items-center justify-center" />

      <div className="bg-white col-span-1 row-span-4 border flex items-center justify-center" />
      <div className="bg-white col-span-1 row-span-2 border flex items-center justify-center" />
      <div className="bg-white col-span-1 row-span-2 border flex items-center justify-center" />

      <div className="bg-white col-span-1 row-span-4 border flex items-center justify-center" />
      <div className="bg-white col-span-1 row-span-2 border flex items-center justify-center" />
      <div className="bg-white col-span-1 row-span-2 border flex items-center justify-center" />

      <div className="bg-white col-span-4 border flex items-center justify-center" />
    </div>
  );
};

// 48 ( 8 x 6 )
const RoomLarge = () => {
  return (
    <div className="col-span-8 row-span-7 bg-blue-200 font-semibold grid grid-cols-8">
      <div className="bg-white col-span-8 border flex items-center justify-center" />

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

      <div className="bg-white col-span-8 border flex items-center justify-center" />

      {/* {Array.from({ length: 8 }).map((_, index) => {
        return <Block key={index} />;
      })} */}
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
        <RoomSmall />
        <RoomSmall />
        <Gang />
        <RoomSmall />
        <RoomSmall />
        <RoomSmall />
        <RoomSmall />
      </div>
    </div>
  );
};
