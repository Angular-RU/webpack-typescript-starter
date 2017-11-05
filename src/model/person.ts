export class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public async sayHello() {
    console.log('Current name', this._name);
  }

  public getName() {
    return this._name;
  }

}