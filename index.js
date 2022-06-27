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

