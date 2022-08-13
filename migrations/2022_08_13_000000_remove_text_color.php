<?php

use Flarum\Database\Migration;

return Migration::dropColumns('tags', [
    'text_color' => ['string', 'length' => 30, 'nullable' => true]
]);
