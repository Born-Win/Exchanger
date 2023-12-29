export class FiatReadDto {
    id: number;
    name: string;
    symbol: string;

    constructor (data: Record<string, any>) {
        this.id = data.id;
        this.name = data.name;
        this.symbol = data.symbol;
    }
}
