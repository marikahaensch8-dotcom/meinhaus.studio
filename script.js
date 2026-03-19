// mein haus — script.js

(function () {
    'use strict';

    // ---------- Translations ----------
    const translations = {
        en: {
            'nav.logo': 'meinhaus',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Contact',
            'nav.cta': 'Start a project',
            'nav.cta2': 'come<br>in.',
            'nav.cta3': 'come in.',

            'hero.title': 'Every brand<br>needs a home.',
            'hero.subtitle': 'We\'re mein haus — a creative studio shaping brands from the ground up. We build identities, digital experiences, and visual narratives for founders and visionaries. From concept to craft, everything we make is built to resonate.',
            'hero.scroll': '(Scroll)',
            'hero.tagline': 'Branding & web design<br>from vision to home.',
            'hero.statement': '<span class="hero-bold">Every brand needs a home.</span> We are meinhaus – a creative studio for people who are building something good.',

            'rooms.label': 'What we do',
            'rooms.title': 'Step inside.',
            'rooms.title2': 'Come in.',
            'rooms.intro': 'We think of our services as rooms — each one serves a purpose,<br>but together they make a home.',
            'rooms.intro2': 'We think of our services as rooms. Each one serves a purpose, but together they make a home.',
            'rooms.foundation.name': 'The Foundation',
            'rooms.foundation.desc': 'Every good house starts here. We build identities from the ground up — strategy, visual language, and everything that makes your brand feel like yours.',
            'rooms.door.name': 'The Front Door',
            'rooms.door.desc': 'First impressions matter. We craft digital spaces your audience actually wants to walk through — and stay a while.',
            'rooms.interior.name': 'The Interior',
            'rooms.interior.desc': 'A house only becomes a home when it comes alive. We shape the inside of your brand — visual content, art direction, and everything that gives your identity soul.',
            'rooms.coming': 'Under construction',
            'rooms.atelier.name': 'The Atelier',
            'rooms.study.name': 'The Study',
            'rooms.blueprint.name': 'The Blueprint Room',
            'rooms.blueprint.service': 'Visual Strategy',

            'neighbors.label': 'Who we build for',
            'neighbors.title': 'We\'re picky about<br>our neighbors.',
            'neighbors.text1': 'We work with founders, startups, coaches, and individuals who are building something meaningful — in education, sustainability, and everything that makes the world a little better.',
            'neighbors.text2': 'No mass production. No greenwashing. No toxic stuff.<br>Just good people, doing good things.',

            'approach.label': 'Why work with us',
            'approach.title': 'An architect and a designer<br>walk into a studio.',
            'approach.text1': 'Sounds like a joke, but it\'s actually our origin story. We combine spatial thinking with visual craft. Strategy with soul. Big-picture vision with pixel-perfect detail.',
            'approach.text2': 'Think of us as your brand\'s architects — we don\'t just decorate, we build from the foundation up.',
            'approach.v1.title': 'Strategy first',
            'approach.v1.text': 'Every project starts with understanding — your goals, your audience, your story. We plan before we build.',
            'approach.v2.title': 'Built to last',
            'approach.v2.text': 'No trends for the sake of trends. We create work that ages well and grows with you.',
            'approach.v3.title': 'Personal, always',
            'approach.v3.text': 'Two people, no layers. You work directly with us — the ones actually doing the work.',

            'about.label': 'About',
            'about.title': 'Who lives here.',
            'about.emma.role': 'The one who thinks in spaces',
            'about.emma.bio': 'Architect by training. Strategist by nature. Emma brings structure, spatial thinking, and a knack for seeing the big picture. She turns chaos into systems and systems into stories.',
            'about.emma.skill3': 'Strategy',
            'about.marika.role': 'The one who thinks in pixels',
            'about.marika.bio': 'Designer by craft. Brand nerd by heart. Marika shapes identities, builds digital experiences, and occasionally draws things just because. She turns ideas into visuals and visuals into feelings.',

            'contact.title': 'The door is<br>always open.',
            'contact.text': 'Got a project? A wild idea? A napkin sketch<br>that could be something? Let\'s talk.',

            'footer.copy': '© 2026 mein haus. All rights reserved.',
        },
        de: {
            'nav.logo': 'meinhaus',
            'nav.about': 'über uns',
            'nav.services': 'Leistungen',
            'nav.portfolio': 'projekte',
            'nav.contact': 'kontakt',
            'nav.cta': 'Projekt starten',
            'nav.cta2': 'komm<br>rein.',
            'nav.cta3': 'komm rein.',

            'hero.title': 'Jede Marke braucht<br>ein Zuhause.',
            'hero.subtitle': 'Wir sind mein haus — ein Kreativstudio, das Marken von Grund auf baut. Wir gestalten Identitäten, digitale Erlebnisse und visuelle Geschichten für Gründer*innen und Visionär*innen. Vom Konzept bis zum Handwerk — alles, was wir machen, ist gebaut, um zu wirken.',
            'hero.scroll': '(Scrollen)',
            'hero.tagline': 'Branding & Webdesign<br>von der Vision zum Zuhause.',
            'hero.statement': '<span class="hero-bold">Jede Marke braucht ein Zuhause.</span> Wir sind meinhaus – ein Kreativstudio für Menschen, die etwas Gutes aufbauen.',

            'rooms.label': 'Was wir machen',
            'rooms.title': 'Komm rein.',
            'rooms.title2': 'Komm rein.',
            'rooms.intro': 'Wir denken unsere Leistungen als Räume — jeder hat seine Aufgabe,<br>aber zusammen ergeben sie ein Zuhause.',
            'rooms.intro2': 'Wir denken unsere Leistungen als Räume. Jeder hat seine Aufgabe, aber zusammen ergeben sie ein Zuhause.',
            'rooms.foundation.name': 'Das Fundament',
            'rooms.foundation.desc': 'Jedes gute Haus fängt hier an. Wir bauen Identitäten von Grund auf — Strategie, visuelle Sprache und alles, was deine Marke zu deiner Marke macht.',
            'rooms.door.name': 'Die Haustür',
            'rooms.door.desc': 'Der erste Eindruck zählt. Wir gestalten digitale Räume, durch die dein Publikum gerne geht — und gerne bleibt.',
            'rooms.interior.name': 'Das Interior',
            'rooms.interior.desc': 'Ein Haus ist erst ein Zuhause, wenn es lebt. Wir gestalten das Innere eurer Marke — Visual Content, Art Direction und alles, was eurer Identität Seele gibt.',
            'rooms.coming': 'Wird noch eingerichtet',
            'rooms.atelier.name': 'Das Atelier',
            'rooms.study.name': 'Die Bibliothek',
            'rooms.blueprint.name': 'Der Planraum',
            'rooms.blueprint.service': 'Visuelle Strategie',

            'neighbors.label': 'Für wen wir bauen',
            'neighbors.title': 'Wir suchen uns unsere<br>Nachbarn gut aus.',
            'neighbors.text1': 'Wir arbeiten mit Gründer*innen, Startups, Coaches und Menschen, die etwas Sinnvolles aufbauen — in Bildung, Nachhaltigkeit und allem, was die Welt ein bisschen besser macht.',
            'neighbors.text2': 'Keine Massenproduktion. Kein Greenwashing. Nichts Giftiges.<br>Einfach gute Menschen, die Gutes tun.',

            'approach.label': 'Warum mit uns',
            'approach.title': 'Eine Architektin und eine<br>Designerin betreten ein Studio.',
            'approach.text1': 'Klingt wie ein Witz, ist aber tatsächlich unsere Geschichte. Wir verbinden räumliches Denken mit visuellem Handwerk. Strategie mit Seele. Den großen Überblick mit pixelgenauem Detail.',
            'approach.text2': 'Stell dir uns als die Architektinnen deiner Marke vor — wir dekorieren nicht nur, wir bauen von Grund auf.',
            'approach.v1.title': 'Strategie zuerst',
            'approach.v1.text': 'Jedes Projekt beginnt mit Verstehen — deine Ziele, dein Publikum, deine Geschichte. Wir planen, bevor wir bauen.',
            'approach.v2.title': 'Gebaut für die Dauer',
            'approach.v2.text': 'Keine Trends um der Trends willen. Wir schaffen Arbeit, die gut altert und mit dir wächst.',
            'approach.v3.title': 'Persönlich, immer',
            'approach.v3.text': 'Zwei Menschen, keine Umwege. Du arbeitest direkt mit uns — den Leuten, die die Arbeit auch wirklich machen.',

            'about.label': 'Über uns',
            'about.title': 'Wer hier wohnt.',
            'about.emma.role': 'Die, die in Räumen denkt',
            'about.emma.bio': 'Architektin von Beruf. Strategin von Natur aus. Emma bringt Struktur, räumliches Denken und ein Gespür fürs große Ganze mit. Sie verwandelt Chaos in Systeme und Systeme in Geschichten.',
            'about.emma.skill3': 'Strategie',
            'about.marika.role': 'Die, die in Pixeln denkt',
            'about.marika.bio': 'Designerin aus Leidenschaft. Markennerd aus vollem Herzen. Marika formt Identitäten, baut digitale Erlebnisse und zeichnet manchmal einfach, weil sie kann. Sie verwandelt Ideen in Bilder und Bilder in Gefühle.',

            'contact.title': 'Die Tür steht<br>immer offen.',
            'contact.text': 'Ein Projekt? Eine wilde Idee? Eine Skizze auf der Serviette,<br>aus der was werden könnte? Lass uns reden.',

            'footer.copy': '© 2026 mein haus. Alle Rechte vorbehalten.',
        },
    };

    // ---------- Language toggle ----------
    let currentLang = localStorage.getItem('meinhaus-lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('meinhaus-lang', lang);
        document.documentElement.lang = lang;

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang][key];
            if (text) {
                el.innerHTML = text;
            }
        });

        // Update toggle buttons to show the OTHER language
        const otherLang = lang === 'en' ? 'DE' : 'EN';
        document.querySelectorAll('.lang-toggle').forEach((btn) => {
            btn.textContent = otherLang;
        });

        // Update meta description
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.content = lang === 'en'
                ? 'mein haus is a creative studio for founders and changemakers. Branding and web design that feels like home.'
                : 'mein haus ist ein Kreativstudio für Gründer*innen und Changemaker. Branding und Webdesign, das sich wie Zuhause anfühlt.';
        }
    }

    // Bind toggle buttons
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'de' : 'en';
            setLanguage(newLang);
        });
    });

    // Apply saved language on load
    setLanguage(currentLang);

    // ---------- Scroll reveal ----------
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    // ---------- Nav scroll state ----------
    const nav = document.getElementById('nav');
    const navBottom = document.getElementById('nav-bottom');

    function onScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            if (navBottom) navBottom.classList.add('visible');
        } else {
            nav.classList.remove('scrolled');
            if (navBottom) navBottom.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ---------- Mobile menu ----------
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
        const isActive = toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ---------- Rooms showcase ----------
    const thumbs = document.querySelectorAll('.rooms-thumb');
    const panels = document.querySelectorAll('.rooms-panel');
    const infos = document.querySelectorAll('.rooms-info');

    function setActiveRoom(index) {
        thumbs.forEach((t) => t.classList.remove('active'));
        panels.forEach((p) => p.classList.remove('active'));
        infos.forEach((i) => i.classList.remove('active'));
        if (thumbs[index]) thumbs[index].classList.add('active');
        if (panels[index]) panels[index].classList.add('active');
        if (infos[index]) infos[index].classList.add('active');
    }

    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            setActiveRoom(Number(thumb.dataset.room));
        });
    });

    // Scroll-driven: cycle through rooms while sticky
    const roomsScroll = document.getElementById('rooms-scroll');
    if (roomsScroll) {
        let lastScrollRoom = 0;
        window.addEventListener('scroll', function () {
            const rect = roomsScroll.getBoundingClientRect();
            const scrollRange = roomsScroll.offsetHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(1, -rect.top / scrollRange));
            const roomIndex = Math.min(2, Math.floor(progress * 3));
            if (roomIndex !== lastScrollRoom) {
                lastScrollRoom = roomIndex;
                setActiveRoom(roomIndex);
            }
        }, { passive: true });
    }

    // ---------- Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const offset = nav.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // ---------- Hide scroll indicator on scroll ----------
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        const hideObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    heroScroll.style.opacity = entry.isIntersecting ? '' : '0';
                });
            },
            { threshold: 0.8 }
        );
        hideObserver.observe(document.getElementById('hero'));
    }
})();
