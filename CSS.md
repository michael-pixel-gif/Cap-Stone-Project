# Entertainment Finder CSS Code Explanation

1. Global Reset & Box Model
```
*{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color ease-out .3s;
}
```
2. Use of CSS variables
```
:root{
    --dark-bgcolor:black;
    --light-bgcolor:white
}
```
3. Orgganized CSS Structure
```
/* The container that holds all the results */
.entertainment-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    background-color:antiquewhite;
    padding: .5em;
    border-radius: 10px;
    max-width: 15em;
    height: auto;
    text-align: center;
}

.entertainment-box:hover{
    box-shadow: 4px 4px 10px black;
}
```
4. Responsive Design
```
@media screen and (max-width: 740px){
    
    h1{
        font-size: small;
    }

    .filter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    select, #themeToggle{
        margin: .1em;
        text-align: center;
        width:10em;
        border-radius: 10px;;
    }

    #results{
        grid-template-columns: 1fr;
    }
}
```
5. Typography Styling
```
font-family: Arial, Helvetica, sans-serif;
```
6. Color Scheme & Contrast
```
.light{
    background-color: var(--light-bgcolor);
    color: black;
}
```
7. Flexbox/Grid Usage
```
display: flex;
display: grid;
```
8. Button & Input Styling
```
#themeToggle{
    padding: 0 .5em;
    border-radius: 10px;
}
```
9. Component Reusability
```
main
.entertainment-box
```
10. CSS Transitions
```
transition: background-color ease-out .3s;
```
11. Hover/Focus Effects
```
.entertainment-box:hover{
    box-shadow: 4px 4px 10px black;
}
```
12. Layout Container
```
.entertainment-box
```
15. Use of Pseudo-classes/elements
```
.entertainment-box:hover
```
16. Shadows and borders
```
box-shadow: 4px 4px 10px black;
```
18. Theme Customization
```
.dark{
    background-color: var(--dark-bgcolor);
}

.light{
    background-color: var(--light-bgcolor);
    color: black;
}
```
19. Naming Conventions
```
#results
#searchBar
```
20. Cleaniness & Commenting
```
/* creating root colors */
```
