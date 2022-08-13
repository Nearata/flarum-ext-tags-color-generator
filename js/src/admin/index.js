import app from "flarum/admin/app";
import Button from "flarum/common/components/Button";
import Select from "flarum/common/components/Select";
import { extend } from "flarum/common/extend";
import EditTagModal from "flarum/tags/admin/components/EditTagModal";
import randomColor from "randomcolor";

const trans = (key) => {
    return app.translator.trans(`nearata-tags-color-generator.admin.${key}`);
};

app.initializers.add("nearata-tags-color-generator", () => {
    extend(EditTagModal.prototype, "oninit", function () {
        this.luminosity = "random";
        this.hue = "random";
    });

    extend(EditTagModal.prototype, "fields", function (items) {
        items.add(
            "colorLuminosity",
            m(".Form-group", [
                m("label", trans("color_luminosity_label")),
                m(Select, {
                    options: {
                        random: trans("color_luminosity_options.random"),
                        light: trans("color_luminosity_options.light"),
                        bright: trans("color_luminosity_options.bright"),
                        dark: trans("color_luminosity_options.dark"),
                    },
                    value: this.luminosity,
                    onchange: (value) => (this.luminosity = value),
                }),
            ]),
            20
        );

        items.add(
            "colorHue",
            m(".Form-group", [
                m("label", trans("color_hue_label")),
                m(Select, {
                    options: {
                        random: trans("color_hue_options.random"),
                        red: trans("color_hue_options.red"),
                        orange: trans("color_hue_options.orange"),
                        yellow: trans("color_hue_options.yellow"),
                        green: trans("color_hue_options.green"),
                        blue: trans("color_hue_options.blue"),
                        purple: trans("color_hue_options.purple"),
                        pink: trans("color_hue_options.pink"),
                        monochrome: trans("color_hue_options.monochrome"),
                    },
                    value: this.hue,
                    onchange: (value) => (this.hue = value),
                }),
            ]),
            20
        );

        items.add(
            "generateRandomColor",
            m(".Form-group", [
                m(
                    Button,
                    {
                        class: "Button Button--primary Button--block",
                        onclick: () =>
                            this.color(
                                randomColor({
                                    luminosity: this.luminosity,
                                    hue: this.hue,
                                })
                            ),
                    },
                    trans("generate_color_button")
                ),
            ]),
            20
        );
    });
});
