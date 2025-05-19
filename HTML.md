# Entertainment Finder HTML Code Explanation

1. Doctype and HTML Structure
```
<!DOCTYPE html>
<div id="history"></div>
```
2. Lang attribute
```
<html lang="en">
```
3. Meta Tags
```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Looking for somewhere to go in Phoenix? Search here."/>
```
4. Semantic Tags
```
<main>
```
5. Heading Structure
```
<h1>Entertainment Guide: Phoenix</h1>
```
6. Alt Text for images
```
alt="${entertainment.name}"
```
7. Form Structure
```
<input type="text" name="searchBar" id="searchBar" placeholder="Search here..."/>
```
8. Button and Input Elements
```
<button class="learn-more-btn">Learn More</button>
```
9. Anchor Tags
```
<a href="${entertainment.link || 'unknown'}" target="_blank">
    <button class="learn-more-btn">Learn More</button>
</a>
```
10. External CSS/JS Links
```
<link rel="stylesheet" href="styles.css" />
```
11. Responsive Meta & Layout
```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<main>
      <!-- Title and searchbar -->
      <h1>Entertainment Guide: Phoenix</h1>
      <!-- Search Bar -->
      <input type="text" name="searchBar" id="searchBar" placeholder="Search here..."/>
      <!-- Search history and outputs of each search -->
      <div id="history"></div>
      <button id="themeToggle">Change Theme</button>
      <!-- Shows all the data -->
      <div id="results"></div>
</main>
```
12. Responsive Image and Media
```
<img src="${entertainment.img}" alt="${entertainment.name}" class="entertainment-img";>
```
13. Lists
```
let ul = document.createElement('ul');
```
14. Comments
```
<!-- Title and searchbar -->
```
15. Indentation and Formating
```
<main>
    <!-- Title and searchbar -->
    <h1>Entertainment Guide: Phoenix</h1>
    <!-- Search Bar -->
    <input type="text" name="searchBar" id="searchBar" placeholder="Search here..."/>
    <!-- Search history and outputs of each search -->
    <div id="history"></div>
    <button id="themeToggle">Change Theme</button>
    <!-- Shows all the data -->
    <div id="results"></div>
</main>
```
16. Favicon
```
<link rel="icon" type="image/png" href="favicon.png" />
```