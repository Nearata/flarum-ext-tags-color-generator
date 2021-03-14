<?php

use Flarum\Database\Migration;

return Migration::addColumns('tags', [
    'text_color' => ['string', 'length' => 30, 'nullable' => true],
    'is_custom_color' => ['boolean', 'default' => false]
]);
