
function getResponseSize(url) {
  return fetch(url).then(response => {
    const reader = response.body.getReader();
    let total = 0;

    return reader.read().then(function processResult(result) {
      if (result.done) return total;

      const value = result.value;
      total += value.length;
      console.log('Received chunk', value);

      return reader.read().then(processResult);
    })
  });
}


async function getResponseSize(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    let result = await reader.read();
    let total = 0;
  
    while (!result.done) {
      const value = result.value;
      total += value.length;
      console.log('Received chunk', value);
      // get the next result
      result = await reader.read();
    }
  
    return total;
  }


  //Arrow functions
// map some URLs to json-promises
const jsonPromises = urls.map(async url => {
  const response = await fetch(url);
  return response.json();
});


//Object methods
const storage = {
  async getAvatar(name) {
    const cache = await caches.open('avatars');
    return cache.match(`/avatars/${name}.jpg`);
  }
};

storage.getAvatar('jaffathecake').then(…);





//Class methods
class Storage {
    constructor() {
      this.cachePromise = caches.open('avatars');
    }
  
    async getAvatar(name) {
      const cache = await this.cachePromise;
      return cache.match(`/avatars/${name}.jpg`);
    }
  }
  
  const storage = new Storage();
  storage.getAvatar('jaffathecake').then(…);


  function logInOrder(urls) {
    // fetch all the URLs
    const textPromises = urls.map(url => {
      return fetch(url).then(response => response.text());
    });
  
    // log them in order
    textPromises.reduce((chain, textPromise) => {
      return chain.then(() => textPromise)
        .then(text => console.log(text));
    }, Promise.resolve());
  }



  //Not recommended - too sequential

async function logInOrder(urls) {
    for (const url of urls) {
      const response = await fetch(url);
      console.log(await response.text());
    }
  }


  async function logInOrder(urls) {
    // fetch all the URLs in parallel
    const textPromises = urls.map(async url => {
      const response = await fetch(url);
      return response.text();
    });
  
    // log them in sequence
    for (const textPromise of textPromises) {
      console.log(await textPromise);
    }
  }