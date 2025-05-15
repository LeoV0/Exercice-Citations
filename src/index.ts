const motivation: { [key: string]: string } = {
  1: "Chaque jour est une nouvelle opportunité de se rapprocher de vos objectifs. Ne laissez pas les doutes vous ralentir; avancez avec détermination et transformez vos rêves en réalité.",
  2: "Chaque jour est une nouvelle opportunité de transformer vos rêves en réalité. Ne laissez pas la peur de l'échec freiner votre élan; utilisez-la comme le tremplin vers votre succès.",
};

const humour: { [key: string]: string } = {
  1: "Le rire est le meilleur des raccourcis : il nous relie, nous élève et nous rappelle que même dans le travail à distance, l'humour est la clé pour transformer les défis en opportunités.",
  2: "Le rire est le meilleur carburant pour les journées de télétravail : il nous rappelle que même à distance, la connexion humaine est notre plus grande force.",
};

const sagesse: { [key: string]: string } = {
  1: "La sagesse réside non seulement dans ce que nous savons, mais dans notre capacité à écouter, apprendre et évoluer. Chaque jour est une occasion de grandir, alors n'hésitez pas à embrasser le changement.",
  2: "La sagesse ne réside pas seulement dans la connaissance, mais dans la capacité à écouter, à apprendre et à grandir à travers chaque expérience. Embrassez chaque défi comme une opportunité d'éclaircir votre chemin.",
};

const inputText = document.querySelector("#name") as HTMLInputElement;
const validButton = document.querySelector("#valider") as HTMLButtonElement;
const chooseMenu = document.querySelector("#citationMenu") as HTMLSelectElement;
const displayCitation = document.querySelector("#citation") as HTMLDivElement;

interface ChooseUser {
  prenom: string;
  categorie: string;
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const categorieChoose: { [key: string]: string } = {
  motivation: "Motivation",
  humour: "Humour",
  sagesse: "Sagesse",
};

const citations: { [key: string]: { [key: string]: string } } = {
  motivation: motivation,
  humour: humour,
  sagesse: sagesse,
};

function randomCitation(categorie: string): string {
  const objetCitations = citations[categorie];
  const index = randomIntFromInterval(1, 2);
  const indexEnChaîne = index.toString();
  return objetCitations[indexEnChaîne];
}

validButton.addEventListener("click", () => {
  const name = inputText.value;
  const categ = chooseMenu.value;
  const categChoose: ChooseUser = {
    prenom: name,
    categorie: categ,
  };

  if (categChoose.prenom === "") {
    displayCitation.classList.add("error");
    displayCitation.innerHTML = "Veuillez entrer un prénom.";
  } else {
    displayCitation.classList.remove("error");
    const citationChoisie = randomCitation(categChoose.categorie);
    displayCitation.innerHTML = `${categChoose.prenom}, voici votre citation ${
      categorieChoose[categChoose.categorie]
    } : ${citationChoisie}`;
  }
});
