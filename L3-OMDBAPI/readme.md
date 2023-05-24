<h1>Resume</h1>
<ol>
    <li>Cari API dan cek kebutuhan seperti APIKEY dan semacamnya</li>
    <li>Gunakan POSTMAN untuk mengecek return value in JSON</li>
    <li>Buat Struktur HTML</li>
    <li>Buat File JS</li>
    <li>Buat Function untuk EventListener ONCLICK</li>
    <li>Buat Logika saat Onclick</li>
    <li>Struktur dari AJAX API</li>
<code>
    
    $.ajax({
        url  : "http://www.omdbapi.com",    // URL
        type : "get",       // HTTP Request Method
        dataType : "json",  // Return Value Type
        data : {  // Parameters for API type GET
            apikey : "83be496c",
            s : $("#inputSearch").val(),
        }

        success : function (result) { // on success
            if(result.Respone === "True"){ // Check Success
                let movies = result.Search;
                console.log(movies);

                $.each(movies, function(){
                    //LOGIC HERE
                });
            };
        };

    });

</code>
        <li>Gunakan teknik DOM dan Append (Jquery) untuk merubah isi dari html</li>
        <li>Tambahkan addEventListener untuk setiap button</li>
        <li>Gunakan data attribute (dataset)</li>
<code>

        //   SEE DETAILS
        const btnDetail = document.querySelectorAll(".btnDetail");

        btnDetail.forEach((e) => {
            e.addEventListener("click", () => {
            console.log(e.dataset.id);
            seeDetail(e.dataset.id);
            });
        });

        //FUNCTION


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
        // LOGIC HERE
        }

</code>
<li>Simplenya kita membuat logic untuk setiap Button dari hasil APPEND dan ambil semua Attribute dataset. dan gunakan AJAX untuk merequest melalui String data tersebut sebagai parameter.</li>
<li>Jangan lupa mereset data yang sudah ada pada ITEMCONTAINER ingat ini bukanlah PHP. karena sifat APPEND adalah menambahkan</li>
</ol>
