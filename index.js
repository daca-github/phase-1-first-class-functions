function receivesAFunction(cb){
    return cb("El Pepe")
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous")
    }
}