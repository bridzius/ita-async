function promise() {
    return new Promise((resolve) => resolve("result"))
}

async function callPromise() {
    const result = await promise(); //wait for promise resolution
    console.log(result);
}

callPromise()