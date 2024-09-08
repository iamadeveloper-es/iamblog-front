import type { Category } from "@/modules/categories/domain/Category";

export class Post{
    constructor(
        private id: string | number,
        private cover: {},
        private title: string,
        private description: string,
        private content: string,
        private slug: string,
        private date: Date,
        private categories: Category[] = []
    ){}

    setCateogories(categories: object[]){
        this.categories = categories.map(cat => {
            return {
                id: cat.id,
                name: cat.attributes.name
            }
        })
    }

    getId(): string | number{
        return this.id
    }

}