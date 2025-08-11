//// 0) Толгой дээрх кодыг байрлуулна (аль хэдийн байгаа бол алгас)
document.getElementById('userCode').textContent = 'код: ' + (localStorage.getItem('oy_reg_code') || '—');

// 1) ЧАТ БИЧИХ ҮЕД МЕНЮ АВТО ХАЛЬДАНА
const app = document.getElementById('app');
chatInput.addEventListener('focus', ()=> app.classList.add('sidebar-hidden'));
chatInput.addEventListener('input', ()=> app.classList.add('sidebar-hidden'));
document.getElementById('chatForm')?.addEventListener('submit', ()=> app.classList.add('sidebar-hidden'));

// 2) ХААХ / НЭЭХ
const closeBtn = document.getElementById('closeBtn');
const openPill = document.getElementById('openPill');
closeBtn.addEventListener('click', ()=>{
  app.style.display = 'none';
  openPill.style.display = 'inline-block';
});
openPill.addEventListener('click', ()=>{
  app.style.display = 'grid';
  openPill.style.display = 'none';
});

// 3) 4 МЕНЮ – идэвхжүүлэх үед зөвхөн тухайн жагсаалтыг харуулах (аль хэдийн байгаа логик дээр нэмэлт баталгаажуулалт)
guideTabs.addEventListener('click', e=>{
  const t = e.target.closest('.gbtn'); if(!t) return;
  guideTabs.querySelectorAll('.gbtn').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  const key = t.dataset.tab;
  document.querySelectorAll('.guide-body').forEach(b=>{ b.style.display='none'; b.classList.remove('active'); });
  const body = document.querySelector(`.guide-body[data-body="${key}"]`);
  if(body){ body.style.display='block'; body.classList.add('active'); }
  document.getElementById('guideBack').style.display = 'block';
});

// 4) ЧАТ НЭЭХДЭЭ ТОЛГОЙН НЭРИЙГ ШИНЭЧИЛНЭ
function openChat(item){
  currentChat = item;
  chatName.textContent = item.name;
  chatSub.textContent  = item.meta || '';
  chatBody.innerHTML = '';
  addMsg('bot', `Сайн байна уу! <b>${item.name}</b> нээгдлээ. Юу асуух вэ?`);

  // ТОЛГОЙГ “Оюунсанаа чат — …” хэлбэрээр
  const tt = document.getElementById('topTitle');
  tt.textContent = `Оюунсанаа чат — ${item.name}`;

  // бичих үед төвлөрөх
  app.classList.add('sidebar-hidden');
  chatInput.focus();
}
// 0) Толгой дээрх кодыг байрлуулна (аль хэдийн байгаа бол алгас)
document.getElementById('userCode').textContent = 'код: ' + (localStorage.getItem('oy_reg_code') || '—');

// 1) ЧАТ БИЧИХ ҮЕД МЕНЮ АВТО ХАЛЬДАНА
const app = document.getElementById('app');
chatInput.addEventListener('focus', ()=> app.classList.add('sidebar-hidden'));
chatInput.addEventListener('input', ()=> app.classList.add('sidebar-hidden'));
document.getElementById('chatForm')?.addEventListener('submit', ()=> app.classList.add('sidebar-hidden'));

// 2) ХААХ / НЭЭХ
const closeBtn = document.getElementById('closeBtn');
const openPill = document.getElementById('openPill');
closeBtn.addEventListener('click', ()=>{
  app.style.display = 'none';
  openPill.style.display = 'inline-block';
});
openPill.addEventListener('click', ()=>{
  app.style.display = 'grid';
  openPill.style.display = 'none';
});

// 3) 4 МЕНЮ – идэвхжүүлэх үед зөвхөн тухайн жагсаалтыг харуулах (аль хэдийн байгаа логик дээр нэмэлт баталгаажуулалт)
guideTabs.addEventListener('click', e=>{
  const t = e.target.closest('.gbtn'); if(!t) return;
  guideTabs.querySelectorAll('.gbtn').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  const key = t.dataset.tab;
  document.querySelectorAll('.guide-body').forEach(b=>{ b.style.display='none'; b.classList.remove('active'); });
  const body = document.querySelector(`.guide-body[data-body="${key}"]`);
  if(body){ body.style.display='block'; body.classList.add('active'); }
  document.getElementById('guideBack').style.display = 'block';
});

// 4) ЧАТ НЭЭХДЭЭ ТОЛГОЙН НЭРИЙГ ШИНЭЧИЛНЭ
function openChat(item){
  currentChat = item;
  chatName.textContent = item.name;
  chatSub.textContent  = item.meta || '';
  chatBody.innerHTML = '';
  addMsg('bot', `Сайн байна уу! <b>${item.name}</b> нээгдлээ. Юу асуух вэ?`);

  // ТОЛГОЙГ “Оюунсанаа чат — …” хэлбэрээр
  const tt = document.getElementById('topTitle');
  tt.textContent = `Оюунсанаа чат — ${item.name}`;

  // бичих үед төвлөрөх
  app.classList.add('sidebar-hidden');
  chatInput.focus();
}
// 1) Чат бичихэд меню автоматаар алга болгоно
(function(){
  const app = document.getElementById('app');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  if(chatInput){
    chatInput.addEventListener('focus', ()=> app.classList.add('sidebar-hidden'));
    chatInput.addEventListener('input', ()=> app.classList.add('sidebar-hidden'));
  }
  if(sendBtn){
    sendBtn.addEventListener('click', ()=> app.classList.add('sidebar-hidden'));
  }
})();

// 2) Чат нээх үед толгойн гарчгийг шинэчилж байсныг баталгаажуулна
(function(){
  const topTitle = document.getElementById('topTitle');
  if(topTitle){
    const _openChat = window.openChat;
    window.openChat = function(item){
      if(_openChat) _openChat(item);
      topTitle.textContent = `Оюунсанаа чат — ${item.name}`;
    };
  }
})();
