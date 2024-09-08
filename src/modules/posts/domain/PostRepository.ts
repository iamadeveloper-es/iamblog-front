import type { Post } from "./Post";

export interface PostRequest{
    attributes: Post,
    id: number
}

export interface PostRepository{
    saveAll(posts: PostRequest[]): void,
    findOne(id: string): Post | undefined,
    getAll(): Post[],
    setModel(postRequest: PostRequest): Post
}