import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('city-rentals', 'Integration | Component | city rentals', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{city-rentals}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#city-rentals}}
      template block text
    {{/city-rentals}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
