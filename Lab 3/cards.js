// Exercise 1 :
// Modify the addCard function from the previous slide
// so that you can pass content for the card dynamically.

// Exercise 2 :
// Call addCard repeatedly so that your cards are
// automatically generated based on data from an array.
// This way you will create as many cards as you need to
// display all the data in the array.

// Exercise 3 - the artist’s portfolio:
// Populate the page dynamically, by generating an artist
// profile card which includes cards representing the
// items in an artist's portfolio. Extension: make an array
// of artists, all with multiple portfolio items.


function addArtist(name, position) {
    const template = document
    .getElementById("artist-template")
    .content.cloneNode(true);
    
    template.querySelector(".artist-name").innerText = name;
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", position);
    template.querySelector(".artist").appendChild(newDiv);
    document.getElementById("artist-list").appendChild(template);
}

function addCard(title, body, id) {
    const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = body;
    document.getElementById(id).appendChild(template);
}

const jeanP = {
    name: "Jean Picard",
    art: [
        ["Art Piece 1", "Description"],
        ["Art Piece 2", "Description"],
        ["Art Piece 3", "Description"],
    ],
};
const luisF = {
    name: "Luis Francois",
    art: [
        ["Art Piece 1", "Description"],
        ["Art Piece 2", "Description"],
        ["Art Piece 3", "Description"],
    ],
};
const reneeD = {
    name: "Renee Dubeux",
    art: [
        ["Art Piece 1", "Description"],
        ["Art Piece 2", "Description"],
        ["Art Piece 3", "Description"],
    ],
};
const artistArray = [jeanP, luisF, reneeD];

for (let i = 0; i < artistArray.length; i++) {
  addArtist(artistArray[i].name, i);
  artistArray[i].art.forEach((element) => {
    addCard(element[0], element[1], i);
  });
}
