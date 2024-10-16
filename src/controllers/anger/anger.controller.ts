import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { CreateAngerDto } from 'src/common/dto/anger/create-anger.dto/create-anger.dto';
import { UpdateAngerDto } from 'src/common/dto/update-anger.dto/update-anger.dto';
import { Anger } from 'src/entities/anger.entity';
import { AngerService } from 'src/services/anger/anger.service';

//TODO define return types.
@Controller('anger')
export class AngerController {
  constructor(private readonly angerService: AngerService) {}

  @Post()
  async create(@Body() createAngerDto: CreateAngerDto) : Promise<Anger> {
    return this.angerService.create(createAngerDto);
  }

  @Get()
  async findAll() : Promise<Anger[]> {
    return this.angerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<Anger> {
    return this.angerService.findOne(+id);
  }

  @Put(':id') 
  async update(@Param('id') id: string, @Body() updateAngerDto: UpdateAngerDto) : Promise<Anger> {
    return this.angerService.update(+id, updateAngerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<number>{
    return this.angerService.remove(+id);
  }
}