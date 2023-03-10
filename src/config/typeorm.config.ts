import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'taskmanagment',
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  synchronize: true,
};
