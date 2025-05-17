// display all the attractions
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
// search history
const previousSearches = [];
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
