(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const artwork = document.querySelector('.hero-art');
  const print = document.querySelector('.cake-print');
  let frame = 0;
  artwork.addEventListener('pointermove', event => {
    if (motion.matches || !finePointer.matches) return;
    const bounds = artwork.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      print.style.setProperty('--ry', `${x * 7}deg`);
      print.style.setProperty('--rx', `${-y * 6}deg`);
    });
  });
  artwork.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame);
    print.style.setProperty('--ry', '0deg');
    print.style.setProperty('--rx', '0deg');
  });
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-arrived');
        observer.unobserve(entry.target);
      }
    }), {threshold: .08});
    document.querySelectorAll('.section-heading, .person-card, .closing-note').forEach(el => observer.observe(el));
  }
  const celebrate = document.querySelector('.confetti-button');
  const layer = document.getElementById('confetti-layer');
  const status = document.getElementById('celebrate-status');
  const wishes = ['快樂已送達。今天也值得慶祝！ ♡', '蛋糕可以晚點吃，快樂現在就要。', '恭喜！又多收集了一點快樂。'];
  let count = 0, hideToast, cleanConfetti, lastClick = 0;
  celebrate.addEventListener('click', () => {
    if (Date.now() - lastClick < 800) return;
    lastClick = Date.now();
    clearTimeout(hideToast);
    clearTimeout(cleanConfetti);
    const wishIndex = count++ % wishes.length;
    status.textContent = wishes[wishIndex];
    if (wishIndex === 2) {
      status.append(' ', celebrate.querySelector('.asterisk-icon').cloneNode(true));
    }
    status.classList.add('visible');
    layer.replaceChildren();
    if (!motion.matches) {
      const colors = ['#812f34', '#d7ab51', '#687b61', '#e3b4a6', '#fbf7e9'];
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 48; i++) {
        const piece = document.createElement('i');
        piece.className = 'confetti';
        piece.style.cssText = `left:${Math.random()*100}%;background:${colors[i%colors.length]};--duration:${2.5+Math.random()*1.5}s;--delay:${Math.random()*.3}s;--drift:${(Math.random()-.5)*220}px;--spin:${(Math.random()-.5)*1000}deg`;
        fragment.append(piece);
      }
      layer.append(fragment);
    }
    hideToast = setTimeout(() => status.classList.remove('visible'), 3700);
    cleanConfetti = setTimeout(() => layer.replaceChildren(), 4500);
  });
})();
