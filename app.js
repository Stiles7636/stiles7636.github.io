let D = window.PORTFOLIO;
let lang = localStorage.getItem('lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
const t = v => v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.en) : v;
const UI = {
  home:{en:'Home',es:'Inicio'}, about:{en:'About',es:'Sobre mí'}, contact:{en:'Contact',es:'Contacto'},
  hi:{en:"Hi, I'm Fabricio",es:'Hola, soy Fabricio'}, seeWork:{en:'See my work',es:'Ver proyectos'}, talk:{en:"Let's talk",es:'Hablemos'},
  problem:{en:'Problem',es:'Problema'}, solution:{en:'Solution',es:'Solución'}, result:{en:'Result',es:'Resultado'},
  back:{en:'← Back',es:'← Volver'}, repo:{en:'View code',es:'Ver código'}, demo:{en:'Live demo',es:'Ver en vivo'},
  exp:{en:'Experience',es:'Experiencia'}, skills:{en:'Skills',es:'Habilidades'}, edu:{en:'Education & Certifications',es:'Educación y certificaciones'},
  lang:{en:'Languages',es:'Idiomas'}, soon:{en:'Coming soon — Photoshop & visual design work.',es:'Muy pronto — trabajos de Photoshop y diseño visual.'},
  contactTxt:{en:"Have a project, a role or just want to say hi? I'd love to hear from you.",es:'¿Tienes un proyecto, un puesto o solo quieres saludar? Me encantaría saber de ti.'},
  open:{en:'Open project',es:'Ver proyecto'}
};
const u = k => t(UI[k]);
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function tabs() {
  const list = [['home',u('home')],['about',u('about')],...D.sections.map(s=>[s.id,t(s.title)]),['contact',u('contact')]];
  return list;
}
function drawNav(cur) {
  $('#tabs').innerHTML = tabs().map(([id,l]) => `<a href="#${id}" class="${id===cur?'on':''}">${esc(l)}</a>`).join('');
  $('#lang').textContent = lang === 'en' ? 'ES' : 'EN';
  document.documentElement.lang = lang;
  $('#footTxt').textContent = `© ${new Date().getFullYear()} ${D.profile.name} · ${D.profile.location}`;
}

const pages = {
  home: () => `<section class="page hero">
    <div><p class="chip alt" style="display:inline-block">${esc(D.profile.location)} 📍</p>
      <h1>${u('hi')} <span class="wave">👋</span></h1>
      <p class="tag">${esc(t(D.profile.tagline))}</p>
      <div class="btns"><a class="btn" href="#${D.sections[0].id}">${u('seeWork')}</a><a class="btn alt" href="#contact">${u('talk')}</a></div></div>
    <div class="blob"><img src="${D.profile.photo}" alt="${esc(D.profile.name)}"></div></section>
    <div class="stats">${D.stats.map(s=>`<div class="stat reveal"><b>${esc(s.value)}</b><span>${esc(t(s))}</span></div>`).join('')}</div>`,
  about: () => `<section class="page"><h2>${u('about')}</h2>
    <div class="card"><p style="font-size:17px;margin:0">${esc(t(D.about))}</p></div>
    <h2>${u('exp')}</h2>${D.experience.map(e=>`<div class="card exp reveal"><h3>${esc(t(e.role))}</h3><small>${esc(e.org)} · ${esc(t(e.date))}</small><ul>${t(e.points).map(p=>`<li>${esc(p)}</li>`).join('')}</ul></div>`).join('')}
    <div class="grid2"><div class="card"><h3>${u('skills')}</h3><div class="chips">${D.skills.technical.map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div>
      <div class="chips" style="margin-top:10px">${t(D.skills.soft).map(s=>`<span class="chip alt">${esc(s)}</span>`).join('')}</div></div>
    <div class="card"><h3>${u('edu')}</h3><ul style="color:var(--muted);padding-left:20px">${D.education.map(e=>`<li>${esc(t(e))}</li>`).join('')}</ul>
      <h3>${u('lang')}</h3><p style="color:var(--muted)">${esc(t(D.languages))}</p></div></div></section>`,
  contact: () => `<section class="page contact card"><div style="font-size:50px">💌</div><h2>${u('contact')}</h2><p style="color:var(--muted)">${u('contactTxt')}</p>
    <div class="btns"><a class="btn" href="mailto:${D.profile.email}">✉️ ${esc(D.profile.email)}</a><a class="btn alt" target="_blank" rel="noopener" href="${D.profile.linkedin}">LinkedIn</a>
    ${D.profile.github?`<a class="btn alt" target="_blank" rel="noopener" href="${D.profile.github}">GitHub</a>`:''}</div></section>`
};

