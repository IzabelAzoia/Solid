## Princípios SOLID

Os princípios SOLID são um conjunto de cinco princípios de design de software que ajudam a tornar o código mais compreensível, flexível e fácil de manter. Abaixo está uma breve descrição de cada princípio:

### S - Single Responsibility Principle (Princípio da Responsabilidade Única)

Uma classe deve ter uma, e somente uma, razão para mudar. Isso significa que cada classe deve ter uma única responsabilidade ou funcionalidade.

### O - Open/Closed Principle (Princípio Aberto/Fechado)

As entidades de software (classes, módulos, funções, etc.) devem ser abertas para extensão, mas fechadas para modificação. Isso significa que o comportamento de uma classe pode ser estendido sem modificar seu código-fonte.

### L - Liskov Substitution Principle (Princípio da Substituição de Liskov)

Objetos de uma superclasse devem poder ser substituídos por objetos de suas subclasses sem alterar o funcionamento do programa. Isso requer que as subclasses sejam substituíveis por suas superclasses sem alterar a funcionalidade esperada.

### I - Interface Segregation Principle (Princípio da Segregação de Interface)

Nenhum cliente deve ser forçado a depender de métodos que não usa. Ou seja, as interfaces devem ser específicas ao invés de genéricas.

### D - Dependency Inversion Principle (Princípio da Inversão de Dependência)

Dependências de alto nível não devem depender de dependências de baixo nível; ambas devem depender de abstrações. Além disso, as abstrações não devem depender de detalhes; os detalhes devem depender das abstrações.

## Tecnologias Utilizadas

- **TypeScript**
- **JavaScript**
- **Node.js** (se aplicável)
- **Webpack** (para bundling, se aplicável)

## Estrutura do Projeto

- **src/abstractShareButton.ts**: Classe abstrata que implementa o comportamento básico para botões de compartilhamento.
- **src/shareButtonFacebook.ts**: Implementação do botão de compartilhamento para o Facebook.
- **src/shareButtonLinkedin.ts**: Implementação do botão de compartilhamento para o LinkedIn.
- **src/shareButtonTwitter.ts**: Implementação do botão de compartilhamento para o Twitter.
- **src/shareButtonPrint.ts**: Implementação do botão de impressão.
- **src/eventHandler.ts**: Interface para os manipuladores de eventos.
- **src/DOMEventHandler.ts**: Implementação do manipulador de eventos para o DOM.

## Como Executar

Para configurar o projeto localmente, siga estas etapas:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/IzabelAzoia/Solid.git

