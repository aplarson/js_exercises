function Cat(catName, owner) {
  this.name = catName,
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return "Everyone loves " + this.name;
};

Cat.prototype.meow = function () {
  return "meow";
}