# Cardápio digital — TL Refeições Congeladas

Aplicação para consultar o cardápio de marmitas congeladas da TL Refeições, montar uma sacola e iniciar o pedido pelo WhatsApp.

## Funcionalidades

- Cardápio com nomes e descrições dos pratos.
- Filtros por frango, carne vermelha, espaguete e caldos/sopas. Clicar novamente no filtro ativo exibe todo o cardápio.
- Adição de uma unidade por clique no prato e redução de uma unidade por clique no item da sacola; a última unidade removida retira o item.
- Contagem da quantidade total de unidades na sacola.
- Envio pelo WhatsApp habilitado a partir de **5 unidades**, com os pratos, quantidades e uma data sugerida de entrega para o segundo dia útil seguinte. O cálculo ignora fins de semana e os feriados fixos cadastrados em `src/utils/utils.ts`.
- Exibição de preços, condições da promoção, informações de entrega e contatos.

A sacola fica apenas no estado do navegador e é perdida ao recarregar a página. O projeto não possui backend, banco de dados ou processamento de pagamentos: o pedido é encaminhado como mensagem para combinar os detalhes pelo WhatsApp. As condições promocionais são informativas e não são validadas automaticamente na sacola.

## Tecnologias

Next.js 14 (App Router), React 18, TypeScript e Tailwind CSS 3. O estado da sacola é gerenciado com `useReducer`.

## Executar localmente

Pré-requisitos: Node.js 18.17 ou superior e npm.

```bash
npm ci
```

Crie um arquivo `.env.local` na raiz do projeto e configure o número que receberá os pedidos, com código do país e DDD, usando somente dígitos:

```dotenv
NEXT_PUBLIC_PHONE_NUMBER=55419999999
```

Essa variável é pública e usada para montar o link do WhatsApp. Reinicie o servidor ao alterá-la; em produção, configure-a antes de gerar o build.

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando            | Finalidade                                                                          |
| ------------------ | ----------------------------------------------------------------------------------- |
| `npm run dev`      | Iniciar o servidor de desenvolvimento.                                              |
| `npm run build`    | Gerar o build de produção. Requer acesso ao Google Fonts para baixar a fonte Inter. |
| `npm start`        | Servir o build de produção, após executar `npm run build`.                          |
| `npm run lint`     | Verificar o código com ESLint e as regras do Next.js.                               |
| `npx tsc --noEmit` | Verificar os tipos TypeScript.                                                      |

No PowerShell, se a política de execução bloquear `npm.ps1` ou `npx.ps1`, use `npm.cmd` e `npx.cmd` nos comandos acima.

## Estrutura e personalização

```text
src/
  app/          Página principal, layout e estilos globais
  components/   Cardápio, filtros, sacola, promoção e contatos
  data/         Catálogo de pratos
  reducers/     Atualizações do estado da sacola
  types/        Tipos dos pratos e itens do pedido
  utils/        Contagem de unidades, datas e link do WhatsApp
public/         Imagens e logo
```

- Edite `src/data/foodList.ts` para alterar pratos, descrições e categorias. Mantenha os IDs únicos e as categorias alinhadas com `src/components/FilterButtons.tsx`.
- Ajuste preços em `src/components/PricesTable.tsx`, condições promocionais em `src/components/OnSaleConditions.tsx` e informações de entrega em `src/components/UsageNotes.tsx`.
- Atualize os contatos em `src/components/Footer.tsx` separadamente do número de pedidos em `.env.local`.
- Substitua `public/logo.png` para mudar a marca e edite `src/app/layout.tsx` para ajustar título e descrição da página.
