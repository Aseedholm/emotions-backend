import { PartialType } from "@nestjs/mapped-types";
import { CreateAngerDto } from "../anger/create-anger.dto/create-anger.dto";


export class UpdateAngerDto extends PartialType(CreateAngerDto) {

}
