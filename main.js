/*===============================ABOUT-SECTION===========================================================*/

const section = document.querySelector('.about-section'),

    overLay = document.querySelector('.overlay'),

    ShowBtn = document.querySelector('.toggle_switch'),

    CloseBtn = document.querySelector('.pop_close')

    ShowBtn.addEventListener("click", () => overLay.classList.add("active"));

    CloseBtn.addEventListener("click", () => overLay.classList.remove("active"));


/*==========================TAB-SETUP===========================================*/ 

  let TabVerse = document.querySelector(".verse__post");
  


/*==========================THEME-SETTINGS===========================================*/    

function changeTheme1(){

  document.getElementById("verseContent").style.backgroundImage = "url(Assets/theme-1.jpg)"

  document.getElementById("generate").style.backgroundColor = "#FFD14F"

  document.getElementById("pop__window").style.backgroundColor = "#FFD14F"

}


function changeTheme2(){

  document.getElementById("verseContent").style.backgroundImage = "url(Assets/theme-2.jpg)"

  document.getElementById("generate").style.backgroundColor = "#016EEE"

  document.getElementById("pop__window").style.backgroundColor = "#016EEE"


}


function changeTheme3(){

  document.getElementById("verseContent").style.backgroundImage = "url(Assets/theme-4.jpg)"

  document.getElementById("generate").style.backgroundColor = "#FF387D"

  document.getElementById("pop__window").style.backgroundColor = "#FF387D"

}

/*==========================API-DATA-BASE-SECTION===========================================*/

const verses = [{

  author: 'john 3:16'

},

{

  author: '1corinthians 10:31'

},

{

  author: 'john 1:5'

},

{

  author: 'matthew  7:1'

},

{

  author: 'romans 12:18'

},

{

  author: '1Timothy 6:7'

},
{

  author: '1corinthians 13:13'
  

},
{

  author: 'john 7:24'

},
{

  author: 'Psalms 5:3'

},
{

  author: 'matthew  7:1'

},
{

  author: 'matthew  7:1'

},
{

  author: 'matthew  7:1'

},
]



let btn = document.querySelector(".gen_btn");

let author = document.querySelector("#verse__author");

btn.addEventListener("click", function(){

  let random = Math.floor(Math.random() * verses.length);

  verseUrl = verses[random].verse;

  /*author.innerHTML = verses[random].author;*/

  auth = verses[random].author;

  urlapi = "https://bible-api.com/" + auth;


  console.log(urlapi);

let apiData;

var dislayData = urlapi;

const VerseData = dislayData;

fetch(VerseData)
.then(response => response.json())
.then(data => {
apiText = data.text;
apiAuth = data.reference;
displayData();
})
.catch(error => console.error(error));

function displayData() {
const elementText = document.getElementById('verse__text');
elementText.innerHTML = apiText;
const elementAuth = document.getElementById('verse__author');
elementAuth.innerHTML = apiAuth;
}

  


})





/*==============================GOOGLE-TAG-MANAGER===========================================================*/


var m = document.createElement('meta'); 
 m.name = 'theme-color'; 
 m.content = '#152126'; 
 document.head.appendChild(m);


 /*==============================VERSE-SAVE-AS-IMAGE-OPTION-SETTINGS===========================================================*/



 function autoClick(){
  $("#download").click();
}

$(document).ready(function(){
  var element = $("#verseContent");

  $("#download").on('click', function(){

    html2canvas(element, {
      allowTaint: true,
      letterRendering: 1,
      useCORS: true,
      onrendered: function(canvas) {
        var imageData = canvas.toDataURL("image/jpg");
        var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
        $("#download").attr("download", "image.jpg").attr("href", newData);
      }
    });

  });
});
