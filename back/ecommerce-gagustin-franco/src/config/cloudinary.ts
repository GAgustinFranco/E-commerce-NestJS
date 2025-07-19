import {v2} from 'cloudinary';
import {config as dotenvConfig} from "dotenv";

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

export const CloudinaryConfig = {
    provide: "CLOUDINARY",
    useFactory: () => {
        return v2.config({
            cloud_name: process.env.CLOUDINARY_CLOD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        })
    }
}