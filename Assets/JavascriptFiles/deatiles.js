let category_chosen;
let index_category;
let Array_suitable_catigory = [];

// ? variable to use it 
let main_image = document.querySelector(".main_image img");
let sm_img_group = document.querySelector(".small-img-group");
let CatigoryName=document.querySelector(".Cat_Name");
let productName=document.querySelectorAll(".productName");
let price=document.querySelector(".price");
let deatiles=document.querySelector(".deatiles");


// ? after reload html file
document.addEventListener("DOMContentLoaded", function () {
  //! get data from localStorage
  category_chosen = localStorage.getItem("category_chosen");
  index_category = localStorage.getItem("index_category");

  // ! request to XMLHTML
  let my_request = new XMLHttpRequest();
  my_request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let Object = JSON.parse(this.responseText);

      // ? checkkkkkkkkkkkkkkkkkkkkkkkkk
      //   console.log(Object);

      // ! call function that filtter the object
      PushSuitableToArray(Object);
      // ! put images in html
      AddImagesToPage(Array_suitable_catigory[0].images);
      // ! put text ot page
      AddTextToPage(Array_suitable_catigory[0]);
    }
  };
  my_request.open("Get", "selfProducts.json");
  my_request.send();
});

// ? add suitable object to array
function PushSuitableToArray(Object) {
  Array_suitable_catigory = Object.filter(
    (ob) => ob.Categories === category_chosen && ob.index === index_category
  );
  
}

// ? function put suitable image to html
function AddImagesToPage(images_Arr) {
  // ? add src main image
  main_image.src = images_Arr[0];

  images_Arr.forEach((img,index) => {
    // ! creting the div and image element
    let div_small_image = document.createElement("div");
    div_small_image.className = "small-img-col";

    let s_img = document.createElement("img");
    s_img.className = "small-img";
    s_img.setAttribute("width", "100%");

    s_img.src =images_Arr[index];

    div_small_image.appendChild(s_img);
    sm_img_group.appendChild(div_small_image);
  });
  reveal();
}

// ? function put suitable text to html
function AddTextToPage(Arr) {

  CatigoryName.textContent=`Shop / ${Arr.Categories}`;
  productName.forEach(ele => {
    ele.textContent=Arr.Name});

  price.textContent=Arr.Price;
  deatiles.textContent=Arr.Details;
}
// ? function change the image
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("small-img")) {
    main_image.src = e.target.src;
  }
});

// ! funtion reveal
function reveal() {

  ScrollReveal().reveal(".main_image", {
  origin: "top",
  distance: "1000px",
  duration: 1500,
  reset: false,
});

ScrollReveal().reveal(".small-img-col", {
  origin: "left",
  interval:500,
  distance: "1000px",
  duration: 1500,
  reset: false,
});
ScrollReveal().reveal(".description_product", {
  origin: "right",
  distance: "1000px",
  duration: 1500,
  reset: false,
});
}




// ? let array are saved in local storage uses in cart page 
let arr_cart=[]
// ! check if the arr_cart has element
if(localStorage.getItem("arr_Cart")){
  arr_cart=JSON.parse(localStorage.getItem("arr_Cart"));
}else{
  arr_cart=[];
}


// ? used in cart
let quantity=document.querySelector("#quantity");
let size =document.querySelector("#select_size");


// ? save products in local storage
function sendToCart(){
  // ? sweet alert
  swal({
    title: "Good job!",
    text: "Your Product has been added",
    icon: "success",
  });
  //? let obj
  let cartOb={};
  cartOb.Size=size.value;
  cartOb.Quantity=quantity.value;
  cartOb.image=main_image.src;
  cartOb.price= price.textContent;
  cartOb.category=CatigoryName.textContent;

  arr_cart.push(cartOb);
  console.log(cartOb);
  
  localStorage.setItem("arr_Cart",JSON.stringify(arr_cart));
}