
function updateProduct( product, isIncreasing, price){
    const productInput= document.getElementById(product +'-number');

    let productNumber = productInput.value;          // get out input value(by default its a string)

    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;    // string turns into integer 
                                                        // and then increased 1 by every press

    }
    else if(productNumber>0){
        productNumber = parseInt(productNumber) - 1;    // string turns into integer 
                                                        //and then decreased 1 by every press

    }
    productInput.value= productNumber;

    //update mobile price
    const productPrice=document.getElementById(product +'-price');
    productPrice.innerText= productNumber*price;
}


// Mobile 

document.getElementById('mobile-plus-btn').addEventListener('click', function(){

    updateProduct('mobile',true, 1219);
})   

document.getElementById('mobile-minus-btn').addEventListener('click', function(){
    updateProduct('mobile',false, 1219);
})

// Mobile Case 

document.getElementById('case-plus-btn').addEventListener('click', function(){

    updateProduct('case',true, 59);
})   

document.getElementById('case-minus-btn').addEventListener('click', function(){
    updateProduct('case',false, 59);
})


// Check out


document.getElementById('checkout-btn').addEventListener('click',function(){
    const mobilePrice = document.getElementById('mobile-price');
    const mobileValue =parseInt(mobilePrice.innerText);
    // console.log(mobileValue);

    const mobileCasePrice= document.getElementById('case-price');
    const caseValue = parseInt(mobileCasePrice.innerText);
    // console.log(caseValue);

    const subtotalPrice = mobileValue + caseValue;
    const taxAmount = subtotalPrice * 0.01;
    const taxValue = parseFloat(taxAmount.toFixed(2));
    // console.log(taxValue);

    const totalPrice = subtotalPrice + taxValue;
    // console.log(totalPrice);
    
    document.getElementById('sub-total').innerText = subtotalPrice;
    document.getElementById('tax-value').innerText = taxValue;
    document.getElementById('total-price').innerText = totalPrice;
    
})


// remove value

function removeBtn(product,amount,taka){
    document.getElementById(product +'-number').value= amount;
    document.getElementById(product +'-price').innerText=taka;
}

document.getElementById('remove-casePrice').addEventListener('click', function(){

    removeBtn('case',1,59);

})

document.getElementById('remove-mobilePrice').addEventListener('click', function(){

    removeBtn('mobile',1,1219);

})