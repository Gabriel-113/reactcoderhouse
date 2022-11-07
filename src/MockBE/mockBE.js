/* Simulacion Back-End */
const itemsBE = [
    { autor: "Chinua Achebe", pais: "Nigeria", imagen: "/images/images/things-fall-apart.jpg", idioma: "English", paginas: 209, titulo: "Things Fall Apart", año: 1958, id: 0, stock: 100, precio: 2500, category: "nuevos" },
    { autor: "Hans Christian Andersen", pais: "Denmark", imagen: "/images/images/fairy-tales.jpg", idioma: "Danish", paginas: 784, titulo: "Fairy tales", año: 1836, id: 1, stock: 100, precio: 3500, category: "nuevos" },
    { autor: "Dante Alighieri", pais: "Italy", imagen: "/images/images/the-divine-comedy.jpg", idioma: "Italian", paginas: 928, titulo: "The Divine Comedy", año: 1315, id: 2, stock: 100, precio: 3700, category: "nuevos" },
    { autor: "Desconocido", pais: "Sumer and Akkadian Empire", imagen: "/images/images/the-epic-of-gilgamesh.jpg", idioma: "Akkadian", paginas: 160, titulo: "The Epic Of Gilgamesh", año: -1700, id: 3, stock: 100, precio: 4500, category: "nuevos" },
    { autor: "Desconocido", pais: "Achaemenid Empire", imagen: "/images/images/the-book-of-job.jpg", idioma: "Hebrew", paginas: 176, titulo: "The Book Of Job", año: -600, id: 4, stock: 100, precio: 1500, category: "nuevos" },
    { autor: "Desconocido", pais: "India/Iran/Iraq/Egypt/Tajikistan", imagen: "/images/images/one-thousand-and-one-nights.jpg", idioma: "Arabic", paginas: 288, titulo: "One Thousand and One Nights", año: 1200, id: 5, stock: 100, precio: 2800, category: "nuevos" },
    { autor: "Desconocido", pais: "Iceland", imagen: "/images/images/njals-saga.jpg", idioma: "Old Norse", paginas: 384, titulo: "Njál\u0027s Saga", año: 1350, id: 6, stock: 100, precio: 2500, category: "nuevos" },
    { autor: "Jane Austen", pais: "United Kingdom", imagen: "/images/images/pride-and-prejudice.jpg", idioma: "English", paginas: 226, titulo: "Pride and Prejudice", año: 1813, id: 7, stock: 100, precio: 2000, category: "nuevos" },
    { autor: "Honoré de Balzac", pais: "France", imagen: "/images/images/le-pere-goriot.jpg", idioma: "French", paginas: 443, titulo: "Le Père Goriot", año: 1835, id: 8, stock: 100, precio: 3200, category: "nuevos" },
    { autor: "Samuel Beckett", pais: "Republic of Ireland", imagen: "/images/images/molloy-malone-dies-the-unnamable.jpg", idioma: "French, English", paginas: 256, titulo: "Molloy, Malone Dies, The Unnamable, the trilogy", año: 1952, id: 9, stock: 100, precio: 2500, category: "nuevos" },
    { autor: "Giovanni Boccaccio", pais: "Italy", imagen: "/images/images/the-decameron.jpg", idioma: "Italian", paginas: 1024, titulo: "The Decameron", año: 1351, id: 10, stock: 100, precio: 1500, category: "nuevos" },
    { autor: "Jorge Luis Borges", pais: "Argentina", imagen: "/images/images/ficciones.jpg", idioma: "Spanish", paginas: 224, titulo: "Ficciones", año: 1965, id: 11, stock: 100, precio: 2500, category: "nuevos" },
    { autor: "Emily Brontë", pais: "United Kingdom", imagen: "/images/images/wuthering-heights.jpg", idioma: "English", paginas: 342, titulo: "Wuthering Heights", año: 1847, id: 12, stock: 100, precio: 2500, category: "nuevos" },
    { autor: "Albert Camus", pais: "Algeria, French Empire", imagen: "/images/images/l-etranger.jpg", idioma: "French", paginas: 185, titulo: "The Stranger", año: 1942, id: 13, stock: 100, precio: 2500, category: "nuevos" },
    { autor: "Paul Celan", pais: "Romania, France", imagen: "/images/images/poems-paul-celan.jpg", idioma: "German", paginas: 320, titulo: "Poems", año: 1952, id: 14, stock: 100, precio: 2900, category: "nuevos" },
    { autor: "Louis-Ferdinand Céline", pais: "France", imagen: "/images/images/voyage-au-bout-de-la-nuit.jpg", idioma: "French", paginas: 505, titulo: "Journey to the End of the Night", año: 1932, id: 15, stock: 100, precio: 4000, category: "nuevos" },
    { autor: "Miguel de Cervantes", pais: "Spain", imagen: "/images/images/don-quijote-de-la-mancha.jpg", idioma: "Spanish", paginas: 1056, titulo: "Don Quijote De La Mancha", año: 1610, id: 16, stock: 100, precio: 3000, category: "nuevos" },
    { autor: "Geoffrey Chaucer", pais: "England", imagen: "/images/images/the-canterbury-tales.jpg", idioma: "English", paginas: 544, titulo: "The Canterbury Tales", año: 1450, id: 17, stock: 100, precio: 2200, category: "nuevos" },
    { autor: "Anton Chekhov", pais: "Russia", imagen: "/images/images/stories-of-anton-chekhov.jpg", idioma: "Russian", paginas: 194, titulo: "Stories", año: 1886, id: 18, stock: 100, precio: 1200, category: "nuevos" },
    { autor: "Joseph Conrad", pais: "United Kingdom", imagen: "/images/images/nostromo.jpg", idioma: "English", paginas: 320, titulo: "Nostromo", año: 1904, id: 19, stock: 100, precio: 1000, category: "vendidos" },
    { autor: "Charles Dickens", pais: "United Kingdom", imagen: "/images/images/great-expectations.jpg", idioma: "English", paginas: 194, titulo: "Great Expectations", año: 1861, id: 20, stock: 100, precio: 1200, category: "vendidos" },
    { autor: "Denis Diderot", pais: "France", imagen: "/images/images/jacques-the-fatalist.jpg", idioma: "French", paginas: 596, titulo: "Jacques the Fatalist", año: 1796, id: 21, stock: 100, precio: 1300, category: "vendidos" },
    { autor: "Alfred Döblin", pais: "Germany", imagen: "/images/images/berlin-alexanderplatz.jpg", idioma: "German", paginas: 600, titulo: "Berlin Alexanderplatz", año: 1929, id: 22, stock: 100, precio: 4400, category: "vendidos" },
    { autor: "Fyodor Dostoevsky", pais: "Russia", imagen: "/images/images/crime-and-punishment.jpg", idioma: "Russian", paginas: 551, titulo: "Crime and Punishment", año: 1866, id: 23, stock: 100, precio: 4700, category: "vendidos" },
    { autor: "Fyodor Dostoevsky", pais: "Russia", imagen: "/images/images/the-idiot.jpg", idioma: "Russian", paginas: 656, titulo: "The Idiot", año: 1869, id: 24, stock: 100, precio: 3700, category: "vendidos" },
    { autor: "Fyodor Dostoevsky", pais: "Russia", imagen: "/images/images/the-possessed.jpg", idioma: "Russian", paginas: 768, titulo: "The Possessed", año: 1872, id: 25, stock: 100, precio: 3200, category: "vendidos" },
    { autor: "Fyodor Dostoevsky", pais: "Russia", imagen: "/images/images/the-brothers-karamazov.jpg", idioma: "Russian", paginas: 824, titulo: "The Brothers Karamazov", año: 1880, id: 26, stock: 100, precio: 2200, category: "vendidos" },
    { autor: "George Eliot", pais: "United Kingdom", imagen: "/images/images/middlemarch.jpg", idioma: "English", paginas: 800, titulo: "Middlemarch", año: 1871, id: 27, stock: 100, precio: 2300, category: "vendidos" },
    { autor: "Ralph Ellison", pais: "United States", imagen: "/images/images/invisible-man.jpg", idioma: "English", paginas: 581, titulo: "Invisible Man", año: 1952, id: 28, stock: 100, precio: 1000, category: "vendidos" },
    { autor: "Euripides", pais: "Greece", imagen: "/images/images/medea.jpg", idioma: "Greek", paginas: 104, titulo: "Medea", año: -431, id: 29, stock: 100, precio: 900, category: "vendidos" },
    { autor: "William Faulkner", pais: "United States", imagen: "/images/images/absalom-absalom.jpg", idioma: "English", paginas: 313, titulo: "Absalom, Absalom!", año: 1936, id: 30, stock: 100, precio: 1700, category: "vendidos" },
    { autor: "William Faulkner", pais: "United States", imagen: "/images/images/the-sound-and-the-fury.jpg", idioma: "English", paginas: 326, titulo: "The Sound and the Fury", año: 1929, id: 31, stock: 100, precio: 1600, category: "vendidos" },
    { autor: "Gustave Flaubert", pais: "France", imagen: "/images/images/madame-bovary.jpg", idioma: "French", paginas: 528, titulo: "Madame Bovary", año: 1857, id: 32, stock: 100, precio: 800, category: "vendidos" },
    { autor: "Gustave Flaubert", pais: "France", imagen: "/images/images/l-education-sentimentale.jpg", idioma: "French", paginas: 606, titulo: "Sentimental Education", año: 1869, id: 33, stock: 100, precio: 1100, category: "vendidos" },
    { autor: "Federico García Lorca", pais: "Spain", imagen: "/images/images/gypsy-ballads.jpg", idioma: "Spanish", paginas: 218, titulo: "Gypsy Ballads", año: 1928, id: 34, stock: 100, precio: 4000, category: "vendidos" },
    { autor: "Gabriel García Márquez", pais: "Colombia", imagen: "/images/images/one-hundred-years-of-solitude.jpg", idioma: "Spanish", paginas: 417, titulo: "One Hundred Years of Solitude", año: 1967, id: 35, stock: 100, precio: 3500, category: "recomendados" },
    { autor: "Gabriel García Márquez", pais: "Colombia", imagen: "/images/images/love-in-the-time-of-cholera.jpg", idioma: "Spanish", paginas: 368, titulo: "Love in the Time of Cholera", año: 1985, id: 36, stock: 100, precio: 2700, category: "recomendados" },
    { autor: "Johann Wolfgang von Goethe", pais: "Saxe-Weimar", imagen: "/images/images/faust.jpg", idioma: "German", paginas: 158, titulo: "Faust", año: 1832, id: 37, stock: 100, precio: 2400, category: "recomendados" },
    { autor: "Nikolai Gogol", pais: "Russia", imagen: "/images/images/dead-souls.jpg", idioma: "Russian", paginas: 432, titulo: "Dead Souls", año: 1842, id: 38, stock: 100, precio: 1800, category: "recomendados" },
    { autor: "Günter Grass", pais: "Germany", imagen: "/images/images/the-tin-drum.jpg", idioma: "German", paginas: 600, titulo: "The Tin Drum", año: 1959, id: 39, stock: 100, precio: 1000, category: "recomendados" },
    { autor: "João Guimarães Rosa", pais: "Brazil", imagen: "/images/images/the-devil-to-pay-in-the-backlands.jpg", idioma: "Portuguese", paginas: 494, titulo: "The Devil to Pay in the Backlands", año: 1956, id: 40, stock: 100, precio: 1600, category: "recomendados" },
    { autor: "Knut Hamsun", pais: "Norway", imagen: "/images/images/hunger.jpg", idioma: "Norwegian", paginas: 176, titulo: "Hunger", año: 1890, id: 41, stock: 100, precio: 2700, category: "recomendados" },
    { autor: "Ernest Hemingway", pais: "United States", imagen: "/images/images/the-old-man-and-the-sea.jpg", idioma: "English", paginas: 128, titulo: "The Old Man and the Sea", año: 1952, id: 42, stock: 100, precio: 2700, category: "recomendados" },
    { autor: "Homer", pais: "Greece", imagen: "/images/images/the-iliad-of-homer.jpg", idioma: "Greek", paginas: 608, titulo: "Iliad", año: -735, id: 43, stock: 100, precio: 3000, category: "recomendados" },
    { autor: "Homer", pais: "Greece", imagen: "/images/images/the-odyssey-of-homer.jpg", idioma: "Greek", paginas: 374, titulo: "Odyssey", año: -800, id: 44, stock: 100, precio: 5000, category: "recomendados" },
    { autor: "Henrik Ibsen", pais: "Norway", imagen: "/images/images/a-Dolls-house.jpg", idioma: "Norwegian", paginas: 68, titulo: "A Doll's House", año: 1879, id: 45, stock: 100, precio: 2500, category: "recomendados" },
    { autor: "James Joyce", pais: "Irish Free State", imagen: "/images/images/ulysses.jpg", idioma: "English", paginas: 228, titulo: "Ulysses", año: 1922, id: 46, stock: 100, precio: 3500, category: "recomendados" },
    { autor: "Franz Kafka", pais: "Czechoslovakia", imagen: "/images/images/stories-of-franz-kafka.jpg", idioma: "German", paginas: 488, titulo: "Stories", año: 1924, id: 47, stock: 100, precio: 1500, category: "recomendados" },
    { autor: "Franz Kafka", pais: "Czechoslovakia", imagen: "/images/images/the-trial.jpg", idioma: "German", paginas: 160, titulo: "The Trial", año: 1925, id: 48, stock: 100, precio: 2100, category: "recomendados" },
    { autor: "Franz Kafka", pais: "Czechoslovakia", imagen: "/images/images/the-castle.jpg", idioma: "German", paginas: 352, titulo: "The Castle", año: 1926, id: 49, stock: 100, precio: 2500, category: "recomendados" },
    { autor: "William Shakespeare", pais: "England", imagen: "/images/images/king-lear.jpg", idioma: "English", paginas: 384, titulo: "King Lear", año: 1608, id: 50, stock: 100, precio: 2000, category: "recomendados" },
    { autor: "William Shakespeare", pais: "England", imagen: "/images/images/othello.jpg", idioma: "English", paginas: 314, titulo: "Othello", año: 1609, id: 51, stock: 100, precio: 1800, category: "nuevos" },]

export default function GetItemsFromBE() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsBE)
        }, 1000);
    })
}

export function GetItemFromBE(idParams) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemRequested = itemsBE.find((item) => item.id === Number(idParams));
            if (itemRequested) {
                resolve(itemRequested)
            }
        }, 1000);
    });
}

export function GetItemsFromBEByCategory(categoryid) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemRequested = itemsBE.filter(
                (item) => item.category === categoryid);
            resolve(itemRequested);
        }, 1000);
    });
}