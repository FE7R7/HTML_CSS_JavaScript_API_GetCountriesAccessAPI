// $ - query selector short form
const $ = (selector) => document.querySelector(selector);


//searchBy() function will receive this search variable 
var search;
var attribute;

// Open sidebar menu on small screen
function w3_open() {
       $("#mySidebar").style.display = "block";
       document.getElementById("myOverlay").style.display = "block";
}
// Close sidebar menu on both, small and normal screen
function w3_close() {
       $("#mySidebar").style.display = "none";
       $("#myOverlay").style.display = "none";
}


// Building Page
const buildPage = function (data) {

       console.log(data[0].flags.png);
       console.log(data[0].name.common);
       console.log(data[0].capital);
       console.log(data[0].region);
       console.log(data[0].borders);
       console.log(data[0].population);
       console.log(data[0].area);

       // Flag & Table Titles
       let htmlImg = "<img src='" + data[0].flags.png + "'></img>";
       let htmlStr = '<tr><td>Name: </td>' + '<td>Capital: </td>' + '<td>Region: </td>' + '<td>Borders:  </td>' + '<td>Population: </td>' + '<td>Area (Km2): </td></tr>';

       // Table Data
       for (let i = 0; i < data.length; i++) {

              htmlStr += '<tr><td>' + data[i].name.common + '</td><td>' + data[i].capital + '</td><td>' + data[i].region + '</td>' + '<td>' + data[i].borders + '</td>' + '<td>' + data[i].population + '</td>' + '<td>' + data[i].area + '</td></tr>';
       }

       // Display in HTML
       $("#content").innerHTML = htmlStr;
       $("#flag").innerHTML = htmlImg;
       $("#thanks").innerHTML = "Thank You for using Get Countries application!!";


       // Reset all text inputs
       $("#textName").value = "";
       $("#textCapital").value = "";
       $("#textRegion").value = "";
       $("#textLang").value = "";
       $("#textCurrency").value = "";

}


// Assign search variable to the value of choice and attribute variable also to the choice value but with the first letter to upper case
function searchBy(choice) {

       search = choice;
       attribute = choice.charAt(0).toUpperCase() + choice.slice(1);
}


// SearchBy() function and makes API connection with fetch method
const getCountries = function () {

       // User Input
       let userInput = $("#text" + attribute).value;

       // API request using fetch with the appropriate serachBy to set the specific endpoint
       fetch('https://restcountries.com/v3.1/' + search + '/' + userInput)


              .then(response => response.json()) // return response promise

              .then(json => buildPage(json)) // return json promise

              .catch(error => console.log(error)) // if error is returned

}


//Adding event for each button & Setting focus()
document.addEventListener("DOMContentLoaded", () => {

       $("#buttonName").addEventListener("click", getCountries);

       $("#buttonCapital").addEventListener("click", getCountries);

       $("#buttonRegion").addEventListener("click", getCountries);

       $("#buttonLang").addEventListener("click", getCountries);

       $("#buttonCurrency").addEventListener("click", getCountries);


       $("#textName").focus();



       // EventListener for each button when Enter keyboard pressed
       $("#textName").addEventListener("keypress", function (event) {

              if (event.key === "Enter") {

                     $('#buttonName').click();
              }
       });

       $("#textCapital").addEventListener("keypress", function (event) {

              if (event.key === "Enter") {

                     $('#buttonCapital').click();
              }
       });

       $("#textRegion").addEventListener("keypress", function (event) {

              if (event.key === "Enter") {

                     $('#buttonRegion').click();
              }
       });

       $("#textLang").addEventListener("keypress", function (event) {

              if (event.key === "Enter") {

                     $('#buttonLang').click();
              }
       });

       $("#textCurrency").addEventListener("keypress", function (event) {

              if (event.key === "Enter") {

                     $('#buttonCurrency').click();
              }
       });
})
