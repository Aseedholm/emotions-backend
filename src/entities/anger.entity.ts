import { Column, Entity } from 'typeorm';
import { Emotion } from './emotion.entity';

@Entity()
export class Anger extends Emotion<number> {
    @Column({type: 'numeric', nullable: true})
    additionalData: number;

    constructor(context: string, title: string, intensity: number) {
        super('Anger', context, title, intensity);
    }

    getPrompt(): string {
        return "What made you feel angry?";
    }

    rateThisEmotion(rating: number | string): void {
        // Implementation for rating the anger emotion
        console.log(`Rating for Anger: ${rating}`);
    }
}
