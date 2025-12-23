/* // write your code here
/* let paint = [
    {title:'Mona Lisa' , artist:'Leonardo da Vinci', date:1503 },
    {title:'The Last Supper' , artist:'Leonardo da Vinci', date:1495 },
    {title:'Starry Night' , artist:'(Vincent van Gogh', date:1889 },
    {title:'The Scream' , artist:'Edvard Munch', date:'1893' },
    {title:'Guernica ' , artist:'Pablo Picasso', date:1937 },
    {title:'The Kiss' , artist:'Gustav Klimt', date:1907 },
    {title:'Girl With a Pearl Earring' , artist:'Johannes Vermeer', date:1665 },
    {title:'The Birth of Venus' , artist:'Sandro Botticelli', date:1485 },
    {title:'Las Meninas' , artist:'Diego Velázquez', date:1656 },
    {title:'The Creation of Adam' , artist:'Michelangelo', date:1512 },
    ]
    
paint.forEach(element=>{
    console.log(`${element.title} ( ${element.artist}, ${element.date} )`)
    }) */





// write your code here

/* let paint = [
    {title:'Mona Lisa' , artist:'Leonardo da Vinci', date:1503 },
    {title:'The Last Supper' , artist:'Leonardo da Vinci', date:1495 },
    {title:'Starry Night' , artist:'(Vincent van Gogh', date:1889 },
    {title:'The Scream' , artist:'Edvard Munch', date:'1893' },
    {title:'Guernica ' , artist:'Pablo Picasso', date:1937 },
    {title:'The Kiss' , artist:'Gustav Klimt', date:1907 },
    {title:'Girl With a Pearl Earring' , artist:'Johannes Vermeer', date:1665 },
    {title:'The Birth of Venus' , artist:'Sandro Botticelli', date:1485 },
    {title:'Las Meninas' , artist:'Diego Velázquez', date:1656 },
    {title:'The Creation of Adam' , artist:'Michelangelo', date:1512 },
    ]

//constructor
function Image (title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
    }
//factory function
function getImage (title, artist, date) {
    return {title,
            artist,
            date
        };
    
    }
//create an object image1    
const images1 = paint.map(
    img => new getImage(img.title, img.artist, img.date)
);
//create an object image2
const images2 = images1.map(
    img => new getImage(img.title, img.artist, img.date)
)
//display
console.log(images2) */



// on crée quatre variables avec une même instruction
/* function listerToutesLesProprietes(o) {
  let objectToInspect;
  let resultat = [];

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    resultat = resultat.concat(Object.getOwnPropertyNames(objectToInspect));
  }
  return resultat;
}

listerToutesLesProprietes(10) */

/* let test ={title:'Mona Lisa' , artist:'Leonardo da Vinci', date:1503 }
for(let i in test) {
    console.log(`${i}: ${test[i]}`)
} */

/* let maHonda = {


  couleur: "rouge",
  roue: 4,
  moteur: {
    cylindres: 4,
    taille: 2.2,
  },
};

for (let i in maHonda){
    console.log(`${i}: ${maHonda[i]}`)
} */


/* function Personne(nom, age, sexe) {
  this.nom = nom;
  this.age = age;
  this.sexe = sexe;
}

let Miatie = new Personne("Max Gun", 33, "M");
let Mawa = new Personne("Morgan Sousbrouille", 39, "M");

function Voiture(fabricant, model, annee, proprietaire ){
    this.fabricant = fabricant;
    this.model = model;
    this.annee = annee;
    this.proprietaire = proprietaire;
}

let voiture1 = new Voiture("Mazda", "Miata", 1993, Miatie);
let voiture2 = new Voiture("Audi", "A3", 2005, Mawa);

for (let i in voiture1){
    console.log(`${i}: ${voiture1[i]}`)
} */



// Propriétés pour animal et encapsulation des méthodes
/* let Animal = {
  type: "Invertébrés", // Valeur par défaut value of properties
  afficherType: function () {
    // Une méthode pour afficher le type Animal
    console.log(this.type);
  },
};

// On crée un nouveau type d'animal, animal1
let animal1 = Object.create(Animal);
animal1.type  = "serpent"
animal1.afficherType(); // affichera Invertébrés

// On crée un type d'animal "Poisson"
let poisson = Object.create(Animal);
poisson.type = "Poisson";
poisson.afficherType();  */// affichera Poisson




const responsable = {
  nom: "Jean",
  age: 27,
  poste: "Ingénieur logiciel",
};

const stagiaire = {
  nom: "Ben",
  age: 21,
  poste: "Stagiaire ingénieur logiciel",
};

function direBonjour() {
  console.log("Bonjour, mon nom est", this.nom);
}

// on ajoute direBonjour aux deux objets
responsable.direBonjour = direBonjour;
stagiaire.direBonjour = direBonjour;

responsable.direBonjour(); // Bonjour, mon nom est John'
stagiaire.direBonjour(); // Bonjour, mon nom est Ben'