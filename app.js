/**
 * NAYVAM ATELIER & CO
 * Core Logic & Router
 * Keywords: Intuitive, Newness, Adaptability
 */

function initApp() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // ==========================================
  // 1. PROJECT DATA ARCHIVE (From Wix Template)
  // ==========================================
  const projectsData = [
    {
      id: 'the-soul-foods',
      title: 'The Soul Foods',
      category: 'commercial',
      categoryLabel: 'Commercials',
      area: '1810 Sq.Ft',
      client: 'The Soul Foods',
      location: 'Nagole, Hyderabad',
      leadImage: 'SoulFoods/soulfoods1.png',
      galleryImages: [
        'SoulFoods/Scene 7.png',
        'SoulFoods/Scene 10.png',
        'SoulFoods/Scene 11.png',
        'SoulFoods/Scene 12.png',
        'SoulFoods/Scene 13.png',
        'SoulFoods/Scene 14.png',
        'SoulFoods/Scene 17.png',
        'SoulFoods/Scene 20.png',
        'SoulFoods/Scene 21.png',
        'SoulFoods/Scene 23.png'
      ],
      description: 'Conceived for The Soul Foods in Nagole, Hyderabad, this 1,810 Sq.Ft retail space merges natural earthy materiality with intuitive spatial flow. The project features handcrafted textures, ambient lighting, and adaptable seating zones tailored for immersive gastronomy and retail presence.'
    },
    {
      id: 'residential-green-building',
      title: 'Vega Charge',
      category: 'Commercial / Architecutre',
      categoryLabel: 'Commercial / Retail ',
      area: '19800 Sq.Ft',
      client: 'Abhilash Gali, Pretham Kantala',
      location: 'Narketpally, Telangana',
      leadImage: 'vega.png',
      galleryImages: [
        'Vega/Untitled-1 copy.jpg.jpeg',
        'Vega/ChatGPT Image Aug 30, 2026, 10_29_10 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 10_31_00 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 10_50_43 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 11_07_38 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 11_15_12 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 11_19_06 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 11_24_13 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 11_37_39 PM.png',
        'Vega/ChatGPT Image Aug 30, 2026, 11_40_38 PM.png',
        'Vega/ChatGPT Image Aug 31, 2026, 08_59_24 AM.png',
        'Vega/ChatGPT Image Aug 31, 2026, 09_07_19 AM.png',
        'Vega/ChatGPT Image Aug 31, 2026, 09_12_48 AM.png',
        'Vega/ChatGPT Image Aug 31, 2026, 09_18_17 AM.png'
      ],
      description: 'Crafted with charred timber cladding, local granite masonry, and triple-glazed thermal curtain walls, the Residential Green Building achieves Net-Zero energy status. The internal zoning adjusts dynamically between winter solar trapping and summer cross-breeze chimney ventilation, delivering extraordinary comfort with zero environmental compromise.'
    },
    {
      id: 'green-terraces-interiors',
      title: 'Green Terraces',
      category: 'Renovation',
      categoryLabel: 'Residential Interiors',
      area: '2500 Sq. Ft',
      client: 'Suhas D',
      location: 'Kondapur, Hyderabad',
      leadImage: 'GreenTerraces/greenterraces1.png',
      galleryImages: [
        'GreenTerraces/Drawing Room - View 1.png',
        'GreenTerraces/Drawing Room - View 2.png',
        'GreenTerraces/Drawing Room - View 3.png',
        'GreenTerraces/Living Room - View 1.png',
        'GreenTerraces/Living Room - View 2.png',
        'GreenTerraces/Living Room - View 3.png',
        'GreenTerraces/Dining - View 1.png',
        'GreenTerraces/Dining - View 2.png',
        'GreenTerraces/M.Bed Room - View 1.png',
        'GreenTerraces/M.Bed Room - View 2.png',
        'GreenTerraces/M.Bed Room - View 3.png',
        'GreenTerraces/G.Bed Room - View 1.png',
        'GreenTerraces/G.Bed Room - View 2.png',
        'GreenTerraces/Jusu Room - View 1.png',
        'GreenTerraces/Jusu Room - View 2.png',
        'GreenTerraces/Jusu Room - View 3.png'
      ],
      description: 'Green Terraces, Kondapur, Hyderabad, this bespoke residential interior seamlessly merges contemporary warmth, organic textures, and tailored spatial articulation. Featuring curated drawing atriums, each zone balances refined minimalism with intimate tactile comfort.'
    },
    {
      id: 'thrdspace-studio',
      title: 'Thrdspac',
      category: 'Commercial',
      categoryLabel: 'Commercial / Retail',
      area: '550 Sq.Ft',
      client: 'Mrs. Niharika Gollapalli',
      location: 'Jubilee hills, Hyderabad',
      leadImage: 'ThrdspaceStudio/thrdspace1.jpeg',
      galleryImages: [
        'ThrdspaceStudio/View 01.jpeg',
        'ThrdspaceStudio/View 02.jpeg',
        'ThrdspaceStudio/View 03.jpeg',
        'ThrdspaceStudio/View 04.jpeg',
        'ThrdspaceStudio/View 05.jpeg',
        'ThrdspaceStudio/View 06.jpeg',
        'ThrdspaceStudio/View 07.jpeg',
        'ThrdspaceStudio/View 08.jpeg',
        'ThrdspaceStudio/View 09.jpeg',
        'ThrdspaceStudio/View 10.jpeg',
        'ThrdspaceStudio/View 11.jpeg',
        'ThrdspaceStudio/View 12.jpeg',
        'ThrdspaceStudio/View 13.jpeg',
        'ThrdspaceStudio/View 14.jpeg',
        'ThrdspaceStudio/View 15.jpeg',
        'ThrdspaceStudio/View 16.jpeg',
        'ThrdspaceStudio/View 17.jpeg',
        'ThrdspaceStudio/View 18.jpeg',
        'ThrdspaceStudio/View 19.jpeg',
        'ThrdspaceStudio/View 20.jpeg'
      ],
      description: 'Designed for Thrdspace, this architectural pavilion masterfully balances monolithic volume, carved daylight portals, and earthy textural materiality. Seamlessly intertwining tranquil courtyard rock gardens with functional creative workstations, the studio celebrates intuitive craft, raw tranquility, and adaptability to contemporary collaborative life.'
    }
  ];

  let currentProjectIndex = 0;

  // ==========================================
  // 2. DOM ELEMENTS
  // ==========================================
  const header = document.querySelector('.site-header');
  const navOverlay = document.getElementById('nav-overlay');
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const navCloseBtn = document.getElementById('nav-close-btn');
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const projectsGrid = document.getElementById('projects-grid');
  const filterChips = document.querySelectorAll('.filter-chip');
  const inquiryForm = document.getElementById('inquiry-form');
  const formNotification = document.getElementById('form-notification');

  // ==========================================
  // 3. ROUTER / VIEW SWITCHING & TRACKING
  // ==========================================
  let lastActiveRoute = '#home';
  let currentActiveView = null;

  function switchView(route) {
    if (!route) route = 'home';
    const clean = route.replace('#', '').toLowerCase();
    const validRoutes = ['intro', 'home', 'projects', 'studio', 'contact'];
    const target = validRoutes.includes(clean) ? clean : 'home';
    const targetHash = '#' + target;

    // Close any active modal & navigation drawer
    closeProjectModal(false);
    closeNavMenu();

    const targetView = document.getElementById(target + '-view');
    if (!targetView) return;

    // Reset body/html overflow styles so scrolling is never locked
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    // Scroll window & document to top instantly
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (targetView.scrollTop) targetView.scrollTop = 0;

    // 1. Activate target view FIRST so there is no empty-frame layout collapse
    targetView.classList.add('active');

    // 2. Deactivate all other views and reset their internal scrolls
    document.querySelectorAll('.page-view').forEach(view => {
      if (view !== targetView) {
        view.classList.remove('active');
        view.scrollTop = 0;
      }
    });

    // Re-verify top scroll after DOM paint
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 3. Header display
    if (target === 'intro') {
      header.style.display = 'none';
    } else {
      header.style.display = 'flex';
      header.classList.remove('dark-mode');
    }

    // 4. Footer visibility: hide on #intro and #contact
    const footer = document.querySelector('.site-footer');
    if (footer) {
      footer.style.display = (target === 'home' || target === 'projects' || target === 'studio') ? 'block' : 'none';
    }

    // 5. Update URL in address bar silently via replaceState (no hashchange loop or anchor jumps)
    if (window.location.hash.toLowerCase() !== targetHash) {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', targetHash);
      } else {
        window.location.hash = targetHash;
      }
    }

    // 6. Update active nav links in drawer
    document.querySelectorAll('.nav-item-link').forEach(link => {
      const href = (link.getAttribute('href') || '').replace('#', '').toLowerCase();
      if (href === target) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });

    currentActiveView = target;
    lastActiveRoute = targetHash;
  }

  function handleRoute() {
    const rawHash = window.location.hash || '#intro';
    const hash = rawHash.toLowerCase();

    // Check if route is project detail
    if (hash.startsWith('#project/')) {
      // Ensure the underlying page view is active so closing modal reveals proper page
      const activeUnderlying = lastActiveRoute || '#home';
      const underlyingViewId = activeUnderlying.replace('#', '') + '-view';
      document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
      const baseView = document.getElementById(underlyingViewId) || document.getElementById('home-view');
      if (baseView) baseView.classList.add('active');

      const projectId = hash.replace('#project/', '');
      openProjectModal(projectId);
      if (projectModal) projectModal.scrollTop = 0;
      return;
    }

    const clean = hash.replace('#', '');
    const validRoutes = ['intro', 'home', 'projects', 'studio', 'contact'];
    const target = validRoutes.includes(clean) ? clean : 'home';

    // Prevent duplicate switchView execution if target view is already actively visible
    if (currentActiveView === target && (!projectModal || !projectModal.classList.contains('active'))) {
      return;
    }

    switchView(hash);
  }

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('popstate', handleRoute);

  // ==========================================
  // 4. FULLSCREEN MENU DRAWER
  // ==========================================
  function openNavMenu() {
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNavMenu() {
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openNavMenu);
  if (navCloseBtn) navCloseBtn.addEventListener('click', closeNavMenu);

  // Close nav drawer immediately on link click (even if navigating to same page)
  document.querySelectorAll('.nav-item-link').forEach(link => {
    link.addEventListener('click', () => {
      closeNavMenu();
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNavMenu();
      closeProjectModal(true);
    }
  });

  // ==========================================
  // 5. RENDER PROJECTS GRID & FILTERING
  // ==========================================
  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.dataset.id = p.id;
      card.innerHTML = `
        <div class="project-card-image-wrap">
          <img src="${p.leadImage}" alt="${p.title}" class="project-card-img" loading="lazy">
          <div class="project-card-overlay">
            <span class="card-view-indicator">View Project &rarr;</span>
          </div>
        </div>
        <div class="project-card-details">
          <div class="project-card-meta">
            <span>${p.categoryLabel}</span>
            <span>${p.area || ''}</span>
          </div>
          <h3 class="project-card-title">${p.title}</h3>
        </div>
      `;

      card.addEventListener('click', () => {
        openProject(p.id);
      });

      projectsGrid.appendChild(card);
    });
  }

  function openProject(projectId) {
    if (!projectId) return;
    openProjectModal(projectId);
    if (projectModal) {
      projectModal.scrollTop = 0;
    }
    const targetHash = `#project/${projectId}`;
    if (window.location.hash.toLowerCase() !== targetHash.toLowerCase()) {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', targetHash);
      } else {
        window.location.hash = targetHash;
      }
    }
  }

  renderProjects();

  // Filter Chips logic
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filterValue = chip.dataset.filter;
      renderProjects(filterValue);
    });
  });

  // Also bind Home featured cards
  document.querySelectorAll('.featured-project-item').forEach(item => {
    item.addEventListener('click', () => {
      const projectId = item.dataset.project;
      if (projectId) {
        openProject(projectId);
      }
    });
  });

  // ==========================================
  // 6. PROJECT MODAL / CASE STUDY VIEW
  // ==========================================
  function openProjectModal(projectId) {
    if (!projectId) return;
    const clean = decodeURIComponent(projectId).trim().toLowerCase();
    const slug = clean.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const index = projectsData.findIndex(p => {
      const pId = p.id.toLowerCase();
      const pSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return pId === clean || pId === slug || pSlug === slug ||
        (clean === 'soul-foods' && p.id === 'the-soul-foods') ||
        (clean === 'green-terraces' && p.id === 'green-terraces-interiors') ||
        (clean === 'thrdspace' && p.id === 'thrdspace-studio') ||
        (clean === 'thrdspac' && p.id === 'thrdspace-studio') ||
        (clean === 'vega' && p.id === 'residential-green-building');
    });
    if (index === -1) return;

    currentProjectIndex = index;
    const project = projectsData[index];

    // Populate modal contents
    document.getElementById('modal-title').textContent = project.title;
    const modalHeroImg = document.getElementById('modal-hero-img');
    modalHeroImg.src = project.leadImage;
    modalHeroImg.alt = project.title;
    modalHeroImg.style.cursor = 'zoom-in';
    modalHeroImg.onclick = () => {
      openGalleryLightbox([project.leadImage, ...project.galleryImages], 0, project.title);
    };

    document.getElementById('modal-type').textContent = project.categoryLabel;
    document.getElementById('modal-client').textContent = project.client;
    const areaEl = document.getElementById('modal-area');
    if (areaEl) areaEl.textContent = project.area || '';
    document.getElementById('modal-location').textContent = project.location;
    document.getElementById('modal-desc').textContent = project.description;

    const galleryGrid = document.getElementById('modal-gallery');
    galleryGrid.innerHTML = '';
    project.galleryImages.forEach((imgUrl, idx) => {
      const item = document.createElement('div');
      item.className = 'modal-gallery-item';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `View image ${idx + 1} enlarged`);
      item.innerHTML = `<img src="${imgUrl}" alt="${project.title} Detail ${idx + 1}" loading="lazy">`;
      item.addEventListener('click', () => {
        openGalleryLightbox(project.galleryImages, idx, project.title);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openGalleryLightbox(project.galleryImages, idx, project.title);
        }
      });
      galleryGrid.appendChild(item);
    });

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    projectModal.scrollTop = 0;
  }

  function closeProjectModal(updateHash = true) {
    closeGalleryLightbox();
    if (projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (updateHash && window.location.hash.toLowerCase().startsWith('#project/')) {
      const targetHash = lastActiveRoute || '#home';
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', targetHash);
      } else {
        window.location.hash = targetHash;
      }
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeProjectModal(true);
    });
  }

  // Close modal on backdrop click outside the card
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal(true);
      }
    });
  }

  // Next / Prev Project Navigation
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
      openProject(projectsData[currentProjectIndex].id);
      if (projectModal) projectModal.scrollTop = 0;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
      openProject(projectsData[currentProjectIndex].id);
      if (projectModal) projectModal.scrollTop = 0;
    });
  }

  // ==========================================
  // 6b. GALLERY LIGHTBOX PREVIEWER
  // ==========================================
  const galleryLightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  let activeLightboxImages = [];
  let currentLightboxIdx = 0;
  let activeProjectTitle = '';

  function openGalleryLightbox(images, startIndex = 0, title = '') {
    if (!galleryLightbox || !images || images.length === 0) return;
    activeLightboxImages = images;
    currentLightboxIdx = startIndex;
    activeProjectTitle = title;
    updateLightboxContent();
    galleryLightbox.classList.add('active');
    galleryLightbox.setAttribute('aria-hidden', 'false');
  }

  function closeGalleryLightbox() {
    if (!galleryLightbox) return;
    galleryLightbox.classList.remove('active');
    galleryLightbox.setAttribute('aria-hidden', 'true');
  }

  function updateLightboxContent() {
    if (!lightboxImg || activeLightboxImages.length === 0) return;
    const currentUrl = activeLightboxImages[currentLightboxIdx];
    lightboxImg.src = currentUrl;
    lightboxImg.alt = `${activeProjectTitle} - Detail ${currentLightboxIdx + 1}`;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIdx + 1} / ${activeLightboxImages.length}`;
    }
  }

  function nextLightboxImage() {
    if (activeLightboxImages.length <= 1) return;
    currentLightboxIdx = (currentLightboxIdx + 1) % activeLightboxImages.length;
    updateLightboxContent();
  }

  function prevLightboxImage() {
    if (activeLightboxImages.length <= 1) return;
    currentLightboxIdx = (currentLightboxIdx - 1 + activeLightboxImages.length) % activeLightboxImages.length;
    updateLightboxContent();
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeGalleryLightbox();
    });
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevLightboxImage();
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextLightboxImage();
    });
  }

  if (galleryLightbox) {
    galleryLightbox.addEventListener('click', (e) => {
      if (e.target === galleryLightbox || e.target.classList.contains('lightbox-stage')) {
        closeGalleryLightbox();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!galleryLightbox || !galleryLightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeGalleryLightbox();
    } else if (e.key === 'ArrowRight') {
      nextLightboxImage();
    } else if (e.key === 'ArrowLeft') {
      prevLightboxImage();
    }
  });

  // ==========================================
  // 7. CONTACT INQUIRY FORM
  // ==========================================
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = inquiryForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'TRANSMITTING INQUIRY...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        inquiryForm.reset();

        formNotification.classList.add('active');
        formNotification.textContent = 'Thank you. Your architectural inquiry has been received by Navyam atelier & co. Our principals will respond within 24 hours.';

        setTimeout(() => {
          formNotification.classList.remove('active');
        }, 8000);
      }, 1000);
    });
  }

  // ==========================================
  // 8. INTRO PAGE AMBIENT SOUND & PARTICLES
  // ==========================================
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  let isSoundOn = false;

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundOn = !isSoundOn;
      soundToggleBtn.innerHTML = isSoundOn
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
    });
  }

  // ==========================================
  // 8b. CONTACT CLOSE BUTTONS & LINK INTERCEPTION
  // ==========================================


  const contactTopCloseBtn = document.getElementById('contact-top-close-btn');
  if (contactTopCloseBtn) {
    contactTopCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      switchView('home');
    });
  }

  // Intercept all internal anchor clicks for instant, glitch-free view switching
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#project/')) {
      e.preventDefault();
      const pId = href.replace('#project/', '');
      openProject(pId);
    } else if (['#home', '#projects', '#studio', '#contact', '#intro'].includes(href.toLowerCase())) {
      e.preventDefault();
      switchView(href.toLowerCase());
    }
  });

  // ==========================================
  // 9. INITIAL ROUTE EXECUTION
  // ==========================================
  const currentHash = window.location.hash ? window.location.hash.toLowerCase() : '';
  if (!currentHash || currentHash === '#') {
    window.location.hash = '#intro';
  }
  handleRoute();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
