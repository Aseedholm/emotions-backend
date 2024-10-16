import { IsNotEmpty, IsNumber } from "class-validator";

export class AngerDataDto {
    @IsNotEmpty()
    @IsNumber()
    readonly intensity: number;
}