const CACHE_NAME='version-1'
const urlsToCache=['index.html','offline.html']

this.addEventListener('install',(event)=>{
    event.waitUntill(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("Opened cache")
            return cache.addAll(urlsToCache)
        })
    )
})

this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).catch(()=>caches.match('offline.html'))
    )
})

this.addEventListener('activate',(event)=>{
    const cacheWhiteList=[];
    cacheWhiteList.push(CACHE_NAME)
    event.waitUntill(caches.keys().then((cachNames) =>{
        Promise.all(
            cachNames.map((cacheName)=>{
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        )
    }))
})