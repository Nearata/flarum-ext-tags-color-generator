<?php

namespace Nearata\TagsColorGenerator;

use Flarum\Tags\Event\Creating;
use Flarum\Tags\Event\Saving;
use Illuminate\Events\Dispatcher;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class TagEventSubscriber
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Creating::class, [$this, 'handleEvent']);
        $events->listen(Saving::class, [$this, 'handleEvent']);
    }

    public function handleEvent($event)
    {
        $data = $event->data;
        if (Arr::has($data, ['attributes.textColor', 'attributes.isCustomColor'])) {
            $textColor = Arr::get($data, 'attributes.textColor');
            $isCustomColor = Arr::get($data, 'attributes.isCustomColor');

            if (!Str::startsWith($textColor, ['theme', '#', 'rgb', 'hls'])) {
                $textColor = '';
                $isCustomColor = false;
            }

            $event->tag->text_color = $textColor;
            $event->tag->is_custom_color = $isCustomColor;
        }
    }
}
