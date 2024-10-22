import { IsNotEmpty, IsString } from "class-validator";

export class HappyDataDto {
    @IsNotEmpty()
    @IsString()
    readonly somethingToRememberThisHappiness: string;
    
}