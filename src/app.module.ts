import { DatabaseModule } from '@infra/database/database.module';
import { HTTPModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HTTPModule, DatabaseModule],
})
export class AppModule { }
