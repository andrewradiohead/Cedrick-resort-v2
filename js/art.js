(()=>{
const hero=document.querySelector('.hero');
if(hero){
 addEventListener('scroll',()=>hero.style.setProperty('--py',Math.min(scrollY*.35,320)+'px'),{passive:true});
 hero.addEventListener('mousemove',e=>{hero.style.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));hero.style.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3))});
}
if(matchMedia('(hover:hover)').matches){
 const g=document.createElement('div');g.id='glow';document.body.appendChild(g);
 addEventListener('mousemove',e=>{g.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
 document.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.setProperty('--mx',((e.clientX-r.left-r.width/2)*.22)+'px');b.style.setProperty('--my',((e.clientY-r.top-r.height/2)*.3)+'px')});
  b.addEventListener('mouseleave',()=>{b.style.setProperty('--mx','0px');b.style.setProperty('--my','0px')});
 });
}
})();
