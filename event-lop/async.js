async function A() {
    console.log('A');
}

async function B() {
    console.log('B');
}

async function C() {
    console.log('C');
}


async function foo(){
    await A()
    console.log(1);
    await B();
    await C();
}
foo();