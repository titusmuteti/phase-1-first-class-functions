function receivesAFunction(test){
    test()
}

function returnsANamedFunction() {
    return function newFunction() {}
}

function returnsAnAnonymousFunction() {
    return function(){
        
    }
}