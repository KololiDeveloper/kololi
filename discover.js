(function(){
var libs=[["UoN","University of Nairobi eRepository","https://erepository.uonbi.ac.ke","erepository.uonbi.ac.ke"],["UN","UN Digital Library","https://digitallibrary.un.org","digitallibrary.un.org"],["KSU","Koitaleel Samoei University College","https://ksu.ac.ke/index.php/myloft","ksu.ac.ke"],["LAW","Kenya Law","https://new.kenyalaw.org","kenyalaw.org"],["GS","Google Scholar","https://scholar.google.com","scholar.google.com"]];
function mk(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e}
function go(u){window.open(u,"_blank")}
function url(l,t){return l[0]==="GS"?"https://scholar.google.com/scholar?q="+encodeURIComponent(t):"https://www.google.com/search?q="+encodeURIComponent("site:"+l[3]+" "+t)}
var home=document.getElementById("home"),q=document.getElementById("q"),res=document.getElementById("res");
if(!home||!q||!res)return;
home.appendChild(mk("h3","","Discover libraries"));
var rl=mk("a","","📖 Reading list: free English & Literature books to read");rl.href="/reading.html";
rl.style.cssText="display:block;margin:0 14px 12px;padding:14px;border-radius:14px;background:#fff;color:#1d7f73;font-weight:600;text-decoration:none;box-shadow:0 2px 10px rgba(20,60,50,.1)";
home.appendChild(rl);
var row=mk("div","row");
libs.forEach(function(l,i){var c=mk("div","cc");c.appendChild(mk("div","dot c"+(i%4),l[0]));c.appendChild(mk("span","t",l[1]));c.onclick=function(){go(l[2])};row.appendChild(c)});
home.appendChild(row);
home.appendChild(mk("p","empty","The tiles open each library's own website. Kololi does not copy their files."));
q.addEventListener("input",function(){var t=q.value.trim();if(!t)return;
res.appendChild(mk("h3","",'Search beyond Kololi for "'+t+'"'));
var r0=mk("div","item");r0.appendChild(mk("div","dot c0","READ"));var f0=mk("div","info");f0.appendChild(mk("b","","Reading list"));f0.appendChild(mk("small","","Free books to read online"));r0.appendChild(f0);var b0=mk("button","","Open");b0.onclick=function(){location.href="/reading.html?q="+encodeURIComponent(t)};r0.appendChild(b0);res.appendChild(r0);
libs.forEach(function(l,i){var r=mk("div","item");r.appendChild(mk("div","dot c"+((i+1)%4),l[0]));var f=mk("div","info");f.appendChild(mk("b","",l[1]));f.appendChild(mk("small","","Opens their website"));r.appendChild(f);var b=mk("button","","Search");b.onclick=function(){go(url(l,t))};r.appendChild(b);res.appendChild(r)})});
})();
