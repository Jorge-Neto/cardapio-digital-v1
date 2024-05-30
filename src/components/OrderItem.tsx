import { OrderListItem } from "@/types/OrderListItem";

type Props = {
  item: OrderListItem;
};

export const OrderItem = ({ item }: Props) => {
  return (
    <>
      <div>
        <p className="text-md">{item.name}</p>
        {/* <p className="text-sm font-light">{item.description}</p> */}
        <p className="text-sm font-light">Quantidade: {item.quantity}</p>
      </div>
      <div className="ml-auto pl-2">-1</div>
    </>
  );
};
