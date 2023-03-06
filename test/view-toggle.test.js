import '../view-toggle.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

const basicFixture = html`<d2l-view-toggle
toggleOptions='[{"text":"Bananas","val":"overall"},{"text":"Minions","val":"minios"},{"text":"Pyjamas","val":"subject"}]'
text="Toggle: "></d2l-view-toggle>`;

describe('d2l-view-toggle', () => {

	describe('accessibility', () => {
		it('should pass all aXe tests', async() => {
			const el = await fixture(basicFixture);
			await expect(el).to.be.accessible();
		});
	});

	describe('constructor', () => {
		it('should construct', () => {
			runConstructor('d2l-view-toggle');
		});
	});

	describe('events', () => {
		it('should fire toggle changed event when the button is clicked', async() => {
			const el = await fixture(basicFixture);
			setTimeout(() => el.shadowRoot.querySelector('button[data-option-val=subject]').click(), 0);
			const e = await oneEvent(el, 'd2l-view-toggle-changed');
			expect(e.detail.view).to.equal('subject');
		});
	});

});
