const mainl = document.querySelector(".main");
const mainTextl = document.querySelector(".main p");
const mediaListl = document.querySelector(".media-list");
const listl = document.querySelectorAll(".media-list li");

mainl.addEventListener("click", () => {
  mediaListl.classList.toggle("hide");
  mainl.classList.toggle("rotate");
});

listl.forEach((listl) => {
  listl.addEventListener("click", () => {
    mainTextl.innerHTML = listl.innerHTML;
    mediaListl.classList.add("hide");
    mainl.classList.toggle("rotate");
  });
});