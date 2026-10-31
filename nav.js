(function(){
var tabs=[["Home","/index.html","M3 11l9-8 9 8v10h-6v-6H9v6H3z"],["E-resources","/resources.html","M6 2h9l5 5v15H6z M14 2v6h6"],["Books","/library.html","M4 4h7a3 3 0 013 3v14a2 2 0 00-2-2H4z M20 4h-7a3 3 0 00-3 3v14a2 2 0 012-2h8z"],["Profile","/profile.html","M12 12a5 5 0 100-10 5 5 0 000 10z M4 22a8 8 0 0116 0z"]];
var p=location.pathname;if(p==="/")p="/index.html";
var css="#kbar{position:fixed;left:0;right:0;bottom:0;display:flex;background:#2f7d4f;z-index:99;padding-bottom:env(safe-area-inset-bottom)}#kbar a{flex:1;text-align:center;color:#d6efe0;text-decoration:none;font:600 12px sans-serif;padding:8px 0 10px}#kbar a.on{color:#fff;border-top:3px solid #7ee0a3;padding-top:5px}#kbar svg{display:block;margin:0 auto 3px;width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linejoin:round}body{padding-bottom:76px!important}";
var s=document.createElement("style");s.textContent=css;document.head.appendChild(s);
var b=document.createElement("nav");b.id="kbar";
tabs.forEach(function(t){var a=document.createElement("a");a.href=t[1];if(p===t[1])a.className="on";a.innerHTML='<svg viewBox="0 0 24 24"><path d="'+t[2]+'"/></svg>'+t[0];b.appendChild(a)});
document.body.appendChild(b);
})();
