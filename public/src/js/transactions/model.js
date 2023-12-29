export class TransactionModel {
    constructor () {
        this.store = {};
    }

    addData(key, data) {
        this.store[key] = data;
    }

    getData(key) {
        return this.store[key];
    }
}