//Define variables
const mainDiv=document.getElementById('breed')
const resultDiv=document.getElementById('breed1')
//Get image data from server
fetch('https://dog.ceo/api/breeds/image/random/20')
.then (resp => resp.json())
.then (data => getImages(data.message))
.catch(error => console.log(error))
