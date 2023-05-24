<h1>Resume</h1>
<ol>
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
</ol>
