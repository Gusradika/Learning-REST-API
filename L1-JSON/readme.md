<h1>PHP</h1>
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

</ul>
<br>
<h2>Mengakses JSON</h2>
<ul>
<li>file_get_contents()</li>
<code>

    $data = file_get_contents("data.json");
    $mhs = json_decode($data);
    echo $mhs[0];

</code>
</ul>

<br>

<h1>JavaScript</h1>
<ul>
    <li>JSON.stringify()</li>
    <p>Parsing object / array to JSON</p>
<code>
    
    var data = {
        a : "1",
        b : "2",
        c : "3",
    }

    console.log(JSON.stringify(data));

    // hasil berupa JSON
    // {"a": 1, "b": 2, "c": 3}

</code>

<li>JSON.parse</li>
<p>Me-request file JSO lalu mengubahnya menjadi object (menggunakan HTMLHttpRequest)</p>

<code>

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            var data = JSON.parse(this.responseText);
            console.log(data);
        }
    }
    xhr.open('GET', 'data.json', true);
    xhr.send();

</code>

</ul>

<h2>Mengakses JSON</h2>
<ul>
    <li>XMLHttpRequest</li>
    <li>JQuery</li>
<ul>
