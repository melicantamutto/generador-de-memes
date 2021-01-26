// HTML ELEMENTS

// Header elements

const imageButton = document.getElementById('imageButton');
const textButton = document.getElementById('textButton');
const lightModeButton = document.getElementById('lightModeButton');

// Image elements

const imageInProgress = document.getElementById('imageInProgress');
const imageTopText = document.getElementById('imageTopText');
const imageTopTextContainer = document.getElementById('imageTopTextContainer');
const imageBottomText = document.getElementById('imageBottomText');
const imageBottomTextContainer = document.getElementById('imageBottomTextContainer');
const imagePerSe = document.getElementById('imagePerSe');
const download = document.getElementById('download');

// Text settings elements

const textForm = document.getElementById('textForm');
const inputTopText = document.getElementById('inputTopText');
const withTopText = document.getElementById('withTopText');
const inputBottomText = document.getElementById('inputBottomText');
const withBottomText = document.getElementById('withBottomText');
const fontName = document.getElementById('fontName');
const fontSize = document.getElementById('fontSize');
const textAlignLeft = document.getElementById('textAlignLeft');
const textAlignCenter = document.getElementById('textAlignCenter');
const textAlignRight = document.getElementById('textAlignRight');
const fontColor = document.getElementById('fontColor');
const fontBackground = document.getElementById('fontBackground');
const noFontBackground = document.getElementById('noFontBackground');
const fontBorder = document.getElementById('fontBorder');
const fontSpace = document.getElementById('fontSpace');
const fontInter = document.getElementById('fontInter');

// Image settings elements

const imageForm = document.getElementById('imageForm');
const imageUrl = document.getElementById('imageUrl');
const inputBackground = document.getElementById('inputBackground');
const backgroundFilter = document.getElementById('backgroundFilter');
const brillo = document.getElementById('brillo');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const unfocus = document.getElementById('unfocus');
const greyScale = document.getElementById('greyScale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const negative = document.getElementById('negative');
const undoFilters = document.getElementById('undoFilters');


// PAGE SETTINGS CODE

imageButton.addEventListener('click', (e) =>{
    e.preventDefault();
    textForm.style.display= 'none';
    imageForm.style.display= 'flex';
})
textButton.addEventListener('click', (e) =>{
    e.preventDefault();
    imageForm.style.display= 'none';
    textForm.style.display= 'flex';
})


// TEXT SETTINGS CODE

// text inputs
inputTopText.addEventListener('keyup', (e) => {
    e.preventDefault();
    imageTopText.innerText = `${inputTopText.value}`
})
inputBottomText.addEventListener('keyup', (e) => {
    e.preventDefault();
    imageBottomText.innerText = `${inputBottomText.value}`
})

// text checkboxes
withTopText.addEventListener('checked', (e) => {
    e.preventDefault();
    imageTopTextContainer.style.display = 'none';
})
withBottomText.addEventListener('checked', (e) => {
    e.preventDefault();
    imageBottomTextContainer.style.display = 'none';
})

// font settings
fontName.addEventListener('change', (e) =>{
    e.preventDefault();
    imageInProgress.style.fontFamily = `${fontName.value}`

})
fontSize.addEventListener('change', (e) =>{
    e.preventDefault();
    imageInProgress.style.fontSize = `${fontSize.value}`

})


// text align
textAlignLeft.addEventListener('click', (e) => {
    textAlignLeft.style.backgroundColor = 'black'
    e.preventDefault();
    imageTopText.style.textAlign = 'left';
    imageBottomText.style.textAlign = 'left';
})
textAlignCenter.addEventListener('click', (e) => {
    e.preventDefault();
    imageTopText.style.textAlign = 'center';
    imageBottomText.style.textAlign = 'center';
})
textAlignRight.addEventListener('click', (e) => {
    e.preventDefault();
    imageTopText.style.textAlign = 'right';
    imageBottomText.style.textAlign = 'right';
})