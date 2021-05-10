self.addEventListener("install", e =>{
    e.waitUntil
    (
        caches.open("static").then(cache =>{
            return cache.addAll(["./","afdelingen.html",
                                "detailFuncties.html",
                                "favorieten.html",
                                "home.html",
                                ,"./Images/logo192.png",
                                "./images/subtractions_test.png"
                            ]);
        })
    );
    console.log("installed!");
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
    console.log(`Interscepting fetch request for:  ${e.request.url}`);
});