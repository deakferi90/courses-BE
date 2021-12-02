import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

@Injectable()
export class LocaljwtService {
  sign(paylod) {
    const token = sign(paylod, 'mysecretsecret', { expiresIn: '1d' });
    return token;
  }
}
