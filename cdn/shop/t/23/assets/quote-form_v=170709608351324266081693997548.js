document.querySelector("#qCity").addEventListener("change",function(){document.querySelector("option[value=Autres]").selected?(Array.from(document.querySelectorAll(".product-form__submit")).map(function(el){return el.classList.add("quote-button")}),Array.from(document.querySelectorAll("#quoteForm input")).map(function(el){return el.style.display="block"}),document.querySelector(".product-form__submit:not(.sticky-cart-button) span").innerText="Demander un devis",document.querySelector(".price__sale").style.display="none",document.querySelector(".sticky-cart-button").setAttribute("aria-disabled","true")):(Array.from(document.querySelectorAll(".product-form__submit")).map(function(el){return el.classList.remove("quote-button")}),document.querySelector(".product-form__submit:not(.sticky-cart-button) span").innerText="Ajouter au panier",Array.from(document.querySelectorAll("#quoteForm input")).map(function(el){return el.style.display="none"}),document.querySelector(".price__sale").style.display="block",document.querySelector(".sticky-cart-button").setAttribute("aria-disabled","false"))});
//# sourceMappingURL=/cdn/shop/t/23/assets/quote-form.js.map?v=170709608351324266081693997548