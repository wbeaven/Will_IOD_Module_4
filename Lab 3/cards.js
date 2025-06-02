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
// items in an artist's portfolio.

// Extension: make an array
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

const data = [
  {
    name: "Jean Picard",
    art: [
      {
        artPiece: "Art Piece 1",
        description: "Description",
      },
      {
        artPiece: "Art Piece 2",
        description: "Description",
      },
      {
        artPiece: "Art Piece 3",
        description: "Description",
      },
    ],
  },
  {
    name: "Luis Francois",
    art: [
      {
        artPiece: "Art Piece 1",
        description: "Description",
      },
      {
        artPiece: "Art Piece 2",
        description: "Description",
      },
      {
        artPiece: "Art Piece 3",
        description: "Description",
      },
      {
        artPiece: "Art Piece 4",
        description: "Description",
      },
    ],
  },
  {
    name: "Renee Dubeux",
    art: [
      {
        artPiece: "Art Piece 1",
        description: "Description",
      },
      {
        artPiece: "Art Piece 2",
        description: "Description",
      },
      {
        artPiece: "Art Piece 3",
        description: "Description",
      },
    ],
  },
];
for (let i = 0; i < data.length; i++) {
  addArtist(data[i].name, i);
  data[i].art.forEach((element) => {
    addCard(Object.values(element)[0], Object.values(element)[1], i);
  });
}
