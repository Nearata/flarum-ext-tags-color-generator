import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('nearata-tags-color-generator', app => {
    extend(IndexPage.prototype, 'oncreate', function () {
        if (this.attrs.routeName !== 'tag') {
            return;
        }

        const textColor = this.currentTag().attribute('textColor');
        const isCustomColor = this.currentTag().attribute('isCustomColor');
        const heroTitleElement = this.element.querySelector('.Hero-title');

        if (textColor.startsWith('theme')) {
            heroTitleElement.style.color = app.forum.attribute(textColor);
        }

        if (isCustomColor) {
            heroTitleElement.style.color = textColor;
        }
    });
});
