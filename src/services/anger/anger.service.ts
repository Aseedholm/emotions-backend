import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAngerDto } from 'src/common/dto/anger/create-anger.dto/create-anger.dto';
import { UpdateAngerDto } from 'src/common/dto/update-anger.dto/update-anger.dto';
import { Anger } from 'src/entities/anger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AngerService {
    constructor(
        @InjectRepository(Anger)
        private angerRepository : Repository<Anger>,
    ) {}

    async create(createAngerDto: CreateAngerDto) : Promise<Anger> {
        const newAnger = new Anger(createAngerDto.context, createAngerDto.data.intensity);
        const anger = this.angerRepository.create(createAngerDto);
        return this.angerRepository.save(anger);
    }

    async findAll(): Promise<Anger[]> {
        return this.angerRepository.find();
    }

    async findOne(id: number): Promise<Anger> {
        return this.angerRepository.findOneBy({id});
    }

    async update(id: number, updateAngerDto: UpdateAngerDto) : Promise<Anger> {
        await this.angerRepository.update(id, updateAngerDto);
        return this.findOne(id);
    }

    async remove(id: number) : Promise<number> {
        await this.angerRepository.delete(id);
        return id;
    }
}
