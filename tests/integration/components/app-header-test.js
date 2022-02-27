import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | app-header', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AppHeader />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AppHeader>
        template block text
      </AppHeader>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
