let priceOne = parseFloat(document.getElementById("price-one").innerText);
let priceTwo = parseFloat(document.getElementById("price-two").innerText);
let subTotal = parseFloat(document.getElementById("subtotal").innerText);
let total;
let vatRate = 0.05;
// let quantityOne = document.getElementById("quantity-one").value;
// let quantityTwo = document.getElementById("quantity-two").value;
let finalPriceOne = priceOne;
let finalPriceTwo = priceTwo;


// Cart One
document.getElementById("increment-one").addEventListener("click",function(){
    let quantityOne = document.getElementById("quantity-one").value;
    quantityOne++;
    document.getElementById("quantity-one").value = quantityOne;
    finalPriceOne = priceOne * quantityOne;
    document.getElementById("price-one").innerText = finalPriceOne;
    updateSubTotal();
});


document.getElementById("decrement-one").addEventListener("click",function(){
    let quantityOne = document.getElementById("quantity-one").value;
    if (quantityOne != 0){
        quantityOne--;
        document.getElementById("quantity-one").value = quantityOne;
        finalPriceOne = priceOne * quantityOne;
        document.getElementById("price-one").innerText = finalPriceOne;
        updateSubTotal();
    }
});

document.getElementById("quantity-one").addEventListener("input",function(){
    let quantityOne = document.getElementById("quantity-one").value;
    document.getElementById("quantity-one").value = quantityOne;
    finalPriceOne = priceOne * quantityOne;
    document.getElementById("price-one").innerText = finalPriceOne;
    updateSubTotal();
});


// cart two
document.getElementById("increment-two").addEventListener("click",function(){
    let quantityTwo = document.getElementById("quantity-two").value;
    quantityTwo++;
    document.getElementById("quantity-two").value = quantityTwo;
    finalPriceTwo = priceTwo * quantityTwo;
    document.getElementById("price-two").innerText = finalPriceTwo;
    updateSubTotal();

});

document.getElementById("decrement-two").addEventListener("click",function(){
    let quantityTwo = document.getElementById("quantity-two").value;
    if (quantityTwo != 0){
        quantityTwo--;
        document.getElementById("quantity-two").value = quantityTwo;
        finalPriceTwo = priceTwo * quantityTwo;
        document.getElementById("price-two").innerText = finalPriceTwo;
        updateSubTotal();
    }
});

document.getElementById("quantity-two").addEventListener("input",function(){
    let quantityTwo = document.getElementById("quantity-two").value;
    document.getElementById("quantity-two").value = quantityTwo;
    finalPriceTwo = priceTwo * quantityTwo;
    document.getElementById("price-two").innerText = finalPriceTwo;
    updateSubTotal();
});



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