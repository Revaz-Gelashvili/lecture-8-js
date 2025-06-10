const button = document.getElementById("addNew");
const board = document.getElementById("articles");

button.addEventListener("click", createNew);

function createNew() {
  const title = document.getElementById("title").value;
  const statia = document.getElementById("statia").value;
  const image = document.getElementById("image").value;

  let newsBox = document.createElement("div");
  newsBox.className = "anotherNew";
  let titleElement = document.createElement("h3");
  let contentElement = document.createElement("p");
  let imageElement = document.createElement("img");

  titleElement.textContent = title;
  contentElement.textContent = statia;
  imageElement.src = image;

  newsBox.appendChild(titleElement);
  newsBox.appendChild(contentElement);
  newsBox.appendChild(imageElement);

  board.appendChild(newsBox);

  document.getElementById("title").value = "";
  document.getElementById("statia").value = "";
  document.getElementById("image").value = "";
}
