
(function(){
try{
if(localStorage.getItem("kdark")==="1")
document.documentElement.classList.add("kdark");
}catch(e){}

window.kToggleDark=function(){
var d=document.documentElement.classList.toggle("kdark");
try{localStorage.setItem("kdark",d?"1":"0")}catch(e){}
return d;
};

var tabs=[
["Home","/home.html","M3 11l9-8 9 8v10h-6v-6H9v6H3z"],
["E-resources","/resources.html","M6 2h9l5 5v15H6z M14 2v6h6"],
["Books","/library.html","M4 4h7a3 3 0 013 3v14a2 2 0 00-2-2H4z M20 4h-7a3 3 0 00-3 3v14a2 2 0 012-2h8z"],
["Profile","/profile.html","M12 12a5 5 0 100-10 5 5 0 000 10z M4 22a8 8 0 0116 0z"]
];

var p=location.pathname;
var onLogin=(p==="/"||p==="/index.html");

function hasSession(){
try{
for(var i=0;i<localStorage.length;i++){
var k=localStorage.key(i);
if(/^sb-.*-auth-token$/.test(k))return true;
}
}catch(e){}
return false;
}

if(onLogin){
if(hasSession()){location.replace("/home.html");return;}
setInterval(function(){
if(hasSession())location.replace("/home.html");
},800);
}

try{
if(!sessionStorage.getItem("ksplash")){
sessionStorage.setItem("ksplash","1");
var sc="#ksplash{position:fixed;inset:0;z-index:999;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#4cb97a,#2f9fb4);transition:opacity .5s ease}#ksplash.out{opacity:0;pointer-events:none}#ksplash .lg{width:150px;height:150px;border-radius:50%;background:#fff url(/kd-logo-512.png) center/cover;box-shadow:0 10px 30px rgba(0,0,0,.25)}#ksplash h1{margin:22px 0 4px;color:#fff;font:700 32px Arial}#ksplash p{color:#e6fff0;font:15px Arial}";
var st=document.createElement("style");
st.textContent=sc;
document.head.appendChild(st);
var sp=document.createElement("div");
sp.id="ksplash";
sp.innerHTML='<div class="lg"></div><h1>Kololi</h1><p>Free English and Literature materials</p>';
document.body.appendChild(sp);
setTimeout(function(){sp.className="out"},1900);
setTimeout(function(){sp.remove()},2500);
}
}catch(e){}

var css="#kbar{position:fixed;left:0;right:0;bottom:0;display:flex;background:#2f7d4f;z-index:99;padding-bottom:env(safe-area-inset-bottom)}#kbar a{flex:1;text-align:center;color:#d6efe0;text-decoration:none;font:600 12px sans-serif;padding:8px 0 10px}#kbar a.on{color:#fff;border-top:3px solid #7ee0a3;padding-top:5px}#kbar svg{display:block;margin:0 auto 3px;width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linejoin:round}body{padding-bottom:76px!important}html.kdark body{background:#0f1c19!important;color:#e6f2ee!important}html.kdark .card,html.kdark .doc,html.kdark .item,html.kdark .menu,html.kdark li,html.kdark #auth,html.kdark #app,html.kdark .bar,html.kdark .ed{background:#182a26!important;color:#e6f2ee!important}html.kdark input,html.kdark select{background:#122320!important;color:#e6f2ee!important;border-color:#2b4a43!important}";
var s=document.createElement("style");
s.textContent=css;
document.head.appendChild(s);

var b=document.createElement("nav");
b.id="kbar";
tabs.forEach(function(t){
var a=document.createElement("a");
a.href=t[1];
if(p===t[1])a.className="on";
a.innerHTML='<svg viewBox="0 0 24 24"><path d="'+t[2]+'"/></svg>'+t[0];
b.appendChild(a);
});
document.body.appendChild(b);
})();
  
