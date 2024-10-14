import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAnxietyDto } from 'src/common/dto/create-anxiety.dto/create-anxiety.dto';
import { UpdateAnxietyDto } from 'src/common/dto/update-anxiety.dto/update-anxiety.dto';
import { Anxiety } from 'src/entities/anxiety.entity';
import { AnxietyService } from 'src/services/anxiety/anxiety.service';

@Controller('anxiety')
export class AnxietyController {
    constructor(private readonly anxietyService: AnxietyService) {}

  @Post()
  create(@Body() createAnxietyDto: CreateAnxietyDto) : Promise<Anxiety> {
    return this.anxietyService.create(createAnxietyDto);
  }

  @Get()
  findAll() : Promise<Anxiety[]> {
    return this.anxietyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<Anxiety> {
    return this.anxietyService.findOne(+id);
  }

  @Put(':id') 
  update(@Param('id') id: string, @Body() updateAnxietyDto: UpdateAnxietyDto) : Promise<Anxiety> {
    return this.anxietyService.update(+id, updateAnxietyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) : Promise<number>{
    return this.anxietyService.remove(+id);
  }
}
