import { User } from "../../users/entities/users.entity";
export declare class File {
    id: number;
    fileName: string;
    mimeType: string;
    url: string;
    user: User;
}
