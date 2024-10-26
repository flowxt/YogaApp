const main = document.querySelector("main");

let exerciceArray = [
  {
    pic: 0,
    min: 1,
  },
  {
    pic: 1,
    min: 1,
  },
  {
    pic: 2,
    min: 1,
  },
  {
    pic: 3,
    min: 1,
  },
  {
    pic: 4,
    min: 1,
  },
  {
    pic: 5,
    min: 1,
  },
  {
    pic: 6,
    min: 1,
  },
  {
    pic: 7,
    min: 1,
  },
  {
    pic: 8,
    min: 1,
  },
  {
    pic: 9,
    min: 1,
  },
];

class Exercice {}

const utils = {
  pageContent: function (title, content, btn) {
    // fonction pour afficher le contenu de la page
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
  handleEventMinutes: function () {
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      // on sélectionne tous les input de type number
      input.addEventListener("input", (e) => {
        // event listener sur l'input
        exerciceArray.map((exo) => {
          // map sur exerciceArray
          if (exo.pic == e.target.id) {
            // si l'id de l'input est égal à l'id de l'objet
            exo.min = parseInt(e.target.value); // on change la valeur de l'objet
            console.log(exerciceArray); // on affiche le tableau
          }
        });
      });
    });
  },
};

const page = {
  lobby: function () {
    // fonction pour afficher la page d'accueil
    let mapArray = exerciceArray
      .map(
        (exo) =>
          `
      <li>
      <div class= "card-header">
      <input type="number" id=${exo.pic}  min="1" max="10" value=${exo.min}>
      </div>
      <img src=./img/${exo.pic}.png alt="exercice"/>
      <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
      <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
      </li>
      
      `
      )
      .join("");

    utils.pageContent(
      "Paramètrage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );
    utils.handleEventMinutes();
  },

  routine: function () {
    // fonction pour afficher la routine
    utils.pageContent("Routine", "Exercice avec chrono", null);
  },

  finish: function () {
    // fonction pour afficher la fin de la routine
    utils.pageContent(
      "C'est terminé !",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>"
    );
  },
};

page.lobby();
