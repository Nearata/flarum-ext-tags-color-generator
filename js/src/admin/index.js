import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import Select from 'flarum/components/Select';
import EditTagModal from 'flarum/tags/components/EditTagModal';

import randomColor from 'randomcolor';

app.initializers.add('nearata/flarum-ext-tags-color-generator', () => {
    extend(EditTagModal.prototype, 'oninit', function() {
        this.luminosity = 'random';
        this.hue = 'random';
    });

    extend(EditTagModal.prototype, 'fields', function(items) {
        items.add(
            'colorLuminosity',
            m('.Form-group', [
                m('label', app.translator.trans('nearata-tags-color-generator.admin.color_luminosity_label')),
                m(Select, {
                    options: {
                        random: app.translator.trans('nearata-tags-color-generator.admin.color_luminosity_options.random'),
                        light: app.translator.trans('nearata-tags-color-generator.admin.color_luminosity_options.light'),
                        bright: app.translator.trans('nearata-tags-color-generator.admin.color_luminosity_options.bright'),
                        dark: app.translator.trans('nearata-tags-color-generator.admin.color_luminosity_options.dark')
                    },
                    value: this.luminosity,
                    onchange: value => this.luminosity = value
                })
            ]), 20
        );

        items.add(
            'colorHue',
            m('.Form-group', [
                m('label', app.translator.trans('nearata-tags-color-generator.admin.color_hue_label')),
                m(Select, {
                    options: {
                        random: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.random'),
                        red: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.red'),
                        orange: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.orange'),
                        yellow: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.yellow'),
                        green: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.green'),
                        blue: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.blue'),
                        purple: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.purple'),
                        pink: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.pink'),
                        monochrome: app.translator.trans('nearata-tags-color-generator.admin.color_hue_options.monochrome')
                    },
                    value: this.hue,
                    onchange: value => this.hue = value
                })
            ]), 20
        );

        items.add(
            'generateRandomColor',
            m('.Form-group', [
                m(Button, {
                    'class': 'Button Button--primary Button--block',
                    onclick: () => this.color(randomColor({
                        luminosity: this.luminosity,
                        hue: this.hue
                    }))
                }, app.translator.trans('nearata-tags-color-generator.admin.generate_color_button'))
            ]), 20
        );
    });
});
