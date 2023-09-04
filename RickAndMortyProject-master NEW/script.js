const slider = document.querySelector(".splide__list");
async function getData() {
  await fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((res) => {
      avatar = res.results;
    });
  console.log(avatar);

  avatar.map((item) => {
    let status = "";

    switch (item.status) {
      case "Alive":
        status = "green";
        break;
      case "Dead":
        status = "red";
        break;
      case "unknown":
        status = "gray";
        break;
    }
    const showPic = `
    <li class="splide__slide">
    <div class="card">
      <img
        src="${item.image}"
        alt="${item.name}"
      />
      <div class="subTitle">
        <p>${item.name}</p>
        <p><span class="circle ${status}"></span> ${item.status} - ${item.species}</p>
      </div>
    </div>
    </li>
    `;
    slider.innerHTML += showPic;
  });
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    width: "80%",
    height: "1000px",
    gap: 30,
    breakpoints: {
      1450: {
        width: "80%",
        perPage: 2,
      },
      850: {
        width: "90%",
        perPage: 1,
      },
    },
  }).mount();
}
document.addEventListener("DOMContentLoaded", getData);
