export default function sayHelloReduxPromise(hello) {
    return {
        type: "SAY_HELLO_PROMISE",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(hello);
            }, 1000);
        })
    };
}


