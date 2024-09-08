import type { Category } from "./Category"

export interface CategoryRequest{
    attributes: Category,
    id: number
}

export interface CategoryRepository{
    saveAll(categoryRequest: CategoryRequest[]): void,
    findOne(id: string): Category | undefined,
    getAll(): Category[],
    setModel(categoryRequest: CategoryRequest): Category
}