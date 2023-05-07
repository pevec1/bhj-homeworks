const modalMain = document.getElementById("modal_main");
if (modalMain.className == "modal") {
modalMain.className = "modal modal_active";
}
const modalClose = document.querySelectorAll(".modal__close.modal__close_times");

const modalShow = document.querySelector(".show-success")
 const modalSuccess = document.getElementById("modal_success");
 
modalShow.onclick = function () {
if (modalSuccess.className == "modal") {
  modalSuccess.className = "modal modal_active";
  modalMain.className = "modal";
}
}

 modalClose.forEach((elem,key)=>{
   elem.onclick = function () {
     if ((modalMain.className == "modal modal_active")) {
       modalMain.className = "modal";
     }
     if ((modalSuccess.className == "modal modal_active")) {
       modalSuccess.className = "modal";
     }
   }       
})

 
