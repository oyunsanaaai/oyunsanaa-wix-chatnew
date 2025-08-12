/ өмнө нь:
// row.innerHTML = <span>${it.name}</span><div><button class="icon-btn" title="..."></button></div>;

// ингэж солино:
row.innerHTML = <span class="lbl">${it.name}</span><div><button class="icon-btn" style="display:none"></button></div>;
Enkh-Oyun
<script>
(function(){
  // 🎨 Палетт өнгүүд
  const COLORS = {
    standard: ["#E1D9C9","#AE9372","#B27D57","#7F4B30","#A28776","#7D8769","#424C21","#173125"],
    bundle:   ["#D8A48F","#957C60","#EFEBCE","#ABAC97","#433A29"],
    special:  ["#353326","#897E45"],
    premium:  "#7F4D30"
  };

  // 📌 Жагсаалт буддаг функц
  function paintList(key, arr){
    const body = document.querySelector(.guide-body[data-body="${key}"]);
    if(!body) return;
    body.querySelectorAll('.chip').forEach((chip,i)=>{
      const color = Array.isArray(arr) ? (arr[i] || arr[arr.length-1]) : arr;

      // Өнгийг CSS-ээс үл хамааран хүчээр тавина
      chip.style.setProperty('background', color, 'important');
      chip.style.setProperty('border-color', color, 'important');

      // Контрастоор текстийн өнгө сонгох
      const c = color.replace('#','');
      const r = parseInt(c.substr(0,2),16),
            g = parseInt(c.substr(2,2),16),
            b = parseInt(c.substr(4,2),16);
      const L = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
      const text = L < 0.55 ? '#fff' : '#1b1b1b';

      chip.querySelectorAll('div, .meta').forEach(el=>{
        el.style.setProperty('color', text, 'important');
        el.style.opacity = 1;
      });
    });
  }

  // 🌈 Бүх бүлгүүдийг будаж өгөх
  function applyGuideColors(){
    paintList('standard', COLORS.standard);
    paintList('bundle',   COLORS.bundle);
    paintList('special',  COLORS.special);
    paintList('premium',  Array(50).fill(COLORS.premium)); // Premium бүгд ижил
  }
  window.applyGuideColors = applyGuideColors;

  // 🚀 Автоматаар өнгө буулгах эвентүүд
  document.addEventListener('DOMContentLoaded', ()=> setTimeout(applyGuideColors, 0));
  document.getElementById('guideTabs')?.addEventListener('click', ()=>{
    setTimeout(applyGuideColors, 0);
  });
  const guideSec = document.getElementById('guideSection');
  if (guideSec){
    new MutationObserver(()=> applyGuideColors())
      .observe(guideSec, {childList:true, subtree:true});
  }
})();
</script>



