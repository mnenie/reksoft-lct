import type { User } from "./user.interface"

export interface IPost {
    _id: string,
    title: string,
    owner?: User,
    tags: string[],
    text: string,
    img: IFile[],
    attachment: IFile[],
    createdAt?: string,
    likeCount: number,
    userLikes: string[],
    comments: IComment[]
}

export interface IComment {
    _id: string,
    owner?: User,
    text: string,
    createdAt?: string
}

export interface IFile {
    _id: string,
    url: string,
    name: string,
    size: number
}
