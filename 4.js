//Родительская функция
function ElectricalAppliance(name = "Электроустройство", isTurnedOn = false) {
  this.name = name;
  this.isTurnedOn = isTurnedOn;
}

//Именование прибора ()
ElectricalAppliance.prototype.electricalApplianceNaming = function (name) {
  this.name = name;
  console.log(`Визуальное отображение имени: ${name}`);
};

//Включение и выключение
ElectricalAppliance.prototype.turnOn = function () {
  this.isTurnedOn = true;
  console.log("Устройство включено!");
};

ElectricalAppliance.prototype.turnOff = function () {
  this.isTurnedOn = false;
  console.log("Устройство выключено!");
};

/* В задании есть "Посчитайте потребляемую мощность (передайте аргумент)".
   В плане этого нет и не очень понятно что это, поэтому будет так. Аргумент принемает :)*/
ElectricalAppliance.prototype.consumption = function (consum) {
  if (this.isTurnedOn === false) {
    return console.log("Прибор выключен и не потребляет энергию.");
  } else {
    return console.log(`Прибор потребляет ${consum} ватт в час.`);
  }
};

//Лампа
function DeskLamp(type, brightness) {
  this.type = type;
  this.brightness = brightness;
}

DeskLamp.prototype = new ElectricalAppliance("Настольная лампа");

DeskLamp.prototype.deskLampInfo = function () {
  console.log(`Тип лампы - ${this.type}. Степень яркости - ${this.brightness}.`);
};

//ПК
function Computer(formfactor, сategory) {
  this.formfactor = formfactor;
  this.сategory = сategory;
}

Computer.prototype = new ElectricalAppliance("Компьютер");

Computer.prototype.computerInfo = function () {
  console.log(`Формфактор - ${this.formfactor}. Категория - ${this.сategory}.`);
};

//Экземпляры

let deskLamp = new DeskLamp("LED", "Средняя");
let pc = new Computer("ATX", "Игровой");

//Проверка методов
//Настольная лампа
deskLamp.electricalApplianceNaming("Классная лампа");
deskLamp.turnOn();
deskLamp.consumption(12);
deskLamp.deskLampInfo();

//Компьютер
pc.electricalApplianceNaming("Классный компьютер");
pc.turnOff();
pc.consumption(500);
pc.computerInfo();