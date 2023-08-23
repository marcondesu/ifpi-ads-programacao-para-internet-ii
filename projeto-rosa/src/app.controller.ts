/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query, Render, Res } from "@nestjs/common";
import { Response } from 'express';
import { AppService, CalcularIMCInput } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  hello(@Query('nome') nome = 'Visitante') {
    const context = {
      nome,
      qtd_letras: nome.length,
    };
    return context;
  }
}
