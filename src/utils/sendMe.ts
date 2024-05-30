import { OrderListItem } from "@/types/OrderListItem"

const changeSpaces = (text: string, char: string) => {
  return text.replace(/ /g, char);
}

const sendMeWhatsapp = (orderList: OrderListItem[]): void => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const firstText = `https://wa.me/${phoneNumber}?text=Ol%C3%A1%2C+tenho+interesse+no+seguinte+combo%3A+`;

  const fullText = orderList.reduce((accumulator, item) => accumulator + changeSpaces(`${item.quantity} ${item.name} `, '+'), firstText)

  window.open(fullText, '_blank', 'noopener,noreferrer');
}

export default sendMeWhatsapp
