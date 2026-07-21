import allStadiums from "@data/main.json";

const ALL = allStadiums;

const StadiumSelector = ( { onChange } ) => {
  return (
    <div>
      {ALL.map((stadium) => {
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