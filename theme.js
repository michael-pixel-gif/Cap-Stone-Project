// theme functionality so that user can choose between a dark and light theme
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