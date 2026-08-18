/* Bharat Strategic Solution - App Logic */

// ========== DATA ==========
const services = [
  { title: 'IT Hardware Supply', desc: 'Laptops, desktops, servers and peripherals from trusted OEMs.', icon: 'monitor' },
  { title: 'Computer & Laptop Solutions', desc: 'Business-grade systems configured for productivity and security.', icon: 'laptop' },
  { title: 'Server Solutions', desc: 'Tower and rack servers with installation and configuration support.', icon: 'server' },
  { title: 'Networking Solutions', desc: 'Structured cabling, switches, Wi-Fi and network design.', icon: 'network' },
  { title: 'Hardware Installation', desc: 'On-site deployment, racking, imaging and hand-over.', icon: 'tool' },
  { title: 'IT Infrastructure Setup', desc: 'End-to-end infrastructure planning and implementation.', icon: 'layers' },
  { title: 'AMC Services', desc: 'Annual maintenance contracts for predictable uptime and cost control.', icon: 'shield' },
  { title: 'Hardware Repair & Support', desc: 'Break-fix, spare parts and multi-brand technical support.', icon: 'wrench' },
  { title: 'CCTV & Security', desc: 'Surveillance design, installation and ongoing monitoring support.', icon: 'camera' },
  { title: 'Data Center Solutions', desc: 'Rack, power, cooling and infrastructure for critical environments.', icon: 'database' },
  { title: 'System Integration', desc: 'Seamless integration of hardware, network and software layers.', icon: 'puzzle' },
  { title: 'Enterprise IT Support', desc: 'Dedicated support models for growing and mid-size enterprises.', icon: 'users' },
];

const solutions = [
  { title: 'Enterprise IT Infrastructure', desc: 'Complete design and deployment of scalable infrastructure foundations.' },
  { title: 'Networking & Connectivity', desc: 'High-availability LAN/WAN, wireless and secure access solutions.' },
  { title: 'Server & Storage', desc: 'Compute and storage platforms sized for performance and growth.' },
  { title: 'Workplace IT Solutions', desc: 'Endpoints, collaboration hardware and managed workplace services.' },
  { title: 'Security & Surveillance', desc: 'CCTV, access control and infrastructure security layers.' },
  { title: 'IT Hardware Procurement', desc: 'Transparent sourcing of quality hardware at competitive value.' },
  { title: 'Preventive Maintenance', desc: 'Scheduled health checks that reduce unexpected downtime.' },
  { title: 'Managed IT Support', desc: 'Ongoing support models so your team can focus on the business.' },
];

const products = [
  { name: 'Laptops', img: 'assets/images/laptop.jpg' },
  { name: 'Desktops', img: 'assets/images/desktop.jpg' },
  { name: 'Servers', img: 'assets/images/server.jpg' },
  { name: 'Networking', img: 'assets/images/network.jpg' },
  { name: 'Printers', img: 'assets/images/printer.jpg' },
  { name: 'Storage', img: 'assets/images/storage.jpg' },
  { name: 'UPS Systems', img: 'assets/images/ups.jpg' },
  { name: 'CCTV', img: 'assets/images/cctv.jpg' },
  { name: 'Accessories', img: 'assets/images/accessories.jpg' },
  { name: 'Peripherals', img: 'assets/images/peripherals.jpg' },
];

const industries = [
  { name: 'Healthcare', img: 'assets/images/healthcare.jpg' },
  { name: 'Education', img: 'assets/images/education.jpg' },
  { name: 'Manufacturing', img: 'assets/images/manufacturing.jpg' },
  { name: 'Retail', img: 'assets/images/retail.jpg' },
  { name: 'Banking & Finance', img: 'assets/images/banking.jpg' },
  { name: 'Government', img: 'assets/images/government.jpg' },
  { name: 'Corporate Offices', img: 'assets/images/corporate.jpg' },
  { name: 'Hospitality', img: 'assets/images/hospitality.jpg' },
];

const processSteps = [
  { num: '01', title: 'Understand', desc: 'We assess your current setup, goals and constraints.' },
  { num: '02', title: 'Recommend', desc: 'Clear proposals with the right hardware and approach.' },
  { num: '03', title: 'Deploy', desc: 'Professional installation, configuration and handover.' },
  { num: '04', title: 'Support', desc: 'Ongoing AMC, helpdesk and proactive maintenance.' },
];

