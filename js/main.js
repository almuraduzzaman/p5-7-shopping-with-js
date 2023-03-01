//  first card
document.getElementById("btn-card-1").addEventListener('click', function () {
    const productName = document.getElementById('card-name-1').innerText;
    const productPrice = parseInt(document.getElementById('card-price-1').innerText);
    const removeButton = document.getElementById("btn-card-1");

    createTableRow(productName, productPrice, removeButton);

    // add event listener for plus button
    document.getElementById('btn-plus').addEventListener('click', function () {
        buttonPlus('quantity-input')
    });

    // add event listener for minus button
    document.getElementById('btn-minus').addEventListener('click', function () {
        buttonMinus("quantity-input");
    });

});

//  Second card
document.getElementById("btn-card-2").addEventListener('click', function () {
    const productName = document.getElementById('card-name-2').innerText;
    const productPrice = parseInt(document.getElementById('card-price-2').innerText);
    const removeButton = document.getElementById("btn-card-2");

    createTableRow(productName, productPrice, removeButton);

    // add event listener for plus button
    document.getElementById('btn-plus').addEventListener('click', function () {
        buttonPlus('quantity-input')
    });

    // add event listener for minus button
    document.getElementById('btn-minus').addEventListener('click', function () {
        buttonMinus("quantity-input");
    });
});

//  third card
document.getElementById("btn-card-3").addEventListener('click', function () {
    const productName = document.getElementById('card-name-3').innerText;
    const productPrice = parseInt(document.getElementById('card-price-3').innerText);
    const removeButton = document.getElementById("btn-card-3");

    createTableRow(productName, productPrice, removeButton);

    // add event listener for plus button
    document.getElementById('btn-plus').addEventListener('click', function () {
        buttonPlus('quantity-input')
    });

    // add event listener for minus button
    document.getElementById('btn-minus').addEventListener('click', function () {
        buttonMinus("quantity-input");
    });
});

//  fourth card
document.getElementById("btn-card-4").addEventListener('click', function () {
    const productName = document.getElementById('card-name-4').innerText;
    const productPrice = parseInt(document.getElementById('card-price-4').innerText);
    const removeButton = document.getElementById("btn-card-4");

    createTableRow(productName, productPrice, removeButton);

    // add event listener for plus button
    document.getElementById('btn-plus').addEventListener('click', function () {
        buttonPlus('quantity-input')
    });

    // add event listener for minus button
    document.getElementById('btn-minus').addEventListener('click', function () {
        buttonMinus("quantity-input");
    });
});

//  fifth card
document.getElementById("btn-card-5").addEventListener('click', function () {
    const productName = document.getElementById('card-name-5').innerText;
    const productPrice = parseInt(document.getElementById('card-price-5').innerText);
    const removeButton = document.getElementById("btn-card-5");

    createTableRow(productName, productPrice, removeButton);

    // add event listener for plus button
    document.getElementById('btn-plus').addEventListener('click', function () {
        buttonPlus('quantity-input')
    });

    // add event listener for minus button
    document.getElementById('btn-minus').addEventListener('click', function () {
        buttonMinus("quantity-input");
    });
});



