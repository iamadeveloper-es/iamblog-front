import { Category } from "../domain/Category";
import type { CategoryRepository, CategoryRequest } from "../domain/CategoryRepository";

export class CategoryAdapter implements CategoryRepository{
    categories: Category[] = [];

    saveAll(categoryRequest: CategoryRequest[]): void {
        categoryRequest.forEach((category: CategoryRequest) => {
            const categoryData = this.setModel(category)
            this.categories.push(categoryData)
        })
    }
    findOne(id: string): Category | undefined{
        return this.categories.find(category => category.getId() === id)
    }
    getAll(): Category[] {
        return this.categories
    }
    setModel(categoryRequest: CategoryRequest): Category {
        const category = new Category(
            categoryRequest.id,
            categoryRequest.attributes.name,
        )

        return category
    }

}