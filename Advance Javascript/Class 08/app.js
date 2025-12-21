let getData = (cb) => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => cb(res))
};
getData((data) => {
    console.log("data", data)
});
getData((data) => {
    console.log("data", data)
});
getData((data) => {
    console.log("data", data)
});
