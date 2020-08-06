import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import EditTagModal from 'flarum/tags/components/EditTagModal';
import randomColor from 'randomcolor';

app.initializers.add('nearata/flarum-ext-tags-color-generator', () => {
    extend(EditTagModal.prototype, 'fields', function(items) {
        items.add(
            'generateRandomColor',
            <div className="Form-group">
                {Button.component({
                    className: 'Button Button--primary Button--block',
                    children: app.translator.trans('nearata-tags-color-generator.admin.generate_color_button'),
                    onclick: () => {
                        for(const i of items.get('color')['children']) {
                            if(i.tag === 'input') {
                                const color = randomColor();
                                this.color(color);
                            }
                        }
                    }
                })}
            </div>, 20
        );
    });
});
