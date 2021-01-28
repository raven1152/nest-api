import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentityService {
  getProfiles(): string {
    return 'PROFILES';
  }
}
