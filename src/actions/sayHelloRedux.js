export default function sayHelloRedux(hello) {
    return {
        type: "SAY_HELLO",
        value: hello
    };
}