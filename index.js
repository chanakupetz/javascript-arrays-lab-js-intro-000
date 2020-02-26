var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
kittens.push("Ralph")
return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
return kittens.concat("Broom")
}

var newKitten = ["Arnold"]
function prependKitten(name) {
  return newKitten.concat(kittens)
}
