const dIm = document.querySelector(".imgRan");
const btn = document.querySelector(".b1")


async function getData () {
    let response = await fetch(`https://dog.ceo/api/breeds/image/random `);

if (response.ok) { 
  let json = await response.json();
  dIm.style.backgroundImage = "url("+json.message+")";
} else {
  alert("Ошибка HTTP: " + response.status);
}}

btn.addEventListener('click', getData)


//вторая задача
const select = document.getElementById("dSel")
const btn2 = document.querySelector(".b2");


function chooseFromList() {
    
 const api =`https://dog.ceo/api/breeds/list/all`;
        
fetch(api)
.then(response =>  response.json())
.then(response => { 
    console.log(response)
    let obj = response.message;
  
Object.entries(obj).forEach((entry) => {
	const [key, value] = entry;


select.options.add( new Option(key, key) );

});  
})}

const imgList = document.querySelector(".igmList");


function fetchFrList () {
  const apiRan =`https://dog.ceo/api/breed/${select.value}/images/random`;

  fetch(apiRan)
  .then(response =>  response.json())
  .then(response => { 
    console.log(response,'cestca')
   let listObj = response.message
   imgList.style.backgroundImage = "url("+listObj+")";
  })

}

window.addEventListener('load', chooseFromList)
btn2.addEventListener('click', fetchFrList )

