document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.glass-nav');
    const menuToggle = document.getElementById('mobile-menu');
    const blobs = document.querySelectorAll('.bg-glow');

    // 1. Navbar Scroll Transformation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Interaction with Neon Toggle effect
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-active');
        const spans = menuToggle.querySelectorAll('span');
        const isActive = nav.classList.contains('mobile-active');
        
        spans.forEach(span => {
            span.style.backgroundColor = isActive ? '#fe0979' : '#fff';
            span.style.boxShadow = isActive ? '0 0 10px #fe0979' : '0 0 5px #00f2fe';
        });
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;
            
            // Staggered delay for grid elements
            if (entry.target.classList.contains('stagger')) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); 
            } else {
                entry.target.classList.add('active');
            }
            
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    // 4. Smooth Mouse-Reactive Ambient Background (Parallax for larger screens)
    if (window.innerWidth > 1024) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) * 0.04;
            const moveY = (clientY - window.innerHeight / 2) * 0.04;

            blobs.forEach((blob, index) => {
                const speedFactor = (index + 1) * 0.5;
                blob.style.transform = `translate(${moveX * speedFactor}px, ${moveY * speedFactor}px) scale(1.1)`;
            });
        });
    }
});
