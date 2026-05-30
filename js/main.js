/* ============================================================
   Fly2Sun.eu.org — Shared JavaScript
   Starfield · Navigation · Sound FX · Cursor Trail · Meteors
   ============================================================ */

// ==================== SOUND ENGINE (Web Audio API) ====================
const Sound = (() => {
    let ctx = null;
    function ensure() {
        if (!ctx) {
            try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
        }
        if (ctx && ctx.state === 'suspended') ctx.resume();
        return ctx;
    }
    function play(freq, dur, type='sine', vol=0.06, glide=0) {
        const c = ensure();
        if (!c) return;
        const t = c.currentTime;
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, t);
        if (glide) osc.frequency.linearRampToValueAtTime(freq + glide, t + dur);
        gain.gain.setValueAtTime(vol, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(t);
        osc.stop(t + dur);
    }
    return {
        hover()  { play(880, 0.08, 'sine', 0.03); },
        click()  { play(440, 0.12, 'sine', 0.05, -120); },
        woosh()  { play(200, 0.4, 'sawtooth', 0.02, -160); },
        chime()  { play(1200, 0.25, 'sine', 0.04); play(1600, 0.2, 'sine', 0.025); },
        blip()   { play(600, 0.06, 'square', 0.02); },
        init()   { ensure(); },
    };
})();

// Init audio on first user interaction
document.addEventListener('click', () => Sound.init(), { once: true });
document.addEventListener('touchstart', () => Sound.init(), { once: true });

// ==================== CURSOR TRAIL ====================
const CursorTrail = (() => {
    let dots = [];
    const MAX = 12;
    let mx = -100, my = -100;
    let enabled = window.innerWidth > 768;

    // Create trail dots
    const frag = document.createDocumentFragment();
    for (let i = 0; i < MAX; i++) {
        const d = document.createElement('div');
        d.style.cssText = `
            position:fixed;pointer-events:none;z-index:9999;
            width:4px;height:4px;border-radius:50%;
            background:rgba(0,220,255,0.5);
            box-shadow:0 0 6px rgba(0,220,255,0.6),0 0 14px rgba(0,200,255,0.3);
            transition:opacity 0.4s;
            opacity:0;
        `;
        document.body.appendChild(d);
        dots.push({ el: d, x: mx, y: my });
    }

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY;
        if (!enabled) return;
    });

    function update() {
        if (!enabled) { dots.forEach(d => d.el.style.opacity = '0'); requestAnimationFrame(update); return; }
        let px = mx, py = my;
        dots.forEach((d, i) => {
            const lag = (i + 1) / MAX;
            d.x += (px - d.x) * (0.3 - lag * 0.15);
            d.y += (py - d.y) * (0.3 - lag * 0.15);
            d.el.style.left = d.x + 'px';
            d.el.style.top = d.y + 'px';
            d.el.style.opacity = mx > 0 ? (0.5 - lag * 0.4) : '0';
            d.el.style.width = (4 - lag * 3) + 'px';
            d.el.style.height = (4 - lag * 3) + 'px';
            px = d.x; py = d.y;
        });
        requestAnimationFrame(update);
    }
    update();

    window.addEventListener('resize', () => { enabled = window.innerWidth > 768; });

    return { enable(v) { enabled = v; } };
})();

