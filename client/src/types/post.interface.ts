import type { UserData } from "./user.interface"

export type Role = 'recruiter' | 'applicant';

export interface IPost {
    _id: string,
    title: string,
    owner?: UserData,
    tags: string[],
    postType: Role,
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
