function calculatePrices() {
      let precioUnitario = parseInt(
            document.getElementById("price").innerHTML.substring(1)
      );
      let cantidad = parseInt(document.getElementById("qtyInput").value);

      let precioUnitario2 = parseInt(
            document.getElementById("price2").innerHTML.substring(1)
      );
      let cantidad2 = parseInt(document.getElementById("qtyInput2").value);

      document.getElementById("totalPrice").innerHTML =
            "$ " + (precioUnitario * cantidad).toFixed(2) ;

      document.getElementById("totalPrice2").innerHTML =
            "$ " + (precioUnitario2 * cantidad2).toFixed(2) ;

      let first = (precioUnitario * cantidad).toFixed(2);
      let second = (precioUnitario2 * cantidad2).toFixed(2);
      document.querySelector("h2").firstElementChild.innerText =
            "$ " + (parseInt(first) + parseInt(second));
}

document.getElementById("calcButton").onclick = calculatePrices;

// Eliminando un elemento específico cuando se conoce su nodo padre
// var d = document.getElementById("top");
// var d_nested = document.getElementById("anidados");
// var throwawayNode = d.removeChild(d_nested);

var selectedDelete = document.querySelectorAll("#delete, #delete2");

function deleteProduct() {
      let hijoElemento = document.querySelector(".container");
      let padreElemento = document.querySelector("#body");
      console.log("bliad raiyo");
	return padreElemento.removeChild(hijoElemento);
      
}

function deleteProduct2() {
      let hijoElemento2 = document.querySelector(".container2");
      let padreElemento = document.querySelector("#body");
      console.log("bliad raiyo2");
      return padreElemento.removeChild(hijoElemento2);
}

selectedDelete[0].onclick = deleteProduct;
selectedDelete[1].onclick = deleteProduct2;





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
