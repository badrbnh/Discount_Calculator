function getValue()
{    
    let price_input = parseFloat(document.getElementById("price_input").value);
    let discount_input = parseFloat(document.getElementById("discount_input").value);
    let discount = (discount_input * price_input) / 100;
    let result = price_input - discount;
    let selectedElement = document.querySelector(".output");
    selectedElement.innerHTML = result.toFixed(2);
}
