const V="kololi-v1";
const SHELL=["/","/index.html","/home.html","/resources.html","/library.html","/profile.html","/reading.html","/explore.html","/upload.html","/nav.js","/discover.js","/kd-logo-192.png","/kd-logo-512.png","/manifest.json","https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
const r=e.request;if(r.method!=="GET")return;
const u=new URL(r.url);
const same=u.origin===location.origin;
const cdn=u.hostname==="cdn.jsdelivr.net";
if(!same&&!cdn)return;
if(r.mode==="navigate"||(same&&/\.(html|js|json)$/.test(u.pathname))){
e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match("/index.html"))));return}
e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res})));
});
