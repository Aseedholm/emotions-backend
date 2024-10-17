import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnxietyDto } from 'src/common/dto/anxiety/create-anxiety.dto/create-anxiety.dto';
import { UpdateAnxietyDto } from 'src/common/dto/anxiety/update-anxiety.dto/update-anxiety.dto';
import { Anxiety } from 'src/entities/anxiety.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnxietyService {

    constructor(
        @InjectRepository(Anxiety)
        private anxietyRepository : Repository<Anxiety>,
    ) {}

    async create(createAnxietyDto: CreateAnxietyDto) : Promise<Anxiety> {
        const anger = this.anxietyRepository.create(createAnxietyDto);
        return this.anxietyRepository.save(anger);
    }

    async findAll(): Promise<Anxiety[]> {
        return this.anxietyRepository.find();
    }

    async findOne(id: number): Promise<Anxiety> {
        return this.anxietyRepository.findOneBy({id});
    }

    async update(id: number, updateAnxietyDto: UpdateAnxietyDto) : Promise<Anxiety> {
        await this.anxietyRepository.update(id, updateAnxietyDto);
        return this.findOne(id);
    }

    async remove(id: number) : Promise<number> {
        await this.anxietyRepository.delete(id);
        return id;
    }
}
