// Use JSON to generate the webpage

let contentElement = document.getElementById("content");

// colors: pastel pink, sky blue = B7E2F3; red = FB4848
let shows = [
  {
    "title" : "Schitt's Creek",
    "trailer" : "https://www.youtube.com/embed/W0uWS6CnC2o",
    "image" : "https://www.kveller.com/wp-content/uploads/2018/03/91S6KAPCeLL._RI_.jpg",
    "description" : "When filthy-rich video store magnate Johnny Rose and his family suddenly find themselves broke, they are forced to leave their pampered lives to regroup and rebuild their empire from within the rural city limits of their only remaining asset - Schitt's Creek, an armpit of a town they once bought as a joke. -IMDB",
    "descrip_source" : "https://www.imdb.com/title/tt3526078/plotsummary",
    "background_color" : "#ffd1dc"
  },
  {
    "title" : "Haikyu!!",
    "trailer" : "https://www.youtube.com/embed/JOGp2c7-cKc",
    "image" : "https://thenerdstash.com/wp-content/uploads/2015/03/Haikyuu.jpg",
    "description" : "Hinata Shouyou, a short middle school student, found his passion in volleyball. Despite not having many chances in middle school to play, he made sure to join a high school with a volleyball team. Excited to finally play on a team, he is met with Tobio Kageyama, a rising player - the same player he had vowed to defeat in middle school. They can't help bickering with each other, but will have to learn to work together so that they can both continue to play volleyball.",
    "descrip_source" : "https://www.imdb.com/title/tt3398540/plotsummary",
    "background_color" : "#FFC300"
  },
  {
    "title" : "Our Beloved Summer",
    "trailer" : "https://www.youtube.com/embed/wpW6aVWgvMc",
    "image" : "https://www.pinkvilla.com/files/our_beloved_summer_main.png",
    "description" : "Years after filming a viral documentary in high school, two bickering ex-lovers get pulled back in front of the camera — and into each other's lives. -Netflix",
    "descrip_source" : "https://www.netflix.com/title/81486372",
    "background_color" : "#C7EC99"
  },
  {
    "title" : "The Untamed",
    "trailer" : "https://www.youtube.com/embed/rAsP69G5rWQ",
    "image" : "https://images.squarespace-cdn.com/content/v1/5a85b54ed74cff50fbe5cc05/1588405014576-UAZIIQHV662WU55KUJKT/TheUntamed2.jpg?format=1500w",
    "description" : "Wei Wuxian, a loathed cultivator of dark and demonic arts, is resurrected 16 years after his tragic death. His return to the world brings him to reunite with the people in his first life, including his soulmate, the honoured Lan Wangji. Wei Wuxian then begins to remember his time before his demise, from his beginnings as a young cultivator to his descent to dark magic. The scheming behind his tragic death is slowly unraveled, along with the mysterious death of other people he knew in his past life. -Wikipedia",
    "descrip_source" : "https://en.wikipedia.org/wiki/The_Untamed_(TV_series)",
    "background_color" : "#acbecc"
  },
  {
    "title" : "One Piece",
    "trailer" : "https://www.youtube.com/embed/yAtUSvVayM0",
    "image" : "https://external-preview.redd.it/A45ODbzXJGXinSKqELTkP5LbwYgAHygC652TN7cSFFQ.png?auto=webp&s=abf41bd1490798fd69c2ec0fe6fa71891f0ae55c",
    "description" : "The series focuses on Monkey D. Luffy, a young man made of rubber, whom, inspired by his childhood idol, the powerful pirate \"Red Haired\" Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates. -Wikipedia",
    "descrip_source" : "https://en.wikipedia.org/wiki/One_Piece#:~:text=One%20Piece%20characters-,Premise,the%20King%20of%20the%20Pirates.",
    "background_color" : "#B7E2F3"
  },
  {
    "title" : "Undone",
    "trailer" : "https://www.youtube.com/embed/6uWCNHQgfnc",
    "image" : "https://m.media-amazon.com/images/I/41ahippQXOL._AC_.jpg",
    "description" : "Undone explores the elastic nature of reality through its central character, Alma. After getting into a nearly fatal car accident, Alma discovers she has a new relationship with time and uses this ability to find out the truth about her father’s death. -Wikipedia",
    "descrip_source" : "https://en.wikipedia.org/wiki/Undone_(TV_series)#cite_note-SeriesOrder-1",
    "background_color" : "#517db8"
  },


];

for(var i = 0; i < shows.length; i++){
  createElement(shows[i]);
}

// json objects should be shows that are part of the Recommendations
function createElement(jsonObj){
  // create div for whole object
  let newElement = document.createElement("DIV");
  newElement.style.backgroundColor = jsonObj["background_color"];
  newElement.classList.add('section'); // add class identifier

  // create h2 for title
  let newTitle = document.createElement("H2");
  newTitle.innerText = jsonObj["title"];
  newTitle.classList.add('title'); // add class identifier
  newElement.appendChild(newTitle);

  // create img for images/pictures
  let newImage = document.createElement("IMG");
  newImage.src = jsonObj["image"];
  newImage.classList.add('pic'); // add class identifier
  newElement.appendChild(newImage);

  // create p for description
  let newDesc = document.createElement("P");
  newDesc.innerText = jsonObj["description"];
  newDesc.classList.add('desc');
  newElement.appendChild(newDesc);

  // create a tag for source link of description

  // create iframe for trailer
  let newVid = document.createElement("IFRAME");
  newVid.src = jsonObj["trailer"];
  newVid.allowFullscreen = true;
  newVid.classList.add('vid');
  newElement.appendChild(newVid);

  // add item to the page
  contentElement.appendChild(newElement);

}