function sectionPage(s) {
  if (!s.items.filter(p=>!p.hidden).length) return `<section class="page"><h2>${esc(t(s.title))}</h2><div class="card soon"><div>🎨</div><p>${u('soon')}</p></div></section>`;
  return `<section class="page"><h2>${esc(t(s.title))}</h2><div class="projects">${s.items.filter(p=>!p.hidden).map(p=>`
    <article class="proj reveal" onclick="location.hash='${s.id}/${p.id}'"><div class="cover-wrap"><div class="cover" style="background-image:url('${p.images[0]||''}')"></div></div>
    <div class="body"><h3>${esc(t(p.title))}</h3><p>${esc(t(p.problem))}</p><p class="result">✨ ${esc(t(p.result))}</p>
    <div class="chips">${p.tags.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div></div></article>`).join('')}</div></section>`;
}
let gal = [], gi = 0;
function projectPage(s, p) {
  const caps = t(p.captions) || [];
  gal = p.images.map((src,i)=>({src,cap:caps[i]||''}));
  const L = p.links || {};
  return `<section class="page detail"><button class="back" onclick="location.hash='${s.id}'">${u('back')}</button>
    <h1>${esc(t(p.title))}</h1><div class="chips">${p.tags.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div>
    <div class="psr"><div><b>${u('problem')}</b><p>${esc(t(p.problem))}</p></div><div><b>${u('solution')}</b><p>${esc(t(p.solution))}</p></div><div><b>${u('result')}</b><p>${esc(t(p.result))}</p></div></div>
    ${p.note?`<div class="card" style="background:var(--frozen);border-left:6px solid var(--pacific);padding:16px 20px;margin:0 0 16px;font-weight:500">${esc(t(p.note))}</div>`:''}
    <div class="btns" style="margin:0 0 24px">${L.demo?`<a class="btn" target="_blank" rel="noopener" href="${L.demo}">🚀 ${u('demo')}</a>`:''}${L.repo?`<a class="btn alt" target="_blank" rel="noopener" href="${L.repo}">💻 ${u('repo')}</a>`:''}</div>
    <div class="gallery">${gal.map((g,i)=>`<figure class="reveal" onclick="openLb(${i})"><img loading="lazy" src="${g.src}" alt="${esc(g.cap)}"><figcaption>${esc(g.cap)}</figcaption></figure>`).join('')}</div></section>`;
}
function openLb(i){ gi=(i+gal.length)%gal.length; const lb=$('#lightbox'); lb.classList.remove('hidden'); lb.querySelector('img').src=gal[gi].src; lb.querySelector('p').textContent=gal[gi].cap; }
$('.lb-x').onclick=()=>$('#lightbox').classList.add('hidden');
$('.lb-prev').onclick=()=>openLb(gi-1); $('.lb-next').onclick=()=>openLb(gi+1);
document.addEventListener('keydown',e=>{ if($('#lightbox').classList.contains('hidden'))return; if(e.key==='Escape')$('.lb-x').click(); if(e.key==='ArrowLeft')openLb(gi-1); if(e.key==='ArrowRight')openLb(gi+1); });

function route() {
  const [a,b] = (location.hash.slice(1) || 'home').split('/');
  const s = D.sections.find(x=>x.id===a);
  let html;
  if (pages[a]) html = pages[a]();
  else if (s && b) { const p = s.items.find(x=>x.id===b); html = p ? projectPage(s,p) : sectionPage(s); }
  else if (s) html = sectionPage(s);
  else html = pages.home();
  $('#app').innerHTML = html; drawNav(pages[a]||s ? a : 'home');
  reveal();
  $('#tabs').classList.remove('open'); window.scrollTo({top:0,behavior:'smooth'});
}
$('#lang').onclick = () => { lang = lang==='en'?'es':'en'; localStorage.setItem('lang',lang); route(); };
$('#menu').onclick = () => $('#tabs').classList.toggle('open');
window.addEventListener('hashchange', route);

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: .12 });
function reveal() { document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 6) * 80 + 'ms'; io.observe(el); }); }
(() => { const b = document.createElement('div'); b.className = 'bubbles';
  for (let i = 0; i < 14; i++) { const s = document.createElement('span'), z = 20 + Math.random() * 70;
    Object.assign(s.style, { width: z + 'px', height: z + 'px', left: Math.random() * 100 + '%', animationDuration: 14 + Math.random() * 18 + 's', animationDelay: -Math.random() * 30 + 's' }); b.appendChild(s); }
  document.body.appendChild(b); })();

(async () => {
  const c = window.FIREBASE_CONFIG || {};
  if (c.projectId) {
    try {
      const r = await fetch(`https://firestore.googleapis.com/v1/projects/${c.projectId}/databases/(default)/documents/site/content?key=${c.apiKey}`);
      if (r.ok) { const doc = await r.json(); const s = doc.fields?.json?.stringValue; if (s) D = JSON.parse(s); }
    } catch (e) { console.warn('Using local data', e); }
  }
  route();
})();
