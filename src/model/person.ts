export class Person {
    constructor(public name: string, public age: number, public hobby: string) {}

    /**
     * @returns {Promise}
     */
    public async sayHello(): Promise<void> {
        console.log(`Current name is ${this.name}.`);
    }
}