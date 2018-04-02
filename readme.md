# deparam-url
    Easily deparameterize URLs and get the query parameters and values wrapped in an object
### Usage
    pass any URL with appended query parameters to the `params` function and get the result object.
    ```javascript
    const params = require('deparam-url')
    let URL = 'https://maps.googla.com?lat=44.24&lng=12.65&sat=true'
    console.log(params(URL))
    // { lat: '44.24', lng:'12.65', sat:'true' }
    ```javascript