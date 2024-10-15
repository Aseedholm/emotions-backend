import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnxietyModule } from './modules/anxiety.module';
import { AngerModule } from './modules/anger.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin_user',
      password: 'postgres',
      database: 'emotions_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true,  // Set this to false in production
    }),
    AnxietyModule,
    AngerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
