import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AgendamentoDto } from './../src/agendamento/dto/agendamento.dto';

describe('AgendamentoController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await app.listen(3001); 
  });

  afterAll(async () => {
    await app.close(); 
  });

  it('/agendamento/escalar (POST)', async () => {
    const agendamentoDto: AgendamentoDto = {
      desiredCapacity: 1,
      minSize: 1,
      maxSize: 2,
      startTime: new Date(Date.now() + 5 * 60000).toISOString(), 
      autoScalingGroupName: 'teste-asg' 
    };
    const response = await request(app.getHttpServer())
      .post('/agendamento/escalar')
      .send(agendamentoDto)
      .expect(201);

    console.log(response.body); 
    expect(response.body).toEqual({
      success: true,
      result: expect.any(Object) 
    });
  });

  it('/agendamento/reduzir (POST)', async () => {
    const agendamentoDto: AgendamentoDto = {
      desiredCapacity: 0,
      minSize: 0,
      maxSize: 0,
      startTime: new Date(Date.now() + 6 * 60000).toISOString(), 
      autoScalingGroupName: 'teste-asg' 
    };
    const response = await request(app.getHttpServer())
      .post('/agendamento/reduzir')
      .send(agendamentoDto)
      .expect(201);

    console.log(response.body); 
    expect(response.body).toEqual({
      success: true,
      result: expect.any(Object) 
    });
  });

  it('/agendamento/trocar-lote (POST)', async () => {
    const agendamentoDto: AgendamentoDto = {
      desiredCapacity: 0,
      minSize: 0,
      maxSize: 0,
      startTime: new Date(Date.now() + 7 * 60000).toISOString(), 
      autoScalingGroupName: 'teste-asg' 
    };
    const response = await request(app.getHttpServer())
      .post('/agendamento/trocar-lote')
      .send(agendamentoDto)
      .expect(201);

    console.log(response.body); 
    expect(response.body).toEqual({
      success: true,
      result: expect.any(Object) 
    });
  });
});