# Bible App / Aplicativo Bíblia

Uma aplicação de Bíblia simples, rápida e **100% livre de anúncios**.

A simple, fast, **ad-free Bible application**.

---

## 🇧🇷 Sobre o aplicativo

O objetivo deste projeto é oferecer uma experiência de leitura bíblica limpa e agradável, sem distrações comerciais, com código aberto para quem quiser estudar, auditar ou contribuir.

### Funcionalidades

- **Leitura bíblica sem anúncios**
  - Nenhum tipo de banner, pop-up ou rastreamento de anúncios.
- **Seleção de livro e capítulo**
  - Lista de todos os livros da Bíblia.
  - Seleção de capítulos em um layout em grade, adaptável ao tamanho da tela.
- **Leitura de versículos**
  - Exibição organizada dos versículos do capítulo selecionado.
  - Texto justificado para melhor legibilidade.
- **Ajuste de tamanho da fonte**
  - Tela de configurações com controle para aumentar/diminuir a fonte.
  - O tamanho da fonte é aplicado à leitura e à maior parte dos textos do app.
  - Preferências persistidas entre sessões.
- **Seleção de versão da Bíblia**
  - Várias traduções/versões disponíveis, todas armazenadas em arquivos `.sqlite`.
  - Todas as versões usam o mesmo esquema de banco, variando apenas o conteúdo.
  - A versão selecionada é aplicada em toda a navegação (livros, capítulos, versículos).

### Tecnologias utilizadas

- React Native (via Expo)
- Expo Router para navegação
- expo-sqlite para acesso aos bancos SQLite das traduções
- AsyncStorage para persistência de configurações (fonte e versão)
- TypeScript

### Estrutura geral

- `app/`
  - Entradas das telas (`index`, `chapters`, `reader`, `settings`).
- `src/screens/`
  - `Books`: seleção de livros.
  - `Chapters`: seleção de capítulos.
  - `Reader`: leitura de versículos.
  - `Settings`: configurações de fonte e versão.
- `src/database/`
  - `functions.ts`: acesso unificado ao banco SQLite.
  - `types.ts`: tipos para livros e versículos.
- `src/context/`
  - `SettingsContext.tsx`: contexto global de configurações.
- `assets/database/`
  - Arquivos `.sqlite` com as diferentes versões da Bíblia.
- `assets/images/`
  - Ícones e imagens utilizados pelo app.

### Como executar

Pré-requisitos:

- Node.js e npm (ou yarn)
- Expo CLI (`npx expo` já resolve)
- Ambiente Android (emulador ou dispositivo físico) se desejar testar no Android

Passos:

```bash
npm install
npx expo start
```

Para abrir diretamente no Android:

```bash
npx expo start --android
```

### Build para Android

Sugestão de fluxo com EAS:

```bash
npx eas build:configure
npx eas build --platform android --profile production
```

Consulte a documentação do Expo/EAS para detalhes de contas, keystores e publicação.

### Licença e uso do código

Este projeto é **código aberto**, mas com uma restrição importante:

- **É permitido**:
  - Ler, estudar e modificar o código para uso pessoal.
  - Contribuir com melhorias através de PRs.
  - Usar como base de estudo ou referência técnica.

- **NÃO é permitido**:
  - Monetizar este código de qualquer forma.
  - Vender o aplicativo (derivado ou não) em lojas de apps ou outros canais.
  - Incluir anúncios, venda de funcionalidades ou qualquer modelo de receita usando este código como base.

Os termos completos estão descritos no arquivo [`LICENSE`](./LICENSE).

---

## 🇺🇸 About the app

The goal of this project is to provide a clean and pleasant Bible reading experience, with **no ads**, and with **open source code** for anyone who wants to study, audit, or contribute.

### Features

- **Ad-free Bible reading**
  - No banners, pop-ups, or ad tracking of any kind.
- **Book and chapter selection**
  - List of all Bible books.
  - Chapter grid layout that adapts to screen width.
- **Verse reading**
  - Organized display of verses for the selected chapter.
  - Justified text for better readability.
- **Adjustable font size**
  - Settings screen with controls to increase/decrease font size.
  - Font size is applied to the reader and most app texts.
  - Preferences are persisted between sessions.
- **Bible version selection**
  - Multiple translations/versions available, stored as `.sqlite` files.
  - All databases share the same schema; only the content changes.
  - The selected version is used across the whole navigation (books, chapters, verses).

### Tech stack

- React Native (Expo)
- Expo Router for navigation
- expo-sqlite for the Bible databases
- AsyncStorage for settings persistence (font size and version)
- TypeScript

### Project structure

- `app/` — screen entry points.
- `src/screens/` — `Books`, `Chapters`, `Reader`, `Settings`.
- `src/database/` — SQLite access functions and types.
- `src/context/` — global settings context.
- `assets/database/` — Bible versions as `.sqlite`.
- `assets/images/` — icons and images.

### Getting started

```bash
npm install
npx expo start
```

Open on Android:

```bash
npx expo start --android
```

### Android build

Suggested EAS flow:

```bash
npx eas build:configure
npx eas build --platform android --profile production
```

### License and usage policy

This project is **open source**, but with an important restriction:

- **Allowed**:
  - Read, study, and modify the code for personal use.
  - Contribute improvements via pull requests.
  - Use it as a learning resource or technical reference.

- **NOT allowed**:
  - Monetize this code in any form.
  - Sell this app (or derivatives) on app stores or any other channel.
  - Add ads, paid features, or any revenue model using this code as a base.

Please see the [`LICENSE`](./LICENSE) file for the full terms.
