import type { User } from "./user.interface"

export interface IPost {
    _id: number,
    title: string,
    owner: User
    text: string,
    img: string[],
    attachment: string[],
    publishDate: Date,
    likeCount: number,
    comments: IComment[]
}

export interface IComment {
    id: number,
    owner: User,
    text: string,
    publishDate: Date
}