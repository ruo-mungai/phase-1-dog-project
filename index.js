//Define variables
const mainDiv=document.getElementById('breed')
const resultDiv=document.getElementById('breed1')
//Get image data from server
fetch('https://dog.ceo/api/breeds/image/random/20')
.then (resp => resp.json())
.then (data => getImages(data.message))
.catch(error => console.log(error))

// alternive method to fetch data
/*async function functionName (){
    let resp= await fetch("https://dog.ceo/api/breeds/image/random")
    const data= await resp.json
}
*/

// function to display data on dome.
function getImages(images){
    let currentImage=0
   // console.log(images)
//create child nodes on main div
    mainDiv.innerHTML=
// create image change sequence
    `<div class="slider" style="background-image: url('${images[0]}'"></div>
      <div class="slider" style="background-image: url('${images[1]}'"></div>` 
    currentImage +=2
 //call delay time
 setInterval(slideImage,2000)
function slideImage(){
//creating a third image on the slidshow.
   mainDiv.insertAdjacentHTML("beforeend",`<div class="slider" style="background-image: url('${images[currentImage]}'"></div>`)
   setTimeout(function(){
       document.querySelector(".slider").remove()
   },1000  )
   if(currentImage + 1>=images.length){
       currentImage=0
   }
   else{currentImage++}
   }
}

//search section 
//variable declaration
const searching=document.getElementById('search')
const inputId=document.getElementById('searchBar')
const displayDiv=document.getElementById('breed1')
const btn=document.getElementById('btn')

//get input from the user
function getInput(){
    searching.addEventListener('submit',(e)=>{
        e.preventDefault();
        const myInput=inputId.value
       searchData(myInput)
    }) 
}
getInput()

//get or fetch data from api
async function searchData(passdata){
    console.log(passdata)
    const resp= await fetch(`https://dog.ceo/api/breed/${passdata}/images`)
    const data= await resp.json()
    getSearchData(data.message)
}
// display or post data to dome
function getSearchData(breeds){
    displayDiv.innerHTML=`
    <h3>Searched breed images</h3>
    <marquee behavior="scroll" direction="left" class="slideShow" >
    ${breeds.map(function(pics){
        return`<img src=${pics} width="200" height="200">`
    })}
  </marquee>`
}


