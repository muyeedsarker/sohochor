/* SOHOCHOR global locale loader v1 */
(function(){'use strict';if(window.__SOHOCHOR_LOCALE_LOADER__)return;window.__SOHOCHOR_LOCALE_LOADER__=true;
function load(src){return new Promise(function(resolve,reject){if(document.querySelector('script[data-sohochor-locale="'+src+'"]'))return resolve();var s=document.createElement('script');s.src=src;s.defer=true;s.dataset.sohochorLocale=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s);});}
function start(){var base=new URL('../country-language.js',document.currentScript&&document.currentScript.src||location.href).href;load(base).then(function(){var dict=new URL('./i18n-ui.js',location.href).href;return load(dict);}).catch(function(){/* keep page functional if optional locale assets fail */});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
