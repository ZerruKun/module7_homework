//Родительский класс
class ElectricalAppliance {
  constructor(name = "Электроустройство", isTurnedOn = false) {
    this.name = name;
    this.isTurnedOn = isTurnedOn;
  }

  //Именование прибора
  electricalApplianceNaming(name) {
    this.name = name;
    console.log(`Визуальное отображение имени: ${name}`);
  }

  //Включение и выключение
  turnOn() {
    this.isTurnedOn = true;
    console.log("Устройство включено!");
  }

  turnOff() {
    this.isTurnedOn = false;
    console.log("Устройство выключено!");
  }

  /* В задании есть "Посчитайте потребляемую мощность (передайте аргумент)".
    В плане этого нет и не очень понятно что это, поэтому будет так. Аргумент принемает :)*/
  consumption(consum) {
    if (this.isTurnedOn === false) {
      return console.log("Прибор выключен и не потребляет энергию.");
    } else {
      return console.log(`Прибор потребляет ${consum} ватт в час.`);
    }
  }
}

//Лампа
class DeskLamp extends ElectricalAppliance {
  constructor(type, brightness, name) {
    super(name);
    this.type = type;
    this.brightness = brightness;
  }

  deskLampInfo() {
    console.log(
      `Тип лампы - ${this.type}. Степень яркости - ${this.brightness}.`
    );
  }
}

//ПК
class Computer extends ElectricalAppliance {
  constructor(formfactor, сategory, name) {
    super(name);
    this.formfactor = formfactor;
    this.сategory = сategory;
  }

  computerInfo() {
    console.log(
      `Формфактор - ${this.formfactor}. Категория - ${this.сategory}.`
    );
  }
}

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