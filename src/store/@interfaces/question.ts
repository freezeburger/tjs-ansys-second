import { Comment } from "./comment";

export interface Question {
    "id": number;
    "author": string;
    "title": string;
    "text": string;
    "comments": Comment[]
}