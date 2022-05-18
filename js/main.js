const input1 = document.querySelector("#input1")
const shorten = document.querySelector("#shorten")
const resultado = document.querySelector("#resultado") 
const link = document.querySelector("#link")
const started = document.querySelector(".buttStarted")
const output = document.querySelector(".output")
const copy = document.querySelector("#copy")


shorten.addEventListener("click", acortar)
copy.addEventListener("click", copiarLink)

function acortar(e){
    e.preventDefault()
    const url = `https://api.shrtco.de/v2/shorten?url=${input1.value}`
    fetch(url)
.then(response =>{
    return response.json()
})
.then(data =>{
    output.classList.remove("none")
    const {result} = data
    link.value = input1.value
    resultado.value  = result.full_share_link
})
}

function copiarLink(){
    resultado.select()
    document.execCommand("copy")
    copy.classList.add("copied")
    copy.innerHTML = "Copied!"
    console.log("copiado")
}