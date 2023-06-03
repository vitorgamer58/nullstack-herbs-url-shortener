# Nullstack Herbs Url Shortener

<img src='https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png' height='60' alt='Nullstack' />

Nullstack Herbs Url Shortener é um projeto de encurtador de URLs que serve como uma prova de conceito para a integração do Nullstack com HerbsJs. A combinação destas duas ferramentas poderosas permite criar um serviço eficiente e fácil de manter, sem negligenciar a necessidade de evolução constante do aplicativo à medida que os requisitos mudam.

## Como rodar este Projeto

Primeiro, instale as dependências:

```sh
npm install
```

Em seguida, copie o exemplo de ambiente para um arquivo .env:

```sh
NULLSTACK_PROJECT_NAME="[dev] Nullstack Herbs Url Shortener"
NULLSTACK_PROJECT_DOMAIN="localhost"
NULLSTACK_PROJECT_COLOR="#D22365"
NULLSTACK_SERVER_PORT="3000"
NULLSTACK_SECRETS_BASE_URL=""
NULLSTACK_SECRETS_DATABASE_NAME="url_shortener"
NULLSTACK_SECRETS_COLLECTION_NAME="shorted_urls"
NULLSTACK_SECRETS_MONGODB_URI=""
```

Execute o aplicativo no modo de desenvolvimento:

```sh
npm start
```

Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

## Saiba mais sobre Nullstack e HerbsJs

Nullstack é um framework web full stack que permite a criação de recursos com front e back end em um único componente, chamamos de "componentes orientados a recursos". O Nullstack torna a programação divertida e simples, pois você não precisa pensar em grandes arquiteturas, ao invés disso, você tem pequenos recursos compostos.

Herbs é uma biblioteca de código aberto para aplicativos de backend, permitindo que você construa seus microservices em Node.js de maneira mais rápida e à prova de futuro. É focado em alcançar entregas mais rápidas e com desenvolvedores mais felizes, sem negligenciar a necessidade de evolução constante do aplicativo à medida que os requisitos mudam.

Herbs usa uma abordagem "Domain-First" para atingir isso: você e sua equipe se concentram em seu domínio de negócios e deixam o Herbs lidar com o código da infraestrutura. Herbs vai extrair metadados do seu domínio e gerar dinamicamente, on the fly (sem geração de código), suas camadas de transporte e repositórios usando as melhores bibliotecas existentes no ecossistema.

Para saber mais, acesse a documentação oficial do [Nullstack](https://nullstack.app/documentation) e [HerbsJs](https://herbsjs.org/).