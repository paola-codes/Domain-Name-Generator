/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", "lastOf.us"];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          document.querySelector(
            "#domain"
          ).innerHTML += `<li class="text-center">${pronoun +
            adjective +
            noun +
            extension}</li>`;
        }
      }
    }
  }
};
