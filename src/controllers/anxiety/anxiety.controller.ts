import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAnxietyDto } from 'src/common/dto/anxiety/create-anxiety.dto/create-anxiety.dto';
import { UpdateAnxietyDto } from 'src/common/dto/anxiety/update-anxiety.dto/update-anxiety.dto'; 
import { Anxiety } from 'src/entities/anxiety.entity';
import { AnxietyService } from 'src/services/anxiety/anxiety.service';

@Controller('anxiety')
export class AnxietyController {
    constructor(private readonly anxietyService: AnxietyService) {}

  @Post()
  async create(@Body() createAnxietyDto: CreateAnxietyDto) : Promise<Anxiety> {
    return this.anxietyService.create(createAnxietyDto);
  }

  @Get()
  async findAll() : Promise<Anxiety[]> {
    return this.anxietyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) : Promise<Anxiety> {
    return this.anxietyService.findOne(id);
  }

  @Put(':id') 
  async update(@Param('id') id: number, @Body() updateAnxietyDto: UpdateAnxietyDto) : Promise<Anxiety> {
    return this.anxietyService.update(id, updateAnxietyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) : Promise<number>{
    return this.anxietyService.remove(id);
  }
}
