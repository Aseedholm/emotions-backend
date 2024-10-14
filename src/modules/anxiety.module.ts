import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnxietyController } from 'src/controllers/anxiety/anxiety.controller';
import { Anxiety } from 'src/entities/anxiety.entity';
import { AnxietyService } from 'src/services/anxiety/anxiety.service';

@Module({
    imports: [TypeOrmModule.forFeature([Anxiety])],
    providers: [AnxietyService],
    controllers: [AnxietyController]

})
export class AnxietyModule {}
