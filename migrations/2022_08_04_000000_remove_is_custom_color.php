<?php

use Flarum\Database\Migration;

return Migration::dropColumns('tags', [
    'is_custom_color' => ['boolean', 'default' => false]
]);
