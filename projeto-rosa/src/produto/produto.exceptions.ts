import { HttpException, HttpStatus } from '@nestjs/common';

export class NomeException extends HttpException {
  constructor() {
    super('O nome deve ter até 32 caracteres.', HttpStatus.BAD_REQUEST);
  }
}

export class DestinacaoException extends HttpException {
  constructor() {
    super('A destinação deve ter até 180 caracteres.', HttpStatus.BAD_REQUEST);
  }
}

export class TaxaRentException extends HttpException {
  constructor() {
    super('A taxa de rentabilidade deve ser entre 1% e 20%.', HttpStatus.BAD_REQUEST);
  }
}

export class PrazoException extends HttpException {
  constructor() {
    super('O prazo não pode ser uma data passada.', HttpStatus.BAD_REQUEST);
  }
}

export class PrazoAposVencimentoException extends HttpException {
  constructor() {
    super('O prazo para realização não pode ser após o vencimento.', HttpStatus.BAD_REQUEST);
  }
}

export class TaxaAdmNegativaException extends HttpException {
  constructor() {
    super('A taxa de administração não pode ser negativa.', HttpStatus.BAD_REQUEST);
  }
}
