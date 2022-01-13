const rodape = document.querySelector("#rodape p")
const block2 = document.querySelector(".block2") 
const button = document.querySelector(".block1 button")
const button2 = document.querySelector("#rodape button")

let array = []
let contador = 0

button.addEventListener("click",inicio)
button2.addEventListener("click", removetask)


function inicio(){
    const valueinput = document.querySelector(".block1 input").value
    if (valueinput == "")return;
    if (array.length !== "")array.push(valueinput)
    if (array.length >= 6) return;

    let createp = document.createElement("p")
    array.map((el)=>{
  
        createp.innerHTML = el
        let block = block2.insertBefore(createp, block2.parentNode[0])
        return block
    })  

    rodape.innerHTML = `You have ${contador += 1} pending tasks`
    console.log(array)
}
function removetask(){
    array.length = 0
    while (block2.firstChild){
        block2.removeChild(block2.firstChild)
    }

    rodape.innerHTML = `You have ${contador = 0} pending tasks`
    console.log(array)
}

