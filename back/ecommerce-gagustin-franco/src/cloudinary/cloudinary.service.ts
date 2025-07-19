import { Injectable } from "@nestjs/common";
import { UploadApiResponse, v2 } from "cloudinary";
import * as toStream from "buffer-to-stream";

@Injectable()
export class CloudinaryService {

    async uploadImage(buffer: Buffer, originalName?: string): Promise<UploadApiResponse>{
        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream(
                {resource_type:"auto", folder: "uploads"},
                (error, result) => {
                    if (error || !result) {
                        reject(error || new Error("No result from Cloudinary"));
                    } else {
                        resolve(result as UploadApiResponse);
                    }
                }
            )
            toStream(buffer).pipe(upload)
        })
    }
}