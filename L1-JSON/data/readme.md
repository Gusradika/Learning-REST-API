<h2>PHP</h2>
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

    // hasil
    // {"a": 1, "b": 2, "c": 3}

</code>

<li>json_decode()</li>
<p>membaca file JSON, lalu mengubahnya menjadi array associative</p>
</ul>
<br>
<h2>Mengakses JSON</h2>
<ul>
<li>file_get_contents()</li>
</ul>
