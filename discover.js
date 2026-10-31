(function(){
var libs=[["UoN","University of Nairobi eRepository","https://erepository.uonbi.ac.ke","erepository.uonbi.ac.ke"],["UN","UN Digital Library","https://digitallibrary.un.org","digitallibrary.un.org"],["KSU","Koitaleel Samoei University College","https://ksu.ac.ke/index.php/myloft","ksu.ac.ke"],["LAW","Kenya Law","https://new.kenyalaw.org","kenyalaw.org"],["GS","Google Scholar","https://scholar.google.com","scholar.google.com"]];
function mk(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e}
function go(u){window.open(u,"_blank")}
function url(l,t){return l[0]==="GS"?"https://scholar.google.com/scholar?q="+encodeURIComponent(t):"https://www.google.com/search?q="+encodeURIComponent("site:"+l[3]+" "+t)}
var home=document.getElementById("home"),q=document.getElementById("q"),res=document.getElementById("res");
if(!home||!q||!res)return;
home.appendChild(mk("h3","","Discover libraries"));
var row=mk("div","row");
libs.forEach(function(l,i){var c=mk("div","cc");c.appendChild(mk("div","dot c"+(i%4),l[0]));c.appendChild(mk("span","t",l[1]));c.onclick=function(){go(l[2])};row.appendChild(c)});
home.appendChild(row);
home.appendChild(mk("p","empty","These open each library's own website. Kololi does not copy their files."));
q.addEventListener("input",function(){var t=q.value.trim();if(!t)return;
res.appendChild(mk("h3","",'Search other libraries for "'+t+'"'));
libs.forEach(function(l,i){var r=mk("div","item");r.appendChild(mk("div","dot c"+(i%4),l[0]));var f=mk("div","info");f.appendChild(mk("b","",l[1]));f.appendChild(mk("small","","Opens their website"));r.appendChild(f);var b=mk("button","","Search");b.onclick=function(){go(url(l,t))};r.appendChild(b);res.appendChild(r)})});
})();
