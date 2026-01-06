document.getElementById("year").textContent = new Date().getFullYear();

      /* MENU MOBILE */
      const nav = document.getElementById("nav");
      const toggle = document.getElementById("navToggle");
      toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
      });

      /* SCROLL SUAVE */
      document.querySelectorAll("[data-scroll]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-scroll");
          const el = document.querySelector(id);
          if (!el) return;
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        });
      });

      /* Cresce apenas quando ultrapassar o size inicial */
      const textarea = document.getElementById("autoTextarea");
      textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = Math.min(this.scrollHeight, 350) + "px";
      });

      /* SCROLL REVEAL */
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.2 }
      );
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

      /* STAGGER REVEAL — Serviços */
      const servicesGrid = document.querySelector(".services-grid");
      const serviceCards = document.querySelectorAll(".services-grid .service-card");

      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              serviceCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.12}s`;
                card.classList.add("active");
              });
              staggerObserver.unobserve(servicesGrid);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (servicesGrid) {
        staggerObserver.observe(servicesGrid);
      }

      /* STAGGER REVEAL — Stack & Tecnologias */
      const stackSection = document.querySelector(".stack-section");
      const techItems = document.querySelectorAll(".stack-section .tech-pill");

      const stackStaggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              techItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.12}s`;
                item.classList.add("active");
              });
              stackStaggerObserver.unobserve(stackSection);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (stackSection) {
        stackStaggerObserver.observe(stackSection);
      }

      const element = document.getElementById("typewriter");
      const text = "Desenvolvedor Full-Stack especializado em UI/UX";
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML = text.slice(0, i + 1) + "<span class='cursor'></span>";
          i++;
          setTimeout(type, 45);
        } else {
          element.innerHTML = text + "<span class='cursor'></span>";
        }
      }
      type();