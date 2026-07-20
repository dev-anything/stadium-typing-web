import europeStadiums from "@data/europe.json";

const STADIUMS = [
  { id: "eu", data: europeStadiums},
  { id: "eu-002", label: "Old Trafford"}
]

const EUROPE = europeStadiums;

const StadiumSelector = ( { onChange } ) => {
  return (
    <div>
      {EUROPE.map((stadium) => {
        return (
          <button
            key={stadium.id}
            type="button"
            onClick={() => onChange(stadium.stadium)}
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 hover:cursor-pointer"
          >
            {stadium.stadium}
          </button>
        )
      })}
    </div>
  );
}

export default StadiumSelector;