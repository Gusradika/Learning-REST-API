$("#btnSearch").on("click", function () {
  $("#movieContainer").html(""); // Reset
});

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
                        <a href="#" class="btn btn-info btn-lg text-white fw-bold w-100">Lihat Detail</a>
                    </div>
                </div>
            </div>
            `);

          $("#inputSearch").val(null);
        });
      } else {
        console.log("Failed!");
        $("#movieContainer").html(
          `<h1 class='text-center'>${result.Error}</h1>`
        );
      }
    },
  });
}
