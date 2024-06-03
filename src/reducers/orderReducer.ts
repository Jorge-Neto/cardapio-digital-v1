import { OrderListItem } from "@/types/OrderListItem";

type AddAction = {
    type: 'add';
    payload: OrderListItem;
}

type EditAction = {
    type: 'edit';
    payload: {
        id: number,
        operation: string
    };
}

type RemovedAction = {
    type: 'remove';
    payload: number;
}

type ListActions = AddAction | EditAction | RemovedAction;

export const orderReducer = (order: OrderListItem[], { type, payload }: ListActions) => {
    switch (type) {

        case "add":
            return [...order, payload];

        case "edit":
            let { id, operation } = payload
            return order.filter(item => {
                if (item.id === id) {
                    if (operation === "increment") item.quantity += 1;
                    if (operation === "decrement") item.quantity -= 1;
                }
                return item;
            });

        case "remove":
            return order.filter(item => item.id !== payload);

        default:
            return order;
    }


}
