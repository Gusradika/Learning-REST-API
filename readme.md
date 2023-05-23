<h1>JSON (Javascript object notation)</h1>
<h2>REST API</h2>
<ol>
 <li>PHP</li>
 <ul>
 <li>json_encode()</li>
 <p>Mengubah Array Associative menjadi JSON</p>

<code>

    $data = [
        "a" => 1,
        "b" => 2,
        "c" => 3
    ];

    echo json_encode($data);

    // hasil berupa JSON
    // {"a": 1, "b": 2, "c": 3}

</code>
<li>json_decode()</li>
<p>membaca file JSON, lalu mengubahnya menjadi array associative</p>
<code>

    // Ambil data json dari file
    $content = file_get_contents("data.json");

    // Ubah standar encodingnya
    $content = utf8_decode($content);

    // ubah string json menjadi array associative
    $results = json_decode($content, true);

    // kalau param 2 tidak ada true maka akan menjadi object jik ada maka akan menjadi Array Associtive

</code>

<h2>Mengakses JSON</h2>
<ul>
<li>file_get_contents()</li>
<code>

    $data = file_get_contents("data.json");
    $mhs = json_decode($data);
    echo $mhs[0];

</code>
</ul>
 </ul>
 <li>JS</li>
</ol>
