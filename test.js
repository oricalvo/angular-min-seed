function g() {
    f();
}

function f() {
    throw new Error("ddd");
}

g();
