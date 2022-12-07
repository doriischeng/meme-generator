const form = document.querySelector("form");
const imgUrlInput =
  document.querySelector("#image");
const textTopInput =
  document.querySelector("#text-top");
const textBottomInput = document.querySelector(
  "#text-bottom"
);
const results = document.querySelector(
  "#meme-creation"
);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //create new elements
  const memeContainer =
    document.createElement("div");
  const img = document.createElement("img");
  const textTop = document.createElement("div");
  const textBottom =
    document.createElement("div");
  const removeButton =
    document.createElement("h2");

  //modifying and styling new elements
  img.src = imgUrlInput.value;
  textTop.innerText = textTopInput.value;
  textTop.classList.add("textTop");
  textBottom.innerText = textBottomInput.value;
  textBottom.classList.add("textBottom");
  removeButton.innerText = "CLICK TO REMOVE";
  removeButton.classList.add("removeButton");
  memeContainer.classList.add("memeContainer");

  //append individual element to the meme container
  memeContainer.appendChild(img);
  memeContainer.appendChild(textTop);
  memeContainer.appendChild(textBottom);
  memeContainer.appendChild(removeButton);

  //append new styled elements to the page
  results.append(memeContainer);

  //remove img once clicked
  img.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });

  form.reset();
});

//img url testing https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg

//questions for mentor:
//1. text - what if text is over the limit? Two lines?
//2.image - how to make it side by side? Float, flex, etc but where?
