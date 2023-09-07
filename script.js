const accessKey = "xJxJPJ1pk4HgFuMIsX9RFCavN6IGU4Yawa14P5Aq31s";

const searchResults = document.querySelector(".search-results");
const searchBtn = document.getElementById("search-button");


async function searchImages() {
    searchResults.innerHTML = "";
    const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=car`;

    const response = await fetch(url);
    const data = await response.json();

    const result = data;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    imageWrapper.appendChild(image);
    searchResults.appendChild(imageWrapper);
    searchResults.style.display = "block";
}

searchBtn.addEventListener("click", () => {
    searchImages();
});