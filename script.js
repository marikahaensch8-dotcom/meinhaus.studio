// mein haus — script.js

(function () {
    'use strict';

    // ---------- Translations ----------
    const translations = {
        en: {
            'nav.logo': 'meinhaus',
            'nav.about': 'about',
            'nav.services': 'services',
            'nav.portfolio': 'portfolio',
            'nav.contact': 'Contact',
            'nav.cta': 'Start a project',
            'nav.cta2': 'come<br>in.',
            'nav.cta3': 'come in.',

            'hero3d.left': 'meinhaus',
            'hero3d.right': 'your home.',

            'hero.title': 'Every brand<br>needs a home.',
            'hero.subtitle': 'We\'re mein haus — a creative studio shaping brands from the ground up. We build identities, digital experiences, and visual narratives for founders and visionaries. From concept to craft, everything we make is built to resonate.',
            'hero.scroll': '(Scroll)',
            'hero.tagline': 'Branding & web design<br>from vision to home.',
            'hero.statement': '<span class="hero-bold">Every brand needs a home.</span> We are meinhaus, a design studio for branding, web and everything that makes your brand visible.',

            'rooms.label': 'What we do',
            'rooms.title': 'Step inside.',
            'rooms.title2': 'What we do',
            'rooms.intro': 'We think of our services as rooms — each one serves a purpose,<br>but together they make a home.',
            'rooms.intro2': 'We think of our services as rooms. Each one serves a purpose, but together they make a home.',
            'rooms.s1.keyword': 'Branding',
            'rooms.s1.text': 'The foundation. We build identities from the ground up — strategy, visual language and everything that makes your brand yours.',
            'rooms.s2.keyword': 'Webdesign',
            'rooms.s2.text': 'The front door. First impressions matter — we design websites and digital experiences that make your brand tangible.',
            'rooms.s3.keyword': 'Creative Direction',
            'rooms.s3.text': 'The interior. A house only becomes a home when it comes alive — we fill your brand with everything that makes it visible and vibrant.',

            'neighbors.label': 'Who we build for',
            'neighbors.title': 'We\'re picky about<br>our neighbors.',
            'neighbors.text1': 'We work with founders, startups, coaches, and individuals who are building something meaningful — in education, sustainability, and everything that makes the world a little better.',
            'neighbors.text2': 'No mass production. No greenwashing. No toxic stuff.<br>Just good people, doing good things.',

            'approach.headline': 'Why us',
            'approach.intro': 'We are Marika and Emma — a designer and an architect. Together we build brands from the ground up. From strategy to finished design, everything from one team.',
            'approach.v1.title': 'Strategy first',
            'approach.v1.text': 'Every project starts with understanding — your goals, your audience, your story. We plan before we build.',
            'approach.v2.title': 'Built to last',
            'approach.v2.text': 'No trends for the sake of trends. We create work that ages well and grows with you.',
            'approach.v3.title': 'Personal, always',
            'approach.v3.text': 'Two people, no layers. You work directly with us — the ones actually doing the work.',

            'about.title': 'Who lives here',
            'about.emma.role': 'The one who thinks in spaces',
            'about.emma.bio': 'Architect. Thinks in systems, plans strategies, and builds the foundation everything stands on. Turns an idea into a concept — and a concept into a brand.',
            'about.emma.skill3': 'Strategy',
            'about.marika.role': 'The one who thinks in pixels',
            'about.marika.bio': 'Designer. Shapes logos, websites, and everything visual. Turns a concept into a design — and a design into a feeling.',

            'contact.title': 'Our door is open.<br>Let\'s talk.',
            'contact.form.name': 'Your name*',
            'contact.form.email': 'Your e-mail*',
            'contact.form.message': 'Tell us about your project*',
            'contact.form.service': 'Where can we help?',
            'contact.form.other': 'Other',
            'contact.form.submit': 'send it',

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

            'hero3d.left': 'meinhaus',
            'hero3d.right': 'dein zuhause.',

            'hero.title': 'Jede Marke braucht<br>ein Zuhause.',
            'hero.subtitle': 'Wir sind mein haus — ein Kreativstudio, das Marken von Grund auf baut. Wir gestalten Identitäten, digitale Erlebnisse und visuelle Geschichten für Gründer*innen und Visionär*innen. Vom Konzept bis zum Handwerk — alles, was wir machen, ist gebaut, um zu wirken.',
            'hero.scroll': '(Scrollen)',
            'hero.tagline': 'Branding & Webdesign<br>von der Vision zum Zuhause.',
            'hero.statement': '<span class="hero-bold">Jede Marke braucht ein Zuhause.</span> Wir sind meinhaus, ein Designstudio für Branding,<br>Web und alles was eure Marke sichtbar macht.',

            'rooms.label': 'Was wir machen',
            'rooms.title': 'Komm rein.',
            'rooms.title2': 'Was wir machen',
            'rooms.intro': 'Wir denken unsere Leistungen als Räume — jeder hat seine Aufgabe,<br>aber zusammen ergeben sie ein Zuhause.',
            'rooms.intro2': 'Wir denken unsere Leistungen als Räume. Jeder hat seine Aufgabe, aber zusammen ergeben sie ein Zuhause.',
            'rooms.s1.keyword': 'Branding',
            'rooms.s1.text': 'Das Fundament. Wir bauen Identitäten von Grund auf — Strategie, visuelle Sprache und alles, was eure Marke zu eurer Marke macht.',
            'rooms.s2.keyword': 'Webdesign',
            'rooms.s2.text': 'Die Haustür. Der erste Eindruck zählt — wir gestalten Websites und digitale Erlebnisse, die eure Marke greifbar machen.',
            'rooms.s3.keyword': 'Creative Direction',
            'rooms.s3.text': 'Das Interior. Ein Haus ist erst ein Zuhause, wenn es lebt — wir füllen eure Marke mit allem, was sie sichtbar und lebendig macht.',

            'neighbors.label': 'Für wen wir bauen',
            'neighbors.title': 'Wir suchen uns unsere<br>Nachbarn gut aus.',
            'neighbors.text1': 'Wir arbeiten mit Gründer*innen, Startups, Coaches und Menschen, die etwas Sinnvolles aufbauen — in Bildung, Nachhaltigkeit und allem, was die Welt ein bisschen besser macht.',
            'neighbors.text2': 'Keine Massenproduktion. Kein Greenwashing. Nichts Giftiges.<br>Einfach gute Menschen, die Gutes tun.',

            'approach.headline': 'Warum wir',
            'approach.intro': 'Wir sind Marika und Emma — eine Designerin und eine Architektin. Zusammen bauen wir Marken von Grund auf. Von der Strategie bis zum fertigen Design, alles aus einer Hand.',
            'approach.v1.title': 'Strategie zuerst',
            'approach.v1.text': 'Jedes Projekt beginnt mit Verstehen — eure Ziele, euer Publikum, eure Geschichte. Wir planen, bevor wir bauen.',
            'approach.v2.title': 'Gebaut für die Dauer',
            'approach.v2.text': 'Keine Trends um der Trends willen. Wir schaffen Arbeit, die gut altert und mit euch wächst.',
            'approach.v3.title': 'Persönlich, immer',
            'approach.v3.text': 'Zwei Menschen, keine Umwege. Ihr arbeitet direkt mit uns — den Leuten, die die Arbeit auch wirklich machen.',

            'about.title': 'Wer hier wohnt',
            'about.emma.role': 'Die, die in Räumen denkt',
            'about.emma.bio': 'Architektin. Denkt in Systemen, plant Strategien und baut das Fundament, auf dem alles steht. Macht aus einer Idee ein Konzept — und aus einem Konzept eine Marke.',
            'about.emma.skill3': 'Strategie',
            'about.marika.role': 'Die, die in Pixeln denkt',
            'about.marika.bio': 'Designerin. Gestaltet Logos, Websites und alles Visuelle. Macht aus einem Konzept ein Design — und aus einem Design ein Gefühl.',

            'contact.title': 'Unsere Tür steht offen.<br>Lass uns reden.',
            'contact.form.name': 'Dein Name*',
            'contact.form.email': 'Deine E-Mail*',
            'contact.form.message': 'Erzähl uns von deinem Projekt*',
            'contact.form.service': 'Wobei können wir helfen?',
            'contact.form.other': 'Anderes',
            'contact.form.submit': 'abschicken',

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
        const otherLang = lang === 'en' ? 'de' : 'en';
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

    // ---------- Rooms showcase (progressive floor plan) ----------
    const roomPhases = document.querySelectorAll('.room-phase');
    const roomInfos = document.querySelectorAll('.rooms-info');

    function setRoomPhase(index) {
        roomPhases.forEach((p, i) => {
            p.classList.toggle('drawn', i <= index);
        });
        roomInfos.forEach((inf, i) => {
            inf.classList.toggle('active', i === index);
        });
    }

    // Scroll-driven: progressive room phases
    const roomsScroll = document.getElementById('rooms-scroll');
    if (roomsScroll) {
        let lastPhase = -1;
        window.addEventListener('scroll', function () {
            const rect = roomsScroll.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
                if (lastPhase !== -1) {
                    lastPhase = -1;
                    roomPhases.forEach((p) => p.classList.remove('drawn'));
                    roomInfos.forEach((inf) => inf.classList.remove('active'));
                }
                return;
            }
            const scrollRange = roomsScroll.offsetHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(1, -rect.top / scrollRange));
            const phase = Math.min(2, Math.floor(progress * 3));
            if (phase !== lastPhase) {
                lastPhase = phase;
                setRoomPhase(phase);
            }
        }, { passive: true });
    }

    // ---------- Accordion ----------
    document.querySelectorAll('.accordion-header').forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.accordion-item').forEach((i) => i.classList.remove('open'));
            // Toggle clicked
            if (!isOpen) item.classList.add('open');
            btn.setAttribute('aria-expanded', !isOpen);
        });
    });

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
