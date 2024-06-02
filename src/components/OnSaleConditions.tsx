import React, { useState } from "react";

export const OnSaleConditions = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <button
          className="shadow-md hover:shadow-lg hover:cursor-pointer py-2 px-3 bg-green-500 hover:bg-green-400 rounded-md mx-auto text-white"
          onClick={() => setOpenModal(true)}
        >
          Condições para promoção
        </button>
      </div>
      {openModal && (
        <div
          className={`w-10/12 h-auto bg-white hover:bg-gray-50 border overflow-y-scroll shadow-lg rounded-lg py-3 cursor-pointer ${
            openModal ? "fixed top-1/3" : ""
          }`}
          onClick={() => setOpenModal(false)}
        >
          <div className="w-full flex">
            <button className="ml-auto w-10 text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </button>
          </div>

          <div className="px-8 max-w-sm">
            <ol className="list-decimal my-2 mb-4 text-sm font-light">
              <li className="mb-2">
                Selecionar a partir de 12 marmitas
              </li>
              <li>
                Escolher no mínimo 06 marmitas de cada tipo
              </li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
};
