import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { SeriesService } from './series/series.service';
import { SeriesController } from './series/series.controller';
import { SeriesModule } from './series/series.module';

@Module({
  imports: [UsersModule, MoviesModule, SeriesModule],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class AppModule {}
