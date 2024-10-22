import { Entity, Column } from 'typeorm';
import { Emotion } from './emotion.entity';

@Entity()
export class Anxiety extends Emotion<number> {
    @Column({type: 'numeric', nullable: true})
    additionalData: number;

    constructor(context: string, title: string, intensity: number) {
        super('Anxiety', context, title, intensity);
    }

    

    getPrompt(): string {
        return "What made you feel anxious?";
    }

    rateThisEmotion(rating: number | string): void {
        // Implementation for rating the anger emotion
        console.log(`Rating for Anxiety: ${rating}`);
    }
}
