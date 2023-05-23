let mahasiswa = {
  nama: "Aditya Kesuma",
  nim: "21410100039",
  email: "aditezo24@gmail.com",
};

//Parse to JSON
var data = JSON.stringify(mahasiswa);

console.log("Contoh parse to JSON : " + data);

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let mahasiswa = JSON.parse(xhr.responseText);
    console.log(mahasiswa);
  }
};

// Param 2 async, or not
xhr.open("GET", "data/mhs.json", true);
xhr.send(0);

// JQUERY

// hasil sudah dalam bentuk object
$.getJSON("data/mhs.json", function (hasil) {
  console.log(hasil);
});
