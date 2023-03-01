// 1-function to calculate the price based on quantity
// ---------------------------------------------------
function calculatePrice(price, quantity) {
    return price * quantity;
}


// 2-create table row & cancel button 
// ------------------------------------
function createTableRow(productName, productPrice, removeButton) {
    // create a new row for the table (child)
    const tr = document.createElement('tr');

    // get the table body element (parent)
    const tableBody = document.getElementById('table-body');
    tableBody.appendChild(tr);

    //  add number in NO column
    const productNumber = tableBody.children.length;

    tr.innerHTML = `
    <td>${productNumber}</td>
    <td>${productName}</td>
    <td id="product-price">${productPrice}</td>
    <td id="product-quantity">
         <button id="btn-minus"><i class="fa-solid fa-minus"></i></button>
         <input id="quantity-input" class="w-[50%] text-center" type="number" value="1" min="1" max="10">
         <button id="btn-plus"><i class="fa-solid fa-plus"></i></button>
    </td>
    <td id="product-total">${productPrice}</td>
    <td>
        <button id="remove"><i class="fa-solid fa-xmark"></i></button>
    </td>
`;

    removeButton.setAttribute("disabled", true)
    // add event listener for cancel button 
    document.getElementById('remove').addEventListener('click', function () {
        tableBody.removeChild(tr);
        removeButton.removeAttribute("disabled")
    });
}

// 3-function for plus button 
// ----------------------------
function buttonPlus(quantityInputID) {
    const quantityInput = document.getElementById(quantityInputID);
    let quantity = parseInt(quantityInput.value) + 1;

    if (quantity > 10) {
        quantity = 10;
    }
    quantityInput.value = quantity;

    const price = parseInt(document.getElementById('product-price').innerText);
    const totalPrice = calculatePrice(price, quantity);
    const displayTotalPrice = document.getElementById('product-total');
    displayTotalPrice.innerText = totalPrice;
}

// 4-function for plus button 
// ----------------------------
function buttonMinus(quantityInputID) {
    const quantityInput = document.getElementById(quantityInputID);
    let quantity = parseInt(quantityInput.value) - 1;
    if (quantity < 1) {
        quantity = 1;
    }
    quantityInput.value = quantity;

    const price = parseInt(document.getElementById('product-price').innerText);
    const totalPrice = calculatePrice(price, quantity);
    const displayTotalPrice = document.getElementById('product-total');
    displayTotalPrice.innerText = totalPrice;
};


// 5-function for getting productName by id
// ----------------------------------------

function productName(cardID) {
    const productName = document.getElementById(cardID).innerText;
    return productName;
}



