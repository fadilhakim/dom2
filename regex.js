//what is regex ?
// regex sering di definisikan dengan sebuah search pattern atau pola ketika kita mencari sesuatu
// pencarian sebuah string atau interger dapat lebih sederhana apabila kita menggunakan regex.



//buat dulu contoh kalau function biasanya

var kata = 'aku tau kamu sudah tau semua yang mereka tau';
function cariKata(){    
    var newKata = kata.split(" ");
    result = 0;
    for(let i = 0; i < newKata.length; i++ ){
        if(newKata[i] == 'tau'){
            result += 1
        }
    }
    return result
}

console.log(cariKata(kata))
console.log(kata.match(/tau/g).length);

// seperti contoh 2
var string = "Belajar Javascript itu sangat Susah , sangking susah nya saya sampai mau pusing liat koding";

function ubahKata(){
    var newString = string.split(" ")
    for(let i = 0; i < newString.length; i++){
        if(newString[i].toLowerCase() == "susah"){
            newString[i] = 'mudah'
        }
        if(newString[i] === "pusing"){
            newString[i] = 'bahagia'
        }
    }
    return newString.join(" ")
}

console.log(ubahKata())
// console.log(paragraph.match(regex2))

// var string = "Belajar Javascript itu sangat Susah, sangking susah nya saya sampai mau pusing liat koding";
string = string.replace(/susah/gi, 'mudah')
string = string.replace(/pusing/gi, 'bahagia')
console.log(string)

//perlu di inget juga penggunaan regex ini tidak hanya sebatas pada javascript.
// jadi kalau sekarang kamu belajar regex pada javascript. nantinya kamu jg bisa blajar
// regex pada bahasa pemograman lain