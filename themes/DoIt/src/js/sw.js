<<<<<<< HEAD
const CACHE_VERSION = 1

const BASE_CACHE_FILES = [
  '/css/style.min.css',
  '/js/theme.min.js',
  '/site.webmanifest'
]

const OFFLINE_CACHE_FILES = [
  '/css/style.min.css',
  '/js/theme.min.js',
  '/site.webmanifest',
  '/offline'
]

const NOT_FOUND_CACHE_FILES = [
  '/css/style.min.css',
  '/js/theme.min.js',
  '/site.webmanifest',
  '/404.html'
]

const OFFLINE_PAGE = '/offline'
const NOT_FOUND_PAGE = '/404.html'

const CACHE_VERSIONS = {
  assets: 'assets-v' + CACHE_VERSION,
  content: 'content-v' + CACHE_VERSION,
  offline: 'offline-v' + CACHE_VERSION,
  notFound: '404-v' + CACHE_VERSION
}

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
  '/': 3600,
  html: 3600,
  json: 86400,
  js: 86400,
  css: 86400
}

const CACHE_BLACKLIST = [
  (str) => {
    return !str.startsWith('http://localhost')
  }
]

const SUPPORTED_METHODS = [
  'GET'
]
=======
const CACHE_VERSION = 1;

const BASE_CACHE_FILES = [
    '/css/style.min.css',
    '/js/theme.min.js',
    '/site.webmanifest',
];

const OFFLINE_CACHE_FILES = [
    '/css/style.min.css',
    '/js/theme.min.js',
    '/site.webmanifest',
    '/offline',
];

const NOT_FOUND_CACHE_FILES = [
    '/css/style.min.css',
    '/js/theme.min.js',
    '/site.webmanifest',
    '/404.html',
];

const OFFLINE_PAGE = '/offline';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    '/': 3600,
    html: 3600,
    json: 86400,
    js: 86400,
    css: 86400,
};

const CACHE_BLACKLIST = [
    (str) => {
       return !str.startsWith('http://localhost');
    },
];

const SUPPORTED_METHODS = [
    'GET',
];
>>>>>>> 440bb87a (made it a site from example)

/**
 * isBlackListed
 * @param {string} url
 * @returns {boolean}
 */
