export class Category{
    constructor(
        private id: string | number,
        private name: string
    ){}

    getId(): string | number{
        return this.id
    }
}