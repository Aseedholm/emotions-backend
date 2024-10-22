import { IsNotEmpty, isNotEmpty } from "class-validator";
import { HappyDataDto } from "../happy-data.dto";

//TODO Maybe centralize the create emotion dtos somehow either via an interface or abstract class.
//Most of this is repeated. The only hurdle is the emotion data dto I'd have to create a centralized class for that as well i beliee.
export class CreateHappyDto {

    @IsNotEmpty()
    readonly data: HappyDataDto;

    @IsNotEmpty()
    readonly context: string;

    @IsNotEmpty()
    readonly title: string;
}
