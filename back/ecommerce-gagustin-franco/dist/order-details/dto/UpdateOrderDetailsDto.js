"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderDetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const CreateOrderDetailsDto_1 = require("./CreateOrderDetailsDto");
class UpdateOrderDetailDto extends (0, mapped_types_1.PartialType)(CreateOrderDetailsDto_1.CreateOrderDetailDto) {
}
exports.UpdateOrderDetailDto = UpdateOrderDetailDto;
//# sourceMappingURL=UpdateOrderDetailsDto.js.map