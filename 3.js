const createEmptyObject = () => {
  return Object.create(null);
};

let object = createEmptyObject();

//Вернётся null, что говорит об отсутсвии прототипа.
console.log(Object.getPrototypeOf(object));