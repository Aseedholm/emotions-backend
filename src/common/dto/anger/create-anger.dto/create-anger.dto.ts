import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { AngerDataDto } from "../anger-data.dto";

export class CreateAngerDto {

    @IsNotEmpty()
    readonly data: AngerDataDto;

    @IsNotEmpty()
    readonly context: string; //Explanation, inherited from emotion class.

    @IsNotEmpty()
    readonly title: string;
}
