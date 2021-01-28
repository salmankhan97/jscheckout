let priceOne = parseFloat(document.getElementById("price-one").innerText);
let priceTwo = parseFloat(document.getElementById("price-two").innerText);
let subTotal = parseFloat(document.getElementById("subtotal").innerText);
let total;
let vatRate = 0.05;
// let quantityOne = document.getElementById("quantity-one").value;
// let quantityTwo = document.getElementById("quantity-two").value;
let finalPriceOne = priceOne;
let finalPriceTwo = priceTwo;

//Cart
document.getElementById("btn-continue").addEventListener("click",function(){
    document.getElementById("welcome").style.display="none";
    document.getElementById("cart").style.display="block";
});

// Cart One
document.getElementById("increment-one").addEventListener("click",function(){
    let quantityOne = document.getElementById("quantity-one").value;
    quantityOne++;
    if (quantityOne > 10){
        alert("Maximum quantity per customer is 10");
        quantityOne = 10;
        updateFinalPriceOne(quantityOne);
    }
    else{
        updateFinalPriceOne(quantityOne);
    }
});

document.getElementById("decrement-one").addEventListener("click",function(){
    let quantityOne = document.getElementById("quantity-one").value;
    if (quantityOne != 0){
        quantityOne--;
        updateFinalPriceOne(quantityOne);
    }
});


document.getElementById("quantity-one").addEventListener("input",function(){
    let quantityOne = document.getElementById("quantity-one").value;
    if (isNaN(quantityOne)){
        alert("Please enter a valid Number");
        quantityOne = 1;
        updateFinalPriceOne(quantityOne);
    }
    else if (quantityOne > 10){
        alert("Maximum quantity per customer is 10");
        quantityOne = 10;
        updateFinalPriceOne(quantityOne);
    }
    else{
        updateFinalPriceOne(quantityOne);
    }
});

function updateFinalPriceOne(x){
    document.getElementById("quantity-one").value = x;
    finalPriceOne = priceOne * x;
    document.getElementById("price-one").innerText = finalPriceOne;
    updateSubTotal();
}


// cart two
document.getElementById("increment-two").addEventListener("click",function(){
    let quantityTwo = document.getElementById("quantity-two").value;
    quantityTwo++;
    if (quantityTwo > 50){
        alert("Maximum quantity per customer is 50");
        quantityTwo = 50;
        updateFinalPriceTwo(quantityTwo);
    }
    else{
        updateFinalPriceTwo(quantityTwo);
    }
});

document.getElementById("decrement-two").addEventListener("click",function(){
    let quantityTwo = document.getElementById("quantity-two").value;
    if (quantityTwo != 0){
        quantityTwo--;
        updateFinalPriceTwo(quantityTwo);
    }
});

document.getElementById("quantity-two").addEventListener("input",function(){
    let quantityTwo = document.getElementById("quantity-two").value;
    if (isNaN(quantityTwo)){
        alert("Please enter a valid Number");
        quantityTwo = 1;
        updateFinalPriceTwo(quantityTwo);
    }
    else if (quantityTwo > 50){
        alert("Maximum quantity per customer is 50");
        quantityTwo = 50;
        updateFinalPriceTwo(quantityTwo);
    }
    else{
        updateFinalPriceTwo(quantityTwo);
    }
});

function updateFinalPriceTwo(x){
    document.getElementById("quantity-two").value = x;
    finalPriceTwo = priceTwo * x;
    document.getElementById("price-two").innerText = finalPriceTwo;
    updateSubTotal();
}



// Subtotal and Total


function updateSubTotal(){
    subTotal = finalPriceOne + finalPriceTwo;
    document.getElementById("subtotal").innerText = subTotal;
    finalTotal(subTotal);
}
function finalTotal(x){
    let vatAmt = x*vatRate;
    document.getElementById("vat-amt").innerText = vatAmt.toFixed(2);
    total = x+(x*vatRate);
    document.getElementById("total").innerText = total.toFixed(2);
}

document.getElementById("remove-one").addEventListener("click",function(){
    finalPriceOne = 0;
    updateSubTotal();
    document.getElementById("cart-one").style.display="none";
});
document.getElementById("remove-two").addEventListener("click",function(){
    finalPriceTwo = 0;
    updateSubTotal();
    document.getElementById("cart-two").style.display="none";
});
function error(){
    alert("Site is under maintenance");
}