// Finding elements
const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetBtn = document.getElementById("resetBtn");
const mainElement = document.querySelector("main");

const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
};

// Load local storsge value
const initialSetUp = () => {
 const bgColor = localStorage.getItem("bgColor");
 const fontSize = localStorage.getItem("fontSize");

    if(bgColor && fontSize){
        setValues(fontSize, bgColor);
    }
    if(!bgColor && !fontSize){
        setValues("16px", "teal");
    }
    if(!bgColor && fontSize){
        setValues(fontSize, "teal");
    }
    if(bgColor && !fontSize){
        setValues("16px", bgColor);
    }
}


// Change font size function
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
};

// Change bg color function
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
};

// Clear local storage function
const clearLocalStorage = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setValues("16px", "teal");
};


// Add event listeners
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetBtn.addEventListener("click", clearLocalStorage);

initialSetUp();