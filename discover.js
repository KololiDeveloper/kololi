(function(){
var ticker=[["DOAJ","Open access journals","https://doaj.org","#e04e1b"],["AJOL","African Journals Online","https://www.ajol.info","#1b7a3d"],["OCW","MIT OpenCourseWare","https://ocw.mit.edu","#a31f34"],["OS","OpenStax free textbooks","https://openstax.org","#0d8fb3"],["OTL","Open Textbook Library","https://open.umn.edu/opentextbooks","#7a0019"],["CORE","CORE open research papers","https://core.ac.uk","#d97706"],["DOAB","Open access academic books","https://www.doabooks.org","#1d5fa8"],["PG","Project Gutenberg","https://www.gutenberg.org","#44566c"],["IA","Internet Archive","https://archive.org","#1a1a1a"],["OL","Open Library","https://openlibrary.org","#7a4a1e"],["PF","Poetry Foundation","https://www.poetryfoundation.org","#8f2d56"],["WS","Wikisource","https://en.wikisource.org","#3366cc"],["OER","OER Commons","https://oercommons.org","#2b6cb0"],["KA","Khan Academy","https://www.khanacademy.org","#0f9d7a"],["UoN","UoN eRepository","https://erepository.uonbi.ac.ke","#1e4f9b"],["UN","UN Digital Library","https://digitallibrary.un.org","#0b86c5"],["LAW","Kenya Law","https://new.kenyalaw.org","#0e5a3a"],["GS","Google Scholar","https://scholar.google.com","#3b78e7"]];
var unis=[["UoN","University of Nairobi","https://www.uonbi.ac.ke","uonbi.ac.ke"],["KSU","Koitaleel Samoei University College","https://ksu.ac.ke","ksu.ac.ke"],["UoE","University of Eldoret","https://www.uoeld.ac.ke","uoeld.ac.ke"],["MU","Moi University","https://www.mu.ac.ke","mu.ac.ke"],["KU","Kenyatta University","https://www.ku.ac.ke","ku.ac.ke"],["EU","Egerton University","https://www.egerton.ac.ke","egerton.ac.ke"],["MSU","Maseno University","https://www.maseno.ac.ke","maseno.ac.ke"],["JK","JKUAT","https://www.jkuat.ac.ke","jkuat.ac.ke"]];
var libs=[["eRepo","UoN eRepository","https://erepository.uonbi.ac.ke","erepository.uonbi.ac.ke"],["UN","UN Digital Library","https://digitallibrary.un.org","digitallibrary.un.org"],["LAW","Kenya Law","https://new.kenyalaw.org","kenyalaw.org"],["GS","Google Scholar","https://scholar.google.com","scholar.google.com"]];
var grads=["linear-gradient(135deg,#4cb97a,#2f9fb4)","linear-gradient(135deg,#2f9fb4,#4c7fd0)","linear-gradient(135deg,#e9b949,#f08a4b)","linear-gradient(135deg,#8e6fd8,#d86fb0)"];
var catCol={"Drama":"#c0392b","Linguistics":"#2980b9","Poetry":"#8e44ad","Prose":"#16a085","Other":"#7f8c8d"};
function mk(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e}
function go(u){window.open(u,"_blank")}
function url(l,t){return l[0]==="GS"?"https://scholar.google.com/scholar?q="+encodeURIComponent(t):"https://www.google.com/search?q="+encodeURIComponent("site:"+l[3]+" "+t)}
var home=document.getElementById("home"),q=document.getElementById("q"),res=document.getElementById("res");
if(!home||!q||!res)return;
var st=document.createElement("style");
st.textContent=".kbox{display:flex;align-items:center;gap:14px;background:#fff;border-radius:18px;margin:0 14px 12px;padding:16px;min-height:84px;box-shadow:0 3px 12px rgba(20,60,50,.12);cursor:pointer;color:#1f2d2b}.kbox .bd{flex:none;width:64px;height:64px;border-radius:16px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px}.kbox .tx{flex:1;min-width:0}.kbox b{display:block;font-size:17px;line-height:1.25}.kbox small{display:block;color:#5b6b68;margin-top:3px;word-break:break-all}.kbox .ar{flex:none;color:#2fa37a;font-size:24px}"
+"#ktick{overflow:hidden;background:#f4f9f8;padding:14px 0;white-space:nowrap}#ktick .trk{display:inline-block;animation:kmr 110s linear infinite}#ktick:active .trk{animation-play-state:paused}@keyframes kmr{from{transform:translateX(-100%)}to{transform:translateX(100vw)}}#ktick .ch{display:inline-flex;align-items:center;gap:12px;margin-right:16px;padding:10px 24px 10px 10px;border-radius:999px;color:#fff;box-shadow:0 4px 10px rgba(0,0,0,.2);font:700 17px Roboto,Arial,sans-serif;cursor:pointer;animation:kpopin .6s ease both}#ktick .ch i{font-style:normal;width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}@keyframes kpopin{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}"
+"#kmy{margin:0 0 20px}#kmy .md{display:flex;align-items:center;gap:12px;width:84%;margin:0 0 10px 14px;padding:12px;background:#fff;border-radius:14px;border-left:8px solid #7f8c8d;box-shadow:0 2px 10px rgba(20,60,50,.12);cursor:pointer;color:#1f2d2b;text-align:left}#kmy .md .bg{flex:none;width:46px;height:46px;border-radius:12px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px}#kmy .md b{display:block;font-size:15px;line-height:1.25;word-break:break-word}#kmy .md small{color:#5b6b68}"
+"html.kdark .kbox,html.kdark #kmy .md{background:#182a26;color:#e6f2ee}html.kdark .kbox small,html.kdark #kmy .md small{color:#9fb8b0}html.kdark #ktick{background:#0f1c19}";
document.head.appendChild(st);
var tk=mk("div");tk.id="ktick";var trk=mk("div","trk");
ticker.forEach(function(l){var c=mk("span","ch");c.style.background=l[3];var b=mk("i","",l[0]);c.appendChild(b);c.appendChild(document.createTextNode(l[1]));c.onclick=function(){go(l[2])};trk.appendChild(c)});
tk.appendChild(trk);
var top=document.querySelector(".top");
if(top&&top.parentNode)top.parentNode.insertBefore(tk,top.nextSibling);else home.insertBefore(tk,home.firstChild);
function box(l,i){var d=mk("div","kbox");var b=mk("div","bd",l[0]);b.style.background=grads[i%4];var t=mk("div","tx");t.appendChild(mk("b","",l[1]));t.appendChild(mk("small","",l[3]));d.appendChild(b);d.appendChild(t);d.appendChild(mk("div","ar","›"));d.onclick=function(){go(l[2])};return d}
var rl=mk("a","kbox");rl.href="/reading.html";rl.style.textDecoration="none";
var rb=mk("div","bd","READ");rb.style.background=grads[0];rb.style.fontSize="14px";var rt=mk("div","tx");rt.appendChild(mk("b","","Reading list"));rt.appendChild(mk("small","","Free English and Literature books and papers"));rl.appendChild(rb);rl.appendChild(rt);rl.appendChild(mk("div","ar","›"));
home.appendChild(mk("h3","","Reading list"));home.appendChild(rl);
home.appendChild(mk("h3","","Universities"));
unis.forEach(function(l,i){home.appendChild(box(l,i))});
home.appendChild(mk("h3","","Free libraries"));
libs.forEach(function(l,i){home.appendChild(box(l,i+1))});
home.appendChild(mk("p","empty","Each box opens that site's own website. Kololi does not copy their files."));
var my=mk("div");my.id="kmy";home.appendChild(my);
function renderMy(list){my.innerHTML="";my.appendChild(mk("h3","","My documents"));
list.forEach(function(m){var d=mk("div","md");var col=catCol[m.category]||catCol.Other;d.style.borderLeftColor=col;
var bg=mk("div","bg",(m.course_code||m.title||"?").replace(/[^A-Za-z0-9]/g,"").slice(0,3).toUpperCase());bg.style.background=col;
var t=mk("div");t.appendChild(mk("b","",m.title));t.appendChild(mk("small","",(m.course_code?m.course_code+" - ":"")+m.category));
d.appendChild(bg);d.appendChild(t);d.onclick=function(){if(typeof get==="function")get(m)};my.appendChild(d)})}
var tries=0;var iv=setInterval(function(){tries++;try{if(typeof all!=="undefined"&&all&&all.length){clearInterval(iv);renderMy(all)}}catch(e){}if(tries>40)clearInterval(iv)},500);
q.addEventListener("input",function(){var t=q.value.trim();if(!t)return;
res.appendChild(mk("h3","",'Search beyond Kololi for "'+t+'"'));
var r0=mk("div","item");r0.appendChild(mk("div","dot c0","READ"));var f0=mk("div","info");f0.appendChild(mk("b","","Reading list"));f0.appendChild(mk("small","","Free books and papers"));r0.appendChild(f0);var b0=mk("button","","Open");b0.onclick=function(){location.href="/reading.html?q="+encodeURIComponent(t)};r0.appendChild(b0);res.appendChild(r0);
libs.forEach(function(l,i){var r=mk("div","item");r.appendChild(mk("div","dot c"+((i+1)%4),l[0]));var f=mk("div","info");f.appendChild(mk("b","",l[1]));f.appendChild(mk("small","","Opens their website"));r.appendChild(f);var b=mk("button","","Search");b.onclick=function(){go(url(l,t))};r.appendChild(b);res.appendChild(r)})});
})();
