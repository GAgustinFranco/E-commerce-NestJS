"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const CreateProductDto_1 = require("./CreateProductDto");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(CreateProductDto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=UpdateProductDto.js.map