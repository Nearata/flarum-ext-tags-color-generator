import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import Select from 'flarum/common/components/Select';

import EditTagModal from 'flarum/tags/admin/components/EditTagModal';

import randomColor from 'randomcolor';

app.initializers.add('nearata-tags-color-generator', app => {
    extend(EditTagModal.prototype, 'oninit', function() {
        this.luminosity = 'random';
        this.hue = 'random';

        this.textColor = this.tag.name() && this.tag.attribute('textColor') || '';
        this.isCustomColor = this.tag.name() && this.tag.attribute('isCustomColor') || false;
        this.textColorSelect = 'default';

        if (this.isCustomColor) {
            this.textColorSelect = 'custom';
        }

        if (this.textColor.startsWith('theme')) {
            this.textColorSelect =  this.textColor;
        }
    });

    extend(EditTagModal.prototype, 'submitData', function (data) {
        data.textColor = this.textColor;
        data.isCustomColor = this.isCustomColor;
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
            'textColor',
            m('.Form-group', [
                m('.Form-group', [
                    m('label', app.translator.trans('nearata-tags-color-generator.admin.text_color.label')),
                    m(Select, {
                        options: {
                            default: app.translator.trans('nearata-tags-color-generator.admin.text_color.options.default'),
                            themePrimaryColor: app.translator.trans('nearata-tags-color-generator.admin.text_color.options.theme_primary_color'),
                            themeSecondaryColor: app.translator.trans('nearata-tags-color-generator.admin.text_color.options.theme_secondary_color'),
                            custom: app.translator.trans('nearata-tags-color-generator.admin.text_color.options.custom')
                        },
                        value: this.textColorSelect,
                        onchange: value => {
                            this.textColorSelect = value;
                            if (value === 'custom') {
                                this.textColor = '';
                                this.isCustomColor = true;
                            } else {
                                this.textColor = value;
                                this.isCustomColor = false;
                            }
                        }
                    })
                ]),
                this.isCustomColor ? m('.Form-group', [
                    m('label', app.translator.trans('nearata-tags-color-generator.admin.text_color.custom_label')),
                    m('.helpText', app.translator.trans('nearata-tags-color-generator.admin.text_color.custom_helptext')),
                    m('input', {
                        class: 'FormControl',
                        type: 'text',
                        oninput: e => this.textColor = e.target.value,
                        value: this.textColor,
                        autocomplete: 'off',
                        placeholder: '#aaaaaa'
                    })
                ]) : null
            ]), 20
        );

        items.add(
            'generateRandomColor',
            m('.Form-group', [
                m(Button, {
                    class: 'Button Button--primary Button--block',
                    onclick: () => this.color(randomColor({
                        luminosity: this.luminosity,
                        hue: this.hue
                    }))
                }, app.translator.trans('nearata-tags-color-generator.admin.generate_color_button'))
            ]), 20
        );
    });
});
