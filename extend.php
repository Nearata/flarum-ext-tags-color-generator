<?php

namespace Nearata\TagsColorGenerator;

use Flarum\Extend;

use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Event\Creating;
use Flarum\Tags\Event\Saving;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Event)
        ->listen(Creating::class, CreateTagColor::class)
        ->listen(Saving::class, SaveTagColor::class),
    (new Extend\ApiSerializer(TagSerializer::class))
        ->attribute('textColor', function ($serializer, $tag, $attributes) {
            return (string) $tag->text_color;
        })
        ->attribute('isCustomColor', function ($serializer, $tag, $attributes) {
            return (bool) $tag->is_custom_color;
        })
];
