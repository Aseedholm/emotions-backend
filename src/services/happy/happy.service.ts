import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHappyDto } from 'src/common/dto/happy/create-happy.dto/create-happy.dto';
import { UpdateHappyDto } from 'src/common/dto/happy/update-happy.dto/update-happy.dto';
import { Happy } from 'src/entities/happy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HappyService {
    constructor(
        @InjectRepository(Happy)
        private happyRepository : Repository<Happy>,
    ) {}

    async create(createHappyDto: CreateHappyDto) : Promise<Happy> {
        const newHappy = new Happy(createHappyDto.context, createHappyDto.title, createHappyDto.data.somethingToRememberThisHappiness);
        const happy = this.happyRepository.create(createHappyDto);
        return this.happyRepository.save(happy);
    }

    async findAll(): Promise<Happy[]> {
        return this.happyRepository.find();
    }

    async findOne(id: number): Promise<Happy> {
        return this.happyRepository.findOneBy({id});
    }

    async update(id: number, updateHappyDto: UpdateHappyDto) : Promise<Happy> {
        await this.happyRepository.update(id, updateHappyDto);
        return this.findOne(id);
    }

    async remove(id: number) : Promise<number> {
        await this.happyRepository.delete(id);
        return id;
    }
}
