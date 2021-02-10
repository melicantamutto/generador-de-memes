// ------------------------------HTML ELEMENTS------------------------------

const body = document.getElementById("body");

// ---------------Header elements---------------

const imageButton = document.getElementById("image-button");
const textButton = document.getElementById("text-button");
const lightModeButton = document.getElementById("light-mode-button");
const lightModeText = document.getElementById("light-mode-text");

// ---------------Image elements---------------

const imageInProgress = document.getElementById("image-in-progress");
const imageTopText = document.getElementById("image-top-text");
const imageTopTextContainer = document.getElementById(
  "image-top-text-container"
);
const imageBottomText = document.getElementById("image-bottom-text");
const imageBottomTextContainer = document.getElementById(
  "image-bottom-text-container"
);
const imagePerSe = document.getElementById("image-per-se");
const download = document.getElementById("download");

// ---------------Sections elements---------------

const mainSection = document.getElementById("main-section");
const asideSection = document.getElementById("aside-section");
const mediaQuery = window.matchMedia("(max-width: 700px)");

// ---------------Image settings elements---------------

const imageForm = document.getElementById("image-form");
const closeImage = document.getElementById("close-image");
const imageUrl = document.getElementById("image-url");
const imageBackground = document.getElementById("image-background");
const backgroundFilter = document.getElementById("background-filter");
const rangeFilters = document.getElementsByClassName("range-filter");
const brightness = document.getElementById("brightness");
const opacity = document.getElementById("opacity");
const contrast = document.getElementById("contrast");
const nofocus = document.getElementById("unfocus");
const greyScale = document.getElementById("grey-scale");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const negative = document.getElementById("negative");
const undoFilters = document.getElementById("undo-filters");
// testing
const rangeValues = document.querySelectorAll(".range-filter");

// ---------------Text settings elements---------------

const textForm = document.getElementById("text-form");
const closeText = document.getElementById("close-text");
const inputTopText = document.getElementById("input-top-text");
const withTopText = document.getElementById("with-top-text");
const inputBottomText = document.getElementById("input-bottom-text");
const withBottomText = document.getElementById("with-bottom-text");
const fontName = document.getElementById("font-name");
const fontSize = document.getElementById("font-size");
const textAlignLeft = document.getElementById("text-align-left");
const textAlignCenter = document.getElementById("text-align-center");
const textAlignRight = document.getElementById("text-align-right");
const fontColor = document.getElementById("font-color");
const fontBackground = document.getElementById("font-background");
const noFontBackground = document.getElementById("no-font-background");
const fontBorderNone = document.getElementById("font-border-none");
const fontBorderLight = document.getElementById("font-border-light");
const fontBorderDark = document.getElementById("font-border-dark");
const fontSpace = document.getElementById("font-space");
const fontInter = document.getElementById("font-inter");

// ------------------------------ASIDE SETTINGS CODE------------------------------

const displayAside = (show, hide) =>{
    asideSection.style.display = "block";
    hide.style.display = "none";
    show.style.display = "flex";
    if(mediaQuery.matches){
        mainSection.style.display= "none";
        show.style.width = '100vw';
    }
}

imageButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayAside(imageForm, textForm);
});

textButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayAside(textForm, imageForm);
});

// ------------------------------DARK MODE CODE------------------------------

lightModeButton.addEventListener("change", (e) => {
  e.preventDefault();
  if (lightModeButton.checked) {
    body.classList.remove("light-mode");
    lightModeText.innerText = "Modo claro";
  } else {
    body.classList.add("light-mode");
    lightModeText.innerText = "Modo oscuro";
  }
});

// ------------------------------CLOSE BUTTONS CODE------------------------------

const closeAside = () => {
  asideSection.style.display= 'none';
  if(mediaQuery.matches){
    mainSection.style.display= "flex";
}
};

closeImage.addEventListener("click", () => {
  closeAside();
});

closeText.addEventListener("click", () => {
  closeAside();
});





// ------------------------------IMAGE SETTINGS CODE------------------------------

// ---------------image url---------------

imageUrl.addEventListener("input", () => {
  imagePerSe.style.background = `url(${imageUrl.value})`;
  imagePerSe.style.backgroundSize = "cover";
  imagePerSe.style.backgroundPosition = "center";
});

// ---------------image background color---------------

imageBackground.addEventListener("input", () => {
  imagePerSe.style.backgroundColor = `${imageBackground.value}`;
});

backgroundFilter.addEventListener("change", () => {
  imagePerSe.style.backgroundBlendMode = `${
    backgroundFilter[backgroundFilter.selectedIndex].value
  }`;
});

// ---------------image background filters---------------

