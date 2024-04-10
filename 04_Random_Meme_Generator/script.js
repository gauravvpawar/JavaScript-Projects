
// const dataBtn = document.querySelector("button")
const generateMemeBtn = document.querySelector("[data-meme-generate]");
const memeImage = document.querySelector("[data-img]");
const memeTitle = document.querySelector("[data-title]");
const memeAuthor = document.querySelector("[data-author]");


const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by:${author}`;

}


const generateMeme = () => {
    // console.log("hello")
   const response =  fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json()).then((data) =>{updateDetails(data.url , data.title , data.author);
        });
}

generateMemeBtn.addEventListener("click",generateMeme)