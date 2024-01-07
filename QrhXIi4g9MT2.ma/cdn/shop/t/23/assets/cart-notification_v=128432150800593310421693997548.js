/** Shopify CDN: Minification failed

Line 16:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 17:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 26:6 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 31:7 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 37:16 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 53:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 73:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 73:37 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 79:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 80:4 Transforming const to the configured target environment ("es5") is not supported yet
... and 2 more hidden warnings

**/
class CartNotification extends ModalDialog {
  constructor() {
    super();
    this.notification = document.getElementById('cart-notification');
    this.onBodyClick = this.handleBodyClick.bind(this);
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );    
  }
  
  open() {
    document.body.addEventListener('click', this.onBodyClick);
	this.show(null);
  }

  close() {
    document.body.removeEventListener('click', this.onBodyClick);
    removeTrapFocus(this.activeElement);
    this.hide();
  }

  renderContents(parsedState) {
      this.cartItemKey = parsedState.key;
      this.getSectionsToRender().forEach((section => {
        if(document.getElementById(section.id)){
          document.getElementById(section.id).innerHTML =
            this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
        }
        if(section.id == 'cart-free-delivery' && document.querySelector('#product-page-free-delivery')){
          document.querySelector('#product-page-free-delivery').innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
        }
      }));

      this.open();
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
      },
      {
        id: 'cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      },
      {
        id: 'cart-icon-bubble--mobile'
      },
      {
        id: 'cart-free-delivery'
      }
    ];
  }
  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);