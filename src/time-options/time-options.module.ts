import { Module } from '@nestjs/common';
import { TimeOptionsService } from './time-options.service';
import { TimeOptionsController } from './time-options.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: Number(process.env.JWT_EXPIRE),
        },
      }),
    }),
    PrismaModule,
  ],
  providers: [TimeOptionsService],
  controllers: [TimeOptionsController],
})
export class TimeOptionsModule {}
