function $(s){ return document.querySelector(s) }
function $all(s){ return Array.from(document.querySelectorAll(s)) }

const enterBtn = $('#enterBtn');
if(enterBtn){
  enterBtn.addEventListener('click', () => {
    const bgm = document.getElementById('bgm');
    try { bgm && bgm.play(); } catch(e){}
    enterBtn.disabled = true;
    enterBtn.innerText = 'Opening...';
    setTimeout(()=> location.href = 'gallery.html', 900);
  });
}

function startHearts(){
  const area = document.querySelector('.hearts');
  if(!area) return;
  const emojis = ['💗','💞','💕','💓','🌸'];
  setInterval(()=>{
    const el = document.createElement('i');
    el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left = Math.random()*100 + 'vw';
    el.style.top = '-5vh';
    const size = 12 + Math.random()*26;
    el.style.fontSize = size + 'px';
    const dur = 3500 + Math.random()*3000;
    area.appendChild(el);
    el.animate(
      [{ transform: 'translateY(0) rotate(0deg)', opacity:1 },
       { transform: 'translateY(120vh) rotate(40deg)', opacity:0.12 }],
      { duration: dur, easing: 'linear' }
    );
    setTimeout(()=> el.remove(), dur+80);
  }, 260);
}
startHearts();

(function initSlideshow(){
  const slideWrap = document.getElementById('slideshow');
  if(!slideWrap) return;
  const maxCheck = 15;
  const found = [];
  let loaded = 0;
  for(let i=1;i<=maxCheck;i++){
    const src = `photos/photo${i}.jpg`;
    const img = new Image();
    img.src = src;
    img.onload = ()=> { found.push(src); checkDone(); }
    img.onerror = ()=> { checkDone(); };
  }
  function checkDone(){
    loaded++;
    if(loaded < maxCheck) return;
    if(found.length === 0){
      slideWrap.innerHTML = '<div class="slide"><div style="padding:40px;color:#4b023f">No photos found.<br>Place images as photos/photo1.jpg ... photo15.jpg</div></div>';
      return;
    }
    const slide = document.createElement('div');
    slide.className = 'slide';
    const imgEl = document.createElement('img');
    imgEl.src = found[0];
    slide.appendChild(imgEl);
    slideWrap.appendChild(slide);
    let idx = 0;
    let playing = true;
    function change(){
      idx = (idx + 1) % found.length;
      imgEl.style.transform = 'scale(1.06)';
      setTimeout(()=> { imgEl.src = found[idx]; }, 420);
      setTimeout(()=> { imgEl.style.transform = 'scale(1)'; }, 900);
    }
    const interval = setInterval(()=> { if(playing) change(); }, 4200);
    const playBtn = document.getElementById('playPause');
    const fsBtn = document.getElementById('fullscreen');
    if(playBtn) playBtn.onclick = ()=> { playing = !playing; playBtn.innerText = playing ? 'Pause' : 'Play'; }
    if(fsBtn) fsBtn.onclick = ()=> {
      if(document.fullscreenElement) document.exitFullscreen();
      else slideWrap.requestFullscreen().catch(()=>{});
    }
  }
})();

(function surpriseConfetti(){
  const conf = document.querySelector('.confetti');
  if(!conf) return;
  function pop(){
    for(let i=0;i<28;i++){
      const d = document.createElement('div');
      d.className = 'c';
      const size = 6 + Math.random()*14;
      d.style.width = d.style.height = size + 'px';
      d.style.background = ['#ff5ca8','#ffd6e6','#ff9cc6','#ff7ab3'][Math.floor(Math.random()*4)];
      d.style.position = 'absolute';
      d.style.left = (10 + Math.random()*80) + '%';
      d.style.top = (10 + Math.random()*60) + '%';
      conf.appendChild(d);
      const dur = 900 + Math.random()*1300;
      d.animate([{ transform: 'translateY(0) rotate(0deg)', opacity:1 },{ transform: 'translateY(-200px) rotate(260deg)', opacity:0 }], { duration: dur, easing: 'ease-out' });
      setTimeout(()=> d.remove(), dur+60);
    }
  }
  setTimeout(()=> pop(), 500);
  setTimeout(()=> pop(), 1300);
  setTimeout(()=> pop(), 2200);
})();

(function handleNameParam(){
  const p = new URLSearchParams(location.search);
  const name = p.get('name');
  if(name){
    $all('#heroName, #finalName').forEach(el => { if(el) el.textContent = name; });
  }
})();
document.getElementById("goBtn").addEventListener("click", function () {
  window.location.href = "messages.html";
});

// 💝 Card flip function
function openCard() {
  const card = document.querySelector(".birthday-card");
  card.classList.add("open");
}

// ➡️ Next button function
function goNext() {
  window.location.href = "gift.html";
}
