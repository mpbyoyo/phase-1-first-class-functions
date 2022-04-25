function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  return function name() {}
}

function returnsAnAnonymousFunction() {
  return function() {}
}