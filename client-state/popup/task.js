const modalMain = document.getElementById("subscribe-modal");
if (!getCookie("subscribeModalMain")) {
  modalMain.className = "modal modal_active";
}
const modalClose = document.querySelector(
  ".modal__close"
);


  modalClose.onclick = function () {
    if (modalMain.className == "modal modal_active") {
      modalMain.className = "modal";
      document.cookie = "subscribeModalMain=true";
    }
  };

  function getCookie(name) {
    const cookies = "; " + document.cookie;
    let cookie = cookies.split("; " + name + "=");
    if (cookie.length === 2) {
      return cookie.pop().split(";").shift();
    }
  }