const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const PAGES=[['index','Início'],['portfolio','Portfólio'],['essencia','Nossa Essência'],['depoimentos','Depoimentos'],['contato','Contato']];
const ICON={eye:'<circle cx="24" cy="24" r="8"/><path d="M3 24s8-14 21-14 21 14 21 14-8 14-21 14S3 24 3 24z"/>',mic:'<rect x="18" y="4" width="12" height="24" rx="6"/><path d="M10 22a14 14 0 0 0 28 0M24 36v8M16 44h16"/>',heart:'<path d="M24 42S6 31 6 18a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 13-18 24-18 24z"/>'};
const page=document.body.dataset.page, WA='https://wa.me/5592999999999?text='+encodeURIComponent('Olá, vi o site da FOZ FILMS e gostaria de saber mais sobre o filme do nosso casamento.');
/* Layout compartilhado */
$('#top').innerHTML=`<div class="wrap"><a href="index.html" class="logo">FOZ<i>films</i></a><button class="burger" aria-label="Abrir menu"><i></i></button><nav class="links">${PAGES.map(([p,n])=>`<a href="${p}.html"${p===page?' class="on"':''}>${n}</a>`).join('')}</nav></div>`;
$('#foot').innerHTML=`<div class="wrap"><div class="fg"><div><a href="index.html" class="logo">FOZ<i>films</i></a><p style="margin-top:12px;max-width:34ch">Filmes de casamento com olhar documental, áudio cristalino e entrega artesanal.</p></div><div><h4>Navegue</h4><ul>${PAGES.map(([p,n])=>`<li><a href="${p}.html">${n}</a></li>`).join('')}</ul></div><div><h4>Contato</h4><ul><li><a href="mailto:contato@fozfilms.com.br">contato@fozfilms.com.br</a></li><li><a href="${WA}" target="_blank" rel="noopener">WhatsApp</a></li><li><a href="https://instagram.com/fozfilms" target="_blank" rel="noopener">Instagram</a></li><li><a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a></li></ul></div></div><p class="copy">© ${new Date().getFullYear()} FOZ FILMS. Todos os direitos reservados.</p></div>`;
document.body.insertAdjacentHTML('beforeend','<div class="modal" id="modal"><div class="box"><button class="x" aria-label="Fechar">×</button><div id="pl" style="width:100%;height:100%"></div></div></div>');
const top_=$('#top'),links=$('.links');
const sc=()=>top_.classList.toggle('solid',scrollY>60||!!$('.phead')||links.classList.contains('open'));addEventListener('scroll',sc,{passive:true});sc();
$('.burger').onclick=()=>{links.classList.toggle('open');sc()};
$$('[data-icon]').forEach(e=>e.innerHTML=`<svg viewBox="0 0 48 48">${ICON[e.dataset.icon]}</svg>`);
$$('[data-wa]').forEach(a=>{a.href=WA;a.target='_blank';a.rel='noopener'});
/* Modal de vídeo */
const modal=$('#modal'),pl=$('#pl');
function play(v){const s=v.type==='vm'?`https://player.vimeo.com/video/${v.id}?autoplay=1`:`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`;pl.innerHTML=`<iframe src="${s}" allow="autoplay;fullscreen;picture-in-picture" allowfullscreen title="${v.t}"></iframe>`;modal.classList.add('open');document.body.style.overflow='hidden'}
function stop(){modal.classList.remove('open');pl.innerHTML='';document.body.style.overflow=''}
modal.onclick=e=>{if(!e.target.closest('iframe'))stop()};addEventListener('keydown',e=>e.key==='Escape'&&stop());
const card=(v,i)=>`<button class="card" data-i="${i}" aria-label="Assistir ${v.t}"><div class="thumb"><img src="${v.img}" alt="${v.t}" loading="lazy"><span class="play"></span><span class="dur">${v.d}</span></div><h3>${v.t}</h3><small>${v.s}</small></button>`;
function fill(el,list){el.innerHTML=list.map(v=>card(v,VIDEOS.indexOf(v))).join('');$$('.card',el).forEach(c=>c.onclick=()=>play(VIDEOS[c.dataset.i]))}
/* Carrossel (setas, indicadores, deslize nativo) */
const car=$('#car');
if(car){fill(car,VIDEOS.filter(v=>v.cat==='filme'));const d=$('#cdots'),pv=$('#prev'),nx=$('#next');
const st=()=>car.firstElementChild.offsetWidth+24,pg=()=>Math.max(1,car.children.length-Math.round(car.clientWidth/st())+1);
const up=()=>{const c=Math.min(pg()-1,Math.round(car.scrollLeft/st()));$$('button',d).forEach((b,i)=>b.classList.toggle('on',i==c));pv.disabled=car.scrollLeft<4;nx.disabled=car.scrollLeft+car.clientWidth>=car.scrollWidth-4};
const bd=()=>{d.innerHTML=Array.from({length:pg()},(_,i)=>`<button aria-label="Slide ${i+1}"></button>`).join('');$$('button',d).forEach((b,i)=>b.onclick=()=>car.scrollTo({left:i*st(),behavior:'smooth'}));up()};
pv.onclick=()=>car.scrollBy({left:-st(),behavior:'smooth'});nx.onclick=()=>car.scrollBy({left:st(),behavior:'smooth'});car.onscroll=()=>requestAnimationFrame(up);addEventListener('resize',bd);bd()}
/* Portfólio com filtro */
const pf=$('#pf');if(pf){const draw=c=>fill(pf,VIDEOS.filter(v=>c==='all'||v.cat===c));draw('all');
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');draw(b.dataset.f)})}
/* Depoimentos */
const tg=$('#tg');if(tg){const n=+(tg.dataset.n||DEPOS.length);tg.innerHTML=DEPOS.slice(0,n).map(([q,c])=>`<figure class="t fx"><blockquote>“${q}”</blockquote><cite>${c}</cite></figure>`).join('')}
/* Formulário (simulado: conecte Formspree, EmailJS ou seu backend) */
const f=$('#form');if(f)f.onsubmit=e=>{e.preventDefault();const b=$('button',f);b.disabled=true;b.textContent='Enviando…';setTimeout(()=>{b.textContent='Mensagem enviada';$('#ok').classList.add('show');f.reset()},900)};
/* Fade-in */
const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&(x.target.classList.add('in'),io.unobserve(x.target))),{threshold:.12});$$('.fx').forEach(e=>io.observe(e));
