/* ============================================
   C-FIX Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Loading Screen ----
  const loader = document.querySelector('.loading-screen');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 2000);
    });
    // Fallback
    setTimeout(() => loader.classList.add('hidden'), 3500);
  }

  // ---- Hamburger Menu ----
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Header scroll ----
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ---- Scroll reveal ----
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  }

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ---- Service Map (Leaflet) ----
  const mapEl = document.getElementById('service-map');
  if (mapEl && typeof L !== 'undefined') {
    const map = L.map('service-map', {
      scrollWheelZoom: false
    }).setView([52.22, 5.49], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const locations = [
      { name: 'Nijkerk (Hoofdlocatie)', lat: 52.2228, lng: 5.4883 },
      { name: 'Amersfoort', lat: 52.1561, lng: 5.3878 },
      { name: 'Harderwijk', lat: 52.3420, lng: 5.6208 },
      { name: 'Ermelo', lat: 52.3020, lng: 5.6217 },
      { name: 'Putten', lat: 52.2586, lng: 5.6069 },
      { name: 'Bunschoten-Spakenburg', lat: 52.2465, lng: 5.3780 },
      { name: 'Zeewolde', lat: 52.3310, lng: 5.5414 },
      { name: 'Voorthuizen', lat: 52.1850, lng: 5.6100 },
      { name: 'Nijkerkerveen', lat: 52.2100, lng: 5.4600 },
      { name: 'Hoevelaken', lat: 52.1750, lng: 5.4600 },
      { name: 'Vathorst', lat: 52.1900, lng: 5.4200 },
      { name: 'Terschuur', lat: 52.1700, lng: 5.5000 },
      { name: 'Zwartebroek', lat: 52.1900, lng: 5.5200 },
      { name: 'Schothorst', lat: 52.1750, lng: 5.3700 },
      { name: 'Centrum Amersfoort', lat: 52.1570, lng: 5.3920 }
    ];

    const greenIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width:14px;height:14px;background:#5CE65C;border:3px solid #0C6170;border-radius:50%;box-shadow:0 0 8px rgba(92,230,92,0.6);"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    const mainIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width:20px;height:20px;background:#0C6170;border:3px solid #5CE65C;border-radius:50%;box-shadow:0 0 12px rgba(12,97,112,0.5);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    locations.forEach(loc => {
      const icon = loc.name.includes('Nijkerk (Hoofd') ? mainIcon : greenIcon;
      L.marker([loc.lat, loc.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong style="color:#0C6170;">${loc.name}</strong>`);
    });

    // Service area polygon
    const areaCoords = [
      [52.3420, 5.6208], // Harderwijk
      [52.3310, 5.5414], // Zeewolde
      [52.3020, 5.6217], // Ermelo
      [52.2586, 5.6069], // Putten
      [52.2465, 5.3780], // Bunschoten
      [52.1561, 5.3878], // Amersfoort
      [52.1700, 5.5000], // Terschuur
      [52.1850, 5.6100], // Voorthuizen
    ];

    // Convex hull approximation for service area
    const hullCoords = [
      [52.35, 5.62],
      [52.34, 5.54],
      [52.28, 5.36],
      [52.15, 5.36],
      [52.15, 5.38],
      [52.16, 5.50],
      [52.18, 5.62],
      [52.26, 5.63],
      [52.31, 5.63],
    ];

    L.polygon(hullCoords, {
      color: '#5CE65C',
      weight: 2,
      fillColor: '#5CE65C',
      fillOpacity: 0.12,
      dashArray: '6'
    }).addTo(map);
  }
});
