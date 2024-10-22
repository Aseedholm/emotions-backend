import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AngerController } from 'src/controllers/anger/anger.controller';
import { Anger } from 'src/entities/anger.entity';
import { AngerService } from 'src/services/anger/anger.service';

@Module({
    imports: [TypeOrmModule.forFeature([Anger]),],
    providers: [AngerService],
    controllers: [AngerController]
})
export class AngerModule {}
