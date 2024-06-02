import { OnSaleConditions } from "./OnSaleConditions";
import { PricesTable } from "./PricesTable";

export const UsageNotes = () => {
  return (
    <>
      <div className="w-full max-w-sm">
        <ul className="mb-3 py-2 px-3 text-sm bg-gray-50 font-light rounded-md">
          <li className="border-b">100% delivery</li>
          <li className="border-b mt-1">Entrega grátis</li>
          <li className="border-b mt-1">Embalagens para 500gr</li>
          <li className="border-b mt-1">Prazo minimo para entrega 2 a 3 dias úteis</li>
          <li className="border-b mt-1">Não aceitamos cartões refeição e alimentação</li>
        </ul>
      </div>
      <OnSaleConditions />
      <PricesTable />
    </>
  );
};
