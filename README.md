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

1 - Todo o fluxo de dados será centralizado no gereciamento de estago global (Vuex, Pinia, ...)
> Propósito: **Fonte de dados única, fluxo de dados único, centralizar chamadas de API.**

2 - A estrutura de pastas considera um "contexto" para toda a sua estrutura, exemplo:
  - Contexto: "HomeView"
    - HomeView (pasta)
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
      - HomeRouters (pasta)
        - index.js (centraliza todas as rotas e sub-rotas do contexto HomeView)
> Propósito: **Centralizar tudo em um único contexto de fácil indentificação e manutenção**