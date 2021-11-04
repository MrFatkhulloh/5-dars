// console.log("any changes")

var planeTicket = 500;
var hotelCost = 250;
var museumCost = 120;

var euro = 10354.03;
var dollar = 9433.34;

var userMoneySoum = (planeTicket+hotelCost)*dollar+museumCost*euro

var userMoney = prompt("How much money do you have? (in soums please!)");
if (userMoney >= (planeTicket+hotelCost)*dollar+museumCost*euro) {
    console.log(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${(planeTicket+hotelCost)*dollar+museumCost*euro} soums; \nYou have - ${userMoney} soums and it's enough!;\nOq yo’l, Alisher!`);
    alert(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${(planeTicket+hotelCost)*dollar+museumCost*euro} soums; \nYou have - ${userMoney} soums and it's enough!;\nOq yo’l, Alisher!`);
} else {
    console.log(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${(planeTicket+hotelCost)*dollar+museumCost*euro} soums; \nYou have - ${userMoney} soum(s);\nAlisher, ozgina sabr qilish kerak bo’lar ekan.`);
    alert(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${(planeTicket+hotelCost)*dollar+museumCost*euro} soums; \nYou have - ${userMoney} soum(s);\nAlisher, ozgina sabr qilish kerak bo’lar ekan.`);
}

