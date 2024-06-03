"use client";

import { useReducer, useState } from "react";
import { FilterButtons } from "@/components/FilterButtons";
import { MenuItemsList } from "@/components/MenuItemsList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { menuOffer } from "@/data/foodList";
import { orderReducer } from "@/reducers/orderReducer";
import { FoodItem } from "@/types/FoodItem";
import { UsageNotes } from "@/components/UsageNotes";
import { OrderList } from "@/components/OrderList";
import { sumOfQuantities } from "@/utils/utils";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredMenu, setFilteredMenu] = useState<Array<FoodItem>>(menuOffer);
  const [showOrderList, setShowOrderList] = useState(false);
  const [order, dispatch] = useReducer(orderReducer, []);

  const changeFilter = (category: string) => {
    if (category !== selectedFilter) {
      setSelectedFilter(category);
      setFilteredMenu(menuOffer.filter((item) => item.category == category));
      return;
    }
    setSelectedFilter("");
    setFilteredMenu(menuOffer);

    return;
  };

  const addItemToOrder = ({ id, name }: FoodItem) => {
    if (order.some((el) => el.id === id)) {
      dispatch({
        type: "edit",
        payload: {
          id,
          operation: "increment",
        },
      });
    } else {
      dispatch({
        type: "add",
        payload: { id, name, quantity: 1 },
      });
    }
  };

  const removeItemFromCard = (id: number) => {
    let targetItem = order.find((el) => el.id === id);

    if (sumOfQuantities(order) > 0) {
      if (targetItem && targetItem?.quantity >= 2) {
        dispatch({
          type: "edit",
          payload: {
            id,
            operation: "decrement",
          },
        });
      } else {
        dispatch({
          type: "remove",
          payload: id,
        });
      }
    }

    if (sumOfQuantities(order) <= 1) setShowOrderList(false);
  };

  return (
    <div
      className={`flex flex-col items-center justify-between pt-2 px-4 pb-4 ${
        showOrderList ? "overflow-hidden h-dvh" : ""
      }`}
    >
      <Header />
      <UsageNotes />
      <FilterButtons selected={selectedFilter} selectCategory={changeFilter} />
      <MenuItemsList list={filteredMenu} onClickFunction={addItemToOrder} />
      {sumOfQuantities(order) > 0 && (
        <OrderList
          list={order}
          isOpen={showOrderList}
          toggleView={setShowOrderList}
          removeItem={removeItemFromCard}
        />
      )}
      <Footer />
    </div>
  );
}
