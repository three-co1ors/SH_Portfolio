'use strict';
const menu=document.querySelector('.menu'), nav=document.querySelector('#navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
const dialog=document.querySelector('#lightbox');
if(dialog){const image=dialog.querySelector('img'),video=dialog.querySelector('video'),caption=dialog.querySelector('p');let lastShot;
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 dialog.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load();image.removeAttribute('src');image.hidden=true;video.hidden=true;lastShot?.focus()});
 document.querySelectorAll('.shot').forEach(shot=>shot.addEventListener('click',()=>{lastShot=shot;caption.textContent=shot.dataset.caption;const isVideo=!!shot.dataset.video;image.hidden=isVideo;video.hidden=!isVideo;if(isVideo){video.poster=shot.dataset.src;video.src=shot.dataset.video;}else{image.alt=shot.dataset.caption;image.src=shot.dataset.src;}dialog.showModal();}));
}
