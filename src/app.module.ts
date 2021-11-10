import { Module
} from '@nestjs/common';

import { UsersModule
} from './users/users.module';

import { UsersController
} from './users/users.controller';

import { UsersService
} from './users/users.service';

import { MoviesModule
} from './movies/movies.module';

import { MoviesController
} from './movies/movies.controller';

import { MoviesService
} from './movies/movies.service';

import { SeriesService
} from './series/series.service';

import { SeriesController
} from './series/series.controller';

import { SeriesModule
} from './series/series.module';

@Module({
  imports: [UsersModule, MoviesModule, SeriesModule],
  controllers: [SeriesController, UsersController, MoviesController],
  providers: [SeriesService, UsersService, MoviesService],
})
export class AppModule {}
