const images = [
  {
    imageName: "Brown Bird",
    thumbnail: "./images/brownbird.JPG",
    alt: "close up of a brown bird sitting on a hedge",
  },
  {
    imageName: "Squirrel",
    thumbnail: "./images/squirrel.jpg",
    alt: "a grey squirrel eating some bread on a wooden table",
  },
  {
    imageName: "Swallowtail Butterfly",
    thumbnail: "./images/swallowtailbutterfly.JPG",
    alt: "a swallowtail butterfly landed on a plant",
  },
];

const thumbContainer = document.getElementById("thumbnail-container");

const mainImgContainer = document.getElementById("main-image-container");

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    let thumbnail = document.createElement("img");
    thumbnail.src = images[i].thumbnail;
    thumbnail.alt = images[i].alt;
    thumbnail.className = "thumbnail-img";
    thumbContainer.appendChild(thumbnail);
  }
}

createThumbnails();

function changeMainImage() {}
