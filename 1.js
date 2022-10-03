let object = {
  name: "Arikado",
  surname: "D",
  age: 500,
};
let notObject = "Just a string";

const showObject = (obj) => {
  //Проверка typeof(obj) === "function" опущена.
  if (typeof obj === "object") {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`Ключ объекта - ${prop}, Значение объекта - ${obj[prop]}`);
      }
    }
  } else {
    console.log("В функцию помещён не объект.");
  }
};

//Объект
showObject(object);

//Не объект
showObject(notObject);