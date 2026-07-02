/* ============================================
   WILDMAN HUNTING & OUTDOOR ROBERTSON
   Shared Components: Nav + Footer
   ============================================ */

const WA_NUMBER = '27639370985';
const WA_MESSAGE = encodeURIComponent('Hi Wildman Robertson! I found you online and would like to find out more.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const NAV_HTML = `
<div class="announcement-bar">
  🔥 In-store SPECIALS every week! Visit us at 8 Voortrekker Ave, Robertson &nbsp;|&nbsp;
  <a href="tel:0230360000">023 036 0000</a>
</div>
<nav class="navbar" id="mainNav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Wildman Robertson Home">
      <img src="images/logo-dark.png" alt="Wildman Hunting & Outdoor Robertson" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="nav-logo-fallback" style="display:none">
        <span class="brand">WILDMAN</span>
        <span class="loc">Robertson</span>
      </div>
    </a>

    <div class="nav-links" id="navLinks">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="specials.html" style="color:var(--yellow)">🔥 Specials</a>
      <a href="services.html">Services</a>
      <a href="firearms.html">Firearms</a>
      <a href="second-hand.html">2nd Hand</a>
      <a href="outdoor-gear.html">Outdoor</a>
      <a href="fishing.html">Fishing</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
    </div>

    <div class="nav-right">
      <div class="nav-phone-block">
        <span class="label">Call Us</span>
        <a href="tel:0230360000">023 036 0000</a>
      </div>
      <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn-wa-nav">
        <i class="fab fa-whatsapp"></i>
        <span class="wa-text">WhatsApp</span>
      </a>
      <button class="hamburger" id="hamburger" aria-label="Toggle Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="specials.html" style="color:var(--yellow);font-weight:700">🔥 Current Specials</a>
  <a href="services.html">Services</a>
  <a href="firearms.html">Firearms</a>
  <a href="second-hand.html">Second Hand Firearms</a>
  <a href="outdoor-gear.html">Outdoor Gear</a>
  <a href="fishing.html">Fishing</a>
  <a href="blog.html">Blog</a>
  <a href="contact.html">Contact</a>
  <div class="mobile-contact-info">
    <p>Get in touch</p>
    <a href="tel:0230360000"><i class="fas fa-phone"></i> 023 036 0000</a>
    <a href="${WA_LINK}" target="_blank"><i class="fab fa-whatsapp"></i> 063 937 0985</a>
    <a href="mailto:Info@wildmanrob.co.za"><i class="fas fa-envelope"></i> Info@wildmanrob.co.za</a>
  </div>
</div>

<a href="${WA_LINK}" target="_blank" rel="noopener" class="wa-float" title="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
  <span class="wa-text">Chat with us</span>
</a>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <img src="images/logo-white.png" alt="Wildman Hunting & Outdoor Robertson" class="footer-logo" onerror="this.outerHTML='<div style=&quot;font-size:1.4rem;font-weight:900;background:linear-gradient(90deg,#FFD700,#FF6600,#CC0000);-webkit-background-clip:text;-webkit-text-fill-color:transparent&quot;>WILDMAN ROBERTSON</div>'">
      <p class="footer-brand-desc">Robertson's premier hunting and outdoor shop. Your trusted partner for firearms, ammunition, fishing gear, outdoor equipment and expert advice in the Breede River Valley.</p>
      <div class="footer-socials">
        <a href="https://www.facebook.com/RobertsonWildman" target="_blank" rel="noopener" class="soc-btn" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/wildmanrob" target="_blank" rel="noopener" class="soc-btn" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${WA_LINK}" target="_blank" rel="noopener" class="soc-btn" title="WhatsApp Us"><i class="fab fa-whatsapp"></i></a>
        <a href="https://chat.whatsapp.com/IIXR1mRwYDpJ2DSXqLEUa3" target="_blank" rel="noopener" class="soc-btn" title="Join our WhatsApp Group" style="font-size:0.7rem;font-weight:700;width:auto;padding:0 0.6rem;border-radius:20px">GROUP</a>
      </div>
    </div>

    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Our Services</a></li>
        <li><a href="firearms.html">Firearms</a></li>
        <li><a href="second-hand.html">Second Hand Firearms</a></li>
        <li><a href="outdoor-gear.html">Outdoor Gear</a></li>
        <li><a href="fishing.html">Fishing</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html#licensing">Firearm Licensing</a></li>
        <li><a href="services.html#narfo">NARFO Membership</a></li>
        <li><a href="services.html#npo">NPO Services</a></li>
        <li><a href="services.html#finance">Payment Plans</a></li>
        <li><a href="services.html#rewards">Rewards Program</a></li>
        <li><a href="services.html#gunsmith">Gunsmith</a></li>
        <li><a href="second-hand.html">Trade-Ins</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Contact Us</h4>
      <div class="footer-contact-row">
        <i class="fas fa-map-marker-alt"></i>
        <span>8 Voortrekker Ave, Robertson, 6705</span>
      </div>
      <div class="footer-contact-row">
        <i class="fas fa-phone"></i>
        <a href="tel:0230360000">023 036 0000</a>
      </div>
      <div class="footer-contact-row">
        <i class="fab fa-whatsapp"></i>
        <a href="${WA_LINK}" target="_blank">063 937 0985</a>
      </div>
      <div class="footer-contact-row">
        <i class="fas fa-envelope"></i>
        <a href="mailto:Info@wildmanrob.co.za">Info@wildmanrob.co.za</a>
      </div>
      <div class="hours-table" style="margin-top:1rem">
        <div class="hour-row"><span class="day">Mon – Fri</span><span class="time">09:00 – 17:00</span></div>
        <div class="hour-row"><span class="day">Saturday</span><span class="time">09:00 – 14:00</span></div>
        <div class="hour-row closed"><span class="day">Sunday</span><span class="time">Closed</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} Wildman Hunting & Outdoor Robertson. All rights reserved.</p>
    <div class="footer-legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>
  </div>
</footer>
`;

function injectComponents() {
  const navSlot = document.getElementById('nav-slot');
  if (navSlot) navSlot.outerHTML = NAV_HTML;

  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

  // Set active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', injectComponents);
