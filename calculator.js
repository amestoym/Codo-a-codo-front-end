
var ticketQuantity = document.querySelector("#inputQuantity");
var discountType = document.querySelector("#selectOption");

confirmTicket.addEventListener("click", calculateTickets);
clearCalc.addEventListener("click", clearAll);

function calculateTickets() {
    let ticketNumber = Number(ticketQuantity.value);
    let discount = Number(discountType.value);

    let totalCost = ticketNumber * discount * 200
    
    document.querySelector("#totalTickets").innerText = "Total a Pagar:$ " + totalCost.toFixed(2);
}

function clearAll() {
    document.querySelector("#totalTickets").innerText = "Total a Pagar:$ 0.00";
}
