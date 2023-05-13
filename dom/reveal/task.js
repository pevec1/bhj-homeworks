
    let divs = document.querySelectorAll('.reveal')
    for(let div of divs){
function vis(){
    const top1 = div.getBoundingClientRect().top
    const bottom1 = div.getBoundingClientRect().bottom
    let clear = setInterval(() => {
        if(top1 < window.innerHeight && bottom1 > 0){
            console.log(true)
            clearInterval(clear)
        } else {
             console.log(false)
        }
    }, 500)
  }
}
  
  vis()