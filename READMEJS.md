# Entertainment Finder Code Explanation: JavaScript
This document a detailed explanation of the Entertainment Finder Web application code. The application is a simple but complete entertainment finder system built with HTML, CSS and JavaScript.

## Table of Contents
- [Entertainment Finder Code Explanation](#entertainment-finder-code-explanation)
    - [JavaScript Functionality](#javascript-functionality)
        - [Render Functionality](#render-functionality)
            - [Display Functionality](#display-functionality)
            - [Search Functionality](#search-functionality)
            - [Search History](#search-history)
        - [Data Storage](#data-storage)
        - [Greeting Message](#greeting-message)
        - [Theme Toggling](#theme-toggling)
        - [Timer Functionality](#timer-functionality)
    - [Event Flow](#event-flow)
    - [Checklist](#checklist)

## JavaScript Functionality
The JavaScript code handles all the dynamic behavior of the Entertainment Finder:

### Render Functionality
This code handles displaying the data for each entertainment location:

#### Display Functionality
```// display all the attractions
function displayEntertainment(entertainment){
    console.log('renderCards called with' , entertainment.length, 'entertainment')

    // capture the search bar
    const resultsContainer = document.getElementById('results');

    // makes sure there is a search bar
    if(!resultsContainer){
        console.error('Results container not found');
        return;
    }

    // clears the results each time
    resultsContainer.innerHTML = '';
    // If there is nothing matching the search a message will show
    if(entertainment.length === 0){
        console.log('No locations found, showing empty message');
        resultsContainer.innerHTML = `<p id='noResults'>Nothing found</p>`;
        return;
    }

    // an array is created to sort all the locations
    const entertainmentElements = [];
    entertainment.sort(function(a,b){return a.name.charCodeAt(0) - b.name.charCodeAt(0)});

    // checks to see if the name of the location is a string
    entertainment.forEach(entertainment => {
        if(!entertainment || typeof entertainment.name !== 'string'){
            console.warn('Invalid entertainment object:', entertainment);
            return;
        }
        // If it is a string it creates a div containing all the info about the location from the data js
        const entertainmentDiv = document.createElement('div');
        entertainmentDiv.className = 'entertainment-box';
        entertainmentDiv.innerHTML = `
        <div>
            <img src="${entertainment.img}" alt="${entertainment.name}" class="entertainment-img";>
            <h3>${entertainment.name}</h3>
            <p><strong>Rating: ${entertainment.rating || 'unknown'}</strong></p>
            <p><strong>pricing: ${entertainment.pricing || 'unknown'}</strong></p>
            <p><strong>Type: ${entertainment.type || 'unknown'}</strong></p>
            <p><strong>Location: ${entertainment.location || 'unknown'}</strong></p>
            <a href="${entertainment.link || 'unknown'}" target="_blank">
                <button class="learn-more-btn">Learn More</button>
            </a>
        </div>
        `;
        entertainmentElements.push(entertainmentDiv);
    });
    // appends the div with info to the results container
    entertainmentElements.forEach(element =>{
        resultsContainer.appendChild(element);
    });

    console.log(`Successfully rendered ${entertainment.length} places`);
};
```
- `dipslayEntertainemt()`: displays the info from the array entertainment.
- `resultsContainer`: captures the container from the HTML to show the results
- `entertainmentElements=[]`: the array that holds all of the attrictions from the data
- `entertainment.sort()`: sorts each atteaction by their name in alphabetical order

### Search Functionality
```
displayEntertainment(entertainment);
// search array
let filteredLocations = [];
// real time search and sorting locations by name
document.getElementById('searchBar').addEventListener('input', searchItems);
function searchItems(){
        const input = document.getElementById('searchBar').value.trim().toLowerCase();
        if(input !== ""){
            try{
                const onlyLetters = /^[A-Za-z]+$/
                if(!onlyLetters.test(input)) throw "No numbers or special characters"
            }catch(err){
                alert(err)
            }
        filteredLocations = entertainment.filter(entertainment =>{return entertainment.name.toLowerCase().includes(input)}); 
        console.log(filteredLocations);
        displayEntertainment(filteredLocations);
        }else{
            displayEntertainment(entertainment);
        }
};
```
This function handles the search functionality:
- `filteredLocations-[]`: the array that contains all of the attractions that match the search input.
- `searchItems()`: checks to see if there are only letters and returns the attractions that match the search input in real time.

### Search History
```const previousSearches = [];
document.getElementById('searchBar').addEventListener('keydown', function(e){
    // when enter key is pressed it logs the input into the search history
    if(e.key === 'Enter'){
        const searchTerm = document.getElementById('searchBar').value.trim().toLowerCase();
        console.log('Enter key pressed for search term:', searchTerm)
        saveSearchHistory(searchTerm)
        localStorage.setItem('history', JSON.stringify(previousSearches));
    };
});

// id the search history reaches more than 10 it will erase the oldest one to add the new one
function saveSearchHistory(term){
    if(previousSearches >= 10){
        previousSearches.shift()
    };

    if(!previousSearches.includes(term)){
        previousSearches.push(term);
    }

    displaySearch()
};

// will display the search history into the div
function displaySearch(){
    const searchHistory = document.getElementById('history');
    searchHistory.innerHTML = "";
    let ul = document.createElement('ul');
    if(previousSearches.length > 0){
        previousSearches.forEach(searchTerm =>{
            let li = document.createElement('li');
            li.innerHTML = searchTerm;
            ul.appendChild(li)
        });
    };
    searchHistory.appendChild(ul);
};
displaySearch();
```
- `previousSearches=[]`: an array that contaiones all of the previous search inputs
- `addEventListener`: when the enter key is pressed after searching for something it logs into `previousSearches` and the local storage
- `saveSearchHistory()`: makes sure that when the array length if reaches over ten it will delete the oldest search to make room for the newest one
- `displaySearch()`: displays the search history in a div on the document

## Data Storage

```
// Data on every location inclusing name, img, rating, pricing, type, location, and link
const entertainment = [
    {
        img: "naturalhistory.jpg",
        name:'Arizona Museum of Natural History',
        rating:'⭐⭐⭐⭐+',
        pricing:'$60 under',
        type:'Museum',
        location:'Mesa',
        link:"https://www.arizonamuseumofnaturalhistory.org/"
    },
    {
        img:"",
        name:'Golfland Sunsplash',
        rating:'⭐⭐⭐⭐+',
        pricing:'$60 under',
        type:'Amusment Park',
        location:'Mesa',
        link:"",
    },
    {
        img:"",
        name: 'Bulldog Canyon Off-Road Adventure Tour',
        rating:'⭐⭐⭐⭐+',
        pricing:'$100+',
        type:'nature',
        location:'Mesa',
        link:""
    },
    {
        img:"",
        name:'Castles N Coasters',
        rating:'⭐⭐⭐⭐+',
        pricing:'$60 under',
        type:'Amusment Park',
        location:'Peoria',
        link:""
    },
    {
        img:"",
        name:'Martin Auto Mueseum',
        rating:'⭐⭐⭐⭐+',
        pricing:'',
        type:'Mueseum',
        location:'Peoria',
        link:""
    }
]
```
- `entertainment=[]`: An array that contains all the locations that shows up on the webapp.

## Greet Functionality
```
// setting cookie for when youenter the web app
function greetUser(){
    // checks if cookie exists
    const hasVisitedBefore = document.cookie.includes('hasVisitedBefore=true');
    if(hasVisitedBefore){
        alert("Welcome back to Entertainment Finder!");
    }else{
        // sets a cookie that expires in 7 days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `hasVisitedBefore=true; expires = ${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to Entertainment Finder");
    };
};
greetUser();
```
- `greetUser()`: Creates a cookie, that expires in 7 days, for new users and displays a message when the user enters the webapp.

## Theme Functionality
```
// them functionality so that user can choose between a dark and light theme
const themeToggle = document.getElementById('themeToggle');

// adding the dark theme from css
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
};

// logic for the button
themeToggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = "🌞";
    }else{
        localStorage.setItem('theme', 'light')
        themeToggle.textContent = "🌙";
    };
});

// short cut to toggle between themes
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'D'){
        themeToggle.click();
    };
});
```
- When `themeToggle` is pressed in toggles between the two dark and light classes
- `addEventListener` creates a shortcut to toggle between themes

## Timer  Functionality
```
function startTimer(){
    console.log('Start session timer') // debug

    // check if timer already exists
    if(document.getElementById('sessionTimer')){
        console.log('Timer already exists, not creating a new one');
        return;
    };

    //initialize session timer
    let sessionSeconds = 0;
    
    // create timer display element
    const timerElement = document.createElement('div');
    timerElement.id = "sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.color = "burlywood";
    timerElement.style.fontSize = "18px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);
    
    // update timer display initially
    updateTimerDisplay(timerElement,sessionSeconds);

    // update timer every second
    let timerInterval = setInterval(()=>{
        sessionSeconds++;
        updateTimerDisplay(timerElement,sessionSeconds);

        // store current timer in sesison storage
        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());
        
        // trigger special message for long session
        if(sessionSeconds === 300){
            showLongSessionMessage()
        }
    }, 1000);

    // when page is about to unload, stop the timer
    window.addEventListener('beforeunload', () => {
        console.log('Page unloading, stopping timer');
        clearInterval(timerInterval)
    });
}
```
- `startTimer()`: Begins the timer when user first enters the Webapp and also customizes the timer manipluating the CSS

```
function updateTimerDisplay(element, totalSeconds){
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds%3600)/60);
    const seconds = totalSeconds % 60;

    let timeText = `⏱ Time on page:`

    if(hours > 0){
        timeText += `${hours}h `;
    }

    if(hours > 0 || minutes > 0){
        timeText += `${minutes}m `;
    }

    timeText += `${seconds}s`;

    element.textContent = timeText;
}
```
- `updateTimerDisplay()`: Updates the timer every second.
```
function showLongSessionMessage(){
    console.log('Showing long sessions message (5 minutes)');

    // check if messgae already exists to prevent duplicates
    if(document.getElementById('longSessionMessage')){
        console.log('Long session message already exists')
        return;
    }

    const messageDiv = document.createElement('div');
    messageDiv.id = "longSessionMessage";
    messageDiv.style.padding = '10px';
    messageDiv.style.margin = '20px 0';
    messageDiv.style.backgroundColor = 'red';
    messageDiv.style.color = 'black';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';
    messageDiv.innerHTML = `
    <p>🌎 You've been exploring for five minutes! Thanks for your interest in Entertainement Finder!</p>
    <button id="dismissMessage" style = "margin-top:10px; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">
    Dismiss
    </button>
    `;

    // check if timer already exists
    const timerElement = document.getElementById('sessionTimer');
    if(timerElement){
        document.body.insertBefore(messageDiv, timerElement);
    }else{
        document.body.appendChild(messageDiv);
    }

    // add event lister to dismiss button
    const dismissButton = document.getElementById('dismissMessage');
    if(dismissButton){
        dismissButton.addEventListener('click', function(){
            const message = document.getElementById('longSessionMessage');
            if(message){
                message.remove()
            };
        });
    };
};
startTimer();
```
- `showLongSessionMessage()`: Activates and styles a message after 5 minutes of being on the webapp. the message also contains a button to dismiss the button.

## Event Flow
1. User Loads the webapp -> `greetuser()` -> `entertainment=[]` -> `displayEntertainment()` -> `startTimer()` -> `updatetimerDisplay()`
2. User searches for an attraction -> `searchItems()` -> `saveSearchhistory()` -> `displaySearch()`
3. User spends time and customizes the webapp -> `themeToggle` -> `showLongSessionMessage`

This Pattern ensures that:
1. The greet, data, and timer is loaded first
2. A real time search when user is looking for an attraction
3. A customized experienced tailored by the user to fit them

## Checklist
1. Variable Naming & Indentation:
```
const entertainmentElements = [];
```
The name of an array that contains the data.

2. Function Naming & Modularity
```
function greetUser(){}
```
Greets the user when they enter the webapp

3. Arrays & Objects Usage
```
const entertainment = [{}]
```
Array with objects that holds the data.

4. Array Methods
```
filteredLocations = entertainment.filter(entertainment =>{return entertainment.name.toLowerCase().includes(input)}); 
```
Sorts the inputs to match the search input

5. Looping/iteration
```
entertainment.forEach(entertainment => {
        if(!entertainment || typeof entertainment.name !== 'string'){
            console.warn('Invalid entertainment object:', entertainment);
            return;
        }})
```
Checks to see if the name of each location is a string

6. JSON Data Handling
```
const entertainment = [
    {
        img: "naturalhistory.jpg",
        name:'Arizona Museum of Natural History',
        rating:'⭐⭐⭐⭐+',
        pricing:'$60 under',
        type:'Museum',
        location:'Mesa',
        link:"https://www.arizonamuseumofnaturalhistory.org/"
    }]
```
One location that is part of the data

7. Web Storage (local/session)
```
localStorage.setItem('history', JSON.stringify(previousSearches));
```
Logs the search history in the local storage

8. Saving/Retrieving User Data
```
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
};
```
Retrieves the theme the user previously had

9. Cookies and expiry
```
document.cookie = `hasVisitedBefore=true; expires = ${expiryDate.toUTCString()}; path=/`;
```
Sets a cookie that expires in seven days

10. DOM Manipulation
```
entertainmentDiv.innerHTML = `
        <div>
            <img src="${entertainment.img}" alt="${entertainment.name}" class="entertainment-img";>
            <h3>${entertainment.name}</h3>
            <p><strong>Rating: ${entertainment.rating || 'unknown'}</strong></p>
            <p><strong>pricing: ${entertainment.pricing || 'unknown'}</strong></p>
            <p><strong>Type: ${entertainment.type || 'unknown'}</strong></p>
            <p><strong>Location: ${entertainment.location || 'unknown'}</strong></p>
            <a href="${entertainment.link || 'unknown'}" target="_blank">
                <button class="learn-more-btn">Learn More</button>
            </a>
        </div>
        `;
