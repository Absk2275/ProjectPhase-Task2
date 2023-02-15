let list = document.getElementById("list-container");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let pageno = document.getElementById("pageno");
let issueli = document.getElementById("list");
let pageNumber = 1;
pageno.innerHTML = `<h3> Page Number : ${pageNumber} </h3>`;

function gitHubIssues() {
  fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
  )
  
    .then((res) => res.json())
    .then((data) => {
      issueli.innerHTML = " ";
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
        issueli.innerHTML += `<li>${data[i].title}</li>`;
      }
    });
}

gitHubIssues();

next.addEventListener("click", function () {
  prev.disabled = false;
  pageNumber++;
  pageno.innerHTML = `<h3> Page Number : ${pageNumber} </h3>`;
  gitHubIssues();
});

prev.addEventListener("click", function () {
  if (pageNumber > 1) {
    pageNumber--;
    pageno.innerHTML = `<h3> Page Number : ${pageNumber} </h3>`;
    gitHubIssues();
  }

  if (pageNumber == 1) {
    prev.disabled = true;
  }
});