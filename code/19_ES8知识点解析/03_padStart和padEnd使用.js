const message = "xxxxx";
const newMsg = message.padStart(10, "*");
console.log(newMsg);
// const newMessage = message.padStart(15, "*").padEnd(20, "-");
// console.log(newMessage);

// // 案例
// const cardNumber = "321324234242342342341312";
// const lastFourCard = cardNumber.slice(-4);
// const finalCard = lastFourCard.padStart(cardNumber.length, "*");
// console.log(finalCard);

// 身份证只想保留最后4位

const cardNumber = "213123123213123123213";

let maskNumber = cardNumber.slice(-4).padStart(cardNumber.length, "*");
console.log(maskNumber);
