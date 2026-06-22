# Site Mobile Assistivo Para Pessoas com Deficiência Visual Total

Este projeto consiste em um site web assistivo desenvolvido para o EcoMuseu do Boné de Apucarana-PR, projetado nativamente para pessoas com deficiência visual total (cegueira). O objetivo principal do sistema é garantir autonomia e navegação fluida em dispositivos móveis por meio de Tecnologias Assistivas.

O desenvolvimento aplicou conceitos de Engenharia de Software e Interação Humano-Computador (IHC), focando em uma Árvore de Acessibilidade (AOM - *Accessibility Object Model*) enxuta, HTML semântico e forte uso da especificação WAI-ARIA. 

Além disso, o projeto conta com um Assistente Virtual (Chatbot com RAG), que permite a exploração do acervo do museu via comandos de voz, garantindo uma interface conversacional e inclusiva.

---

## Ferramentas 

### Frontend & Acessibilidade
- **Frameworks:** Angular e Materializer CSS 
- **Marcação e Semântica:** HTML5 + WAI-ARIA (Atributos como `aria-live`, `aria-hidden`, `aria-expanded`)
- **Padrões de Acessibilidade:** Diretrizes WCAG 2.2 (Nível AA) e Norma Brasileira ABNT NBR 17225:2025
- **Testes de Qualidade:** WAVE (Web Accessibility Evaluation Tool), NVDA, TalkBack (Android) e VoiceOver (iOS)

### Back-end & Inteligência Artificial
- **Inteligência Artificial:** Cohere API
- **Arquitetura de Dados:** RAG (*Retrieval-Augmented Generation*)
- **Gerenciamento de Conteúdo:** Sveltia CMS (Git-based JSON database)
- **Comparativo Tecnológico:** No escopo do projeto, foi gerada uma ramificação secundária do projeto construída no **Oracle APEX** (plataforma Low-Code) para fins de comparação científica de verbosidade na Árvore de Acessibilidade (AOM).

---

## Funcionalidades
- **Acessibilidade:** Código construído com foco 100% no leitor de tela, estruturado com HTML5 Semântico (`<main>`, `<nav>`) e controle preciso de foco (TabIndex).
- **Integração Multimodal:**
  - Chatbot alimentado pela API da Cohere utilizando **RAG** (*Retrieval-Augmented Generation*) para responder perguntas exclusivas sobre o acervo do museu.
  - Interação via voz para comandos e respostas.
- **Dupla Abordagem de Áudio:** Implementação de audiodescrições de arquivos históricos com leitura nativa (Web Speech API) e *fallback* de segurança com áudios pré-gravados em `.wav`.
- **Mobile-First & Touch Targets:** Áreas de clique (botões e links) desenhadas obedecendo rigorosamente os critérios de acessibilidade da WCAG 2.2.
- **Gestão Desacoplada (Headless CMS):** Arquitetura escalável utilizando o Sveltia CMS baseado em Git, armazenando o acervo em arquivos JSON.
---

## Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18+)
- [Angular CLI](https://angular.io/cli)
- Chave de API da Cohere (para o Chatbot funcionar)

Para verificar se estão instalados, execute:

```bash
node --version
npm --version
```

---

## Instalação

1. **Clone e acesse o diretório do projeto:**

```bash
git clone https://github.com/IF-DeividSilva/Page_EcoMuseu.git
```
```bash
cd Page_EcoMuseu
```

2. **Instale as dependências:**

```bash
npm install
```

---

## Como Usar

### Iniciar o Servidor de Desenvolvimento

```bash
ng serve
```

O aplicativo abrirá automaticamente em [http://localhost:4200](http://localhost:4200). A página será recarregada quando você fizer alterações nos arquivos.


## Representação da Estrutura Hierárquica de Armazenamento da Base de Dados

```
Base de dados Ecomuseu/
├── Dados/
│   ├── Artigos/
│   │   ├── artigo_2.pdf
│   │   └── ...
│   └── Audios/
│       ├── audio_2.wav
│       └── ...
└── Metadados/
    ├── metadados_principal.json
    ├── metadados_conteudos/
    │   ├── metadados_conteudo_2.json
    │   └── ...
    └── metadados_WCAG.json

```

## Estrutura do Projeto
```
Base de dados Ecomuseu/
├── Dados/
│   ├── Artigos/
│   │   ├── artigo_2.pdf
│   │   └── ...
│   └── Audios/
│       ├── audio_2.wav
│       └── ...
└── Metadados/
    ├── metadados_principal.json
    ├── metadados_conteudos/
    │   ├── metadados_conteudo_2.json
    │   └── ...
    └── metadados_WCAG.json

```


## Fotos do Site

# Home/Sobre
<img src="./src/imgs/calculator.png" alt="Calculadora React" width="500">
---
# Acervo
<img src="./src/imgs/calculator.png" alt="Calculadora React" width="500">
---
# Visite-nos
<img src="./src/imgs/calculator.png" alt="Calculadora React" width="500">
---
# Detalhes
<img src="./src/imgs/calculator.png" alt="Calculadora React" width="500">
---
# Chatbot
<img src="./src/imgs/calculator.png" alt="Calculadora React" width="500">
---

## Componentes

### **Calculator.jsx**
Componente principal que gerencia toda a lógica da calculadora.

**Recursos:**
- Gerencia o estado da aplicação (display, operação, valores armazenados)
- Controla as operações matemáticas
- Implementa validações de entrada
- Renderiza os botões e o display

**Estado:**
```javascript
{
  displayValue: '0',        // Valor exibido no display
  clearDisplay: false,      // Flag para limpar o display
  operation: null,          // Operação atual (+, -, *, /)
  values: [0, 0],          // Armazena os dois valores da operação
  current: 0                // Índice do valor atual (0 ou 1)
}
```

### **Button.jsx**
Componente reutilizável de botão com suporte a diferentes estilos.

**Props:**
- `label`: Texto exibido no botão
- `click`: Função de callback ao clicar
- `operation`: Flag para botões de operação
- `double`: Expande o botão para 2 colunas
- `triple`: Expande o botão para 3 colunas

### **Display.jsx**
Componente que exibe o valor atual da calculadora.

**Props:**
- `value`: Número ou resultado a ser exibido

---

## Notas de Desenvolvimento

- O projeto utiliza **`eval()`** para cálculos matemáticos, o que é adequado para fins educacionais, mas não é recomendado para aplicações em produção. Para versões futuras, considere usar uma biblioteca como `math.js`.
- Os componentes utilizam **CSS Modules** para evitar conflitos de estilos globais.
- O estado é gerenciado com **React Hooks** (em componentes funcionais) e **Class Components** (em componentes de classe).

---

## Próximas Melhorias Sugeridas

- Ampliação da amostra de testes com mais usuários reais;
- Inclusão de participantes com diferentes graus de deficiência visual;
- Implementação de personalização de interface:
  - controle de contraste;
  - ajuste de tamanho da fonte;
- Inclusão de feedbacks sonoros no sistema;
- Desenvolvimento de leitor de tela embutido no site;
- Suporte a usuários não adaptados aos recursos nativos de acessibilidade dos dispositivos móveis.


---

## Licença

Este projeto é software livre, desenvolvido como um produto para validar e mostrar a viabilidade da metodologia do TCC. O conteúdo do EcoMuseu do Boné pertence aos seus respectivos mantenedores.


---

## Autor
Deivid da Silva Galvão - UTFPR (Universidade Tecnológica Federal do Paraná

---

