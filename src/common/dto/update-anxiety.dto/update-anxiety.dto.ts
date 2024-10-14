import { PartialType } from "@nestjs/mapped-types";
import { CreateAnxietyDto } from "../create-anxiety.dto/create-anxiety.dto";

export class UpdateAnxietyDto extends PartialType(CreateAnxietyDto) {

}
