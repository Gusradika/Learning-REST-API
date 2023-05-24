$("#btnSearch").on("click", function () {
  $("#movieContainer").html(""); // Reset
  searchMovies();
});

// Untuk event handler key press "Enter"
$("#inputSearch").on("keyup", function (event) {
  if (event.keyCode === 13) {
    searchMovies();
  }
});

// cara membaca sintax ini
// JQuery tolong ambilkan #movieContainer dan jika saya klik ".btnDetail" tolong jalankan function (EVENT DELEGATION/ EVENT BINDING);
// $("#movieContainer").on("click", ".btnDetail", () => {
//   console.log($(this).attr("data-id"));
// });

function searchMovies() {
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "get", // tipe methodnya
    dataType: "json", // tipe data return
    data: {
      apikey: "83be496c",
      s: $("#inputSearch").val(),
    }, // mengirim parameter apa?
    success: function (result) {
      console.log(result);
      // akan di masukan parameter
      if (result.Response == "True") {
        let movies = result.Search; // mengerluarkan Array of object
        console.log(movies);
        $.each(movies, function (i, values) {
          // Index, Values
          $("#movieContainer").append(`
            <div class="col-4 mb-4">
                <div class="card">
                    <img src="${values.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${values.Title}</h5>
                        <label for="" class="small">${values.Type}</label>
                        <p class="card-text">${values.Year}</p>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btnDetail btn-info btn-lg text-white fw-bold w-100" data-id="${values.imdbID}">Lihat Detail</button>
                    </div>
                </div>
            </div>
            `);
          console.log(`${values.imdbID}`);
        });
      } else {
        console.log("Failed!");
        $("#movieContainer").html(
          `<h1 class='text-center'>${result.Error}</h1>`
        );
      }

      //   SEE DETAILS
      const btnDetail = document.querySelectorAll(".btnDetail");
      //   console.log(btnDetail);
      btnDetail.forEach((e) => {
        e.addEventListener("click", () => {
          console.log(e.dataset.id);
          seeDetail(e.dataset.id);
        });
      });

      $("#inputSearch").val(null);
    },
  });
}

function seeDetail(imdbID) {
  console.log("Masuk");
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "get", // tipe methodnya
    dataType: "json", // tipe data return
    data: {
      apikey: "83be496c",
      i: imdbID,
    }, // mengirim parameter apa?

    success: function (movie) {
      if (movie.Response === "True") {
        $("#modal-body").html(
          `
           <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${movie.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>Title</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Director : </strong> ${movie.Director}</li>
                                    <li class="list-group-item"><strong>Actor : </strong> ${movie.Actors}</li>
                                    <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            `
        );
      }
    },
  });
}
