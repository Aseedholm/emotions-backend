import { PartialType } from "@nestjs/mapped-types";
import { CreateHappyDto } from "../create-happy.dto/create-happy.dto";

export class UpdateHappyDto extends PartialType(CreateHappyDto) {

}
