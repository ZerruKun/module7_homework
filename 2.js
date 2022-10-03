let property = "name";
let object = {
  name: "Arikado",
  surname: "D",
  age: 500,
};
let badProperty = "middleName";
let badProperty2 = 42;
let notObject = "Just a string";

const hasProperty = (prop, obj) => {
  if (typeof prop !== "string") {
    return "Первое значение должно быть строкой.";
  }
  //Проверка typeof(obj) === "function" опущена.
  //Опускается, если первое значение не строка.
  if (typeof obj !== "object") {
    return "Второе значение должно быть объектом.";
  }
  return prop in obj;
};

//Верное значение есть
console.log(hasProperty(property, object));

//Верного значения нет
console.log(hasProperty(badProperty, object));

//Неверные значения
console.log(hasProperty(badProperty2, object));
console.log(hasProperty(property, notObject));