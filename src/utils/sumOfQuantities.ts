import { OrderListItem } from "@/types/OrderListItem";

const sumOfQuantities = (orderList: OrderListItem[]): number => orderList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

export default sumOfQuantities;
