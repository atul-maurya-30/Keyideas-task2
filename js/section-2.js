/* JS: Tabs on desktop, accordion on mobile. Self-contained (no Bootstrap dependency). */
document.addEventListener("DOMContentLoaded", function () {
  const tabs = Array.from(document.querySelectorAll(".it"));
  const serviceSections = Array.from(document.querySelectorAll(".links-it"));
  const accordionButtons = Array.from(document.querySelectorAll(".btn-it"));

  /* helper to get collapse element from a button */
  function getTargetElement(button) {
    const sel =
      button.getAttribute("data-target") ||
      (button.getAttribute("aria-controls")
        ? "#" + button.getAttribute("aria-controls")
        : null);
    if (sel && document.querySelector(sel)) return document.querySelector(sel);
    // fallback: find first .collapse inside same links-it
    const parent = button.closest(".links-it");
    if (parent) return parent.querySelector(".collapse");
    return null;
  }

  /* Show a section by index (desktop behavior) */
  function showSection(index) {
    serviceSections.forEach((section, idx) => {
      if (idx === index) {
        section.classList.add("active");
        // ensure visible (desktop)
        section.style.display = window.innerWidth >= 768 ? "block" : "block";
        // also expand its collapse on desktop
        const c = section.querySelector(".collapse");
        if (c && window.innerWidth >= 768) {
          c.classList.add("show");
        }
      } else {
        section.classList.remove("active");
        // hide sections visually on desktop except active
        section.style.display = window.innerWidth >= 768 ? "none" : "block";
        // close collapse for non-active on desktop
        const c = section.querySelector(".collapse");
        if (c && window.innerWidth >= 768) {
          c.classList.remove("show");
        }
      }
    });

    tabs.forEach((t, idx) => {
      t.classList.toggle("active", idx === index);
      t.setAttribute("aria-selected", idx === index ? "true" : "false");
    });
  }

  /* Tab click handlers (desktop) */
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", function () {
      showSection(idx);
    });
    tab.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showSection(idx);
      }
    });
  });

  /* Accordion button handlers (mobile) */
  accordionButtons.forEach((btn) => {
    const targetEl = getTargetElement(btn);
    // ensure initial aria-expanded state
    if (targetEl && targetEl.classList.contains("show")) {
      btn.setAttribute("aria-expanded", "true");
      btn.classList.add("open");
    } else {
      btn.setAttribute("aria-expanded", "false");
      btn.classList.remove("open");
    }

    btn.addEventListener("click", function (e) {
      const target = getTargetElement(this);
      if (!target) return;

      const currentlyOpen = target.classList.contains("show");

      // If mobile (narrow) behave as single-open accordion: close others
      if (window.innerWidth < 768) {
        accordionButtons.forEach((otherBtn) => {
          const otherTarget = getTargetElement(otherBtn);
          if (otherTarget && otherTarget !== target) {
            otherTarget.classList.remove("show");
            otherBtn.classList.remove("open");
            otherBtn.setAttribute("aria-expanded", "false");
          }
        });
      }

      // Toggle clicked one
      if (currentlyOpen) {
        target.classList.remove("show");
        this.classList.remove("open");
        this.setAttribute("aria-expanded", "false");
      } else {
        target.classList.add("show");
        this.classList.add("open");
        this.setAttribute("aria-expanded", "true");
      }
    });

    // keyboard accessibility
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  /* Initialize view based on viewport */
  function init() {
    if (window.innerWidth >= 768) {
      // desktop: show first tab/section and expand its collapse
      showSection(0);
      // ensure all collapses in visible section are shown
      serviceSections.forEach((sec, idx) => {
        const c = sec.querySelector(".collapse");
        if (c) {
          if (idx === 0) c.classList.add("show");
          else c.classList.remove("show");
        }
      });
    } else {
      // mobile: show all .links-it blocks but keep collapses closed
      serviceSections.forEach((sec) => {
        sec.style.display = "block";
        const c = sec.querySelector(".collapse");
        if (c) c.classList.remove("show");
      });
      // remove tab active state
      tabs.forEach((t) => t.classList.remove("active"));
    }
  }

  init();

  /* Handle window resize for responsive behavior */
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      init();
    }, 120);
  });
});
