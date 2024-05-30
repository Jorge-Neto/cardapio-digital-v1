export const UsageNotes = () => {
  return (
    <>
      <div className="px-6 max-w-sm">
        <ul className="list-disc my-2 text-sm font-light">
          <li>Trabalhamos apenas com delivery</li>
          <li>Prazo minimo para entrega 2 a 3 dias úteis</li>
          <li>Entrega gratis</li>
          <li>Embalagens para 500gr</li>
          <li>Não aceitamos cartões refeições e alimentação</li>
          <li>Não aceitamos cartões refeições e alimentação</li>
        </ul>
      </div>
      <div className="px-6 max-w-sm">
        <h1 className="text-lg">Condições para promoção:</h1>
        <ol className="list-decimal my-2 text-sm font-light">
          <li>Escolha 2 ou mais unidades de cada sabor da lista abaixo</li>
          <li>
            Monte um combo com 12 marmitas congeladas de 500gr sendo 06 de
            frango e 06 de carnes vermelhas e ganhe de brinde 1 marmita cardapio
          </li>
        </ol>
      </div>
      <div>
        <ul className="list-disc my-2 text-sm">
          <li className="w-72 my-3 px-3 pt-3 border-b flex flex-row items-center justify-between">
            <p className="text-md">PIX OU DINHEIRO</p>
            <p className="ml-2">R$ 157,00</p>
          </li>
          <li className="w-72 my-3 px-3 pt-3 border-b flex flex-row items-center justify-between">
            <p className="text-md">DEBITO OU CRÉDITO</p>
            <p className="ml-2">R$ 165,00</p>
          </li>
        </ul>
      </div>
    </>
  );
};
