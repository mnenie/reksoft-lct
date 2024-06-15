import type { UserData } from "./user.interface"

export interface IPost {
    _id: string,
    title: string,
    owner?: UserData,
    tags: string[],
    text: string,
    img: IFile[],
    attachment: IFile[],
    createdAt?: string,
    likeCount: number,
    comments: IComment[]
}

export interface IComment {
    _id: string,
    owner?: UserData,
    text: string,
    createdAt?: string
}

export interface IFile {
    _id: string,
    url: string,
    name: string,
    size: number
}
