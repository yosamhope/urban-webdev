(function () {
    'use strict';

    var STORAGE = { step: 'a11yFontStep', theme: 'a11yTheme', lang: 'a11yLang' };
    var MIN_STEP = -2, MAX_STEP = 3, STEP_SIZE = 0.08;

    // Languages a Kenyan learner is most likely to want: English and Kiswahili
    // (Kenya's official languages), plus French, German, Arabic and Mandarin
    // Chinese - the foreign languages offered in the Kenyan KCSE curriculum.
    var translations = {
        en: {
            'nav.home': 'Home', 'nav.about': 'About Us', 'nav.services': 'Services',
            'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact', 'nav.cta': 'Get in touch \u2192',
            'footer.ctaHeadingHtml': 'Let\u2019s build something <span class="accent">exceptional</span> together.',
            'footer.ctaText': 'Partner with urbanwebdev for fast, secure, and conversion-focused websites built for growing Kenyan businesses.',
            'footer.subscribeLabel': 'Subscribe to Web Insights', 'footer.subscribeBtn': 'Join',
            'footer.servicesHeading': 'Our Services', 'footer.quickLinksHeading': 'Quick Links',
            'footer.companyLabel': 'Company', 'footer.connect': 'Connect with us',
            'footer.legal': '\u00A9 2026 urbanwebdev. All rights reserved.',
            'footer.svc.basic': 'Basic Website Design', 'footer.svc.standard': 'Standard Website Design',
            'footer.svc.ecommerce': 'E-commerce Website', 'footer.svc.maintenance': 'Website Maintenance',
            'footer.svc.seo': 'SEO Optimization', 'footer.svc.hosting': 'Hosting Solutions',
            'hero.index.eyebrow': 'Web Design & Development Partner',
            'hero.index.headingHtml': 'Build a Website That <span class="accent">Works as Hard</span> as You Do',
            'hero.index.text': 'Professional web design and development for Kenyan businesses. We craft websites that convert visitors into customers and give your brand a credible, growth-ready digital home.',
            'hero.index.btn1': 'Get Started \u2192', 'hero.index.btn2': 'View Our Work',
            'hero.about.eyebrow': 'About urbanwebdev',
            'hero.about.headingHtml': 'Digital Experiences <span class="accent">Designed for Growth</span>',
            'hero.about.text': 'We create fast, secure, and user-friendly websites that stand out, connect with your audience, and support long-term business growth.',
            'hero.about.btn1': 'Our Services \u2192', 'hero.about.btn2': 'Get in Touch',
            'hero.services.eyebrow': 'What We Offer',
            'hero.services.headingHtml': 'Web Development <span class="accent">Packages</span> Built to Scale',
            'hero.services.text': 'Website packages designed to help businesses launch faster and grow smarter, from a simple landing page to a full e-commerce platform.',
            'hero.services.btn1': 'View Packages \u2192', 'hero.services.btn2': 'Talk to Us',
            'hero.portfolio.eyebrow': 'Our Work',
            'hero.portfolio.headingHtml': 'Real Results for <span class="accent">Growing Businesses</span>',
            'hero.portfolio.text': 'Explore the results we build for growing businesses \u2014 from online stores to custom platforms.',
            'hero.portfolio.btn1': 'Start a Project \u2192', 'hero.portfolio.btn2': 'See Case Studies',
            'hero.contact.eyebrow': 'Get in Touch',
            'hero.contact.headingHtml': 'Let\u2019s Build <span class="accent">Something Great</span>',
            'hero.contact.text': 'Tell us about your project and we\u2019ll help shape the right digital solution. Starting from scratch, or improving something that\u2019s already live \u2014 tell us where you are.',
            'hero.contact.btn1': 'I need something new \u2192', 'hero.contact.btn2': 'I need to improve what exists'
        },
        sw: {
            'nav.home': 'Nyumbani', 'nav.about': 'Kuhusu Sisi', 'nav.services': 'Huduma',
            'nav.portfolio': 'Kazi Zetu', 'nav.contact': 'Wasiliana Nasi', 'nav.cta': 'Wasiliana Nasi \u2192',
            'footer.ctaHeadingHtml': 'Hebu tujenge kitu <span class="accent">cha kipekee</span> pamoja.',
            'footer.ctaText': 'Shirikiana na urbanwebdev kupata tovuti za haraka, salama, na zinazolenga mauzo kwa ajili ya biashara zinazokua nchini Kenya.',
            'footer.subscribeLabel': 'Jiandikishe Kupata Maarifa ya Wavuti', 'footer.subscribeBtn': 'Jiunge',
            'footer.servicesHeading': 'Huduma Zetu', 'footer.quickLinksHeading': 'Viungo vya Haraka',
            'footer.companyLabel': 'Kampuni', 'footer.connect': 'Ungana Nasi',
            'footer.legal': '\u00A9 2026 urbanwebdev. Haki zote zimehifadhiwa.',
            'footer.svc.basic': 'Muundo wa Msingi wa Tovuti', 'footer.svc.standard': 'Muundo wa Kawaida wa Tovuti',
            'footer.svc.ecommerce': 'Tovuti ya Biashara Mtandaoni', 'footer.svc.maintenance': 'Matengenezo ya Tovuti',
            'footer.svc.seo': 'Uboreshaji wa SEO', 'footer.svc.hosting': 'Huduma za Uhifadhi wa Tovuti (Hosting)',
            'hero.index.eyebrow': 'Mshirika wa Ubunifu na Uundaji wa Tovuti',
            'hero.index.headingHtml': 'Jenga Tovuti Inayo<span class="accent">fanya Kazi kwa Bidii</span> Kama Wewe',
            'hero.index.text': 'Ubunifu na uundaji wa tovuti wa kitaalamu kwa biashara za Kenya. Tunatengeneza tovuti zinazobadilisha wageni kuwa wateja na kuipa chapa yako makazi ya kidijitali yenye uaminifu na tayari kukua.',
            'hero.index.btn1': 'Anza Sasa \u2192', 'hero.index.btn2': 'Angalia Kazi Zetu',
            'hero.about.eyebrow': 'Kuhusu urbanwebdev',
            'hero.about.headingHtml': 'Uzoefu wa Kidijitali <span class="accent">Ulioundwa kwa Ukuaji</span>',
            'hero.about.text': 'Tunatengeneza tovuti za haraka, salama, na rahisi kutumia zinazojitokeza, kuunganika na hadhira yako, na kusaidia ukuaji wa biashara wa muda mrefu.',
            'hero.about.btn1': 'Huduma Zetu \u2192', 'hero.about.btn2': 'Wasiliana Nasi',
            'hero.services.eyebrow': 'Tunachotoa',
            'hero.services.headingHtml': 'Vifurushi vya <span class="accent">Uundaji wa Tovuti</span> Vilivyoundwa Kukua',
            'hero.services.text': 'Vifurushi vya tovuti vilivyoundwa kusaidia biashara kuzindua haraka na kukua kwa busara, kutoka ukurasa rahisi hadi jukwaa kamili la biashara mtandaoni.',
            'hero.services.btn1': 'Angalia Vifurushi \u2192', 'hero.services.btn2': 'Ongea Nasi',
            'hero.portfolio.eyebrow': 'Kazi Zetu',
            'hero.portfolio.headingHtml': 'Matokeo Halisi kwa <span class="accent">Biashara Zinazokua</span>',
            'hero.portfolio.text': 'Chunguza matokeo tunayoyajenga kwa biashara zinazokua \u2014 kutoka maduka ya mtandaoni hadi majukwaa maalum.',
            'hero.portfolio.btn1': 'Anzisha Mradi \u2192', 'hero.portfolio.btn2': 'Angalia Mifano ya Kazi',
            'hero.contact.eyebrow': 'Wasiliana Nasi',
            'hero.contact.headingHtml': 'Hebu Tujenge <span class="accent">Kitu Kizuri</span>',
            'hero.contact.text': 'Tuambie kuhusu mradi wako na tutakusaidia kuunda suluhisho sahihi la kidijitali. Iwe unaanza kutoka mwanzo au kuboresha kitu kilichopo \u2014 tuambie ulipo.',
            'hero.contact.btn1': 'Nahitaji Kitu Kipya \u2192', 'hero.contact.btn2': 'Nahitaji Kuboresha Kilichopo'
        },
        fr: {
            'nav.home': 'Accueil', 'nav.about': '\u00C0 propos', 'nav.services': 'Services',
            'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact', 'nav.cta': 'Nous contacter \u2192',
            'footer.ctaHeadingHtml': 'Construisons quelque chose d\u2019<span class="accent">exceptionnel</span> ensemble.',
            'footer.ctaText': 'Faites \u00E9quipe avec urbanwebdev pour des sites web rapides, s\u00E9curis\u00E9s et orient\u00E9s conversion, con\u00E7us pour les entreprises k\u00E9nyanes en croissance.',
            'footer.subscribeLabel': 'Abonnez-vous aux actualit\u00E9s web', 'footer.subscribeBtn': 'Rejoindre',
            'footer.servicesHeading': 'Nos services', 'footer.quickLinksHeading': 'Liens rapides',
            'footer.companyLabel': 'Entreprise', 'footer.connect': 'Suivez-nous',
            'footer.legal': '\u00A9 2026 urbanwebdev. Tous droits r\u00E9serv\u00E9s.',
            'footer.svc.basic': 'Conception de site web basique', 'footer.svc.standard': 'Conception de site web standard',
            'footer.svc.ecommerce': 'Site e-commerce', 'footer.svc.maintenance': 'Maintenance de site web',
            'footer.svc.seo': 'Optimisation SEO', 'footer.svc.hosting': 'Solutions d\u2019h\u00E9bergement',
            'hero.index.eyebrow': 'Partenaire en conception et d\u00E9veloppement web',
            'hero.index.headingHtml': 'Cr\u00E9ez un site web aussi <span class="accent">d\u00E9termin\u00E9</span> que vous',
            'hero.index.text': 'Conception et d\u00E9veloppement web professionnels pour les entreprises k\u00E9nyanes. Nous cr\u00E9ons des sites qui transforment les visiteurs en clients et offrent \u00E0 votre marque une pr\u00E9sence num\u00E9rique cr\u00E9dible et pr\u00EAte \u00E0 cro\u00EEtre.',
            'hero.index.btn1': 'Commencer \u2192', 'hero.index.btn2': 'Voir nos r\u00E9alisations',
            'hero.about.eyebrow': '\u00C0 propos d\u2019urbanwebdev',
            'hero.about.headingHtml': 'Des exp\u00E9riences num\u00E9riques <span class="accent">con\u00E7ues pour la croissance</span>',
            'hero.about.text': 'Nous cr\u00E9ons des sites web rapides, s\u00E9curis\u00E9s et conviviaux qui se d\u00E9marquent, engagent votre audience et soutiennent la croissance \u00E0 long terme de votre entreprise.',
            'hero.about.btn1': 'Nos services \u2192', 'hero.about.btn2': 'Nous contacter',
            'hero.services.eyebrow': 'Ce que nous offrons',
            'hero.services.headingHtml': 'Des forfaits de <span class="accent">d\u00E9veloppement web</span> con\u00E7us pour \u00E9voluer',
            'hero.services.text': 'Des forfaits web con\u00E7us pour aider les entreprises \u00E0 se lancer plus vite et \u00E0 cro\u00EEtre intelligemment, d\u2019une simple landing page \u00E0 une plateforme e-commerce compl\u00E8te.',
            'hero.services.btn1': 'Voir les forfaits \u2192', 'hero.services.btn2': 'Discutons',
            'hero.portfolio.eyebrow': 'Nos r\u00E9alisations',
            'hero.portfolio.headingHtml': 'Des r\u00E9sultats concrets pour les <span class="accent">entreprises en croissance</span>',
            'hero.portfolio.text': 'D\u00E9couvrez les r\u00E9sultats que nous cr\u00E9ons pour les entreprises en croissance \u2014 des boutiques en ligne aux plateformes sur mesure.',
            'hero.portfolio.btn1': 'D\u00E9marrer un projet \u2192', 'hero.portfolio.btn2': 'Voir les \u00E9tudes de cas',
            'hero.contact.eyebrow': 'Contactez-nous',
            'hero.contact.headingHtml': 'Construisons <span class="accent">quelque chose de formidable</span>',
            'hero.contact.text': 'Parlez-nous de votre projet et nous vous aiderons \u00E0 concevoir la bonne solution num\u00E9rique. Que vous partiez de z\u00E9ro ou am\u00E9lioriez un site d\u00E9j\u00E0 en ligne \u2014 dites-nous o\u00F9 vous en \u00EAtes.',
            'hero.contact.btn1': 'J\u2019ai besoin de quelque chose de nouveau \u2192', 'hero.contact.btn2': 'J\u2019ai besoin d\u2019am\u00E9liorer l\u2019existant'
        },
        de: {
            'nav.home': 'Startseite', 'nav.about': '\u00DCber uns', 'nav.services': 'Leistungen',
            'nav.portfolio': 'Portfolio', 'nav.contact': 'Kontakt', 'nav.cta': 'Kontakt aufnehmen \u2192',
            'footer.ctaHeadingHtml': 'Lassen Sie uns gemeinsam etwas <span class="accent">Au\u00DFergew\u00F6hnliches</span> erschaffen.',
            'footer.ctaText': 'Arbeiten Sie mit urbanwebdev zusammen f\u00FCr schnelle, sichere und conversion-orientierte Websites f\u00FCr wachsende kenianische Unternehmen.',
            'footer.subscribeLabel': 'Web-Insights abonnieren', 'footer.subscribeBtn': 'Beitreten',
            'footer.servicesHeading': 'Unsere Leistungen', 'footer.quickLinksHeading': 'Schnellzugriff',
            'footer.companyLabel': 'Unternehmen', 'footer.connect': 'Vernetzen Sie sich mit uns',
            'footer.legal': '\u00A9 2026 urbanwebdev. Alle Rechte vorbehalten.',
            'footer.svc.basic': 'Einfaches Webdesign', 'footer.svc.standard': 'Standard-Webdesign',
            'footer.svc.ecommerce': 'E-Commerce-Website', 'footer.svc.maintenance': 'Website-Wartung',
            'footer.svc.seo': 'SEO-Optimierung', 'footer.svc.hosting': 'Hosting-L\u00F6sungen',
            'hero.index.eyebrow': 'Partner f\u00FCr Webdesign & Entwicklung',
            'hero.index.headingHtml': 'Erstellen Sie eine Website, die <span class="accent">genauso hart arbeitet</span> wie Sie',
            'hero.index.text': 'Professionelles Webdesign und Entwicklung f\u00FCr kenianische Unternehmen. Wir gestalten Websites, die Besucher in Kunden verwandeln und Ihrer Marke ein glaubw\u00FCrdiges, wachstumsbereites digitales Zuhause geben.',
            'hero.index.btn1': 'Jetzt starten \u2192', 'hero.index.btn2': 'Unsere Arbeiten ansehen',
            'hero.about.eyebrow': '\u00DCber urbanwebdev',
            'hero.about.headingHtml': 'Digitale Erlebnisse <span class="accent">f\u00FCr Wachstum konzipiert</span>',
            'hero.about.text': 'Wir erstellen schnelle, sichere und benutzerfreundliche Websites, die auffallen, Ihr Publikum ansprechen und langfristiges Unternehmenswachstum unterst\u00FCtzen.',
            'hero.about.btn1': 'Unsere Leistungen \u2192', 'hero.about.btn2': 'Kontakt aufnehmen',
            'hero.services.eyebrow': 'Unser Angebot',
            'hero.services.headingHtml': 'Webentwicklungs-<span class="accent">Pakete</span>, die mit Ihnen wachsen',
            'hero.services.text': 'Website-Pakete, die Unternehmen helfen, schneller zu starten und intelligenter zu wachsen \u2013 von einer einfachen Landingpage bis zur vollst\u00E4ndigen E-Commerce-Plattform.',
            'hero.services.btn1': 'Pakete ansehen \u2192', 'hero.services.btn2': 'Sprechen Sie mit uns',
            'hero.portfolio.eyebrow': 'Unsere Arbeiten',
            'hero.portfolio.headingHtml': 'Echte Ergebnisse f\u00FCr <span class="accent">wachsende Unternehmen</span>',
            'hero.portfolio.text': 'Entdecken Sie die Ergebnisse, die wir f\u00FCr wachsende Unternehmen erzielen \u2014 von Online-Shops bis hin zu individuellen Plattformen.',
            'hero.portfolio.btn1': 'Projekt starten \u2192', 'hero.portfolio.btn2': 'Fallstudien ansehen',
            'hero.contact.eyebrow': 'Kontaktieren Sie uns',
            'hero.contact.headingHtml': 'Lassen Sie uns <span class="accent">etwas Gro\u00DFartiges</span> erschaffen',
            'hero.contact.text': 'Erz\u00E4hlen Sie uns von Ihrem Projekt, und wir helfen Ihnen, die passende digitale L\u00F6sung zu gestalten. Ob Sie bei null anfangen oder etwas Bestehendes verbessern m\u00F6chten \u2014 sagen Sie uns, wo Sie stehen.',
            'hero.contact.btn1': 'Ich brauche etwas Neues \u2192', 'hero.contact.btn2': 'Ich m\u00F6chte Bestehendes verbessern'
        },
        ar: {
            'nav.home': '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629', 'nav.about': '\u0645\u0646 \u0646\u062D\u0646', 'nav.services': '\u0627\u0644\u062E\u062F\u0645\u0627\u062A',
            'nav.portfolio': '\u0623\u0639\u0645\u0627\u0644\u0646\u0627', 'nav.contact': '\u0627\u062A\u0635\u0644 \u0628\u0646\u0627', 'nav.cta': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u2192',
            'footer.ctaHeadingHtml': '\u062F\u0639\u0646\u0627 \u0646\u0628\u0646\u064A \u0634\u064A\u0626\u064B\u0627 <span class="accent">\u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u064B\u0627</span> \u0645\u0639\u064B\u0627.',
            'footer.ctaText': '\u062A\u0639\u0627\u0648\u0646 \u0645\u0639 urbanwebdev \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0633\u0631\u064A\u0639\u0629 \u0648\u0622\u0645\u0646\u0629 \u0648\u0645\u0648\u062C\u0647\u0629 \u0646\u062D\u0648 \u0627\u0644\u062A\u062D\u0648\u064A\u0644\u060C \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0643\u064A\u0646\u064A\u0629 \u0627\u0644\u0646\u0627\u0645\u064A\u0629.',
            'footer.subscribeLabel': '\u0627\u0634\u062A\u0631\u0643 \u0641\u064A \u0646\u0634\u0631\u0629 \u0631\u0624\u0649 \u0627\u0644\u0648\u064A\u0628', 'footer.subscribeBtn': '\u0627\u0646\u0636\u0645',
            'footer.servicesHeading': '\u062E\u062F\u0645\u0627\u062A\u0646\u0627', 'footer.quickLinksHeading': '\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629',
            'footer.companyLabel': '\u0627\u0644\u0634\u0631\u0643\u0629', 'footer.connect': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
            'footer.legal': '\u00A9 2026 urbanwebdev. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.',
            'footer.svc.basic': '\u062A\u0635\u0645\u064A\u0645 \u0645\u0648\u0642\u0639 \u0623\u0633\u0627\u0633\u064A', 'footer.svc.standard': '\u062A\u0635\u0645\u064A\u0645 \u0645\u0648\u0642\u0639 \u0642\u064A\u0627\u0633\u064A',
            'footer.svc.ecommerce': '\u0645\u0648\u0642\u0639 \u062A\u062C\u0627\u0631\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629', 'footer.svc.maintenance': '\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0645\u0648\u0642\u0639',
            'footer.svc.seo': '\u062A\u062D\u0633\u064A\u0646 \u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B (SEO)', 'footer.svc.hosting': '\u062D\u0644\u0648\u0644 \u0627\u0644\u0627\u0633\u062A\u0636\u0627\u0641\u0629',
            'hero.index.eyebrow': '\u0634\u0631\u064A\u0643\u0643 \u0641\u064A \u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639',
            'hero.index.headingHtml': '\u0623\u0646\u0634\u0626 \u0645\u0648\u0642\u0639\u064B\u0627 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627 <span class="accent">\u064A\u0639\u0645\u0644 \u0628\u062C\u062F</span> \u0645\u062B\u0644\u0643 \u062A\u0645\u0627\u0645\u064B\u0627',
            'hero.index.text': '\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0643\u064A\u0646\u064A\u0629. \u0646\u0635\u0645\u0645 \u0645\u0648\u0627\u0642\u0639 \u062A\u062D\u0648\u0651\u0644 \u0627\u0644\u0632\u0648\u0627\u0631 \u0625\u0644\u0649 \u0639\u0645\u0644\u0627\u0621 \u0648\u062A\u0645\u0646\u062D \u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u062D\u0636\u0648\u0631\u064B\u0627 \u0631\u0642\u0645\u064A\u064B\u0627 \u0645\u0648\u062B\u0648\u0642\u064B\u0627 \u0648\u062C\u0627\u0647\u0632\u064B\u0627 \u0644\u0644\u0646\u0645\u0648.',
            'hero.index.btn1': '\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u2192', 'hero.index.btn2': '\u0634\u0627\u0647\u062F \u0623\u0639\u0645\u0627\u0644\u0646\u0627',
            'hero.about.eyebrow': '\u0639\u0646 urbanwebdev',
            'hero.about.headingHtml': '\u062A\u062C\u0627\u0631\u0628 \u0631\u0642\u0645\u064A\u0629 <span class="accent">\u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0646\u0645\u0648</span>',
            'hero.about.text': '\u0646\u0635\u0645\u0645 \u0645\u0648\u0627\u0642\u0639 \u0633\u0631\u064A\u0639\u0629 \u0648\u0622\u0645\u0646\u0629 \u0648\u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062A\u062A\u0645\u064A\u0632 \u0639\u0646 \u063A\u064A\u0631\u0647\u0627\u060C \u0648\u062A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u062C\u0645\u0647\u0648\u0631\u0643\u060C \u0648\u062A\u062F\u0639\u0645 \u0646\u0645\u0648 \u0623\u0639\u0645\u0627\u0644\u0643 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644.',
            'hero.about.btn1': '\u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u2192', 'hero.about.btn2': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
            'hero.services.eyebrow': '\u0645\u0627 \u0646\u0642\u062F\u0645\u0647',
            'hero.services.headingHtml': '\u0628\u0627\u0642\u0627\u062A <span class="accent">\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639</span> \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0646\u0645\u0648',
            'hero.services.text': '\u0628\u0627\u0642\u0627\u062A \u0645\u0648\u0627\u0642\u0639 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0628\u0634\u0643\u0644 \u0623\u0633\u0631\u0639 \u0648\u0627\u0644\u0646\u0645\u0648 \u0628\u0630\u0643\u0627\u0621\u060C \u0645\u0646 \u0635\u0641\u062D\u0629 \u0647\u0628\u0648\u0637 \u0628\u0633\u064A\u0637\u0629 \u0625\u0644\u0649 \u0645\u0646\u0635\u0629 \u062A\u062C\u0627\u0631\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629.',
            'hero.services.btn1': '\u0639\u0631\u0636 \u0627\u0644\u0628\u0627\u0642\u0627\u062A \u2192', 'hero.services.btn2': '\u062A\u062D\u062F\u062B \u0625\u0644\u064A\u0646\u0627',
            'hero.portfolio.eyebrow': '\u0623\u0639\u0645\u0627\u0644\u0646\u0627',
            'hero.portfolio.headingHtml': '\u0646\u062A\u0627\u0626\u062C \u062D\u0642\u064A\u0642\u064A\u0629 <span class="accent">\u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0645\u064A\u0629</span>',
            'hero.portfolio.text': '\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u062A\u064A \u0646\u062D\u0642\u0642\u0647\u0627 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u0645\u064A\u0629 \u2014 \u0645\u0646 \u0627\u0644\u0645\u062A\u0627\u062C\u0631 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0627\u0644\u0645\u062E\u0635\u0635\u0629.',
            'hero.portfolio.btn1': '\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u064B\u0627 \u2192', 'hero.portfolio.btn2': '\u0634\u0627\u0647\u062F \u062F\u0631\u0627\u0633\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u0629',
            'hero.contact.eyebrow': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
            'hero.contact.headingHtml': '\u062F\u0639\u0646\u0627 \u0646\u0628\u0646\u064A <span class="accent">\u0634\u064A\u0626\u064B\u0627 \u0631\u0627\u0626\u0639\u064B\u0627</span>',
            'hero.contact.text': '\u0623\u062E\u0628\u0631\u0646\u0627 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0648\u0633\u0646\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062D\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0645\u0646\u0627\u0633\u0628. \u0633\u0648\u0627\u0621 \u0643\u0646\u062A \u062A\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0623\u0648 \u062A\u062D\u0633\u0651\u0646 \u0645\u0648\u0642\u0639\u064B\u0627 \u0642\u0627\u0626\u0645\u064B\u0627 \u0628\u0627\u0644\u0641\u0639\u0644 \u2014 \u0623\u062E\u0628\u0631\u0646\u0627 \u0628\u0645\u0631\u062D\u0644\u062A\u0643 \u0627\u0644\u062D\u0627\u0644\u064A\u0629.',
            'hero.contact.btn1': '\u0623\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0634\u064A\u0621 \u062C\u062F\u064A\u062F \u2192', 'hero.contact.btn2': '\u0623\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062A\u062D\u0633\u064A\u0646 \u0645\u0627 \u0647\u0648 \u0645\u0648\u062C\u0648\u062F'
        },
        zh: {
            'nav.home': '\u9996\u9875', 'nav.about': '\u5173\u4E8E\u6211\u4EEC', 'nav.services': '\u670D\u52A1',
            'nav.portfolio': '\u4F5C\u54C1\u96C6', 'nav.contact': '\u8054\u7CFB\u6211\u4EEC', 'nav.cta': '\u8054\u7CFB\u6211\u4EEC \u2192',
            'footer.ctaHeadingHtml': '\u8BA9\u6211\u4EEC\u643A\u624B\u6253\u9020<span class="accent">\u5353\u8D8A</span>\u7684\u4F5C\u54C1\u3002',
            'footer.ctaText': '\u4E0EurbanwebdevF\u5408\u4F5C\uFF0C\u4E3A\u4E0D\u65AD\u6210\u957F\u7684\u80AF\u5C3C\u4E9A\u4F01\u4E1A\u6253\u9020\u5FEB\u901F\u3001\u5B89\u5168\u4E14\u6CE8\u91CD\u8F6C\u5316\u7387\u7684\u7F51\u7AD9\u3002',
            'footer.subscribeLabel': '\u8BA2\u9605\u7F51\u7EDC\u6D1E\u5BDF\u8D44\u8BAF', 'footer.subscribeBtn': '\u52A0\u5165',
            'footer.servicesHeading': '\u6211\u4EEC\u7684\u670D\u52A1', 'footer.quickLinksHeading': '\u5FEB\u901F\u94FE\u63A5',
            'footer.companyLabel': '\u516C\u53F8', 'footer.connect': '\u5173\u6CE8\u6211\u4EEC',
            'footer.legal': '\u00A9 2026 urbanwebdev\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002',
            'footer.svc.basic': '\u57FA\u7840\u7F51\u7AD9\u8BBE\u8BA1', 'footer.svc.standard': '\u6807\u51C6\u7F51\u7AD9\u8BBE\u8BA1',
            'footer.svc.ecommerce': '\u7535\u5B50\u5546\u52A1\u7F51\u7AD9', 'footer.svc.maintenance': '\u7F51\u7AD9\u7EF4\u62A4',
            'footer.svc.seo': 'SEO\u4F18\u5316', 'footer.svc.hosting': '\u6258\u7BA1\u89E3\u51B3\u65B9\u6848',
            'hero.index.eyebrow': '\u7F51\u9875\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u5408\u4F5C\u4F19\u4F34',
            'hero.index.headingHtml': '\u6253\u9020\u4E00\u4E2A\u548C\u4F60\u4E00\u6837<span class="accent">\u62FC\u640F\u52AA\u529B</span>\u7684\u7F51\u7AD9',
            'hero.index.text': '\u4E3A\u80AF\u5C3C\u4E9A\u4F01\u4E1A\u63D0\u4F9B\u4E13\u4E1A\u7684\u7F51\u9875\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u670D\u52A1\u3002\u6211\u4EEC\u6253\u9020\u80FD\u5C06\u8BBF\u5BA2\u8F6C\u5316\u4E3A\u5BA2\u6237\u7684\u7F51\u7AD9\uFF0C\u4E3A\u60A8\u7684\u54C1\u724C\u63D0\u4F9B\u53EF\u4FE1\u8D56\u3001\u52A9\u529B\u6210\u957F\u7684\u6570\u5B57\u5BB6\u56ED\u3002',
            'hero.index.btn1': '\u7ACB\u5373\u5F00\u59CB \u2192', 'hero.index.btn2': '\u67E5\u770B\u6211\u4EEC\u7684\u4F5C\u54C1',
            'hero.about.eyebrow': '\u5173\u4E8EurbanwebdevF',
            'hero.about.headingHtml': '\u4E3A\u589E\u957F\u800C<span class="accent">\u7CBE\u5FC3\u8BBE\u8BA1</span>\u7684\u6570\u5B57\u4F53\u9A8C',
            'hero.about.text': '\u6211\u4EEC\u6253\u9020\u5FEB\u901F\u3001\u5B89\u5168\u4E14\u7528\u6237\u53CB\u597D\u7684\u7F51\u7AD9\uFF0C\u52A9\u60A8\u8106\u9896\u800C\u51FA\uFF0C\u4E0E\u53D7\u4F17\u5EFA\u7ACB\u8054\u7CFB\uFF0C\u652F\u6301\u4F01\u4E1A\u957F\u671F\u53D1\u5C55\u3002',
            'hero.about.btn1': '\u6211\u4EEC\u7684\u670D\u52A1 \u2192', 'hero.about.btn2': '\u8054\u7CFB\u6211\u4EEC',
            'hero.services.eyebrow': '\u6211\u4EEC\u7684\u670D\u52A1\u5185\u5BB9',
            'hero.services.headingHtml': '\u53EF\u968F\u4E1A\u52A1\u6269\u5C55\u7684\u7F51\u7AD9\u5F00\u53D1<span class="accent">\u5957\u9910</span>',
            'hero.services.text': '\u7F51\u7AD9\u5957\u9910\u65E8\u5728\u5E2E\u52A9\u4F01\u4E1A\u66F4\u5FEB\u4E0A\u7EBF\u3001\u66F4\u660E\u667A\u5730\u6210\u957F\uFF0C\u4ECE\u7B80\u5355\u7684\u7740\u9646\u9875\u5230\u5B8C\u6574\u7684\u7535\u5B50\u5546\u52A1\u5E73\u53F0\uFF0C\u4E00\u5E94\u4FF1\u5168\u3002',
            'hero.services.btn1': '\u67E5\u770B\u5957\u9910 \u2192', 'hero.services.btn2': '\u8054\u7CFB\u54A8\u8BE2',
            'hero.portfolio.eyebrow': '\u6211\u4EEC\u7684\u4F5C\u54C1',
            'hero.portfolio.headingHtml': '\u4E3A<span class="accent">\u6210\u957F\u578B\u4F01\u4E1A</span>\u5E26\u6765\u771F\u5B9E\u6210\u679C',
            'hero.portfolio.text': '\u63A2\u7D22\u6211\u4EEC\u4E3A\u6210\u957F\u578B\u4F01\u4E1A\u521B\u9020\u7684\u6210\u679C\u2014\u2014\u4ECE\u5728\u7EBF\u5546\u5E97\u5230\u5B9A\u5236\u5E73\u53F0\uFF0C\u5E94\u6709\u5C3D\u6709\u3002',
            'hero.portfolio.btn1': '\u542F\u52A8\u9879\u76EE \u2192', 'hero.portfolio.btn2': '\u67E5\u770B\u6848\u4F8B\u7814\u7A76',
            'hero.contact.eyebrow': '\u8054\u7CFB\u6211\u4EEC',
            'hero.contact.headingHtml': '\u8BA9\u6211\u4EEC\u5171\u521B<span class="accent">\u975E\u51E1\u6210\u679C</span>',
            'hero.contact.text': '\u544A\u8BC9\u6211\u4EEC\u60A8\u7684\u9879\u76EE\u9700\u6C42\uFF0C\u6211\u4EEC\u5C06\u534F\u52A9\u60A8\u6253\u9020\u5408\u9002\u7684\u6570\u5B57\u89E3\u51B3\u65B9\u6848\u3002\u65E0\u8BBA\u60A8\u662F\u4ECE\u96F6\u5F00\u59CB\uFF0C\u8FD8\u662F\u5E0C\u671B\u4F18\u5316\u73B0\u6709\u7F51\u7AD9\u2014\u2014\u8BF7\u544A\u8BC9\u6211\u4EEC\u60A8\u76EE\u524D\u6240\u5904\u7684\u9636\u6BB5\u3002',
            'hero.contact.btn1': '\u6211\u9700\u8981\u5168\u65B0\u65B9\u6848 \u2192', 'hero.contact.btn2': '\u6211\u9700\u8981\u4F18\u5316\u73B0\u6709\u7F51\u7AD9'
        }
    };

    function clampStep(step) {
        return Math.max(MIN_STEP, Math.min(MAX_STEP, step));
    }

    function applyFontStep(step) {
        step = clampStep(step);
        var scale = 1 + step * STEP_SIZE;
        document.documentElement.style.fontSize = (16 * scale) + 'px';
        try { localStorage.setItem(STORAGE.step, String(step)); } catch (err) { /* storage unavailable */ }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem(STORAGE.theme, theme); } catch (err) { /* storage unavailable */ }
        document.querySelectorAll('[data-a11y-theme]').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-a11y-theme') === theme);
        });
    }

    function applyLanguage(lang) {
        var dict = translations[lang] ? lang : 'en';
        var strings = translations[dict];
        document.documentElement.setAttribute('lang', dict);
        document.documentElement.setAttribute('dir', dict === 'ar' ? 'rtl' : 'ltr');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (strings[key]) el.textContent = strings[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (strings[key]) el.innerHTML = strings[key];
        });

        try { localStorage.setItem(STORAGE.lang, dict); } catch (err) { /* storage unavailable */ }

        var select = document.getElementById('a11yLanguage');
        if (select) select.value = dict;
    }

    function readStored(key, fallback) {
        try {
            var value = localStorage.getItem(key);
            return value === null ? fallback : value;
        } catch (err) {
            return fallback;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyFontStep(parseInt(readStored(STORAGE.step, '0'), 10) || 0);
        applyTheme(readStored(STORAGE.theme, 'light'));
        applyLanguage(readStored(STORAGE.lang, 'en'));

        var toggle = document.getElementById('a11yToggle');
        var panel = document.getElementById('a11yPanel');

        if (toggle && panel) {
            toggle.addEventListener('click', function () {
                var isHidden = panel.hasAttribute('hidden');
                if (isHidden) {
                    panel.removeAttribute('hidden');
                    toggle.setAttribute('aria-expanded', 'true');
                } else {
                    panel.setAttribute('hidden', '');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });

            document.addEventListener('click', function (e) {
                if (panel.hasAttribute('hidden')) return;
                if (panel.contains(e.target) || toggle.contains(e.target)) return;
                panel.setAttribute('hidden', '');
                toggle.setAttribute('aria-expanded', 'false');
            });
        }

        document.querySelectorAll('[data-a11y-fontstep]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var current = parseInt(readStored(STORAGE.step, '0'), 10) || 0;
                applyFontStep(current + parseInt(btn.getAttribute('data-a11y-fontstep'), 10));
            });
        });

        var resetBtn = document.querySelector('[data-a11y-fontreset]');
        if (resetBtn) {
            resetBtn.addEventListener('click', function () { applyFontStep(0); });
        }

        document.querySelectorAll('[data-a11y-theme]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyTheme(btn.getAttribute('data-a11y-theme'));
            });
        });

        var langSelect = document.getElementById('a11yLanguage');
        if (langSelect) {
            langSelect.addEventListener('change', function () {
                applyLanguage(langSelect.value);
            });
        }
    });
})();
