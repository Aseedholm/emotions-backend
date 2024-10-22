import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HappyController } from 'src/controllers/happy/happy.controller';
import { Happy } from 'src/entities/happy.entity';
import { HappyService } from 'src/services/happy/happy.service';

@Module({
    imports: [TypeOrmModule.forFeature([Happy]),],
    providers: [HappyService],
    controllers: [HappyController]
})
export class HappyModule {}
