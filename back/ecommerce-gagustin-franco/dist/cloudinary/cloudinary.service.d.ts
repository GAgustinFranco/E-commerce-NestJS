import { UploadApiResponse } from "cloudinary";
export declare class CloudinaryService {
    uploadImage(buffer: Buffer, originalName?: string): Promise<UploadApiResponse>;
}
