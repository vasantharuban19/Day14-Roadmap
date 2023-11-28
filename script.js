const button= document.createElement("button")
button.setAttribute("type", "button")
button.id="btn"
button.classList.add("btn","btn-danger")
button.innerText="Click here to Wish"
button.addEventListener("click",()=>{
    alert("Good Morning")
})
document.body.append(button)

const div = document.getElementById("div1")
div.addEventListener("click",()=>div.style.backgroundColor="red")
div.addEventListener("dblclick",()=>div.style.backgroundColor="black")


//!set timeout vs set interval
let time = 10000
setTimeout(()=>{
    document.getElementById("message").innerText="Displayed after 10 sec"
},time)

let x = setInterval(()=>{
    if(time == 0){
        clearInterval(x)
    }else{
        time = time-1000
        document.getElementById("timer").innerText= parseInt(time/1000)
    }
    },1000)
    

//!Use prompt to read a value from user and display it in the span element.
//*prompt
/*const button = document.createElement("button");
const span = document.createElement("span");
button.innerText = "Click here";
button.className = "btn";
document.body.append(button, span);
button.addEventListener("click", foo);
function foo() {
  const element = prompt("Enter your value");
  span.innerText = element;
}
*/