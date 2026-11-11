(function(){
var unis=[["UoN","University of Nairobi","https://www.uonbi.ac.ke","uonbi.ac.ke"],["KSU","Koitaleel Samoei University College","https://ksu.ac.ke","ksu.ac.ke"],["UoE","University of Eldoret","https://www.uoeld.ac.ke","uoeld.ac.ke"],["MU","Moi University","https://www.mu.ac.ke","mu.ac.ke"],["KU","Kenyatta University","https://www.ku.ac.ke","ku.ac.ke"],["EU","Egerton University","https://www.egerton.ac.ke","egerton.ac.ke"],["MSU","Maseno University","https://www.maseno.ac.ke","maseno.ac.ke"],["JK","JKUAT","https://www.jkuat.ac.ke","jkuat.ac.ke"]];
var libs=[["eRepo","UoN eRepository","https://erepository.uonbi.ac.ke","erepository.uonbi.ac.ke"],["UN","UN Digital Library","https://digitallibrary.un.org","digitallibrary.un.org"],["LAW","Kenya Law","https://new.kenyalaw.org","kenyalaw.org"],["GS","Google Scholar","https://scholar.google.com","scholar.google.com"]];
var grads=["linear-gradient(135deg,#4cb97a,#2f9fb4)","linear-gradient(135deg,#2f9fb4,#4c7fd0)","linear-gradient(135deg,#e9b949,#f08a4b)","linear-gradient(135deg,#8e6fd8,#d86fb0)"];
function mk(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e}
function go(u){window.open(u,"_blank")}
function url(l,t){return l[0]==="GS"?"https://scholar.google.com/scholar?q="+encodeURIComponent(t):"https://www.google.com/search?q="+encodeURIComponent("site:"+l[3]+" "+t)}
var home=document.getElementById("home"),q=document.getElementById("q"),res=document.getElementById("res");
if(!home||!q||!res)return;
var st=document.createElement("style");
st.textContent=".kbox{display:flex;align-items:center;gap:14px;background:#fff;border-radius:18px;margin:0 14px 12px;padding:16px;min-height:84px;box-shadow:0 3px 12px rgba(20,60,50,.12);cursor:pointer;color:#1f2d2b}.kbox .bd{flex:none;width:64px;height:64px;border-radius:16px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px}.kbox .tx{flex:1;min-width:0}.kbox b{display:block;font-size:17px;line-height:1.25}.kbox small{display:block;color:#5b6b68;margin-top:3px;word-break:break-all}.kbox .ar{flex:none;color:#2fa37a;font-size:24px}html.kdark .kbox{background:#182a26;color:#e6f2ee}html.kdark .kbox small{color:#9fb8b0}";
document.head.appendChild(st);
function box(l,i){var d=mk("div","kbox");var b=mk("div","bd",l[0]);b.style.background=grads[i%4];var t=mk("div","tx");t.appendChild(mk("b","",l[1]));t.appendChild(mk("small","",l[3]));d.appendChild(b);d.appendChild(t);d.appendChild(mk("div","ar","›"));d.onclick=function(){go(l[2])};return d}
var rl=mk("a","kbox");rl.href="/reading.html";rl.style.textDecoration="none";
var rb=mk("div","bd","READ");rb.style.background=grads[0];rb.style.fontSize="14px";var rt=mk("div","tx");rt.appendChild(mk("b","","Reading list"));rt.appendChild(mk("small","","Free English and Literature books and papers"));rl.appendChild(rb);rl.appendChild(rt);rl.appendChild(mk("div","ar","›"));
home.appendChild(mk("h3","","Reading list"));home.appendChild(rl);
home.appendChild(mk("h3","","Universities"));
unis.forEach(function(l,i){home.appendChild(box(l,i))});
home.appendChild(mk("h3","","Free libraries"));
libs.forEach(function(l,i){home.appendChild(box(l,i+1))});
home.appendChild(mk("p","empty","Each box opens that site's own website. Kololi does not copy their files."));
q.addEventListener("input",function(){var t=q.value.trim();if(!t)return;
res.appendChild(mk("h3","",'Search beyond Kololi for "'+t+'"'));
var r0=mk("div","item");r0.appendChild(mk("div","dot c0","READ"));var f0=mk("div","info");f0.appendChild(mk("b","","Reading list"));f0.appendChild(mk("small","","Free books and papers"));r0.appendChild(f0);var b0=mk("button","","Open");b0.onclick=function(){location.href="/reading.html?q="+encodeURIComponent(t)};r0.appendChild(b0);res.appendChild(r0);
libs.forEach(function(l,i){var r=mk("div","item");r.appendChild(mk("div","dot c"+((i+1)%4),l[0]));var f=mk("div","info");f.appendChild(mk("b","",l[1]));f.appendChild(mk("small","","Opens their website"));r.appendChild(f);var b=mk("button","","Search");b.onclick=function(){go(url(l,t))};r.appendChild(b);res.appendChild(r)})});
})();
