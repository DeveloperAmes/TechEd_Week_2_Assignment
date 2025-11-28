const images = [
  {
    imageName: "Brown Bird",
    imgSrc: "./images/brownbird.JPG",
    alt: "close up of a brown bird sitting on a hedge",
  },
  {
    imageName: "Squirrel",
    imgSrc: "./images/squirrel.jpg",
    alt: "a grey squirrel eating some bread on a wooden table",
  },
  {
    imageName: "Swallowtail Butterfly",
    imgSrc: "./images/swallowtailbutterfly.JPG",
    alt: "a swallowtail butterfly landed on a plant",
  },
];

let thumbContainer = document.getElementById("thumbnail-container");

let mainImgContainer = document.getElementById("main-image-container");

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    let thumbnail = document.createElement("img");
    thumbnail.src = images[i].imgSrc;
    thumbnail.alt = images[i].alt;
    thumbnail.className = "thumbnail-img";
    thumbContainer.appendChild(thumbnail);
    thumbnail.addEventListener("click", function () {
      displayMainImg(images[i]);
    });
  }
}

createThumbnails();

function displayMainImg(currentImage) {
  mainImgContainer.innerHTML = null;
  let mainImg = document.createElement("img");
  mainImg.src = currentImage.imgSrc;
  mainImg.alt = currentImage.alt;
  mainImg.className = "main-img";
  mainImgContainer.appendChild(mainImg);
}
