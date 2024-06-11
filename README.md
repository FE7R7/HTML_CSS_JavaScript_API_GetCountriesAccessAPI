# HTML_CSS_JavaScript_AccessAPI


A webpage that uses the restcountries.com API


Introduction:

This documentation is about how the project was built and its features.

The project purpose is to access the restcountries.com API and make various data from different countries available through a web page that allows the user different types of research related to the countries. 

Build a pleasant page with well-structured features. Regarding the code specifically, one objective is to use good practices, such as keeping parentheses aligned and providing comments that support the code.


---------------------------------------------------//---------------------------------------------------


Explanation of the HTML content of the project: 


For this project, the HTML has a simple structure, to which I linked an external JS file, external CSS and a direct link to the website https://www.w3schools.com/w3css/4/w3.css.

You can see in my HTML code in the comments that I separated into three larger parts, which are a structure for the top menu that will appear when the screen has a maximum width of 768px, providing responsiveness.

Then we have the sidebar menu where most of the code is found that aims to provide the possible search options for the user. 

All buttons belonging to this menu sidebar trigger the searchBy() function that is coded in the external JS file passing a string corresponding to that button as a parameter.

Finally, we have the content part of the page, which, among some extra details that I added, has the most important role of receiving search results from JavaScript and displaying it to the user.


---------------------------------------------------//---------------------------------------------------


Details of the CSS parts of the project:


For the CSS, I used two sources, as mentioned in the HTML topic above, a CSS file that is in the same project folder, with some style adjustments that I made especially to achieve some responsiveness for the web page. And to work with the attribute Class for some HTML elements, I linked the traditional w3schools page (https://www.w3schools.com/w3css/4/w3.css). 

With these two style source I was able to make a page with a pleasant appearance, an interesting menu and minimal responsiveness for smaller screens.


---------------------------------------------------//---------------------------------------------------


Details of how JavaScript operates for the project:

Regarding the JavaScript file, I commented the code as best as I could so I was able to organise my ideas better.

First I decided to use the short form for the selector query with the $ symbol. Right at the beginning we have the two functions w3_open() and w3_close(), the first one is responsible for opening the menu sidebar for smaller screens and the second one for closing the menu.

Next, we have the buildPage() function that receives as a parameter the JSON from the getCountries() function where the Fetch method is located and will distribute the search result data to a table using a For loop to go through all the data that satisfies the search. Then the results will be displayed by the ID of the corresponding innerHTML element, making it visible to the user. At the end all text entries are reset to be empty.

The searchBy() function assigns search variable to the value of choice, and attribute variable also assigned to the choice value but with the first letter to upper case. The choice parameter is being passed from HTML onClick button as a string parameter related to the clicked button.

Then, we have the getCountries() function that makes API connection using Fetch method. This function has the userInput variable that will receive as a value the result of concatenating the ID that will be a complement to the Fetch method webpage link that will access the restcountries API.

To finish this SearchBy() function we have .then(response => response.json()) which will return the response promise, .then(json => buildPage(json)) which will call the buildPage() function that was explained previously, passing the same JSON as parameter, and finally .catch(error => console.log(error)) in case of an error.


We then have the eventListener which, when loading the DOMcontent, will add a click event to each button that will call the getCountries() function.
For the initial state of the page, I configured the Focus method to place the cursor in the first search text input box that is by country Name.

To finalise the JavaScript file, I added an extra feature to also trigger the search when pressing Enter on the keyboard, adding an EventListener for each text entry of each searching option.


---------------------------------------------------//---------------------------------------------------


Conclusion:

I can conclude at the end of the project that it made it possible for me to consolidate the knowledge involved, but especially on how to access the desired data through the API and analyze it in JSON format, as well as practice using the eventListener to add events. 

I can also mention that it was of great value after processing the data obtained from the API, practicing how to display them, building the page and working with the HTML tags within the JS file.
