# Storefront Core

Este projeto implementa repositórios de busca de registros da api-storefront

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)

## Instalação

Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/storefront-core.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd storefront-core
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

O projeto utiliza Jest para os testes, a configuração é feita no arquivo `jest.config.js`

```
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const shop = require('./src/mocks/shop/shop.json')
const appsMock = require('./src/mocks/apps/apps.json')
const sidebarMock = require('./src/mocks/sidebar/sidebar.json')
const freightMock = require('./src/mocks/freight/freight.json')
const newsletterMock = require('./src/mocks/newsletter/newsletter.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './src',
  globals: {
    shop_ctx: {
      api_url: 'https://url-da-api-storefront/',
      token: 'TOKEN-PUBLICO-DA-APLICACAO-FRONT-PLUS',
      domain: 'domnio-da-loja.homolog.bagypro.com',
      mock: {} //é possível utilizar o mock por módulo para teste
    }
  }
}
```

### Cada módulo corresponde a um endpoint da api-storefront

![alt text](<Captura de Tela 2024-07-04 às 15.40.29.png>)