<<<<<<< HEAD
function isBlacklisted (url) {
  return (CACHE_BLACKLIST.length > 0)
    ? !CACHE_BLACKLIST.filter((rule) => {
        if (typeof rule === 'function') {
          return !rule(url)
        } else {
          return false
        }
      }).length
    : false
=======
function isBlacklisted(url) {
    return (CACHE_BLACKLIST.length > 0) ? !CACHE_BLACKLIST.filter((rule) => {
        if (typeof rule === 'function') {
            return !rule(url);
        } else {
            return false;
        }
    }).length : false
>>>>>>> 440bb87a (made it a site from example)
}

/**
 * getFileExtension
 * @param {string} url
 * @returns {string}
 */
<<<<<<< HEAD
function getFileExtension (url) {
  const extension = url.split('.').reverse()[0].split('?')[0]
  return (extension.endsWith('/')) ? '/' : extension
=======
function getFileExtension(url) {
    let extension = url.split('.').reverse()[0].split('?')[0];
    return (extension.endsWith('/')) ? '/' : extension;
>>>>>>> 440bb87a (made it a site from example)
}

/**
 * getTTL
 * @param {string} url
 */
<<<<<<< HEAD
function getTTL (url) {
  if (typeof url === 'string') {
    const extension = getFileExtension(url)
    if (typeof MAX_TTL[extension] === 'number') {
      return MAX_TTL[extension]
    } else {
      return null
    }
  } else {
    return null
  }
=======
function getTTL(url) {
    if (typeof url === 'string') {
        let extension = getFileExtension(url);
        if (typeof MAX_TTL[extension] === 'number') {
            return MAX_TTL[extension];
        } else {
            return null;
        }
    } else {
        return null;
    }
>>>>>>> 440bb87a (made it a site from example)
}

/**
 * installServiceWorker
 * @returns {Promise}
 */
<<<<<<< HEAD
function installServiceWorker () {
  return Promise.all(
    [
      caches.open(CACHE_VERSIONS.assets)
        .then(
          (cache) => {
            return cache.addAll(BASE_CACHE_FILES)
          }
        ),
      caches.open(CACHE_VERSIONS.offline)
        .then(
          (cache) => {
            return cache.addAll(OFFLINE_CACHE_FILES)
          }
        ),
      caches.open(CACHE_VERSIONS.notFound)
        .then(
          (cache) => {
            return cache.addAll(NOT_FOUND_CACHE_FILES)
          }
        )
    ]
  )
    .then(() => {
      return self.skipWaiting()
    })
=======
function installServiceWorker() {
    return Promise.all(
        [
            caches.open(CACHE_VERSIONS.assets)
                .then(
                    (cache) => {
                        return cache.addAll(BASE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.offline)
                .then(
                    (cache) => {
                        return cache.addAll(OFFLINE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.notFound)
                .then(
                    (cache) => {
                        return cache.addAll(NOT_FOUND_CACHE_FILES);
                    }
                )
        ]
    )
        .then(() => {
            return self.skipWaiting();
        });
>>>>>>> 440bb87a (made it a site from example)
}

/**
 * cleanupLegacyCache
 * @returns {Promise}
 */
<<<<<<< HEAD
function cleanupLegacyCache () {
  const currentCaches = Object.keys(CACHE_VERSIONS)
    .map(
      (key) => {
        return CACHE_VERSIONS[key]
      }
    )

  return new Promise(
    (resolve, reject) => {
      caches.keys()
        .then(
          (keys) => {
            return keys.filter(
              (key) => {
                return !~currentCaches.indexOf(key)
              }
            )
          }
        )
        .then(
          (legacy) => {
            if (legacy.length) {
              Promise.all(
                legacy.map(
                  (legacyKey) => {
                    return caches.delete(legacyKey)
                  }
                )
              )
                .then(
                  () => {
                    resolve()
                  }
                )
                .catch(
                  (err) => {
                    reject(err)
                  }
                )
            } else {
              resolve()
            }
          }
        )
        .catch(
          (err) => {
            reject(err)
          }
        )
    }
  )
}

self.addEventListener(
  'install', event => {
    event.waitUntil(
      Promise.all([
        installServiceWorker(),
        self.skipWaiting()
      ])
    )
  }
)

// The activate handler takes care of cleaning up old caches.
self.addEventListener(
  'activate', event => {
    event.waitUntil(
      Promise.all(
        [
          cleanupLegacyCache(),
          self.clients.claim(),
          self.skipWaiting()
        ]
      )
        .catch(
          (err) => {
            console.log(err)
            self.skipWaiting()
          }
        )
    )
  }
)

self.addEventListener(
  'fetch', event => {
    event.respondWith(
      caches.open(CACHE_VERSIONS.content)
        .then(
          (cache) => {
            return cache.match(event.request)
              .then(
                (response) => {
                  if (response) {
                    const headers = response.headers.entries()
                    let date = null

                    for (const pair of headers) {
                      if (pair[0] === 'date') {
                        date = new Date(pair[1])
                      }
                    }
                    if (date) {
                      const age = parseInt((new Date().getTime() - date.getTime()) / 1000)
                      const ttl = getTTL(event.request.url)

                      if (ttl && age > ttl) {
                        return new Promise(
                          (resolve) => {
                            return fetch(event.request.clone())
                              .then(
                                (updatedResponse) => {
                                  if (updatedResponse) {
                                    cache.put(event.request, updatedResponse.clone())
                                    resolve(updatedResponse)
                                  } else {
                                    resolve(response)
                                  }
                                }
                              )
                              .catch(
                                () => {
                                  resolve(response)
                                }
                              )
                          }
                        )
                          .catch(
                            (err) => {
                              console.log(err)
                              return response
                            }
                          )
                      } else {
                        return response
                      }
                    } else {
                      return response
                    }
                  } else {
                    return null
                  }
                }
              )
              .then(
                (response) => {
                  if (response) {
                    return response
                  } else {
                    return fetch(event.request.clone())
                      .then(
                        (response) => {
                          if (response.status < 400) {
                            if (~SUPPORTED_METHODS.indexOf(event.request.method) && !isBlacklisted(event.request.url) && event.request.url.slice(0, 4) === 'http') {
                              cache.put(event.request, response.clone())
                            }
                            return response
                          } else {
                            return caches.open(CACHE_VERSIONS.notFound).then((cache) => {
                              return cache.match(NOT_FOUND_PAGE)
                            })
                          }
                        }
                      )
                      .then((response) => {
                        if (response) {
                          return response
                        }
                      })
                      .catch(
                        () => {
                          return caches.open(CACHE_VERSIONS.offline)
                            .then(
                              (offlineCache) => {
                                return offlineCache.match(OFFLINE_PAGE)
                              }
                            )
                        }
                      )
                  }
                }
              )
              .catch(
                (error) => {
                  console.error('  Error in fetch handler:', error)
                  throw error
                }
              )
          }
        )
    )
  }
)
=======
function cleanupLegacyCache() {

    let currentCaches = Object.keys(CACHE_VERSIONS)
        .map(
            (key) => {
                return CACHE_VERSIONS[key];
            }
        );

    return new Promise(
        (resolve, reject) => {

            caches.keys()
                .then(
                    (keys) => {
                        return legacyKeys = keys.filter(
                            (key) => {
                                return !~currentCaches.indexOf(key);
                            }
                        );
                    }
                )
                .then(
                    (legacy) => {
                        if (legacy.length) {
                            Promise.all(
                                legacy.map(
                                    (legacyKey) => {
                                        return caches.delete(legacyKey)
                                    }
                                )
                            )
                                .then(
                                    () => {
                                        resolve()
                                    }
                                )
                                .catch(
                                    (err) => {
                                        reject(err);
                                    }
                                );
                        } else {
                            resolve();
                        }
                    }
                )
                .catch(
                    () => {
                        reject();
                    }
                );
        }
    );
}

self.addEventListener(
    'install', event => {
        event.waitUntil(
            Promise.all([
                installServiceWorker(),
                self.skipWaiting(),
            ])
        );
    }
);

// The activate handler takes care of cleaning up old caches.
self.addEventListener(
    'activate', event => {
        event.waitUntil(
            Promise.all(
                [
                    cleanupLegacyCache(),
                    self.clients.claim(),
                    self.skipWaiting(),
                ]
            )
                .catch(
                    (err) => {
                        self.skipWaiting();
                    }
                )
        );
    }
);

self.addEventListener(
    'fetch', event => {

        event.respondWith(
            caches.open(CACHE_VERSIONS.content)
                .then(
                    (cache) => {

                        return cache.match(event.request)
                            .then(
                                (response) => {

                                    if (response) {

                                        let headers = response.headers.entries();
                                        let date = null;

                                        for (let pair of headers) {
                                            if (pair[0] === 'date') {
                                                date = new Date(pair[1]);
                                            }
                                        }
                                        if (date) {
                                            let age = parseInt((new Date().getTime() - date.getTime()) / 1000);
                                            let ttl = getTTL(event.request.url);

                                            if (ttl && age > ttl) {

                                                return new Promise(
                                                    (resolve) => {

                                                        return fetch(event.request.clone())
                                                            .then(
                                                                (updatedResponse) => {
                                                                    if (updatedResponse) {
                                                                        cache.put(event.request, updatedResponse.clone());
                                                                        resolve(updatedResponse);
                                                                    } else {
                                                                        resolve(response)
                                                                    }
                                                                }
                                                            )
                                                            .catch(
                                                                () => {
                                                                    resolve(response);
                                                                }
                                                            );
                                                    }
                                                )
                                                    .catch(
                                                        (err) => {
                                                            return response;
                                                        }
                                                    );
                                            } else {
                                                return response;
                                            }

                                        } else {
                                            return response;
                                        }

                                    } else {
                                        return null;
                                    }
                                }
                            )
                            .then(
                                (response) => {
                                    if (response) {
                                        return response;
                                    } else {
                                        return fetch(event.request.clone())
                                            .then(
                                                (response) => {

                                                    if (response.status < 400) {
                                                        if (~SUPPORTED_METHODS.indexOf(event.request.method) && !isBlacklisted(event.request.url) && event.request.url.slice(0, 4) === 'http') {
                                                            cache.put(event.request, response.clone());
                                                        }
                                                        return response;
                                                    } else {
                                                        return caches.open(CACHE_VERSIONS.notFound).then((cache) => {
                                                            return cache.match(NOT_FOUND_PAGE);
                                                        })
                                                    }
                                                }
                                            )
                                            .then((response) => {
                                                if (response) {
                                                    return response;
                                                }
                                            })
                                            .catch(
                                                () => {

                                                    return caches.open(CACHE_VERSIONS.offline)
                                                        .then(
                                                            (offlineCache) => {
                                                                return offlineCache.match(OFFLINE_PAGE)
                                                            }
                                                        )
                                                }
                                            );
                                    }
                                }
                            )
                            .catch(
                                (error) => {
                                    console.error('  Error in fetch handler:', error);
                                    throw error;
                                }
                            );
                    }
                )
        );

    }
);
>>>>>>> 440bb87a (made it a site from example)
