import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import IndexPage from "flarum/forum/components/IndexPage";

app.initializers.add("nearata-tags-color-generator", () => {
    extend(IndexPage.prototype, "oncreate", function () {
        if (this.attrs.routeName !== "tag") {
            return;
        }

        const textColor = this.currentTag().attribute("textColor");
        const heroTitleElement = this.element.querySelector(".Hero-title");

        if (textColor.startsWith("theme")) {
            heroTitleElement.style.color = app.forum.attribute(textColor);
        } else {
            heroTitleElement.style.color = textColor;
        }
    });
});
