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