import type { User } from "./user.interface"

export interface IPost {
    id: number,
    title: string,
    owner: User
    text: string,
    img: string[],
    attachment: string[],
    publishDate: Date
}