```
Creating a div for each location

11. CSS Manipulation via JS
```
timerElement.style.marginTop = "20px";
```
Styles the timer

12. Theme Prference
```
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
};
```
enables the style class for a dark theme

13. Comments & Code Readability
```
// check if timer already exists
```
A comment

14. Error Handling & Debugging
```
try{
    const onlyLetters = /^[A-Za-z]+$/
    if(!onlyLetters.test(input)) throw "No numbers or special characters"
}catch(err){
    alert(err)
}
```
Catches an error in the code if user tries to search with a number
15. Regex Validation
```
const onlyLetters = /^[A-Za-z]+$/
```
Makes sure user can only search with letters

16. Timer and Date Object
```
const expiryDate = new Date();
```
captures todays date

17. Math, String, Random Methods
```
const hours = Math.floor(totalSeconds/3600);
```
Rounds each second

18. Event Listeners and Shortcuts
```
dismissButton.addEventListener('click', function(){
            const message = document.getElementById('longSessionMessage');
            if(message){
                message.remove()
            };
        });
```
Dismisses the long session messgae when dismiss button is pressed

19. Real-time Search & History
```
const input = document.getElementById('searchBar').value.trim().toLowerCase();
        if(input !== ""){
            try{
                const onlyLetters = /^[A-Za-z]+$/
                if(!onlyLetters.test(input)) throw "No numbers or special characters"
            }catch(err){
                alert(err)
            }
        filteredLocations = entertainment.filter(entertainment =>{return entertainment.name.toLowerCase().includes(input)}); 
        console.log(filteredLocations);
        displayEntertainment(filteredLocations);
        }else{
            displayEntertainment(entertainment);
        }
```
Real time search function

20. CRUD Functionality
```
entertainmentElements.push(entertainmentDiv);
```
Pushing elements to a div