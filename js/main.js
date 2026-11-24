/* Y Axis Tuition – site interactions */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var WA = "https://wa.me/917845592859", PHONE = "+91 78455 92859";

  /* Footer year */
  var yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();

  /* Loader (home page only, once per browser session) */
  var ld = $("#ld");
  if (ld) {
    var seen = false;
    try { seen = sessionStorage.getItem("yx-seen") === "1"; sessionStorage.setItem("yx-seen", "1"); } catch (e) {}
    var hide = function () { ld.style.opacity = 0; setTimeout(function () { ld.remove(); }, 600); };
    if (seen) ld.remove(); else window.addEventListener("load", function () { setTimeout(hide, 500); });
  }

  /* Mobile menu */
  var mb = $("#mb"), nv = $("#nv");
  if (mb && nv) {
    var setMenu = function (open) {
      nv.classList.toggle("o", open);
      mb.setAttribute("aria-expanded", open ? "true" : "false");
      mb.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      mb.textContent = open ? "✕" : "☰";
    };
    mb.addEventListener("click", function () { setMenu(!nv.classList.contains("o")); });
    $$("a", nv).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    document.addEventListener("click", function (e) { if (!e.target.closest("header")) setMenu(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 1040) setMenu(false); });
  }

  /* Scroll reveal */
  var rv = $$(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    rv.forEach(function (e) { io.observe(e); });
  } else rv.forEach(function (e) { e.classList.add("in"); });

  /* Gallery filter + lightbox */
  var fl = $("#fl"), gg = $("#gg"), lb = $("#lb"), lastFocus = null;
  if (fl && gg) {
    $$("button", fl).forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-f");
        $$("button", fl).forEach(function (x) { x.classList.toggle("on", x === b); });
        $$(".gt", gg).forEach(function (g) { g.hidden = !(f === "All" || g.getAttribute("data-t") === f); g.style.display = g.hidden ? "none" : ""; });
      });
    });
  }
  if (lb) {
    var closeLb = function () { lb.hidden = true; lb.style.display = "none"; if (lastFocus) lastFocus.focus(); };
    $$(".gt").forEach(function (g) {
      g.addEventListener("click", function () {
        lastFocus = g; $("#lt").textContent = g.getAttribute("data-t");
        lb.hidden = false; lb.style.display = "grid"; $("#lc").focus();
      });
    });
    $("#lc").addEventListener("click", closeLb);
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) closeLb(); });
  }

  /* Enquiry / contact form */
  var f = $("#fm");
  if (f) {
    var ok = $("#ok"), required = $$("[required]", f);
    var show = function (html, isErr) { ok.className = isErr ? "err" : ""; ok.innerHTML = html; ok.style.display = "block"; ok.focus(); };
    var validate = function () {
      var all = true, firstBad = null;
      required.forEach(function (e) {
        var m = "", v = e.value.trim();
        if (!v) m = "This field is required.";
        else if (e.name === "contact_number" && !/^(\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ""))) m = "Enter a valid 10-digit Indian mobile number.";
        var er = $("#" + e.id + "e"); if (er) er.textContent = m;
        e.setAttribute("aria-invalid", m ? "true" : "false");
        if (m) { all = false; if (!firstBad) firstBad = e; }
      });
      if (firstBad) firstBad.focus();
      return all;
    };
    required.forEach(function (e) { e.addEventListener("input", function () { if (e.getAttribute("aria-invalid") === "true") { var er = $("#" + e.id + "e"); if (er) er.textContent = ""; e.setAttribute("aria-invalid", "false"); } }); });
    var summary = function () {
      return "Y Axis Tuition enquiry:\n" + $$("input[type=text],input[type=tel],select,textarea", f)
        .filter(function (e) { return e.value && e.name !== "bot-field"; })
        .map(function (e) { return e.previousElementSibling.textContent.replace(" *", "") + ": " + e.value; }).join("\n");
    };
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      var btn = $("button[type=submit]", f); btn.disabled = true; var label = btn.textContent; btn.textContent = "Sending…";
      var body = new URLSearchParams(new FormData(f)).toString();
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); window.location.href = "thank-you.html"; })
        .catch(function () {
          btn.disabled = false; btn.textContent = label;
          show("We could not send your enquiry online right now. Please tap <b>WhatsApp Enquiry</b> to send these details, or call <a href=\"tel:+917845592859\">" + PHONE + "</a>.", true);
        });
    });
    var wa = $("#wa");
    if (wa) wa.addEventListener("click", function () { if (validate()) window.open(WA + "?text=" + encodeURIComponent(summary()), "_blank", "noopener"); });
  }
})();
