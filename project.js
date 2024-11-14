var RemoveItem=document.getElementsByClassName("Del-item")
        console.log(RemoveItem);
        for(var i=0;i<RemoveItem.length;i++){
             var button=RemoveItem[i]
             button.addEventListener("click",function(event){
                var buttonClicked=event.target
                buttonClicked.parentElement.parentElement.remove()
                UpdateCartTotal()
             })
        }


        function UpdateCartTotal(){
        var cartItemContainer=document.getElementsByClassName('Cart')[0]
        var cartrows  =cartItemContainer.getElementsByClassName('Cart-item')
        var total=0
        for(i=0;i<cartrows.length;i++){
        var cartrow=cartrows[i]
        var priceElement=cartrow.getElementsByClassName('Item-price')[0]
        var quantityElement=cartrow.getElementsByClassName('Item-qty1')[0]
        // console.log(priceElement,quantityElement);
        var price=priceElement.innerText
        var quantity=quantityElement.innerText
        total=total+(price*quantity);
        
        
        }
        document.getElementsByClassName("pricex")[0].innerText=total
        }



// var quatityInput=document.getElementsByClassName("Item-qty1")
// for(i=0;i<quatityInput.length;i++){
//     var input=quatityInput[i]
//     input.addEventListener('change',function(event){
//         var input=event.target
//         if(isNaN(input.value)||input.value<=0){
//             input.value=1
//         }
//         UpdateCartTotal()

//     })
// }






var addToCartButton=document.getElementsByClassName('Addcart')
for(var i=0;i<addToCartButton.length;i++){
    var button=addToCartButton[i]
    button.addEventListener('click',function(event){
        var button=event.target
        var shopItem=button.parentElement
        var title=shopItem.getElementsByClassName('Iname')[0].innerText
        var price=shopItem.getElementsByClassName('Iprice')[0].innerText
        var imageSrc=shopItem.getElementsByClassName('Iimg1')[0].src
        console.log(title,price,imageSrc);
        addItemToCart(title,price,imageSrc)
    })
}


function addItemToCart(title,price,imageSrc){
    // var cartRow=document.createElement('div')
    // cartRow.innerText=title
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');

    // Add inner HTML to the cart row with item details
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="50" height="50">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">$${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    `;
    cartRow.innerHTML = cartRowContents;
    var cartItems=document.getElementsByClassName('Cart')[0]
    cartItems.append(cartRow)
}