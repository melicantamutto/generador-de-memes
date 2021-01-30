// ------------------------------HTML ELEMENTS------------------------------

// ---------------Header elements---------------

const imageButton = document.getElementById('image-button');
const textButton = document.getElementById('text-button');
const lightModeButton = document.getElementById('light-mode-button');

// ---------------Image elements---------------

const imageInProgress = document.getElementById('image-in-progress');
const imageTopText = document.getElementById('image-top-text');
const imageTopTextContainer = document.getElementById('image-top-text-container');
const imageBottomText = document.getElementById('image-bottom-text');
const imageBottomTextContainer = document.getElementById('image-bottom-text-container');
const imagePerSe = document.getElementById('image-per-se');
const download = document.getElementById('download');


// ---------------Image settings elements---------------

const imageForm = document.getElementById('image-form');
const imageUrl = document.getElementById('image-url');
const imageBackground = document.getElementById('image-background');
const backgroundFilter = document.getElementById('background-filter');
const rangeFilters = document.getElementsByClassName('range-filter');
const brightness = document.getElementById('brightness');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const unfocus = document.getElementById('unfocus');
const greyScale = document.getElementById('grey-scale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const negative = document.getElementById('negative');
const undoFilters = document.getElementById('undo-filters');

// ---------------Text settings elements---------------

const textForm = document.getElementById('text-form');
const inputTopText = document.getElementById('input-top-text');
const withTopText = document.getElementById('with-top-text');
const inputBottomText = document.getElementById('input-bottom-text');
const withBottomText = document.getElementById('with-bottom-text');
const fontName = document.getElementById('font-name');
const fontSize = document.getElementById('font-size');
const textAlignLeft = document.getElementById('text-align-left');
const textAlignCenter = document.getElementById('text-align-center');
const textAlignRight = document.getElementById('text-align-right');
const fontColor = document.getElementById('font-color');
const fontBackground = document.getElementById('font-background');
const noFontBackground = document.getElementById('no-font-background');
const fontBorderNone = document.getElementById('font-border-none');
const fontBorderLight = document.getElementById('font-border-light');
const fontBorderDark = document.getElementById('font-border-dark');
const fontSpace = document.getElementById('font-space');
const fontInter = document.getElementById('font-inter');

// ------------------------------ASIDE SETTINGS CODE------------------------------

imageButton.addEventListener('click', (e) => {
    e.preventDefault();
    textForm.style.display = 'none';
    imageForm.style.display = 'flex';
})

textButton.addEventListener('click', (e) => {
    e.preventDefault();
    imageForm.style.display = 'none';
    textForm.style.display = 'flex';
})

// ------------------------------DARK MODE CODE------------------------------

lightModeButton.addEventListener('change', () => {
    if (this.checked) {
        document.documentElement.style.setproperty('--lighterBackground', 'rgb(81, 81, 168)');
        document.documentElement.style.setproperty('--lightBackground', 'rgb(59, 59, 141)');
        document.documentElement.style.setproperty('--mediumBackground', 'rgb(rgb(28, 28, 83)');
        document.documentElement.style.setproperty('--darkBackground', 'rgb(9, 9, 36');
        document.documentElement.style.setproperty('--fontColor', 'rgb(250, 246, 246)');
    } else {
        document.documentElement.style.setproperty('--lighterBackground', 'rgb(250, 246, 246)');
        document.documentElement.style.setproperty('--lightBackground', 'rgb(81, 81, 168)');
        document.documentElement.style.setproperty('--mediumBackground', 'rgb(rgb(238, 227, 227)');
        document.documentElement.style.setproperty('--darkBackground', 'rgb(199, 183, 183)');
        document.documentElement.style.setproperty('--fontColor', 'rgb(9, 9, 36)');
    }

}) //nofunciona


// ------------------------------IMAGE SETTINGS CODE------------------------------

// ---------------image url---------------

imageUrl.addEventListener('input', () => {
    imagePerSe.style.background = `url(${imageUrl.value})`;
    imagePerSe.style.backgroundSize = 'cover';
    imagePerSe.style.backgroundPosition = 'center';
})

// ---------------image background color---------------

imageBackground.addEventListener('input', () => {
    imagePerSe.style.backgroundColor = `${imageBackground.value}`;
})

backgroundFilter.addEventListener('change', () => {
    imagePerSe.style.backgroundBlendMode = `${backgroundFilter[backgroundFilter.selectedIndex].value}`;
})

// ---------------image background filters---------------

Array.from(rangeFilters).forEach(rangeFilter => {
    rangeFilter.addEventListener('change', () => {
        if (rangeFilter.id === 'blur') {
            imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value}px)`
        } else if (rangeFilter.id === 'hue-rotate') {
            imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value}deg)`
        } else if (rangeFilter.id === 'brightness' || rangeFilter.id === 'opacity' || rangeFilter.id === 'invert') {
            imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value})`
        } else {
            imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value}%)`
        }
    })
})

