import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealIfVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add('in');
    };

    revealIfVisible();

    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    io.observe(el);
    window.addEventListener('load', revealIfVisible);
    const t1 = setTimeout(revealIfVisible, 600);
    const t2 = setTimeout(() => el.classList.add('in'), 2000);

    return () => {
      io.disconnect();
      window.removeEventListener('load', revealIfVisible);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return ref;
}
