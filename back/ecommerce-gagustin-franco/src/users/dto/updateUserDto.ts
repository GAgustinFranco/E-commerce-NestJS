import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "../../auth/dto/CreateUserDto";

export class UpdateUserDto extends PartialType(CreateUserDto) {}