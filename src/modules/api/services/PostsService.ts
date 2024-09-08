import type { HttpClient } from "../HttpClient"

export class PostsService{

    constructor(private httpClient: HttpClient){}

    async getPosts(queryParams?: object){
        const {data, status} = await this.httpClient.get('/posts?populate=*', {params: {...queryParams}})
        return {
            data, 
            status
        }
    }

    async getPost(id: string){
        const {data, status} = await this.httpClient.get(`/posts/${id}?populate=*`)
        return {
            data, 
            status
        }
    }

    async getPostsByCatOrTitle(searchValue: string){
        const {data, status} = await this.httpClient.get(`/posts?populate=*&filters[$or][0][title][$contains]=${searchValue}&filters[$or][1][categories][name][$contains]=${searchValue}`)
    }
}