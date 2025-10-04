"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileDto = void 0;
const openapi = require("@nestjs/swagger");
class UploadFileDto {
    fileName;
    mimeType;
    url;
    static _OPENAPI_METADATA_FACTORY() {
        return { fileName: { required: true, type: () => String }, mimeType: { required: true, type: () => String }, url: { required: true, type: () => String } };
    }
}
exports.UploadFileDto = UploadFileDto;
//# sourceMappingURL=UploadFile.dto.js.map