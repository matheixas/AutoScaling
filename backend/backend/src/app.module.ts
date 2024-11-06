import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AgendamentoModule,
  ],
})
export class AppModule {}