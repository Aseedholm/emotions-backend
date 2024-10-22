import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAnxietyDto {
    @IsNotEmpty()
    @IsNumber()
    readonly intensity: number; //additionalData in emotion

    @IsNotEmpty()
    @IsString()
    readonly context: string; //Explanation, inherited from emotion class.

    @IsNotEmpty()
    readonly title: string;
}
