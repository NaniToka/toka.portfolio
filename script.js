/**
 * Toka Nani — Senior Engineering Portfolio Logic
 * Modules: Canvas Ambient Mesh, Metric Counters, Case Study Tabs, Navigation Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initMetricCounters();
  initCaseStudyTabs();
  initNavigation();
  initResumeModal();
});

/* --------------------------------------------------------------------------
   1. Restrained Ambient Canvas Mesh Animation
   -------------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  });

  // Nodes for subtle grid mesh
  let nodes = [];
  const nodeCount = Math.min(Math.floor((width * height) / 35000), 28);

  function initNodes() {
    nodes = [];
    const isMobileScreen = width < 768;
    const targetCount = isMobileScreen ? 8 : Math.min(Math.floor((width * height) / 35000), 28);
    for (let i = 0; i < targetCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobileScreen ? 0.15 : 0.25),
        vy: (Math.random() - 0.5) * (isMobileScreen ? 0.15 : 0.25),
        radius: Math.random() * 1.5 + 1
      });
    }
  }

  initNodes();

  let isAnimating = true;
  let animationFrameId = null;

  function render() {
    if (!isAnimating) return;

    ctx.clearRect(0, 0, width, height);

    // Draw faint grid background
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Update & draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Node glow
      ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();

      // Connect nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.12;
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // Pause rendering when scrolled out of view or tab inactive
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isAnimating) {
            isAnimating = true;
            render();
          }
        } else {
          isAnimating = false;
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isAnimating = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      isAnimating = true;
      render();
    }
  });

  render();
}

/* --------------------------------------------------------------------------
   2. Metric Counters Animation
   -------------------------------------------------------------------------- */
function initMetricCounters() {
  const counterElements = document.querySelectorAll('.counter-val');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-target'), 10);
          if (isNaN(targetNum)) return;

          animateCount(el, targetNum);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterElements.forEach((el) => observer.observe(el));
}

function animateCount(el, target) {
  let start = 0;
  const duration = 1600; // ms
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  const timer = setInterval(() => {
    frame++;
    // Ease out quad formula
    const progress = frame / totalFrames;
    const easeOutProgress = progress * (2 - progress);
    const current = Math.round(target * easeOutProgress);

    el.textContent = current;

    if (frame >= totalFrames) {
      el.textContent = target;
      clearInterval(timer);
    }
  }, frameDuration);
}

/* --------------------------------------------------------------------------
   3. Case Study Interactive Tabs
   -------------------------------------------------------------------------- */
function initCaseStudyTabs() {
  const tabContainers = document.querySelectorAll('.case-study-card');

  tabContainers.forEach((card) => {
    const tabButtons = card.querySelectorAll('.tab-btn');
    const tabPanels = card.querySelectorAll('.tab-panel');

    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Deactivate all buttons & panels in this card
        tabButtons.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((p) => p.classList.remove('active'));

        // Activate selected
        btn.classList.add('active');
        const activePanel = card.querySelector(`.tab-panel[data-panel="${targetTab}"]`);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Navigation Controller & Scroll Highlight
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  // Header blur/border on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Highlight current nav item based on scroll position
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Drawer Toggle
  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (navLinksContainer.classList.contains('mobile-active')) {
          icon.className = 'ti ti-x';
        } else {
          icon.className = 'ti ti-menu-2';
        }
      }
    });

    // Close menu when clicking nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'ti ti-menu-2';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   5. Resume Modal Viewer Controller
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('.btn-view-resume');
  const closeBtn = modal.querySelector('.resume-modal-close');

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

