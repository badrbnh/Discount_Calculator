function getValue()
{    
    let price_input = parseFloat(document.getElementById("price_input").value); 
    let discount_input = parseFloat(document.getElementById("discount_input").value);
    if (!price_input || price_input < 0)
    {
        alert("Enter product price");
        return;
    }
    if (discount_input > 100 || discount_input < 0 || !discount_input)
    {
        alert("Percentage must be between 0% and 100%");
    }
    else
    {
        let discount = (discount_input * price_input) / 100;
        let result = price_input - discount;
        let selectedElement = document.querySelector(".output");
        selectedElement.innerHTML = result.toFixed(2);
    }
}
