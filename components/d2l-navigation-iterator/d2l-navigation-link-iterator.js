import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './d2l-navigation-iterator.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationLinkIterator extends PolymerElement {
	static get is() { return 'd2l-navigation-link-iterator'; }

	static get properties() {
		return {
			previousHref: {
				type: String
			},
			nextHref: {
				type: String
			},
			previousText: {
				type: String
			},
			nextText: {
				type: String
			},
			hideText: {
				type: Boolean,
				value: false
			},
			noPrevious: {
				type: Boolean,
				value: false
			},
			noNext: {
				type: Boolean,
				value: false
			}
		};
	}

	static get template() {
		return html`
			<d2l-navigation-iterator
				previous-text=[[previousText]]
				next-text=[[nextText]]
				hide-text=[[hideText]]
				no-previous=[[noPrevious]]
				no-next=[[noNext]]
				on-d2l-navigation-iterator-button-clicked="_onNavigationIteratorButtonClicked"
			>
			<slot></slot>
			</d2l-navigation-iterator>
		`;
	}

	_onNavigationIteratorButtonClicked(evt) {
		if (evt.detail.type === 'previous') {
			this._setWindowLocationHref(this.previousHref);
		} else {
			this._setWindowLocationHref(this.nextHref);
		}
	}

	_setWindowLocationHref(href) {
		window.location.href = href;
	}
}

window.customElements.define(D2LNavigationLinkIterator.is, D2LNavigationLinkIterator);
