const images = [
  {
    imageName: "Brown Bird",
    imgSrc: "./images/brownbird.webp",
    alt: "a close up of a small brown bird sitting on a hedge",
  },
  {
    imageName: "Squirrel",
    imgSrc: "./images/squirrel.webp",
    alt: "a grey squirrel eating some bread while standing on a wooden table",
  },
  {
    imageName: "Swallowtail Butterfly",
    imgSrc: "./images/swallowtailbutterfly.webp",
    alt: "a scarce swallowtail butterfly landed on a white flower",
  },
  {
    imageName: "Crab",
    imgSrc: "./images/crab.webp",
    alt: "a hermit crab coming out of its shell on some mossy rocks",
  },
  {
    imageName: "Cyprus Cat",
    imgSrc: "./images/cypruscat.webp",
    alt: "a white cat with grey patches looking sad",
  },
  {
    imageName: "Duck",
    imgSrc: "./images/duck.webp",
    alt: "a mallard duck on the edge of a lake. Its metallic colours shine in the sunlight.",
  },
  {
    imageName: "Highland Cows",
    imgSrc: "./images/highlandcows.webp",
    alt: "three highland cows lying down and eating grass",
  },
  {
    imageName: "Sheep",
    imgSrc: "./images/sheep.webp",
    alt: "a close up of a sheep looking directly into the camera",
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
    thumbnail.tabIndex = images[i];
    thumbContainer.appendChild(thumbnail);
    thumbnail.addEventListener("click", function () {
      displayMainImg(images[i]);
    });
    thumbnail.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        displayMainImg(images[i]);
      }
    });
  }
}

createThumbnails();

function loadInitialImg() {
  let mainImg = document.createElement("img");
  mainImg.src = images[0].imgSrc;
  mainImg.alt = images[0].alt;
  mainImg.className = "main-img";
  mainImgContainer.appendChild(mainImg);
}

loadInitialImg();

function displayMainImg(currentImage) {
  mainImgContainer.innerHTML = null;
  let mainImg = document.createElement("img");
  mainImg.src = currentImage.imgSrc;
  mainImg.alt = currentImage.alt;
  mainImg.className = "main-img";
  mainImgContainer.appendChild(mainImg);
}
