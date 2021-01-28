import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityController } from './identity.controller';
import { IdentityService } from './identity.service';

@Module({
  imports: [],
  controllers: [AppController, IdentityController],
  providers: [AppService, IdentityService],
})
export class AppModule {}