const changeImageFilters = (rangeFilter) => {
  if (rangeFilter.id === "blur") {
    imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value}px)`;
  } else if (rangeFilter.id === "hue-rotate") {
    imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value}deg)`;
  } else if (
    rangeFilter.id === "brightness" ||
    rangeFilter.id === "opacity" ||
    rangeFilter.id === "invert"
  ) {
    imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value})`;
  } else {
    imagePerSe.style.filter = `${rangeFilter.id}(${rangeFilter.value}%)`;
  }
};

Array.from(rangeFilters).forEach((rangeFilter) => {
  rangeFilter.addEventListener("change", () => {
    changeImageFilters(rangeFilter);
  });
});

// ---------------reset filters button---------------

undoFilters.addEventListener("click", (e) => {
  e.preventDefault();
  brightness.value = 1;
  opacity.value = 1;
  contrast.value = 100;
  nofocus.value = 0;
  greyScale.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturation.value = 100;
  negative.value = 0;
  setTimeout(() => {
    Array.from(rangeFilters).forEach((rangeFilter) => {
      changeImageFilters(rangeFilter);
    });
  }, 100);
}); // me gustaría automatizarlo guardando los valores originales al cargar la pagina y despues aplicandolo aca

// ------------------------------TEXT SETTINGS CODE------------------------------

// ---------------text inputs---------------

inputTopText.addEventListener("keyup", (e) => {
  e.preventDefault();
  imageTopText.innerText = `${inputTopText.value}`;
});

inputBottomText.addEventListener("keyup", (e) => {
  e.preventDefault();
  imageBottomText.innerText = `${inputBottomText.value}`;
});

// ---------------text display checkboxes---------------

withTopText.addEventListener("change", (e) => {
  e.preventDefault();
  if (withTopText.checked) {
    imageTopTextContainer.style.display = "none";
  } else {
    imageTopTextContainer.style.display = "flex";
  }
});

withBottomText.addEventListener("change", (e) => {
  e.preventDefault();
  if (withBottomText.checked) {
    imageBottomTextContainer.style.display = "none";
  } else {
    imageBottomTextContainer.style.display = "flex";
  }
});

// ---------------font settings---------------

fontName.addEventListener("change", (e) => {
  e.preventDefault();
  imageTopText.style.fontFamily = `${fontName[fontName.selectedIndex].value}`;
  imageBottomText.style.fontFamily = `${
    fontName[fontName.selectedIndex].value
  }`;
}); //nofunciona

fontSize.addEventListener("input", (e) => {
  e.preventDefault();
  imageTopText.style.fontSize = `${fontSize.value}px`;
  imageBottomText.style.fontSize = `${fontSize.value}px`;
});

// ---------------text align---------------

textAlignLeft.addEventListener("click", (e) => {
  e.preventDefault();
  imageTopText.style.justifyContent = "flex-start";
  imageBottomText.style.justifyContent = "flex-start";
});

textAlignCenter.addEventListener("click", (e) => {
  e.preventDefault();
  imageTopText.style.justifyContent = "center";
  imageBottomText.style.justifyContent = "center";
});

textAlignRight.addEventListener("click", (e) => {
  e.preventDefault();
  imageTopText.style.justifyContent = "flex-end";
  imageBottomText.style.justifyContent = "flex-end";
});

// ---------------font colors---------------

fontColor.addEventListener("input", (e) => {
  e.preventDefault();
  imageTopText.style.color = `${fontColor.value}`;
  imageBottomText.style.color = `${fontColor.value}`;
});

fontBackground.addEventListener("input", (e) => {
  e.preventDefault();
  imageTopTextContainer.style.backgroundColor = `${fontBackground.value}`;
  imageBottomTextContainer.style.backgroundColor = `${fontBackground.value}`;
});

noFontBackground.addEventListener("change", (e) => {
  e.preventDefault();
  if (noFontBackground.checked) {
    imageTopTextContainer.style.backgroundColor = "rgba(0, 0, 0, 0)";
    imageBottomTextContainer.style.backgroundColor = "rgba(0, 0, 0, 0)";
    imageTopTextContainer.style.position = "absolute";
    imageTopTextContainer.style.top = "0";
    imageTopTextContainer.style.left = "0";
    imageBottomTextContainer.style.position = "absolute";
    imageBottomTextContainer.style.bottom = "0";
    imageBottomTextContainer.style.left = "0";
    imagePerSe.style.backgroundSize = "cover";
  } else {
    imageTopTextContainer.style.backgroundColor = `${fontColor.value}`;
    imageBottomTextContainer.style.backgroundColor = `${fontColor.value}`;
    imageTopTextContainer.style.position = "static";
    imageBottomTextContainer.style.position = "static";
    imagePerSe.style.backgroundSize = "38em, 100%";
  }
});

// ---------------font shadow---------------

fontBorderNone.addEventListener("click", () => {
  imageTopText.style.textShadow = "none";
  imageBottomText.style.textShadow = "none";
});

fontBorderLight.addEventListener("click", () => {
  imageTopText.style.textShadow =
    "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
  imageBottomText.style.textShadow =
    "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
});

fontBorderDark.addEventListener("click", () => {
  imageTopText.style.textShadow =
    "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  imageBottomText.style.textShadow =
    "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
});

// ---------------font spacing---------------

fontSpace.addEventListener("input", () => {
  imageTopText.style.letterSpacing = `${parseInt(fontSpace.value)}px`;
  imageBottomText.style.letterSpacing = `${parseInt(fontSpace.value)}px`;
});

// ---------------font line spacing---------------

fontInter.addEventListener("change", () => {
  imageTopText.style.lineHeight = `${fontInter[fontInter.selectedIndex].value}`;
  imageBottomText.style.lineHeight = `${
    fontInter[fontInter.selectedIndex].value
  }`;
});

// ------------------------------DOWNLOAD BUTTON CODE------------------------------

download.addEventListener("click", () => {
  domtoimage.toBlob(imageInProgress).then(function (blob) {
    window.saveAs(blob, "meme.png");
  });
});
