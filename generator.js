function* beneratorFunction() {
    yield 'Hello';
    yield 'world';
    yield '!';
}

const iterator =beneratorFunction();
console.log(iterator.next().value);
for(let i=0; i<=2;i++){
    console.log(iterator.next().value);
}
