import { OrderListItem } from "@/types/OrderListItem";

const isWeekend = (date: Date): boolean => {
  let day = date.getDay();
  return day === 0 || day === 6;
}

const isHoliday = (date: Date): boolean => {
  let holidays: { [key: string]: string[] } = {
    "fixed": [
      "01-01",
      "04-21",
      "05-01",
      "09-07",
      "10-12",
      "11-02",
      "11-15",
      "12-25"
    ],
  };

  let formattedDate = `${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;

  if (holidays.fixed.includes(formattedDate)) return true;

  return false;
}

const addBusinessDays = (date: Date, days: number): Date => {
  let businessDaysAdded = 0;
  let currentDate = new Date(date);

  while (businessDaysAdded < days) {
    currentDate.setDate(currentDate.getDate() + 1);

    if (!isWeekend(currentDate) && !isHoliday(currentDate)) {
      businessDaysAdded++;
    }
  }

  return currentDate;
}

const getSecondBusinessDayFromToday = (): Date => {
  let today = new Date();
  return addBusinessDays(today, 2);
}

export const replaceAll = (text: string, oldStr: string, newStr: string) => {
  let escapedOld = oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let regex = new RegExp(escapedOld, 'g');
  return text.replace(regex, newStr);
}

export const sendMeWhatsapp = (orderList: OrderListItem[]): void => {
  let phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  let secondBusinessDay = getSecondBusinessDayFromToday();
  let formattedDate = replaceAll(secondBusinessDay.toLocaleDateString("pt-BR"), "/", "%2F")

  let firstText = replaceAll(`https://wa.me/${phoneNumber}?text=Olá%2C gostaria de fazer um pedido de marmitas para ${formattedDate}. Segue%3A `, ' ', '%20');

  let fullText = orderList.reduce((accumulator, item) => accumulator + replaceAll(`${item.quantity} de ${item.name.toLowerCase()}; `, ' ', '+'), firstText)

  window.open(fullText, '_blank', 'noopener,noreferrer');
}

export const sumOfQuantities = (orderList: OrderListItem[]): number => orderList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
