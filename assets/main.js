// 모바일 메뉴
const btn = document.querySelector('.menu-btn');
if (btn) {
  btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open);
  });
}

// 스크롤 등장 효과
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 })
  : null;
document.querySelectorAll('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('is-in')));

// 작업물 필터 (글목록 페이지)
const filters = document.querySelectorAll('.filter');
filters.forEach((f) => {
  f.addEventListener('click', () => {
    filters.forEach((x) => x.classList.remove('is-active'));
    f.classList.add('is-active');
    const cat = f.dataset.filter;
    document.querySelectorAll('.works .work').forEach((w) => {
      w.classList.toggle('is-hidden', cat !== 'all' && w.dataset.cat !== cat);
    });
  });
});

// 문의 폼 전송 (Formspree)
const form = document.querySelector('#contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.action.includes('YOUR_FORM_ID')) {
      status.textContent = '아직 폼 전송 주소가 연결되지 않았어요. README의 "문의 폼 연결"을 확인하세요.';
      return;
    }
    status.textContent = '보내는 중…';
    try {
      const res = await fetch(form.action, {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' },
      });
      if (res.ok) { form.reset(); status.textContent = '문의가 접수되었습니다. 빠르게 연락드릴게요.'; }
      else status.textContent = '전송에 실패했어요. 잠시 후 다시 시도해 주세요.';
    } catch {
      status.textContent = '네트워크 오류가 발생했어요. 잠시 후 다시 시도해 주세요.';
    }
  });
}

// 푸터 연도
document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
