(function(){
var st=document.createElement("style");st.textContent="#kst{position:fixed;right:14px;bottom:196px;width:46px;height:46px;border-radius:50%;border:0;background:#8e6fd8;color:#fff;font-size:20px;box-shadow:0 3px 10px rgba(0,0,0,.3);z-index:98}#kgs #ktr{position:relative;flex:none;width:auto;margin:0;border:0;border-radius:999px;padding:0 12px;background:#e9b949;color:#1f2d2b;font-weight:700;font-size:16px}#kgs #ktr i{position:absolute;top:2px;right:3px;width:10px;height:10px;border-radius:50%;background:#e02424;display:none}";
document.head.appendChild(st);
var sb=document.createElement("button");sb.id="kst";sb.textContent="🎓";sb.title="Study tools";sb.onclick=function(){location.href="/study.html"};document.body.appendChild(sb);
var bar=document.getElementById("kgs");if(!bar)return;
var F="https://xskidmappzknphgjcsrf.supabase.co/functions/v1/edu-news";
function token(){try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(/^sb-.*-auth-token$/.test(k)){var v=JSON.parse(localStorage.getItem(k));return v.access_token||(v.currentSession&&v.currentSession.access_token)||null}}}catch(e){}return null}
var b=document.createElement("button");b.id="ktr";b.innerHTML="📰<i></i>";b.title="Trending in education";
b.onclick=function(){location.href="/trending.html"};
bar.appendChild(b);
function dot(){var t=null,s=null;try{t=localStorage.getItem("ktrTop");s=localStorage.getItem("ktrSeen")}catch(e){}b.querySelector("i").style.display=(t&&t!==s)?"block":"none"}
async function check(){var t=token();if(!t)return;var last=0;try{last=+localStorage.getItem("ktrCheck")||0}catch(e){}
if(Date.now()-last<1800000)return;
try{var r=await fetch(F,{headers:{Authorization:"Bearer "+t}});if(!r.ok)return;var d=await r.json();localStorage.setItem("ktrCheck",Date.now());var top=((d.kenya||[])[0]||(d.world||[])[0]||{}).url||"";if(top)localStorage.setItem("ktrTop",top);dot()}catch(e){}}
dot();check();
})();
