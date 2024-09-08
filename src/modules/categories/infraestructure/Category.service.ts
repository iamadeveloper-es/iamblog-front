import { HttpClient } from "@/modules/api/HttpClient";
import type { CategoryRepository, CategoryRequest } from "../domain/CategoryRepository";
import { CategoriesService } from "@/modules/api/services/CategoriesService";
import type { Category } from "../domain/Category";

export class CategoryService{
    private httpCategory: CategoriesService
    constructor(private categoryRepository: CategoryRepository){
        this.httpCategory = new CategoriesService(new HttpClient())
    }

    saveCategories(data: CategoryRequest[]){
        this.categoryRepository.saveAll(data)
    }

    setModel(categoryRequest: CategoryRequest): Category{
        return this.categoryRepository.setModel(categoryRequest)
    }

    async fetchCategories(): Promise<CategoryRequest[]>{
        const {data} = await this.httpCategory.getAll()
        return data
    }

    async getCategories(): Promise<Post[]>{

        if(!this.categoryRepository.getAll().length){
            try {
                const response = await this.fetchCategories()
                this.saveCategories(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        return this.categoryRepository.getAll()
    }


}