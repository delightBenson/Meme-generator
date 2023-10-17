                  "use strict"


  // const generateBtn = document.getElementById("generate-btn");
  // const memeContainer = document.getElementById("meme");
  // const imageIput = document.getElementById("photomeme");
  // const memeForm = document.getElementById("meme-form");

  // const genMeme = (url, topText, bottomText) => {
  //     const memeContainer = document.getElementById("meme");
  //     const imageElem = document.createElement("img");
  //     memeContainer.appendChild(imageElem);
  //     imageElem.src = url;
  //     const top = document.createElement("p");
  //     const textnode = document.createTextNode(topText);
  //     top.appendChild(textnode);
  //     memeContainer.insertBefore(top, imageElem);

  // };

  // memeForm.addEventListener("submit", function (event) {
  //   event.preventDefault()
  //   const imageUrl = imageIput.value;
  //   const topText = document.getElementById("top-text");
  //   const topTextValue = topText.value
  //   genMeme(imageUrl, topTextValue);
  //   imageIput.value = "";
  // });

  const genMeme = (url, topText, bottomText) => {
    const memeContainer = document.getElementById("meme");
    const imageElem = document.createElement("img");
    memeContainer.appendChild(imageElem);
    imageElem.src = url;

    const top = document.createElement("p");
    const topTextNode = document.createTextNode(topText);
    top.appendChild(topTextNode);
    memeContainer.insertBefore(top, imageElem);

    if (bottomText) {
        const bottom = document.createElement("p");
        const bottomTextNode = document.createTextNode(bottomText);
        bottom.appendChild(bottomTextNode);
        memeContainer.appendChild(bottom);
    }
};
