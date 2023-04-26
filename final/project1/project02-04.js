// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

// Constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Function to calculate and display total cost
function calcTotal() {
 let chickenQty = parseInt(document.getElementById("chicken").value);
 let halibutQty = parseInt(document.getElementById("halibut").value);
 let burgerQty = parseInt(document.getElementById("burger").value);
 let salmonQty = parseInt(document.getElementById("salmon").value);
 let saladQty = parseInt(document.getElementById("salad").value);

 let cost = (chickenQty * CHICKEN_PRICE) + (halibutQty * HALIBUT_PRICE) + (burgerQty * BURGER_PRICE) + (salmonQty * SALMON_PRICE) + (saladQty * SALAD_PRICE);

 document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

 let tax = cost * SALES_TAX;
 document.getElementById("foodTax").innerHTML = formatCurrency(tax);

 let totalCost = cost + tax;
 document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Event handlers
document.getElementById("chicken").addEventListener("input", calcTotal);
document.getElementById("halibut").addEventListener("input", calcTotal);
document.getElementById("burger").addEventListener("input", calcTotal);
document.getElementById("salmon").addEventListener("input", calcTotal);
document.getElementById("salad").addEventListener("input", calcTotal);
