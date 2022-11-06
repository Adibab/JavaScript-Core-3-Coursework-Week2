document.querySelector("#btn-add-image").addEventListener("click", getFetch);
const ulItem = document.querySelector("#show-dog-image");

//  to add dog img
function getFetch() {
  //   const choice = document.querySelector("input").value;
  const url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    // parse response as JSON
    .then((data) => {
      createDogPhoto(data.message);
    })
    .catch((error) => {
      console.log(`Something went ${error}`);
    });
}

function createDogPhoto (url) {
  let liItem = document.createElement("li");
  let image = document.createElement("img");
  image.src = url;
  liItem.appendChild(image);
  liItem.classList.add("li");
  ulItem.appendChild(liItem);
}
//  to clear dog img
document.querySelector("#btn-clear-image").addEventListener("click", getClear);
function getClear() {
  ul.innerHTML = " ";
}
