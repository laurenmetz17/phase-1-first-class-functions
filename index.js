function receivesAFunction(func) {
    return func();
}

function returnsANamedFunction(func) {
    function named() {'Hi'};
    return named;
}

function returnsAnAnonymousFunction() {
    return (function () {'Hi'});
}