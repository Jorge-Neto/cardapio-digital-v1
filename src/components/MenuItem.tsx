import { FoodItem } from "@/types/FoodItem";

type Props = {
  item: FoodItem;
};

export const MenuItem = ({ item }: Props) => {
  return (
    <>
      <div>
        <p className="text-md">{item.name}</p>
        <p className="text-sm font-light">{item.description}</p>
      </div>
      <div className="ml-2">+1</div>
    </>
  );
};
