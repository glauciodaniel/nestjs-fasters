import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { TimeOptionsModule } from './time-options/time-options.module';
import { AddressesModule } from './addresses/addresses.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    MailModule,
    AuthModule,
    UserModule,
    PrismaModule,
    TimeOptionsModule,
    AddressesModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
