
const toggle=document.querySelector('.theme-toggle');
const saved=localStorage.getItem('theme');
if(saved==='dark'){document.body.classList.add('dark');toggle.textContent='☀'}
toggle?.addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');localStorage.setItem('theme',dark?'dark':'light');toggle.textContent=dark?'☀':'☾'});
const menu=document.querySelector('.menu-button');const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.querySelector('.lightbox');const lightboxImg=lightbox?.querySelector('img');const items=[...document.querySelectorAll('[data-lightbox]')];let current=0;
function openLightbox(src){current=items.findIndex(i=>i.dataset.lightbox===src);if(current<0)current=0;lightboxImg.src=src;lightbox.hidden=false;}
function move(step){if(!items.length)return;current=(current+step+items.length)%items.length;lightboxImg.src=items[current].dataset.lightbox;}
items.forEach(item=>item.addEventListener('click',e=>{e.preventDefault();openLightbox(item.dataset.lightbox)}));
lightbox?.querySelector('.close').addEventListener('click',()=>lightbox.hidden=true);
lightbox?.querySelector('.prev').addEventListener('click',()=>move(-1));
lightbox?.querySelector('.next').addEventListener('click',()=>move(1));
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.hidden=true});
document.addEventListener('keydown',e=>{if(!lightbox||lightbox.hidden)return;if(e.key==='Escape')lightbox.hidden=true;if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)});
