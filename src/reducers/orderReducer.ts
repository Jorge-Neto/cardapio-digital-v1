import { OrderListItem } from "@/types/OrderListItem";

type AddAction = {
    type: 'add';
    payload: OrderListItem;
}

type EditAction = {
    type: 'edit';
    payload: number;
}

type RemovedAction = {
    type: 'remove';
    payload: number;
}

type ListActions = AddAction | EditAction | RemovedAction;

export const orderReducer = (order: OrderListItem[], { type, payload }: ListActions) => {
    switch (type) {

        case "add":
            return [...order, payload]

        case "edit":
            return order.filter(item => {
                if (item.id === payload) {
                    item.quantity += 1;
                }
                return item;
            })

        case "remove":
            return order.filter(item => {
                if (item.id === payload && item.quantity == 1) return false;
                if (item.id === payload && item.quantity > 1) item.quantity -= 1;
                return item;
            });

        default:
            return order;
    }


}
