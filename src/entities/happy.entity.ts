import { Column, Entity } from "typeorm";
import { Emotion } from "./emotion.entity";


@Entity()
export class Happy extends Emotion<string> {
    @Column({type: 'text', nullable: true})
    additionalData: string;

    constructor(context: string, title: string, somethingToRememberThisHappiness: string) {
        super('Happy', context, title, somethingToRememberThisHappiness);
    }

    getPrompt(): string {
        return "What made you feel happy?";
    }
}
