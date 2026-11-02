/* ==========================================================================
   Beanie — Coffee Shop HTML Template
   Main script
   ========================================================================== */
(function () {
  "use strict";

  // Sticky header shadow on scroll
  var header = document.querySelector(".site-header");
  var backToTop = document.querySelector(".back-to-top");

  function onScroll() {
    var scrolled = window.scrollY > 30;
    if (header) header.classList.toggle("is-scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 400);
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Quantity boxes (shop single page)
  document.querySelectorAll(".quantity-box").forEach(function (box) {
    var input = box.querySelector("input");
    var minus = box.querySelector(".qty-minus");
    var plus = box.querySelector(".qty-plus");
    if (!input) return;
    if (minus) minus.addEventListener("click", function () {
      var v = Math.max(1, (parseInt(input.value, 10) || 1) - 1);
      input.value = v;
    });
    if (plus) plus.addEventListener("click", function () {
      var v = (parseInt(input.value, 10) || 1) + 1;
      input.value = v;
    });
  });

  // Bootstrap client-side form validation styling
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });

  // Newsletter form (no backend — demo confirmation only)
  var newsletterForms = document.querySelectorAll(".newsletter-form");
  newsletterForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".newsletter-msg");
      if (msg) {
        msg.textContent = "Thanks for subscribing! Please check your inbox to confirm.";
        msg.classList.remove("d-none");
      }
      form.reset();
    });
  });
})();
