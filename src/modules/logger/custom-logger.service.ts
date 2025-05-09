import { ConsoleLogger, Injectable } from '@nestjs/common';
import { bgYellow, white } from 'colors';
import { appendFileSync } from 'fs';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  formataLog(nome, quantidade, valor) {
    return `LOCAL: ${
      this.context
    } - NOME: ${nome} - QUANTIDADE: ${quantidade} - PREÇO: ${valor} - TIMESTAMP ${this.getTimestamp()}`;
  }

  customLogParaProduto(produto) {
    const { nome, quantidadeDisponivel, valor } = produto;
    const logFormatado = this.formataLog(nome, quantidadeDisponivel, valor);

    console.log(bgYellow(white(logFormatado)));
  }

  logEmArquivoParaProduto(produto) {
    const { nome, quantidadeDisponivel, valor } = produto;

    const mensagemFormatada =
      this.formataLog(nome, quantidadeDisponivel, valor) + '\n';

    const caminhoDoArquivo = './src/modules/logger/arquivo.log';
    appendFileSync(caminhoDoArquivo, mensagemFormatada);
  }
}
