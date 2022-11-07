const main = document.querySelector(".main-container");

const url = `https://xkcd.now.sh/?comic=latest`;

fetch(url)
  .then((res) => res.json ()) // parse response as JSON
  .then((data) => {
    console.log(data)
    createDogPhoto(data.img);
  })
  .catch((error) => {
    console.log((main.innerText = `Something went ${error}`));
  });

function createDogPhoto(url) {
  let image = document.createElement("img");
  image.src = url;
  main.appendChild(image);
}
