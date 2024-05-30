import { MenuItem } from "./MenuItem";
import { FoodItem } from "@/types/FoodItem";

type Props = {
  list: FoodItem[];
  onClickFunction: (item: FoodItem) => void;
};

export const MenuItemsList = ({ list, onClickFunction }: Props) => {
  return (
    <ul>
      {list.map((item) => (
        <li
          key={item.id}
          onClick={() => onClickFunction(item)}
          className="my-3 p-3 shadow-md hover:shadow-lg rounded-md hover:bg-gray-50  flex flex-row items-center justify-between cursor-pointer"
        >
          <MenuItem item={item} />
        </li>
      ))}
    </ul>
  );
};
