import { Post } from "../domain/Post";
import type { PostRepository, PostRequest } from "../domain/PostRepository";

export class PostAdapter implements PostRepository{
    private posts: Post[] = [];

    saveAll(posts: PostRequest[]): void {
        posts.forEach((post: PostRequest) => {
            const postsData = this.setModel(post)
            this.posts.push(postsData)
        })
    }
    findOne(id: string): Post | undefined{
        return this.posts.find(post => post.getId() === id)
    }
    getAll(): Post[] {
        return this.posts
    }
    setModel(postRequest: PostRequest): Post{
        const {title, cover, description, content, slug, date, categories} = postRequest.attributes
        const post = new Post(
            postRequest.id,
            cover,
            title,
            description,
            content,
            slug,
            date
        )
        post.setCateogories(categories.data)
        return post
    }
}