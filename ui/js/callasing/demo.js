/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#7478b7',
    lineColor: '#7478b7'
  });
  var introcan = document.getElementById('introcan');
  introcan.style.marginTop = - introcan.offsetHeight  + 'px';
}, false);