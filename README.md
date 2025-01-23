# Weather App

Este é um projeto de aplicação do clima construído com **React**, **TypeScript**, **SCSS**, e utiliza bibliotecas como **MDB React UI Kit** e **WeatherAPI** para fornecer informações meteorológicas atualizadas.

## Funcionalidades

- **Previsão do tempo**: Exibe previsões meteorológicas para até 4 dias.
- **Clima atual**: Mostra as condições meteorológicas do dia atual, como temperatura, umidade e índice de vento.

## Tecnologias Utilizadas

- **React** com **TypeScript**
- **SCSS** para estilização
- **MDB React UI Kit** para componentes de interface do usuário
- **WeatherAPI** para buscar dados meteorológicos

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/my-weather-app.git
   cd my-weather-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```plaintext
   REACT_APP_API_KEY=YOUR_API_KEY_HERE
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse a aplicação em seu navegador:
   ```plaintext
   http://localhost:3000
   ```

## Uso

### **Previsão do Clima**

Acesse a página principal para visualizar a previsão do tempo. Os dados serão carregados automaticamente ao abrir a aplicação.

## Principais Arquivos

### **src/components/WeatherDay.tsx**
Componente que exibe as informações do clima atual, incluindo:
- Hora da última atualização.
- Ícone e temperatura atual.
- Umidade e velocidade do vento.

### **src/components/WeatherForecastPage.tsx**
Lista os dados da previsão para os próximos 4 dias, exibindo:
- Data.
- Ícone do clima.
- Temperaturas máxima e mínima.

### **src/hooks/weather_call.ts**
Contém as funções para consumir a API do WeatherAPI:
- `getWeatherActualDay`: Retorna os dados meteorológicos do dia atual.
- `getWeatherForecast`: Retorna a previsão para os próximos dias.

### **src/styles/**
- `actualDay.scss`: Estilização do componente WeatherDay.
- `forecast.scss`: Estilização do componente WeatherForecastPage.

## Problemas Comuns

### Variáveis de Ambiente
Se a chave da API (`REACT_APP_API_KEY`) estiver retornando `undefined`, verifique:
- Se o arquivo `.env` está no diretório raiz.
- Se a variável possui o prefixo `REACT_APP_`.
- Reinicie o servidor após alterar o arquivo `.env`.

### Erro de Compilação
Certifique-se de que todas as dependências foram instaladas corretamente e de que o arquivo `.env` está configurado corretamente.

## Tecnologias Futuras
- Implementar suporte para selecionar diferentes cidades manualmente.
- Adicionar temáticas "claro" e "escuro".
- Melhorar a responsividade.

## Licença
Este projeto é de uso livre e pode ser modificado conforme suas necessidades.

