/** Shopify CDN: Minification failed

Line 19:4 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 20:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 34:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 53:10 Transforming const to the configured target environment ("es5") is not supported yet
Line 54:10 Transforming const to the configured target environment ("es5") is not supported yet
Line 55:10 Transforming const to the configured target environment ("es5") is not supported yet
Line 57:10 Transforming const to the configured target environment ("es5") is not supported yet
Line 58:15 Transforming const to the configured target environment ("es5") is not supported yet
Line 58:27 Transforming for-of loops to the configured target environment ("es5") is not supported yet
Line 61:10 Transforming let to the configured target environment ("es5") is not supported yet
... and 20 more hidden warnings

**/
if (!customElements.get("product-form")) {
  customElements.define(
    "product-form",
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector("form");
        this.form.querySelector("[name=id]").disabled = false;
        this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
        this.cart =
          document.querySelector("cart-notification") ||
          document.querySelector("cart-drawer");
        this.submitButton = this.querySelector('[type="submit"]');
        if (document.querySelector("cart-drawer"))
          this.submitButton.setAttribute("aria-haspopup", "dialog");
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        if (this.submitButton.getAttribute("aria-disabled") === "true") return;

        //Changed
        if (this.submitButton.classList.contains("quote-button")) {
          console.log(document.querySelector(".product__title").innerText);
          this.submitButton.setAttribute("aria-disabled", true);
          this.submitButton.classList.add("loading");
          this.querySelector(".loading-overlay__spinner").classList.remove(
            "hidden"
          );
          this.submitButton.classList.remove("loading");
          if (this.cart && this.cart.classList.contains("is-empty"))
            this.cart.classList.remove("is-empty");
          if (!this.error) this.submitButton.removeAttribute("aria-disabled");
          this.querySelector(".loading-overlay__spinner").classList.add(
            "hidden"
          );
          const mainFormData = new FormData(this.form);
          const qForm = document.querySelector("#quoteForm");
          const qFormData = new FormData(qForm);

          const qFormArray = [];
          for (const value of qFormData.values()) {
            qFormArray.push(value);
          }
          let qQty = mainFormData.get("quantity");
          let product = document.querySelector(".product__title").innerText;
          let name = qFormData.get("qFullName");
          let phone = qFormData.get("qPhone");
          let email = qFormData.get("qEmail");
          let actCity = qFormData.get("qActCity");
          let zenUrl =
            "https://us-central1-taiga-7544c.cloudfunctions.net/addZenTkt";

          let reqBody = {
            name: name,
            product: product,
            email: email,
            phone: phone,
            city: actCity,
            qty: qQty,
          };

          try {
            if (qFormArray.includes("")) {
              throw new Error("Please Fill all form inputs");
            }
            fetch(zenUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin": "*",
              },
              body: JSON.stringify(reqBody),
            })
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                if (response.status) {
                  console.log("Something wrong happened" + response);
                }
              })
              .catch((e) => {
                console.error(e);
              })
              .finally(() => {
                this.submitButton.classList.remove("loading");
                if (this.cart && this.cart.classList.contains("is-empty"))
                  this.cart.classList.remove("is-empty");
                if (!this.error)
                  this.submitButton.removeAttribute("aria-disabled");
                this.querySelector(".loading-overlay__spinner").classList.add(
                  "hidden"
                );
                window.location.replace("/pages/domotique-merci");
              });
          } catch (e) {
            console.log(e);
            document.querySelector(".quote-error").style.display = "block";
          }

          return;
        }

        this.handleErrorMessage();

        this.submitButton.setAttribute("aria-disabled", true);
        this.submitButton.classList.add("loading");
        this.querySelector(".loading-overlay__spinner").classList.remove(
          "hidden"
        );

        const config = fetchConfig("javascript");
        config.headers["X-Requested-With"] = "XMLHttpRequest";
        delete config.headers["Content-Type"];

        const formData = new FormData(this.form);
        if (this.cart) {
          formData.append(
            "sections",
            this.cart.getSectionsToRender().map((section) => section.id)
          );
          formData.append("sections_url", window.location.pathname);
          this.cart.setActiveElement(document.activeElement);
        }
        config.body = formData;

        fetch(`${routes.cart_add_url}`, config)
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              this.handleErrorMessage(response.description);

              const soldOutMessage =
                this.submitButton.querySelector(".sold-out-message");
              if (!soldOutMessage) return;
              this.submitButton.setAttribute("aria-disabled", true);
              this.submitButton.querySelector("span").classList.add("hidden");
              soldOutMessage.classList.remove("hidden");
              this.error = true;
              return;
            } else if (!this.cart) {
              window.location = window.routes.cart_url;
              return;
            }

            this.error = false;
            const quickAddModal = this.closest("quick-add-modal");
            if (quickAddModal) {
              document.body.addEventListener(
                "modalClosed",
                () => {
                  setTimeout(() => {
                    this.cart.renderContents(response);
                  });
                },
                { once: true }
              );
              quickAddModal.hide(true);
            } else {
              this.cart.renderContents(response);
            }
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            this.submitButton.classList.remove("loading");
            if (this.cart && this.cart.classList.contains("is-empty"))
              this.cart.classList.remove("is-empty");
            if (!this.error) this.submitButton.removeAttribute("aria-disabled");
            this.querySelector(".loading-overlay__spinner").classList.add(
              "hidden"
            );
          });
      }

      handleErrorMessage(errorMessage = false) {
        this.errorMessageWrapper =
          this.errorMessageWrapper ||
          this.querySelector(".product-form__error-message-wrapper");
        if (!this.errorMessageWrapper) return;
        this.errorMessage =
          this.errorMessage ||
          this.errorMessageWrapper.querySelector(
            ".product-form__error-message"
          );

        this.errorMessageWrapper.toggleAttribute("hidden", !errorMessage);

        if (errorMessage) {
          this.errorMessage.textContent = errorMessage;
        }
      }
    }
  );
}

class stickyCartModal extends HTMLElement {
  constructor() {
    super();
    window.addEventListener("scroll", this.update.bind(this));
    this.update();
    document
      .querySelector("footer")
      .classList.add("sticky-cart-modal_bottom_padding");
  }
  update() {
    const button = document.getElementById(
      `product-form-${this.dataset.section}`
    );
    const addButton = button.querySelector('[name="add"]');
    const rangeToShowModal = this.getTop(addButton) + button.clientHeight;
    if (
      window.scrollY >= rangeToShowModal &&
      !this.classList.contains("show-modal")
    ) {
      this.classList.add("show-modal");
      document.querySelector("body").classList.add("modal__sticky-cart");
    }
    if (
      window.scrollY < rangeToShowModal &&
      this.classList.contains("show-modal")
    ) {
      this.classList.remove("show-modal");
      document.querySelector("body").classList.remove("modal__sticky-cart");
    }
  }
  getTop(el) {
    return el.offsetTop + (el.offsetParent && this.getTop(el.offsetParent));
  }
}
customElements.define("sticky-cart-modal", stickyCartModal);
