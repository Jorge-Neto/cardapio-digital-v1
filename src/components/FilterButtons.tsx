type Props = {
  selected: string;
  selectCategory: (category: string) => void;
};

export const FilterButtons = ({ selected, selectCategory }: Props) => {
  return (
    <div className="mt-2 grid grid-cols-2 w-full mb-2 max-w-md">
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:shadow-md text-black ${
          selected == "frango" ? "bg-green-500 hover:bg-green-400 text-white" : "hover:bg-gray-100"
        }`}
        onClick={() => selectCategory("frango")}
      >
        Frango
      </button>
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:shadow-md text-black ${
          selected == "carne-vermelha" ? "bg-green-500 hover:bg-green-400 text-white" : "hover:bg-gray-100"
        }`}
        onClick={() => selectCategory("carne-vermelha")}
      >
        Carne Vermelha
      </button>
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:shadow-md text-black ${
          selected == "espaguete" ? "bg-green-500 hover:bg-green-400 text-white" : "hover:bg-gray-100"
        }`}
        onClick={() => selectCategory("espaguete")}
      >
        Espaguete
      </button>
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:shadow-md text-black ${
          selected == "caldos-sopas" ? "bg-green-500 hover:bg-green-400 text-white" : "hover:bg-gray-100"
        }`}
        onClick={() => selectCategory("caldos-sopas")}
      >
        Caldos e sopas
      </button>
    </div>
  );
};
