let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.darkmode-toggle');


const enableDarkMode = ()=>{
    document.body.classList.add('darkmode');
    console.log('darkmode enabled');
}

const disableDarkMode = ()=>{
    document.body.classList.remove('darkmode');
    //localStorage.setItem('darkMode', null);
    console.log('darkmode disabled');
}

/* Check if darkmode is already enabled. Implements it if so. */
if(darkMode){
    enableDarkMode();
    darkModeToggle.checked=true;
}else{
    disableDarkMode();
    darkModeToggle.checked = false;
}

darkModeToggle.addEventListener("click", function(){
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        localStorage.setItem('darkMode', 'enabled');
        enableDarkMode();
    }else{
        localStorage.removeItem('darkMode');
        disableDarkMode();
    }
})
