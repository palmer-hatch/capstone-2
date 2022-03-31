// const { default: axios } = require("axios")

console.log('connection bb')


const btn = document.querySelector('button')
const urlContainer = document.querySelector('section')
const subURL = document.querySelector('#newUrlSub')
const allUrl = document.querySelector("#all")



const baseURL = `http://localhost:80`

function  urlCreate(url) {
    let newUrl = document.createElement('div')
    newUrl.innerHTML = `<h3>${url.urlName}</h3>`
    

urlContainer.appendChild(newUrl)
}

function clearUrls(){
    urlContainer.innerHTML = ``
}

function getAllUrls (){
    clearUrls()

    axios.get(`${baseURL}/youtuber`)
    .then(function(res){
        for(let i = 0; i <res.data.length; i++){
            urlCreate(res.data[i])
        }
    })
    .catch(err => console.log(err))
}


allUrl.addEventListener('click', getAllUrls )
subURL.addEventListener('submit', urlCreate)
