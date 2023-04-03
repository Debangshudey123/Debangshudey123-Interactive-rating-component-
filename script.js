const a = document.querySelectorAll("li");
const btn = document.querySelector("button");
const myid = document.querySelector("#main");
const thank = document.querySelector(".thank");
const outoff = document.querySelector(".outoff");
// const b = document.querySelectorAll("a");
for (let i = 0; i < a.length; i++){
    a[i].addEventListener("click", function(){
      outoff.innerHTML = `${a[i].value}`;
      a[i].style.background = 'hsl(25, 97%, 53%)';  
    });        
}


btn.addEventListener("click", function(){
        myid.classList.toggle("hidden");
        thank.classList.toggle("thank");

})