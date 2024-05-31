import { OrderListItem } from "@/types/OrderListItem";
import React from "react";
import { OrderItem } from "./OrderItem";
import sumOfQuantities from "@/utils/sumOfQuantities";
import sendMeWhatsapp from "@/utils/sendMe";

type Props = {
  list: OrderListItem[];
  isOpen: boolean,
  removeItem: (id: number) => void;
  toggleView: (state: boolean) => void;
};

export const OrderList = ({ list, isOpen, removeItem, toggleView }: Props) => {
  return (
    isOpen
    ?
    (
      <div className="w-screen h-dvh bg-white fixed overflow-y-scroll pt-3 px-3 pb-6">
        <div className="w-full"><button className="right-3 fixed shadow-md hover:shadow-lg hover:cursor-pointer py-2 bg-white hover:bg-gray-50 w-10 rounded-full text-red-400 font-black" onClick={() => toggleView(false)}>X</button></div>
        <ul className="mt-12">
        {list.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            onClick={() => removeItem(item.id)}
            className="my-3 p-2 shadow-md rounded-md hover:bg-gray-50  flex flex-row items-center hover:cursor-pointer"
          >
            <OrderItem item={item} />
          </li>
        ))}
        </ul>
        {sumOfQuantities(list) == 12 &&
        <button className="shadow-md hover:shadow-lg hover:cursor-pointer py-2 bg-teal-900 hover:bg-teal-800 w-full rounded-md mx-auto text-white font-black" onClick={() => sendMeWhatsapp(list)}>Enviar para o whatsapp</button>
        }
      </div>
    )
    : (
      <div className="fixed bottom-10 left-50 w-full text-center ">
        <button className="shadow-md hover:shadow-lg hover:cursor-pointer py-2 bg-red-400 hover:bg-red-500 w-9/12 rounded-md mx-auto text-white font-black" onClick={() => toggleView(true)}>{sumOfQuantities(list)} itens na sacola</button>
      </div>
    )
  );
};