// ---------------reset filters button---------------

undoFilters.addEventListener('click', () => {
    brightness.value = 1; 
    opacity.value = 1; 
    contrast.value = 100;
    unfocus.value = 0; 
    greyScale.value = 0; 
    sepia.value = 0;
    hue.value = 0;
    saturation.value = 100;
    negative.value = 0;
}) // me gustaría automatizarlo guardando los valores originales al cargar la pagina y despues aplicandolo aca




// ------------------------------TEXT SETTINGS CODE------------------------------

// ---------------text inputs---------------

inputTopText.addEventListener('keyup', (e) => {
    e.preventDefault();
    imageTopText.innerText = `${inputTopText.value}`
})

inputBottomText.addEventListener('keyup', (e) => {
    e.preventDefault();
    imageBottomText.innerText = `${inputBottomText.value}`
})

// ---------------text checkboxes---------------

withTopText.addEventListener('change', (e) => {
    e.preventDefault();
    if (this.checked) {
        imageTopTextContainer.style.display = 'none';
    } else {
        imageTopTextContainer.style.display = 'flex';
    }
}) //nofunciona

withBottomText.addEventListener('change', (e) => {
    e.preventDefault();
    if (this.checked) {
        imageBottomTextContainer.style.display = 'none';
    } else {
        imageBottomTextContainer.style.display = 'flex';
    }
}) //no funciona

// ---------------font settings---------------

fontName.addEventListener('change', (e) => {
    e.preventDefault();
    imageInProgress.style.fontFamily = `${fontName.value}`

}) //nofunciona

fontSize.addEventListener('change', (e) => {
    e.preventDefault();
    imageInProgress.style.fontSize = `${fontSize.value}`

}) //nofunciona


// ---------------text align---------------

textAlignLeft.addEventListener('click', (e) => {
    textAlignLeft.style.backgroundColor = 'black'
    e.preventDefault();
    imageTopText.style.textAlign = 'left';
    imageBottomText.style.textAlign = 'left';
}) //nofunciona ninguno

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

// ---------------font colors---------------

fontColor.addEventListener('input', (e) => {
    e.preventDefault();
    imageTopText.style.color = `${fontColor.value}`;
    imageBottomText.style.color = `${fontColor.value}`;
})

fontBackground.addEventListener('input', (e) => {
    e.preventDefault();
    imageTopTextContainer.style.backgroundColor = `${fontBackground.value}`;
    imageBottomTextContainer.style.backgroundColor = `${fontBackground.value}`;
})

noFontBackground.addEventListener('change', (e) => {
    e.preventDefault();
    if (this.checked) {
        imageTopTextContainer.style.backgroundColor = 'rgba(0,0,0,0)';
        imageBottomTextContainer.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}) // no funciona

// ---------------font shadow---------------

fontBorderNone.addEventListener('click', () => {
    imageTopText.style.textShadow = 'none';
    imageBottomText.style.textShadow = 'none';
})

fontBorderLight.addEventListener('click', () => {
    imageTopText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
    imageBottomText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
})

fontBorderDark.addEventListener('click', () => {
    imageTopText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
    imageBottomText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
})

// ---------------font spacing---------------

fontSpace.addEventListener('keyup', () => {
    imageTopText.style.letterSpacing = `${parseInt(fontSpace.value)}`;
    imageBottomText.style.letterSpacing = `${parseInt(fontSpace.value)}`;
}) // no funciona

// ---------------font line spacing---------------

fontInter.addEventListener('change', () => {
    imageTopText.style.lineHeight = `${fontInter[fontInter.selectedIndex].value}`;
    imageBottomText.style.lineHeight = `${fontInter[fontInter.selectedIndex].value}`;
}) // no funciona


// ------------------------------DOWNLOAD BUTTON CODE------------------------------