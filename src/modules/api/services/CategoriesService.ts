import type { HttpClient } from "../HttpClient"

export class CategoriesService{

    constructor(private httpClient: HttpClient){}

    async getAll(){
        const {data, status} = await this.httpClient.get('/categories?populate=*')
        return {
            data, 
            status
        }
    }

    async getSingle(id: string){
        const {data, status} = await this.httpClient.get(`/categories/${id}?populate=*`)
        return {
            data, 
            status
        }
    }
}