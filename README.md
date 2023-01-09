# template-base

## Comandos
```
yarn install - install all dependencies
yarn serve - run server in development mode
yarn build - run build projeto in production mode
yarn test:unit - unit tests
yarn lint - lint
```

## Estrutura do projeto

### A estrutura do projeto considera alguns pontos:

1 - Todos o fluxo de dados será centralizado no gereciamento de estago global (Vuex, Pinia, ...)
  - A camada de **actions** irá centralizar todas a chamadas de API dentro do projeto.
  - A camada de mutations...
  - A camada de getters...
  - A camada de state...

#### Propósito: **Fonte de dados única, fluxo de dados único, centralizar chamadas de API.**
>Apesar desse ser a estrutura "padrão" do gerenciamento de estado global, ou seja, "Action > Mutation > State > Getter" o que se observa é que, boa parte dos projetos não exploram o gerenciamento de estado como um todo, alguns desenvolvedores até acreditam que o gerenciamento de estado global é para "coisas específicas".
A estrutura do projeto considera que, a "store" estará disponível para todos os níveis de componentes, ou seja, não importa o nível do componente na hierarquia, ele poderá acessar a "store" diretamente e pegar os dados que ele precisa para apresentar ao usuário, como também manipular esses dados. Considera ainda que, todos os dados retornados pelas "actions" precisam ser armazenados na "state" e consumidos a partir dela pelas funções de mapeamento, como mapGetters dentro das propriedades computadas do Vue, por exemplo.

2 - A estrutura de pastas considera um "contexto" para toda a sua estrutura, exemplo:
  - Contexto: "HomeView"
    - HomeView (pasta: )
      - HomeView.vue
      - partials (pasta: partes menores da view principal, no caso a HomeView)
      - locales (pasta: internacionalização local, no caso apenas para a HomeView e seus partials)
      - Demais arquivos(mixins, testes unitários, etc)
    - store (Vuex, Pinia, ...)
      - HomeStore
        - actions.js
        - getters.js
        - index.js
        - mutation-types.js
        - mutations.js
        - state.js
    - router
      - HomeRouters
#### Propósito: **Centralizar tudo em um único contexto de fácil indentificação**