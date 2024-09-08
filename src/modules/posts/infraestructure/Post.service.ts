import { PostsService } from "@/modules/api/services/PostsService";
import type { PostRepository, PostRequest } from "../domain/PostRepository";
import { HttpClient } from "@/modules/api/HttpClient";
import type { Post } from "../domain/Post";

export class PostService{
    private httpPost: PostsService
    constructor(private postRepository: PostRepository){
        this.httpPost = new PostsService(new HttpClient())
    }

    savePosts(data: PostRequest[]){
        this.postRepository.saveAll(data)
    }

    setModel(post: PostRequest): Post{
        return this.postRepository.setModel(post)
    }

    async fetchPosts(): Promise<PostRequest[]>{
        const {data} = await this.httpPost.getPosts()
        return data
    }

    async fetchPostsByCatOrTitle(searchValue: string): Promise<PostRequest[] | Post[]>{
        const results: Post[] = [];
        const queryParams = {
            'filters[$or][0][title][$contains]': searchValue,
            'filters[$or][1][categories][name][$contains]=': searchValue,
        };
        const {data} = await this.httpPost.getPosts(queryParams)
        data.data.forEach((post: PostRequest) => {
            const postData = this.setModel(post)
            results.push(postData)
        })
        return results
    }

    async fetchPost(id: string): Promise<PostRequest>{
        const {data} = await this.httpPost.getPost(id)
        return data
    }

    async getPosts(): Promise<Post[]>{

        if(!this.postRepository.getAll().length){
            try {
                const response = await this.fetchPosts()
                this.savePosts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        return this.postRepository.getAll()
    }

    async getPost(id: string): Promise<Post | undefined>{
        const post = this.postRepository.findOne(id)

        if(!post){
            try {
                const response = await this.fetchPost(id)
                return this.setModel(response.data)
            } catch (error) {
                console.log(error)
            }

        }
        return post
    }

}