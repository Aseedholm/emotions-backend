import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateHappyDto } from 'src/common/dto/happy/create-happy.dto/create-happy.dto';
import { UpdateHappyDto } from 'src/common/dto/happy/update-happy.dto/update-happy.dto';
import { Happy } from 'src/entities/happy.entity';
import { HappyService } from 'src/services/happy/happy.service';

@Controller('happy')
export class HappyController {
    constructor(private readonly happyService: HappyService) {}

    @Post()
    async create(@Body() createHappyDto: CreateHappyDto) : Promise<Happy> {
        return this.happyService.create(createHappyDto);
    }

    @Get()
    async findAll() : Promise<Happy[]> {
        return this.happyService.findAll();
    }

    //TODO -- Update this to be a number not string.
    @Get(':id')
    async findOne(@Param('id') id: string) : Promise<Happy> {
        return this.happyService.findOne(+id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateHappyDto: UpdateHappyDto) : Promise<Happy> {
        return this.happyService.update(+id, updateHappyDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) : Promise<number> {
        return this.happyService.remove(+id);
    }

}
