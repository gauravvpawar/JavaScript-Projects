const input = document.querySelector(".searchInput");
const btn = document.querySelector(".serachBtn");
const volume = document.querySelector(".word i");
const spanInfo = document.querySelector("span");
const synonymsList = document.querySelector(".Synonyms .list");
let audio;
input.addEventListener("keyup", (e) => {
  e.preventDefault();
  let word = e.target.value;
  if (e.key == "Enter" && word);
  {
    fetchApi(word);
  }
  //console.log(word);
});

function fetchApi(word) {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  spanInfo.innerHTML = `Searching for the Meaning of ${word}`;

  try {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.title) {
          spanInfo.innerHTML = `Your are searching for ${word} is not found,try again for another`;
        } else {
          console.log(data);
          let definition = data[0].meanings[0].definitions[0];
          // console.log(definition)
          let phonetics = `${data[0].meanings[0].partOfSpeech} / ${data[0].phonetics[0].text}`;
          document.querySelector(
            ".details p"
          ).innerText = `Word : ${phonetics};`;
          console.log(phonetics);
          document.querySelector(".Meaning span").innerText =
            definition.definition;
          document.querySelector(
            ".Source span"
          ).innerHTML = `<a href="${data[0].sourceUrls[0]}" target="_blank" style="text-decoration:none">${data[0].sourceUrls[0]}</a>`;
          audio = new Audio(data[0].phonetics[0].audio);
          //console.log(audio)

          if (data[0].meanings[0].synonyms[0] === undefined) {
            synonymsList.innerHTML = "NA";
          } else {
            synonymsList.innerHTML = "";
            for (let i = 0; i < 5; i++) {
              let tag = `<span>${data[0].meanings[0].synonyms[i]},</span>`;
              synonymsList.insertAdjacentHTML("beforeend", tag);
            }
          }
        }
      });
  } catch (e) {
    spanInfo.innerHTML = `Unable to find the meaning of the word <span>"${word}"</span>. Please, Search for another word.`;
  }
}

volume.addEventListener("click", (e) => {
  volume.style.color = "red";
  audio.play();
  setTimeout(() => {
    volume.style.color = "grey";
  }, 2000);
});
