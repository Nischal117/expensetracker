

const incomeText = document.querySelector(".money-plus")
const expenseText = document.querySelector(".money-minus")

let income = 0
let expense = 0


function myFunction(){

let text = document.querySelector("#text").value
let amount = document.querySelector("#amount").value



const ulElement = document.getElementById("list")

   let liElement = document.createElement("li")

liElement.classList.add(
   amount > 0 ? "plus" : "minus"
)
liElement.innerText = text


let spanElement = document.createElement("span")
amount > 0 ? spanElement.innerText = "+Rs" + amount : spanElement.innerText = "-Rs" + amount.slice(1)
//spanElement.innerText = amount



if (amount > 0){
   let profit = income + amount

incomeText.innerText = parseFloat(profit) 

}
if (amount < 0){
   let loss = expense + amount
   
incomeText.innerText =parseFloat(loss)
}


let btnElement = document.createElement("button")
btnElement.innerText = "X"
btnElement.classList.add("dlt-btn")

   

liElement.appendChild(spanElement);
liElement.appendChild(btnElement);
ulElement.appendChild(liElement);
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
