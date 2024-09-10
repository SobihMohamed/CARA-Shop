let chosenProduct;
let cartSubtotal=document.querySelector(".cart_subtotal");
let finallTotal=document.querySelector(".finall_Total");
let subtotal=0;
let total=0;
let applyproduct=document.querySelector(".btnn");
let name=document.querySelector("#name");
let phone=document.querySelector("#num");

let tbody=document.querySelector(".table tbody");
let noProducts=document.querySelector(".table h1");
let headTable=document.querySelector("table thead tr");

// ? call the function take from local storage
get_fromlocalstorage();

// ?take from local storage
function get_fromlocalstorage() {
        let StoredProduct = localStorage.getItem("arr_Cart");
        
        // Parse the stored product or initialize as an empty array if null
        chosenProduct = (StoredProduct ? JSON.parse(StoredProduct) : []);
        if (chosenProduct.length == 0) {
            subtotal=0;
            headTable.style.display="none";
            noProducts.style.display="block"
        } else {
            subtotal=0;
            noProducts.style.display="none"
            AddToTable();
        }
}



// ? add all products
function AddToTable() {
    chosenProduct.forEach((ob,index)=> {
        // !remove the EGP
        let priceString=ob.price.replace(/[^0-9.]/g,"");
        // !remove the Shop / [\s for spaces]
        let category = ob.category.replace(/Shop\s\/\s/g, '').trim();
        total=parseInt(ob.Quantity)*parseInt(priceString);
        
        // ! calc subtotal
        subtotal+=total;
        
        tbody.innerHTML += `
            <tr>
                <td class="id">${index}</td>
                <td><img src="${ob.image}" width="50" alt="prod"></td>
                <td>${category}</td>
                <td>${ob.Size}</td>
                <td>${ob.Quantity}</td>
                <td>${ob.price}</td>
                <td>${total}</td>
                <td><i class="fa-solid fa-xmark"></i></td>
            </tr>
        `;
    });
    
    cartSubtotal.innerHTML=`EGP ${subtotal}`;
    finallTotal.innerHTML=`EGP ${subtotal}`;

    let delet=document.querySelectorAll(".fa-xmark");
    IfNeedToDelte(delet);
    
}


// ? apply product
applyproduct.addEventListener("click",()=>{
    if(name.value!=="" && phone.value!==""){
        swal({
            title: 'Good job!',
            text: 'Your order has been applied!',
            icon: 'success',
        });
        name.value="";
        phone.value=""
    }else{
        swal({
            title: 'Erorr!',
            text: 'Please Fill Name and Phone',
            icon: 'warning',
        });
    }
})

// ? delte prod
function IfNeedToDelte(delet) {
    delet.forEach(ele => {
        ele.addEventListener("click",()=>{
            // ? catch the row
            let row=ele.closest("tr");
            // ? catch the id to delete it from array
            let indexRow=row.querySelector(".id");
            // ? remove from html
            let indexnum=(parseInt(indexRow.innerHTML));
            
            row.remove();
            
            // ? remove from array
            chosenProduct.splice(indexnum,1);
            
            // ? update local storage
            localStorage.setItem("arr_Cart", JSON.stringify(chosenProduct));

            // ? reset the sub total to 0
            cartSubtotal.innerHTML="0";
            finallTotal.innerHTML="0";
            
            // ? remove body 
            tbody.innerHTML="";
            
            // ? to appear the message if no products && update html page
            get_fromlocalstorage();
        })
    });
} 

 