export default function sayHelloReduxAsync(hello) {
    return dispatch => {
        setTimeout(() => {
            dispatch(
                {
                    type: "SAY_HELLO",
                    value: hello
                }
            );
        }, 2000);
    }

}