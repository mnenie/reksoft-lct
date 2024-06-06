import type { User } from "./user.interface"

export interface IPost {
    id: number,
    title: string,
    owner: User
    text: string,
    img: string[],
    attachment: string[],
    publishDate: Date,
    likeCount: number,
    commentCount: number,
    comments: IComment[],
    shareCount: number,
}

export interface IComment {
    id: number,
    owner: User,
    text: string,
    publishDate: Date
}