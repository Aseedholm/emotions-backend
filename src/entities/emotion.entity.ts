// abstract.entity.ts
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

//class Emotion<T extends number | string, U extends string> { ... }
// The above is an example of if I wanted to add some type restraints to the generics. 
export abstract class Emotion<T> extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    context: string;
    
    additionalData: T; // Generic type to allow for flexible additional data

    constructor(name: string, context: string, additionalData: T) {
        super();
        this.name = name;
        this.context = this.context;
        this.additionalData = additionalData; // Set additional data
    }

    abstract getPrompt(): string;

    rateThisEmotion(rating: number | string): void {
        // Implementation for rating the emotion
        console.log(`Rating for ${this.name}: ${rating}`);
    }
}
