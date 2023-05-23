function tampilkanSemuaMenu() {
  $.getJSON("data/pizza.json", function (hasil) {
    console.log(hasil);

    // Keluarkan object
    let menu = hasil.menu;

    // console.log(menu);

    $("#menuContainer").html(""); // clear Data dahulu

    $.each(menu, function (i, data) {
      console.log(data);
      //   console.log(i); // param 1 Index
      //   console.log(data); // param 2 Value data
      $("#menuContainer").append(
        `<div class="col-4 mb-4"><div class="card"><img src="data/img/pizza/${data.gambar}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${data.nama}</h5><label for="" class="small">${data.kategori}</label><p class="card-text">${data.deskripsi}</p><h5>Rp.${data.harga},-</h5><a href="#" class="btn btn-info btn-lg text-white fw-bold w-100">Pesan Sekarang</a></div></div></div>`
      );
    });
  });
}

$.getJSON("data/pizza.json", function (hasil) {
  //   console.log(hasil);

  // Keluarkan object
  //   let menu = hasil.menu;

  //   console.log(menu);

  //   $.each(menu, function (i, data) {
  //     console.log(i); // param 1 Index
  //     console.log(data); // param 2 Value data
  //     $("#menuContainer").append(
  //       `<div class="col-4 mb-4"><div class="card"><img src="data/img/pizza/${data.gambar}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${data.nama}</h5><label for="" class="small">${data.kategori}</label><p class="card-text">${data.deskripsi}</p><h5>Rp.${data.harga},-</h5><a href="#" class="btn btn-info btn-lg text-white fw-bold w-100">Pesan Sekarang</a></div></div></div>`
  //     );
  //   });
  tampilkanSemuaMenu();
});

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  // ini adalah LI yang kita klik
  $(this).addClass("active");

  let kategori = $(this).html(); // mengambil html
  console.log(kategori);
  console.log(kategori);
  console.log(kategori);
  console.log(kategori);
  $("h1").html(kategori);

  if (kategori === "All Menu") {
    console.log("Masuk Sini");
    tampilkanSemuaMenu();
    return; // bekerja seperti Break
  }
  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      //   console.log(" masuk sini " + data.kategori);
      if (data.kategori === kategori.toLowerCase()) {
        content += `<div class="col-4 mb-4"><div class="card"><img src="data/img/pizza/${data.gambar}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${data.nama}</h5><label for="" class="small">${data.kategori}</label><p class="card-text">${data.deskripsi}</p><h5>Rp.${data.harga},-</h5><a href="#" class="btn btn-info btn-lg text-white fw-bold w-100">Pesan Sekarang</a></div></div></div>`;
      }
    });

    $("#menuContainer").html(content);
  });
});
