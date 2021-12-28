let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.darkmode-toggle');
var moonIcon = document.getElementById('moon');

function disappear(){
    moonIcon.style.display = "none";
    console.log("Now you don't!")
}

function appear(){
    moonIcon.style.display = "inline";
    console.log("Now you see me,")
}


const enableDarkMode = ()=>{
    //moonIcon.src = "./Assets/moon.png";
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    console.log('darkmode enabled');
}

const disableDarkMode = ()=>{
    //moonIcon.src = "./Assets/moonAlt.png";
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    console.log('darkmode disabled');
}


darkModeToggle.addEventListener("click", function(){
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        appear();
    }else{
        disableDarkMode();
        disappear();
    }
})



/*
localStorage.clear();
*/

