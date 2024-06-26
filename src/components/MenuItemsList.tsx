import { MenuItem } from "./MenuItem";
import { FoodItem } from "@/types/FoodItem";

type Props = {
  list: FoodItem[];
  onClickFunction: (item: FoodItem) => void;
};

export const MenuItemsList = ({ list, onClickFunction }: Props) => {
  return (
    <ul className="bg-gray-50 max-w-md rounded-md p-3">
      {list.map((item) => (
        <li
          key={item.id}
          onClick={() => onClickFunction(item)}
          className="mb-3 p-3 shadow hover:shadow-lg rounded-md bg-white hover:bg-gray-100 select-none flex flex-row items-center justify-between cursor-pointer"
        >
          <MenuItem item={item} />
        </li>
      ))}
    </ul>
  );
};
