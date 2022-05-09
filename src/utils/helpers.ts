function test(...messages: Array<any>) {
    const prefix: String = '🖖';
    console.log(prefix, ...messages)
}
export {test};