/* SOHOCHOR global locale loader v2 */
(function(){'use strict';if(window.__SOHOCHOR_LOCALE_LOADER__)return;window.__SOHOCHOR_LOCALE_LOADER__=true;
var loaderSrc=(document.currentScript&&document.currentScript.src)||new URL('assets/locale-loader.js',location.href).href;
function load(src){return new Promise(function(resolve,reject){if(document.querySelector('script[data-sohochor-locale="'+src+'"]'))return resolve();var s=document.createElement('script');s.src=src;s.defer=true;s.dataset.sohochorLocale=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s);});}
function start(){var base=new URL('../country-language.js',loaderSrc).href;var dict=new URL('./i18n-ui.js',loaderSrc).href;load(base).then(function(){return load(dict)}).catch(function(err){console.warn('SOHOCHOR locale assets failed to load',err);});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
