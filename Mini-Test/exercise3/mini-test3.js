let posts = [];
let albums = [];
let photos = [];
const container = document.getElementById("result-container");
const h1 = document.getElementById("heading");
async function fetchTitles() {
  try {
    const albumsAPI = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const postsAPI = await fetch("https://jsonplaceholder.typicode.com/posts");
    const photosAPI = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );

    posts = await postsAPI.json();
    albums = await albumsAPI.json();
    photos = await photosAPI.json();
    console.log("Da lay duoc api");
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
  }
}

function displayPostTitles() {
  container.innerHTML = "";

  const titlesList = document.createElement("ul");

  posts.forEach((post) => {
    const listItem = document.createElement("li");
    listItem.textContent = post.title;
    titlesList.appendChild(listItem);
  });
  container.appendChild(titlesList);
  h1.innerText = "";
  h1.innerText = " Types : Post";
}
postsBtn.onclick = function () {
  displayPostTitles();
};

function displayAlbumTitles() {
  container.innerHTML = "";
  const titlesList = document.createElement("ul");

  albums.forEach((album) => {
    const listItem = document.createElement("li");
    listItem.textContent = album.title;
    titlesList.appendChild(listItem);
  });
  container.appendChild(titlesList);
  h1.innerText = "";
  h1.innerText = " Types : Album";
}
albumsBtn.onclick = function () {
  displayAlbumTitles();
};

function displayPhotoTitles() {
  container.innerHTML = "";
  const titlesList = document.createElement("ul");

  photos.forEach((photo) => {
    const listItem = document.createElement("li");
    listItem.textContent = photo.title;
    titlesList.appendChild(listItem);
  });
  container.appendChild(titlesList);
  h1.innerText = " Types : Photo";
}
photosBtn.onclick = function () {
  displayPhotoTitles();
};

document.addEventListener("DOMContentLoaded", async function () {
  await fetchTitles();

  postsBtn.onclick = function () {
    displayPostTitles();
    setActiveButton(postsBtn);
  };

  photosBtn.onclick = function () {
    displayPhotoTitles();
    setActiveButton(photosBtn);
  };

  albumsBtn.onclick = function () {
    displayAlbumTitles();
    setActiveButton(albumsBtn);
  };
});

const allButtons = [postsBtn, photosBtn, albumsBtn];
function setActiveButton(activeButton) {
  allButtons.forEach((button) => {
    button.classList.remove("active-btn");
  });

  activeButton.classList.add("active-btn");
  document.getElementById("active-btn").style.backgroundColor = "blue";
}
