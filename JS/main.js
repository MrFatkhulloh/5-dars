// console.log("any changes")
var userMoney = prompt("How much money do you have? (in soums please!)");

var planeTicket = 500;
var hotelCost = 250;
var museumCost = 120;

// var euro = prompt("how much does 1 euro costs in soum?");
// var dollar = prompt("how much does 1$ costs in soum?");
var euro = 10354.03;
var dollar = 9433.34;

var totalCostSoum = Math.ceil((planeTicket+hotelCost)*dollar+museumCost*euro)
var userMoneySoum = Math.floor(userMoney)

if (userMoney >= (planeTicket+hotelCost)*dollar+museumCost*euro) {
    console.log(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${totalCostSoum} soums; \nYou have - ${userMoneySoum} soums and it's enough!;\nOq yo’l, Alisher!`);
    alert(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${totalCostSoum} soums; \nYou have - ${userMoneySoum} soums and it's enough!;\nOq yo’l, Alisher!`);
} else {
    console.log(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${totalCostSoum} soums; \nYou have - ${userMoneySoum} soum(s);\nAlisher, ozgina sabr qilish kerak bo’lar ekan.`);
    alert(`1$ - ${dollar} soums;\n1euro - ${euro} soums; \ntotal cost - ${totalCostSoum} soums; \nYou have - ${userMoneySoum} soum(s);\nAlisher, ozgina sabr qilish kerak bo’lar ekan.`);
}

