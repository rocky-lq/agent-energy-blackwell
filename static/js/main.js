// Tooltip for the share chart and the copy button for the BibTeX block. No dependencies.
(function () {
  var tip = document.getElementById('tip');
  var segs = document.querySelectorAll('.seg');

  function show(seg, x, y) {
    tip.textContent = '';
    var value = document.createElement('strong');
    value.textContent = seg.dataset.value + ' · ' + seg.dataset.share;
    var label = document.createElement('span');
    var key = document.createElement('i');
    key.style.background = getComputedStyle(seg).backgroundColor;
    label.appendChild(key);
    label.appendChild(document.createTextNode(seg.dataset.name + ', ' + seg.dataset.row));
    tip.appendChild(value);
    tip.appendChild(label);
    tip.hidden = false;
    var r = tip.getBoundingClientRect();
    var left = Math.min(Math.max(8, x - r.width / 2), window.innerWidth - r.width - 8);
    var top = y - r.height - 12;
    if (top < 8) top = y + 18;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }

  function hide() { tip.hidden = true; }

  segs.forEach(function (seg) {
    seg.setAttribute('aria-label',
      seg.dataset.name + ', ' + seg.dataset.row + ': ' + seg.dataset.value + ', ' + seg.dataset.share);
    seg.addEventListener('pointermove', function (e) { show(seg, e.clientX, e.clientY); });
    seg.addEventListener('pointerleave', hide);
    seg.addEventListener('focus', function () {
      var r = seg.getBoundingClientRect();
      show(seg, r.left + r.width / 2, r.top);
    });
    seg.addEventListener('blur', hide);
  });
  window.addEventListener('scroll', hide, { passive: true });

  var btn = document.getElementById('copy-bib');
  if (btn) {
    btn.addEventListener('click', function () {
      var text = document.getElementById('bib').textContent;
      var done = function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done);
      } else {
        var range = document.createRange();
        range.selectNodeContents(document.getElementById('bib'));
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try { document.execCommand('copy'); done(); } catch (e) { /* leave the text selected */ }
      }
    });
  }
})();
