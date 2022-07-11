

function myFunction(){
let text = document.querySelector("#text").value
let amount = document.querySelector("#amount").value

}

   



/*
const dummyTransaction = [
  {id: 1 , text: "Bottle" , amount: +200},
  { id: 2 , text: "Glass" , amount: +250},
  { id: 3 , text: "Copy" , amount: - 50},
  { id: 4 , text: "Book" , amount:  +500}
 ] 

 let transaction = dummyTransaction;

 function addTransactionDOM(transact){
const sign = transact[0].amount < 0 ? "-"+"Rs" : "+"+"Rs"
const item = document.createElement("li");
item.classList.add(
   transact[0].amount < 0 ? "minus" : "plus"   
)

item.innerHTML = `
${transact[0].text}<span>${sign}${Math.abs(transact[0].amount)}</span> 
<button class="dlt-btn" onclick="">X</button> 
`;
list.appendChild(item);
 }  

 addTransactionDOM(transaction);
 */