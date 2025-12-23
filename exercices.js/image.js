/* // write your code here

let paint = [
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', date: 1503 },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', date: 1495 },
    { title: 'Starry Night', artist: '(Vincent van Gogh', date: 1889 },
    { title: 'The Scream', artist: 'Edvard Munch', date: '1893' },
    { title: 'Guernica ', artist: 'Pablo Picasso', date: 1937 },
    { title: 'The Kiss', artist: 'Gustav Klimt', date: 1907 },
    { title: 'Girl With a Pearl Earring', artist: 'Johannes Vermeer', date: 1665 },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', date: 1485 },
    { title: 'Las Meninas', artist: 'Diego Velázquez', date: 1656 },
    { title: 'The Creation of Adam', artist: 'Michelangelo', date: 1512 },
]

//constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}
//factory function
function getImage(title, artist, date) {
    return {
        title,
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



function Notes(math, english, network){
    this.math = math;
    this.english = english;
    this.network = network;
}

let aziz = new Notes(20, 15, 16)
let moussa = new Notes(20 ,20, 20)

function Student(full_name, major, id , mark) {
    this.full_name = full_name;
    this.major = major;
    this.id = id;
    this.mark = mark;
};

let student1 = new Student("Aziz tassembedo", "IT", 98, aziz )
let student2 = new Student("Moussa BAMBA", "IT", 108, moussa )

for(let i in student1){
    console.log(`${i}: ${student1[i]}`)
}


