import type { OrderListItem } from "@/types/OrderListItem";

type AddAction = {
    type: 'add';
    payload: OrderListItem;
}

type EditAction = {
    type: 'edit';
    payload: {
        id: number,
        operation: 'increment' | 'decrement'
    };
}

type RemoveAction = {
    type: 'remove';
    payload: number;
}

type OrderAction = AddAction | EditAction | RemoveAction;

export const orderReducer = (order: OrderListItem[], action: OrderAction,): OrderListItem[] => {
    switch (action.type) {

        case "add":
            return [...order, action.payload];

        case "edit":
            return order.map(item => {
                if (item.id !== action.payload.id) return item;

                const delta = action.payload.operation === "increment" ? 1 : -1;
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            });

        case "remove":
            return order.filter(item => item.id !== action.payload);

        default:
            return order;
    }
}