// ==================== STARFIELD ====================
const starCanvas = document.getElementById('starCanvas');
if (starCanvas) {
    const ctx = starCanvas.getContext('2d');
    let stars = [];
    const STAR_N = 320;
    let time = 0;

    function resizeStar() {
        starCanvas.width = window.innerWidth;
        starCanvas.height = window.innerHeight;
    }
    function initStars() {
        stars = [];
        for (let i = 0; i < STAR_N; i++) {
            stars.push({
                x: Math.random() * starCanvas.width,
                y: Math.random() * starCanvas.height,
                r: Math.random() * 2.2 + 0.2,
                sp: Math.random() * 0.016 + 0.004,
                off: Math.random() * Math.PI * 2,
                base: Math.random() * 0.7 + 0.3,
            });
        }
    }
    resizeStar();
    initStars();
    window.addEventListener('resize', () => { resizeStar(); initStars(); });

    function drawStars(ts) {
        time = ts;
        ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
        const nData = [
            { x: starCanvas.width * 0.18, y: starCanvas.height * 0.25, r: 200, c: 'rgba(0,60,150,0.022)' },
            { x: starCanvas.width * 0.80, y: starCanvas.height * 0.60, r: 240, c: 'rgba(40,0,100,0.020)' },
            { x: starCanvas.width * 0.50, y: starCanvas.height * 0.10, r: 170, c: 'rgba(0,100,140,0.020)' },
        ];
        for (const n of nData) {
            const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
            g.addColorStop(0, n.c); g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.fillRect(n.x - n.r, n.y - n.r, n.r * 2, n.r * 2);
        }
        for (const s of stars) {
            const a = Math.max(0.1, Math.min(1, s.base + Math.sin(ts * s.sp + s.off) * 0.28));
            ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill();
            if (s.r > 1.3 && a > 0.5) {
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(170,210,255,${a * 0.09})`; ctx.fill();
            }
        }
    }

    function loop(ts) { drawStars(ts); requestAnimationFrame(loop); }
    requestAnimationFrame(loop);
}

// ==================== NAVIGATION ====================
function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = links.classList.toggle('open');
            toggle.classList.toggle('open', isOpen);
            Sound.blip();
        });
        // Touch-friendly: close on link tap
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.classList.remove('open');
                Sound.click();
            });
        });
        // Close on outside click/tap
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.site-nav')) {
                links.classList.remove('open');
                toggle.classList.remove('open');
            }
        });
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && links.classList.contains('open')) {
                links.classList.remove('open');
                toggle.classList.remove('open');
            }
        });
    }
}
window._reinitNav = initNav;

// ==================== SCROLL REVEAL ====================
function initReveal() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0, rootMargin: '0px 0px 40px 0px' });
    document.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));
}

// ==================== METEORS ====================
function spawnMeteor() {
    const el = document.createElement('div');
    el.className = 'meteor';
    el.style.left = Math.random() * 80 + '%';
    el.style.top = Math.random() * 25 + '%';
    const dur = Math.random() * 1.2 + 1.3;
    el.style.animationDuration = dur + 's';
    document.body.appendChild(el);
    setTimeout(() => Sound.woosh(), dur * 300);
    el.addEventListener('animationend', () => el.remove());
}
function initMeteors() {
    spawnMeteor();
    setTimeout(spawnMeteor, 2000);
    setInterval(() => { if (Math.random() < 0.35) spawnMeteor(); }, 5000);
}

// ==================== TOOLTIP ====================
function bindTooltip(selector) {
    const tip = document.getElementById('tooltip');
    if (!tip) return;
    let currentEl = null;
    let touchTimer = null;
    const isMobile = () => window.innerWidth <= 480;

    function place(el) {
        const r = el.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        // Reset any inline transform so offsetWidth is accurate
        tip.style.transform = '';
        const tw = tip.offsetWidth || 200;
        const th = tip.offsetHeight || 80;

        let tx, ty;

        if (isMobile()) {
            // Mobile: center horizontally above or below the element
            tx = r.left + r.width / 2 - tw / 2;
            // Clamp to viewport edges with 8px margin
            tx = Math.max(8, Math.min(tx, vw - tw - 8));
            // Position above the element if there's room, otherwise below
            if (r.top - th - 10 > 10) {
                ty = r.top - th - 10;
            } else {
                ty = r.bottom + 10;
            }
            // Final clamp
            ty = Math.max(8, Math.min(ty, vh - th - 8));
        } else {
            // Desktop: to the right of element, flip to left if needed
            tx = r.right + 14;
            if (tx + tw > vw - 10) tx = r.left - tw - 14;
            tx = Math.max(8, tx);
            ty = r.top + r.height / 2 - th / 2;
            ty = Math.max(8, Math.min(ty, vh - th - 8));
        }

        tip.style.left = tx + 'px';
        tip.style.top = ty + 'px';
    }

    function show(el) {
        const info = el.dataset.info;
        if (!info) return;
        tip.innerHTML = info.replace(/\\n/g, '<br>');
        // Force layout so offsetWidth is correct before place()
        tip.style.opacity = '1';
        tip.style.display = 'block';
        currentEl = el;
        place(el);
        Sound.hover();
    }

    function hide() {
        tip.style.opacity = '0';
        currentEl = null;
        if (touchTimer) { clearTimeout(touchTimer); touchTimer = null; }
    }

    document.querySelectorAll(selector).forEach(el => {
        // --- Desktop: mouse events ---
        el.addEventListener('mouseenter', () => show(el));
        el.addEventListener('mousemove', () => { if (currentEl === el) place(el); });
        el.addEventListener('mouseleave', () => hide());

        // --- Mobile: touch events ---
        el.addEventListener('touchstart', (e) => {
            // Don't prevent default — let click/scroll work normally
            if (currentEl === el) {
                hide();
            } else {
                hide(); // close any open tooltip first
                show(el);
                // Auto-hide after 3 seconds
                if (touchTimer) clearTimeout(touchTimer);
                touchTimer = setTimeout(hide, 3000);
            }
        }, { passive: true });
    });

    // Hide tooltip on scroll or resize
    window.addEventListener('scroll', () => { if (currentEl) hide(); }, { passive: true });
    window.addEventListener('resize', () => { if (currentEl) hide(); });
    // Hide on tap elsewhere
    document.addEventListener('touchstart', (e) => {
        if (currentEl && !e.target.closest(selector)) hide();
    }, { passive: true });
}

// ==================== HOVER SOUND BINDING ====================
function bindHoverSound(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => Sound.hover());
    });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initMeteors();
    // Bind hover sounds to interactive elements
    bindHoverSound('.planet, .sun, .g-card, .feat-card, .lk, .guide-card, .kb-card, .link-card, .btn, .mission-item, .season-card, .gallery-card');
});
