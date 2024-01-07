/** Shopify CDN: Minification failed

Line 28:4 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 29:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 33:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 37:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 42:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 47:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 48:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 49:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 53:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 70:2 Transforming class syntax to the configured target environment ("es5") is not supported yet
... and 43 more hidden warnings

**/
(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["domotique-product"]) return;
  try {
    


    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }

      hide() {
        super.hide();
      }

      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }

      showActiveMedia() {
        this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
            element.classList.remove('active');
          }
        )
        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
        const activeMediaTemplate = activeMedia.querySelector('template');
        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
        activeMedia.classList.add('active');
        activeMedia.scrollIntoView();

        const container = this.querySelector('[role="document"]');
        container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

        if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
          activeMedia.loadContent();
      }
    }

    if (!customElements.get('product-modal')) customElements.define('product-modal', ProductModal);
  
  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["featured-product"] && !window.DesignMode) return;
  try {
    
  class ProductModal extends ModalDialog {
    constructor() {
      super();
    }

    hide() {
      super.hide();
    }

    show(opener) {
      super.show(opener);
      this.showActiveMedia();
    }

    showActiveMedia() {
      this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
          element.classList.remove('active');
        }
      )
      const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
      const activeMediaTemplate = activeMedia.querySelector('template');
      const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
      activeMedia.classList.add('active');
      activeMedia.scrollIntoView();

      const container = this.querySelector('[role="document"]');
      container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

      if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
        activeMedia.loadContent();
    }
  }

  if (!customElements.get('product-modal')) customElements.define('product-modal', ProductModal);

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["footer"]) return;
  try {
    
  class LocalizationForm extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        input: this.querySelector('input[name="locale_code"], input[name="country_code"]'),
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
      };
      this.elements.button.addEventListener('click', this.openSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

      this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }

    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
    }

    onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;

      this.hidePanel();
      this.elements.button.focus();
    }

    onItemClick(event) {
      event.preventDefault();
      const form = this.querySelector('form');
      this.elements.input.value = event.currentTarget.dataset.value;
      if (form) form.submit();
    }

    openSelector() {
      this.elements.button.focus();
      this.elements.panel.toggleAttribute('hidden');
      this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }

    closeSelector(event) {
      const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
      if (event.relatedTarget === null || shouldClose) {
        this.hidePanel();
      }
    }
  }

  customElements.define('localization-form', LocalizationForm);

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-cart-footer"]) return;
  try {
    
  class CartNote extends HTMLElement {
    constructor() {
      super();

      this.addEventListener('change', debounce((event) => {
        const body = JSON.stringify({ note: event.target.value });
        fetch(`${routes.cart_update_url}`, {...fetchConfig(), ...{ body }});
      }, 300))
    }
  }

  customElements.define('cart-note', CartNote);

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-collection-product-grid"]) return;
  try {
    
  class SortByHandler extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
      };
      this.elements.button.addEventListener('click', this.openSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

      this.querySelectorAll('.disclosure__link').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }

    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
    }

    onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;

      this.hidePanel();
      this.elements.button.focus();
    }

    onItemClick(event) {
      event.preventDefault();
      this.elements.button.innerHTML = event.target.dataset.name;
      event.target.closest('ul').querySelector('.animation-underline--active').classList.remove("animation-underline--active");
      event.target.classList.add("animation-underline--active");
      document.getElementById('SortBy').value = event.target.dataset.value;
      document.getElementById('FacetFiltersForm').dispatchEvent(new Event('input'));
    }

    openSelector() {
      this.elements.button.focus();
      this.elements.panel.toggleAttribute('hidden');
      this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }

    closeSelector(event) {
      var _this = this;
      setTimeout(function(){_this.hidePanel();}, 150)
    }
  }

  customElements.define('sort-by-select', SortByHandler);

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-product"]) return;
  try {
    
    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }

      hide() {
        super.hide();
      }

      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }

      showActiveMedia() {
        this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
            element.classList.remove('active');
          }
        )
        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
        const activeMediaTemplate = activeMedia.querySelector('template');
        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
        activeMedia.classList.add('active');
        activeMedia.scrollIntoView();

        const container = this.querySelector('[role="document"]');
        container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

        if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
          activeMedia.loadContent();
      }
    }

    if (!customElements.get('product-modal')) customElements.define('product-modal', ProductModal);
  
  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-search"]) return;
  try {
    
  class SortByHandler extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
      };
      this.elements.button.addEventListener('click', this.openSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

      this.querySelectorAll('.disclosure__link').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }

    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
    }

    onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;

      this.hidePanel();
      this.elements.button.focus();
    }

    onItemClick(event) {
      event.preventDefault();
      this.elements.button.innerHTML = event.target.dataset.name;
      event.target.closest('ul').querySelector('.animation-underline--active').classList.remove("animation-underline--active");
      event.target.classList.add("animation-underline--active");
      document.getElementById('SortBy').value = event.target.dataset.value;
      document.getElementById('FacetFiltersForm').dispatchEvent(new Event('input'));
    }

    openSelector() {
      this.elements.button.focus();
      this.elements.panel.toggleAttribute('hidden');
      this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }

    closeSelector(event) {
      var _this = this;
      setTimeout(function(){_this.hidePanel();}, 150)
    }
  }

  customElements.define('sort-by-select', SortByHandler);

  } catch(e) { console.error(e); }
})();

})();
