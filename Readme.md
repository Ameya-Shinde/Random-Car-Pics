# Random Car Image Fetcher

This project is a JavaScript application that fetches a random car image from the Unsplash API and displays it on a web page.

## Usage

1. Open the `index.html` file in a web browser.

2. Click the "Search" button to fetch and display a random car image.

## JS Functionality

The code consists of the following components:

- `accessKey`: This is your access key for the Unsplash API. It is used for authentication.

- `searchResults`: This variable holds a reference to an HTML element with the class "search-results". It's used to display the fetched images.

- `searchBtn`: This variable holds a reference to the search button element.

- `searchImages()`: This is an asynchronous function that fetches a random car image from the Unsplash API and displays it on the web page.

- `searchBtn.addEventListener()`: This sets up an event listener on the search button. When the button is clicked, it calls the `searchImages()` function.

- `fetch(url)` : Makes use of the Fetch API to interact with the Unsplash API.

## Hosted Link
https://ameya-shinde.github.io/Random-Car-Pics/
