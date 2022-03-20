function promise() {
    return new Promise((resolve) => resolve("result"))
}

async function callPromise() {
    promise().then(result => console.log(result));
}

callPromise();