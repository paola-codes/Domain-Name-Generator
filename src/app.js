/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //Arrays with their values
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "amazing", "cool"];
  let noun = ["jogger", "racoon", "princess", "king", "friend"];
  let extension = [".com", ".net", ".us", ".io", "lastOf.us"];

  //Random numbers for each array and their values
  let random1 = Math.floor(Math.random() * pronoun.length);
  let random2 = Math.floor(Math.random() * adj.length);
  let random3 = Math.floor(Math.random() * noun.length);
  let random4 = Math.floor(Math.random() * extension.length);

  //Concatenation of the random values into an excuse
  document.querySelector("#excuse").innerHTML =
    pronoun[random1] + adj[random2] + noun[random3] + extension[random4];
};
