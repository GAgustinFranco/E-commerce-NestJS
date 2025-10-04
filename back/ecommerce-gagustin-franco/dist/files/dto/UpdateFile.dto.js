"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const UploadFile_dto_1 = require("./UploadFile.dto");
class UpdateFileDto extends (0, mapped_types_1.PartialType)(UploadFile_dto_1.UploadFileDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFileDto = UpdateFileDto;
//# sourceMappingURL=UpdateFile.dto.js.map