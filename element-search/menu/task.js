let elems = document.querySelectorAll('.menu .menu_sub')
let alink = document.querySelectorAll('.menu__link')
//
for (let link of alink) {
  let j=0;
    let childs = link.childNodes
    let elem = Array.from(elems)
   link.onclick = function () {
    for (let child of childs) {
        for (let i=0; i<elem.length; i++) {
          if (child.textContent === elem[i].previousSibling.previousSibling.innerText){
          if (elem[i].className == 'menu menu_sub') {
            elem[i].className += ' menu_active'
            for( j = 0; j < elem.length; j++){
              if (i!=j)
            elem[j].className = 'menu menu_sub'
            }
          } else {
            elem[i].className = 'menu menu_sub'
          }
          return false
        }
    }
    }
  }
}
