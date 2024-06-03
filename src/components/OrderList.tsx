import React from "react";
import { OrderListItem } from "@/types/OrderListItem";
import { OrderItem } from "./OrderItem";
import { sendMeWhatsapp, sumOfQuantities } from "@/utils/utils";

type Props = {
  list: OrderListItem[];
  isOpen: boolean;
  removeItem: (id: number) => void;
  toggleView: (state: boolean) => void;
};

export const OrderList = ({ list, isOpen, removeItem, toggleView }: Props) => {
  var itemsCount = sumOfQuantities(list);
  return isOpen ? (
    <div className="w-screen h-dvh bg-white fixed overflow-y-scroll pt-3 px-3 pb-6">
      <div className="w-full">
        <button
          className="right-3 fixed shadow-md hover:shadow-lg hover:cursor-pointer py-2 bg-white hover:bg-gray-50 w-10 rounded-full text-red-400 font-black"
          onClick={() => toggleView(false)}
        >
          X
        </button>
      </div>
      <ul className="mt-12">
        {list.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            onClick={() => removeItem(item.id)}
            className="my-3 p-2 shadow-md rounded-md hover:bg-gray-50 flex flex-row items-center hover:cursor-pointer select-none"
          >
            <OrderItem item={item} />
          </li>
        ))}
      </ul>
      <button
        className={`
           mb-2 py-2 w-full rounded-md mx-auto font-black
          ${
            itemsCount >= 5
              ? "bg-emerald-500 hover:bg-emerald-400 shadow-md hover:shadow-lg hover:cursor-pointer text-white"
              : " text-slate-400"
          }
        `}
        onClick={() => sendMeWhatsapp(list)}
        disabled={itemsCount < 5}
      >
        Enviar para o whatsapp
      </button>
      {itemsCount < 5 && (
        <p className="text-sm text-center text-rose-600">
          Inclua pelo menos 5 itens
        </p>
      )}
    </div>
  ) : (
    <div className="fixed inset-x-0 bottom-8 w-full text-center ">
      <button
        className="shadow-md hover:shadow-lg max-w-sm hover:cursor-pointer py-2 bg-red-500 hover:bg-red-400 w-9/12 rounded-md mx-auto text-white font-black"
        onClick={() => toggleView(true)}
      >
        {itemsCount} itens na sacola
      </button>
    </div>
  );
};
