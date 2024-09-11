// ! strat HOME PAGE
// ! strat HOME PAGE
// ! strat HOME PAGE
// ! strat HOME PAGE
// ? var
let navLinks = document.querySelectorAll(".nav-link");

// ? nav bar function to remove and active classes
function active() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      document.querySelector(".nav-link.active").classList.remove("active");
      e.target.classList.add("active");
    });
  });
}
// ! end HOME PAGE
// ! end HOME PAGE
// ! end HOME PAGE
// ! end HOME PAGE

// ! start SELF PRODUCT
// ! start SELF PRODUCT
// ! start SELF PRODUCT
// ! start SELF PRODUCT

// ?call function that store category and index in local storage
function CompletePage(category_chosen, index_category) {
  //? Store data in localStorage
  localStorage.setItem("category_chosen", category_chosen);
  localStorage.setItem("index_category", index_category);

  //? go to the new page
  window.location.href = "DeatilesProduct.html";
}
// ! end SELF PRODUCT
// ! end SELF PRODUCT
// ! end SELF PRODUCT
// ! end SELF PRODUCT

// ! start Blog Page
// ! start Blog Page
// ! start Blog Page
// ! start Blog Page
window.addEventListener("load", () => {
  let paragraph = document.querySelector(".animateText");
  let content =
  "Explore fashion that speaks to your individuality with timeless, elegant, and bold collections.";
  let time = 50; //? millisecond
  let index = 0;
  function typeText() {
    paragraph.textContent += content.charAt(index);
    index++;
    setTimeout(typeText, time);
  }

  typeText();
});

// ? show more function
function showMore(ele) {
  ele.style.display = "none";
  ele.previousElementSibling.style.display = "none";
  ele.nextElementSibling.style.display = "block";
  ele.nextElementSibling.nextElementSibling.style.display = "block";
}
// ? show Less function
function showLess(ele) {
  ele.style.display = "none";
  ele.previousElementSibling.style.display = "none";
  ele.previousElementSibling.previousElementSibling.previousElementSibling.style.display = "block";
  ele.previousElementSibling.previousElementSibling.style.display = "block";
}
// ! end Blog Page
// ! end Blog Page
// ! end Blog Page
// ! end Blog Page

// ! start contact page
// ! start contact page
// ! start contact page
// ! start contact page
// ! start contact page

document.addEventListener("DOMContentLoaded", () => {
  let name = document.querySelector("#Name");
  let mail = document.querySelector("#mail");
  let sub = document.querySelector("#sub");
  let mssg = document.querySelector("#Message");

  let btn = document.querySelector(".form_container button");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value !== "" && mail.value !== "" && sub.value !== "") {
      // ? SweetAlert for success
      swal({
        title: "Thank you",
        text: "Thank You For Your Message",
        icon: "success",
      });

      // Clear form inputs
      name.value = "";
      mail.value = "";
      sub.value = "";
      mssg.value = "";
    } else {
      // ? SweetAlert for warning
      swal({
        title: "Error!",
        text: "Please fill all the fields",
        icon: "warning",
      });
    }
  });
});


// ! end contact page
// ! end contact page
// ! end contact page
// ! end contact page
// ? function to make all revial
function All_reveal() {
  // ! hero text
  ScrollReveal().reveal(".left_hero", {
    origin: "left",
    distance: "800px",
    duration: 1000,
    reset: true,
  });
  // ! ads
  ScrollReveal().reveal(".left", {
    origin: "left",
    distance: "800px",
    duration: 1000,
    reset: true,
  });
  // !ads
  ScrollReveal().reveal(".top", {
    origin: "top",
    distance: "800px",
    duration: 1000,
    reset: false,
  });
  // !ads
  ScrollReveal().reveal(".right", {
    origin: "right",
    distance: "800px",
    duration: 1000,
    reset: true,
  });
  // !ads
  ScrollReveal().reveal(".bottom", {
    origin: "bottom",
    distance: "80px",
    duration: 1000,
    reset: true,
  });
  // ! features box
  ScrollReveal().reveal(".rotate", {
    rotate: {
      x: 20,
      y: 20,
      z: 50,
    },
    duration: 1000,
    interval: 100,
    reset: false,
  });
  // ! products
  ScrollReveal().reveal(".prod", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    interval: 100,
    reset: false,
    opacity: 0,
  });
  // ! category_shop
  ScrollReveal().reveal(".l_to_r", {
    origin: "left",
    distance: "100px",
    duration: 1000,
    easing: "ease-in-out",
    interval: 100,
    reset: false,
    opacity: 0,
  });
  // !products shop
  ScrollReveal().reveal(".prod_shop_rotate", {
    rotate: {
      z: 50,
      y: 100,
    },
    duration: 1000,
    interval: 100,
    reset: false,
  });

  // ! Blog Page description
  ScrollReveal().reveal(".right_no_reset", {
    origin: "right",
    distance: "800px",
    duration: 1000,
    reset: false,
  });

  // ! Blog Page iamges
  ScrollReveal().reveal(".img_blog", {
    rotate: {
      y: 100,
    },
    opacity:.1,
    duration: 1000,
    interval: 100,
    reset: false,
  });
  // ! about
  // ?bootom no reset
  ScrollReveal().reveal(".bottom_nor_eset", {
    origin: "bottom",
    distance: "80px",
    duration: 1000,
    reset: false,
  });
  // ?opacity
  ScrollReveal().reveal(".opacity", {
    duration: 1000,
    opacity:0.1,
    reset: false,
  });
  // ! contact opacity
  ScrollReveal().reveal(".iframe",{
    duration:1000,
    opacity:0,
    reset:false,
  }
 )
 ScrollReveal().reveal("#cardd",{
  opacity:0,
  origin:"top",
  distance:"300px",
  interval: 100,
  reset:false,
 })
}
All_reveal();
