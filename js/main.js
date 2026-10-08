
const menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>{const o=links.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
links.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded',false)});
{const q=new URLSearchParams(location.search).get('room'),rs=document.getElementById('room');if(q&&rs)rs.value=q}
const today=new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type=date]').forEach(d=>d.min=today);
const MAIL='cedrickmaderazo657@gmail.com';
document.getElementById('inq')?.addEventListener('submit',e=>{
 e.preventDefault();const f=new FormData(e.target);
 if(f.get('out')<=f.get('in')){alert('Check-out must be after check-in.');return}
 const body=`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nCheck-in: ${f.get('in')}\nCheck-out: ${f.get('out')}\nAdults: ${f.get('adults')}, Children: ${f.get('kids')}\nChoice: ${f.get('room')}\nNotes: ${f.get('msg')}`;
 const ok=document.getElementById('ok');
 ok.style.display='block';ok.textContent=`Thank you, ${f.get('name')}. Your inquiry for ${f.get('room')} is ready. If your email app did not open, write to ${MAIL}.`;
 location.href=`mailto:${MAIL}?subject=${encodeURIComponent('Booking inquiry: '+f.get('room'))}&body=${encodeURIComponent(body)}`;
});
document.getElementById('msgform')?.addEventListener('submit',e=>{
 e.preventDefault();
 location.href=`mailto:${MAIL}?subject=${encodeURIComponent('Message from '+cn.value)}&body=${encodeURIComponent(cm.value+'\n\nReply to: '+ce.value)}`;
});

(()=>{
const bar=document.createElement('div');bar.id='bar';document.body.appendChild(bar);
const hd=document.querySelector('header');
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%';hd.classList.toggle('sc',scrollY>20)},{passive:true});
const els=[...document.querySelectorAll('.about>*,.room,.pkg,.promo,.gal figure,.dest>*,.info>div,blockquote,details,.contact>*,section h2,section .lead,.tw,.mv>div,.split>*,.band>*,.stats>*,.tl>li,.steps>*,.cards a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
els.filter(el=>!els.some(o=>o!==el&&o.contains(el))).forEach(el=>{
 el.classList.add('rv');el.style.transitionDelay=([...el.parentNode.children].indexOf(el)%4)*110+'ms';
 el.addEventListener('transitionend',ev=>{if(ev.target===el&&ev.propertyName==='transform'){el.classList.remove('rv');el.style.transitionDelay=''}});
 io.observe(el)});
const lb=document.createElement('div');lb.id='lb';lb.innerHTML='<img alt=""><p></p>';document.body.appendChild(lb);
document.querySelectorAll('.gal figure').forEach(f=>{
 const m=f.style.backgroundImage.match(/url\(["']?([^"')]+)/);if(!m)return;
 f.tabIndex=0;f.setAttribute('role','button');f.setAttribute('aria-label','Enlarge photo: '+f.textContent.trim());
 const open=()=>{const i=lb.querySelector('img');i.onload=()=>lb.classList.add('on');i.alt=f.textContent.trim();lb.querySelector('p').textContent=i.alt;i.src=m[1]};
 f.addEventListener('click',open);f.addEventListener('keydown',e=>{if(e.key==='Enter')open()});
});
lb.addEventListener('click',()=>lb.classList.remove('on'));
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
})();

(()=>{const fab=document.querySelector('.book-fab'),top=document.getElementById('top');
addEventListener('scroll',()=>{const y=scrollY>500;fab&&fab.classList.toggle('show',y);top.classList.toggle('show',y)},{passive:true});
top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));})();
