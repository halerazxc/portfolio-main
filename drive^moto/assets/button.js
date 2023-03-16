document.querySelectorAll('button').forEach(b => b.addEventListener('click', e => {
  let s;
  requestAnimationFrame(draw);

  function draw(t) {
    t - (s = s || t) < 1000 && requestAnimationFrame(draw);
    t = (t - s) / 800
    let r = b.getBoundingClientRect();
    let p = `${e.x - r.x} ${e.y - r.y},${t * Math.max(r.width, r.height)}`;
    b.style.backgroundImage=`-webkit-gradient(radial,${p},${p},from(rgba(255,255,255,${0.6-t*0.6})),to(#fff0))`
  }
}))