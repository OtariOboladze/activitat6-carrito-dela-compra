

// CREATE PRODUCT

document.getElementById("calcButton").onclick = calculatePrices;
function calculatePrices() {
      var totalPrice = 0;
      for (let i = 0; i < document.getElementsByClassName("container").length; i++) {
            let precioUnitario = parseInt(document.getElementsByClassName("price")[i].innerHTML.substring(1));
            let cantidad = parseInt(document.getElementsByClassName("qtyInput")[i].value);

            let x = (precioUnitario * cantidad).toFixed(2);
            document.getElementsByClassName("productPrice")[i].innerHTML = "$ " + x;
            totalPrice += parseInt(x);
      }
      document.querySelector("h2").firstElementChild.innerText = "$ " + totalPrice;
};


// DELETE PRODUCT

for (let i = 0; i < document.getElementsByClassName("container").length; i++) {
	let x = document.getElementsByClassName("container")[i];
	document.querySelectorAll(".delete")[i].onclick = function(){x.parentNode.removeChild(x)};
};



const deleteItem = (e) => {};

const getPriceByProduct = (itemNode) => {};

const updatePriceByProduct = (productPrice, index) => {};

const getTotalPrice = () => {};

const createQuantityInput = () => {};

const createDeleteButton = () => {};

const createQuantityNode = () => {};

const createItemNode = (dataType, itemData) => {};

const createNewItemRow = (itemName, itemUnitPrice) => {};

const createNewItem = () => {};

addEventListener = ("load", () => {});
