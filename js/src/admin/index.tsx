import app from "flarum/admin/app";
import Button from "flarum/common/components/Button";
import Select from "flarum/common/components/Select";
import { extend } from "flarum/common/extend";
import Stream from "flarum/common/utils/Stream";
import EditTagModal from "flarum/tags/components/EditTagModal";
import randomColor from "randomcolor";

const trans = (key: string) => {
  return app.translator.trans(`nearata-tags-color-generator.admin.${key}`);
};

app.initializers.add("nearata-tags-color-generator", () => {
  extend(EditTagModal.prototype, "oninit", function () {
    this.luminosity = Stream("random");
    this.hue = Stream("random");
  });

  extend(EditTagModal.prototype, "fields", function (items) {
    items.add(
      "colorLuminosity",
      <div className="Form-group">
        <label>{trans("color_luminosity_label")}</label>
        <Select
          options={{
            random: trans("color_luminosity_options.random"),
            light: trans("color_luminosity_options.light"),
            bright: trans("color_luminosity_options.bright"),
            dark: trans("color_luminosity_options.dark"),
          }}
          onchange={(val: string) => this.luminosity(val)}
          value={this.luminosity()}
        />
      </div>,
      20
    );

    items.add(
      "colorHue",
      <div className="Form-group">
        <label>{trans("color_hue_label")}</label>
        <Select
          options={{
            random: trans("color_hue_options.random"),
            red: trans("color_hue_options.red"),
            orange: trans("color_hue_options.orange"),
            yellow: trans("color_hue_options.yellow"),
            green: trans("color_hue_options.green"),
            blue: trans("color_hue_options.blue"),
            purple: trans("color_hue_options.purple"),
            pink: trans("color_hue_options.pink"),
            monochrome: trans("color_hue_options.monochrome"),
          }}
          onchange={(val: string) => this.hue(val)}
          value={this.hue()}
        />
      </div>,
      20
    );

    items.add(
      "generateRandomColor",
      <div className="Form-group">
        <Button
          className="Button Button--primary Button--block"
          onclick={() =>
            this.color(
              randomColor({
                luminosity: this.luminosity(),
                hue: this.hue(),
              })
            )
          }
        >
          {trans("generate_color_button")}
        </Button>
      </div>,
      20
    );
  });
});
