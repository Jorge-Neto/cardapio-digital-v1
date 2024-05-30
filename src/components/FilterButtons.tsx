type Props = {
  selected: string;
  selectCategory: (category: string) => void;
};

export const FilterButtons = ({ selected, selectCategory }: Props) => {
  return (
    <div className="mt-2">
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:bg-gray-50 text-black ${
          selected == "frango" ? "bg-green-300 hover:bg-green-200" : ""
        }`}
        onClick={() => selectCategory("frango")}
      >
        Frango
      </button>
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:bg-gray-50 text-black ${
          selected == "carne-vermelha" ? "bg-green-300 hover:bg-green-200" : ""
        }`}
        onClick={() => selectCategory("carne-vermelha")}
      >
        Carne Vermelha
      </button>
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:bg-gray-50 text-black ${
          selected == "espaguete" ? "bg-green-300 hover:bg-green-200" : ""
        }`}
        onClick={() => selectCategory("espaguete")}
      >
        Espaguete
      </button>
      <button
        type="button"
        className={`text-sm mx-1 my-1 px-3 py-2 rounded-md shadow hover:bg-gray-50 text-black ${
          selected == "caldos-sopas" ? "bg-green-300 hover:bg-green-200" : ""
        }`}
        onClick={() => selectCategory("caldos-sopas")}
      >
        Caldos e sopas
      </button>
    </div>
  );
};