const testimonials = [
  { quote: 'Prompt response and reliable hardware support. Our systems have been more stable since we engaged the team.', name: 'Operations Manager', role: 'Manufacturing Client' },
  { quote: 'Professional installation of networking and servers. Clear communication throughout the project.', name: 'IT Head', role: 'Education Institution' },
  { quote: 'Good value AMC and quick on-site support when we needed it most. Recommended for mid-size offices.', name: 'Admin Lead', role: 'Corporate Office' },
];

const faqs = [
  { q: 'What services does Bharat Strategic Solution provide?', a: 'We provide IT hardware supply, networking, server solutions, installation, AMC, repair support, CCTV, system integration and enterprise infrastructure services.' },
  { q: 'Do you offer Annual Maintenance Contracts (AMC)?', a: 'Yes. We offer flexible AMC plans covering preventive maintenance, break-fix support, spare parts and both on-site and remote assistance.' },
  { q: 'Which brands do you work with?', a: 'We work with major OEMs including Dell, HP, Lenovo, Cisco, Intel, APC, Hikvision, TP-Link and others based on customer requirements.' },
  { q: 'Do you provide pan-India support?', a: 'Yes, we support customers across India through a combination of on-site engineers and remote support capabilities.' },
  { q: 'How quickly can you respond to a support request?', a: 'Response times depend on the SLA selected. We prioritise critical issues and aim for rapid remote triage followed by on-site action when required.' },
];

const whyItems = [
  'Reliable Hardware',
  'Experienced Technical Team',
  'Fast Support Response',
  'Quality Products',
  'End-to-End IT Solutions',
  'Cost-Effective Services',
  'Preventive Maintenance Focus',
  'Enterprise-Ready Support',
];

// ========== ICONS (inline SVG map) ==========
const icons = {
  monitor: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  laptop: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  server: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
  network: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>`,
  tool: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  layers: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
  shield: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  wrench: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>`,
  camera: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
  database: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>`,
  puzzle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>`,
  users: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
};

// ========== RENDER SECTIONS ==========
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = services.map(s => `
    <article class="service-card reveal">
      <div class="icon-wrap">${icons[s.icon] || icons.monitor}</div>
      <h3 class="font-display font-semibold text-white text-lg mb-2">${s.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed mb-4">${s.desc}</p>
      <span class="cta-arrow inline-flex items-center gap-1 text-sm font-medium">
        Learn more
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </span>
    </article>
  `).join('');
}

