const dictionary = {
    'ge': {
        'nav-contact': 'კონტაქტი',
        'hero-kicker': 'ბათუმი • პერფორმანს ატელიე',
        'label-reg': 'ავტომობილის ძებნა',
        'btn-verify': 'შემოწმება',
        'svc-diag-title': 'სრული დიაგნოსტიკა',
        'svc-diag-p': 'კომპიუტერული ანალიზი და სისტემური შემოწმება უახლესი აპარატურით.',
        'svc-s1-title': 'STAGE 1',
        'svc-s1-p': 'პროგრამული ოპტიმიზაცია სიმძლავრისა და ეკონომიურობის ბალანსისთვის.',
        'svc-s2-title': 'STAGE 2',
        'svc-s2-p': 'აპარატურული და პროგრამული მოდიფიკაცია მაქსიმალური სიმძლავრისთვის.'
    },
    'en': {
        'nav-contact': 'Contact',
        'hero-kicker': 'BATUMI • PERFORMANCE ATELIER',
        'label-reg': 'Search Vehicle',
        'btn-verify': 'Verify',
        'svc-diag-title': 'Full Diagnosis',
        'svc-diag-p': 'Comprehensive computer analysis and system checks with latest equipment.',
        'svc-s1-title': 'STAGE 1',
        'svc-s1-p': 'Software optimization for balanced power and fuel efficiency.',
        'svc-s2-title': 'STAGE 2',
        'svc-s2-p': 'Hardware and software modifications for maximum performance output.'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('.l-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (dictionary[lang][key]) element.innerText = dictionary[lang][key];
    });
}

function startJourney() {
    const reg = document.getElementById('regInput').value.toUpperCase();
    if(!reg) return alert("Enter registration number");
    const btn = document.querySelector('.search-wrap button');
    const originalText = btn.innerText;
    btn.innerText = "...";
    setTimeout(() => {
        alert("MIKEMOTORS: Анализ " + reg + " начат в базе данных Адлия.");
        btn.innerText = originalText;
    }, 1000);
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 80) {
        header.style.padding = "20px 0";
        header.style.borderBottom = "1px solid rgba(212, 175, 89, 0.2)";
    } else {
        header.style.padding = "40px 0";
        header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
    }
});