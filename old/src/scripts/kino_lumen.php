<?php

//
// NOTE!
// Этот PHP скриптик вытаскивает все картинки с расписанием со странички:
// http://lumenfilm.com/gusev/affishe
//
// и возвращает JSON, который затем используется в kino_lumen.html
//

header("Content-type:application/json");
header("Access-Control-Allow-Origin:*");

$html = file_get_contents('http://lumenfilm.com/gusev/affishe');

preg_match_all('/\/uploads\/[0-9_]+\.jpg/', $html, $matches);

foreach ($matches[0] as &$match) {
    $match = 'http://lumenfilm.com' . $match;
}

echo json_encode($matches[0]);

?>