function renderSolutions() {
  const grid = document.getElementById('solutions-grid');
  if (!grid) return;
  grid.innerHTML = solutions.map(s => `
    <div class="service-card reveal flex gap-4 items-start">
      <div class="w-10 h-10 rounded-lg bg-electric-500/15 flex items-center justify-center text-electric-400 shrink-0 mt-0.5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <div>
        <h3 class="font-semibold text-white mb-1">${s.title}</h3>
        <p class="text-slate-400 text-sm">${s.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderProducts() {
  const el = document.getElementById('products-scroll');
  if (!el) return;
  el.innerHTML = products.map(p => `
    <div class="product-card product-card-img">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <h4 class="text-white font-medium text-sm mt-3">${p.name}</h4>
    </div>
  `).join('');
}

function renderIndustries() {
  const grid = document.getElementById('industries-grid');
  if (!grid) return;
  grid.innerHTML = industries.map(i => `
    <div class="industry-card industry-card-img reveal group">
      <div class="industry-img-wrap">
        <img src="${i.img}" alt="${i.name}" loading="lazy" />
        <div class="industry-overlay"></div>
      </div>
      <h4 class="text-white font-medium text-sm relative z-10">${i.name}</h4>
    </div>
  `).join('');
}

function renderProcess() {
  const grid = document.getElementById('process-grid');
  if (!grid) return;
  grid.innerHTML = processSteps.map(p => `
    <div class="process-step reveal">
      <div class="num">${p.num}</div>
      <h3 class="font-display font-semibold text-white mb-2">${p.title}</h3>
      <p class="text-slate-400 text-sm">${p.desc}</p>
    </div>
  `).join('');
}

function renderWhy() {
  const list = document.getElementById('why-list');
  if (!list) return;
  list.innerHTML = whyItems.map(item => `
    <li class="flex items-center gap-3 text-slate-300">
      <span class="w-5 h-5 rounded-full bg-electric-500/20 flex items-center justify-center shrink-0">
        <svg class="w-3 h-3 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
      </span>
      ${item}
    </li>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal">
      <div class="flex gap-1 text-electric-400 mb-3">
        ${[1,2,3,4,5].map(() => `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
      </div>
      <p class="text-slate-300 text-sm leading-relaxed mb-4">"${t.quote}"</p>
      <div>
        <div class="font-medium text-white text-sm">${t.name}</div>
        <div class="text-slate-500 text-xs">${t.role}</div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = faqs.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button type="button" aria-expanded="false">
        <span>${f.q}</span>
        <svg class="chevron w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="answer">${f.a}</div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('button').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ========== LOADER ==========
function runGlobalLoader() {
  const loader = document.getElementById('global-loader');
  const progress = document.getElementById('loader-progress');
  if (!loader) return;

  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 18 + 8;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      if (progress) progress.style.width = '100%';
      setTimeout(() => {
        loader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        loader.style.opacity = '0';
        loader.style.transform = 'scale(1.02)';
        setTimeout(() => {
          loader.style.display = 'none';
          document.body.style.overflow = '';
        }, 650);
      }, 350);
    } else {
      if (progress) progress.style.width = p + '%';
    }
  }, 180);

  document.body.style.overflow = 'hidden';
}

// Mini loader for simulated nav (SPA feel)
let miniLoaderTimer = null;
function showMiniLoader(duration = 700) {
  const mini = document.getElementById('mini-loader');
  if (!mini) return;
  if (miniLoaderTimer) clearTimeout(miniLoaderTimer);
  mini.classList.remove('opacity-0', 'pointer-events-none');
  mini.classList.add('opacity-100');
  mini.style.opacity = '1';
  mini.style.pointerEvents = 'auto';
  miniLoaderTimer = setTimeout(() => {
    mini.classList.remove('opacity-100');
    mini.classList.add('opacity-0', 'pointer-events-none');
    mini.style.opacity = '0';
    mini.style.pointerEvents = 'none';
    miniLoaderTimer = null;
  }, duration);
}

// ========== INTERACTIONS ==========
function setupNav() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      mobileMenu?.classList.add('hidden');
      showMiniLoader(700);
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 200);
    });
  });
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if (prefersReducedMotion() || typeof gsap === 'undefined') {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Content blocks: fade + slide up
  els.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onComplete: () => el.classList.add('visible'),
      }
    );
  });

  // Soft section fade when scrolling between sections
  document.querySelectorAll('main > section').forEach(section => {
    gsap.fromTo(section,
      { opacity: 0.65 },
      {
        opacity: 1,
        duration: 0.55,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 94%',
          end: 'top 45%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Stagger cards in grids
  ['#services-grid', '#industries-grid', '#process-grid', '#testimonials-grid', '#solutions-grid'].forEach(sel => {
    const grid = document.querySelector(sel);
    if (!grid) return;
    const cards = grid.children;
    if (!cards.length) return;
    gsap.fromTo(cards,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });
}

function setupMicroInteractions() {
  if (prefersReducedMotion() || typeof gsap === 'undefined') return;

  // Buttons: hover scale + glow
  document.querySelectorAll('a[class*="rounded-full"], .btn-quote, button[type="submit"]').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.03, duration: 0.25, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.25, ease: 'power2.out' });
    });
    btn.addEventListener('mousedown', () => {
      gsap.to(btn, { scale: 0.97, duration: 0.1 });
    });
    btn.addEventListener('mouseup', () => {
      gsap.to(btn, { scale: 1.03, duration: 0.15 });
    });
  });

  // Service cards lift
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -8, duration: 0.35, ease: 'power2.out' });
      const icon = card.querySelector('.icon-wrap');
      if (icon) gsap.to(icon, { scale: 1.1, duration: 0.35, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.out' });
      const icon = card.querySelector('.icon-wrap');
      if (icon) gsap.to(icon, { scale: 1, duration: 0.35, ease: 'power2.out' });
    });
  });

  // Product / industry cards
  document.querySelectorAll('.product-card, .industry-card, .stat-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    });
  });

  // Nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { color: '#ffffff', duration: 0.2 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { color: '#94a3b8', duration: 0.2 });
    });
  });
}

function setupCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      if (!target) return;
      let current = 0;
      const step = Math.ceil(target / 40) || 1;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = current;
        }
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
    }
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupForm() {
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById('form-success');
    if (success) success.classList.remove('hidden');
    form.reset();
    if (success) setTimeout(() => success.classList.add('hidden'), 4000);
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderSolutions();
  renderProducts();
  renderIndustries();
  renderProcess();
  renderWhy();
  renderTestimonials();
  renderFAQ();

  runGlobalLoader();
  setupNav();
  setupReveal();
  setupCounters();
  setupBackToTop();
  setupForm();
  // Micro-interactions after DOM cards exist
  setTimeout(setupMicroInteractions, 100);
});
