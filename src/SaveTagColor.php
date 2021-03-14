<?php

namespace Nearata\TagsColorGenerator;

use Flarum\Tags\Event\Saving;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class SaveTagColor
{
    public function handle(Saving $event)
    {
        if (Arr::has($event->data, ['attributes.textColor', 'attributes.isCustomColor'])) {
            $textColor = Arr::get($event->data, 'attributes.textColor');
            $isCustomColor = Arr::get($event->data, 'attributes.isCustomColor');

            if (!Str::startsWith($textColor, ['theme', '#', 'rgb', 'hls'])) {
                $textColor = '';
                $isCustomColor = false;
            }

            $event->tag->text_color = $textColor;
            $event->tag->is_custom_color = $isCustomColor;
        }
    }
}
