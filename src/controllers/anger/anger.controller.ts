import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { CreateAngerDto } from 'src/common/dto/create-anger.dto/create-anger.dto';
import { UpdateAngerDto } from 'src/common/dto/update-anger.dto/update-anger.dto';
import { AngerService } from 'src/services/anger/anger.service';

//TODO define return types.
@Controller('anger')
export class AngerController {
  constructor(private readonly angerService: AngerService) {}

  @Post()
  create(@Body() createAngerDto: CreateAngerDto) {
    return this.angerService.create(createAngerDto);
  }

  @Get()
  findAll() {
    return this.angerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.angerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAngerDto: UpdateAngerDto) {
    return this.angerService.update(+id, updateAngerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.angerService.remove(+id);
  }
}