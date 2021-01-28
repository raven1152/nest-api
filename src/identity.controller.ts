import { Controller, Get } from '@nestjs/common';
import { IdentityService } from './identity.service';

@Controller('/api/identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Get('/profiles')
  getProfiles(): string {
    return this.identityService.getProfiles();
  }
}
