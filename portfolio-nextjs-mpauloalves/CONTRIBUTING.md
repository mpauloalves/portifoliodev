# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para este projeto! Este documento fornece diretrizes para contribuições.

## 📋 Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU_USUARIO/portifoliodev.git
cd portifoliodev

# Adicione o repositório original como upstream
git remote add upstream https://github.com/mpauloalves/portifoliodev.git
```

### 2. Configuração do Ambiente

```bash
# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### 3. Criando uma Branch

```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-fix
```

### 4. Fazendo Mudanças

- Mantenha o código limpo e bem documentado
- Siga as convenções de código existentes
- Teste suas mudanças localmente
- Certifique-se de que o build funciona: `npm run build`

### 5. Commit e Push

```bash
# Adicione suas mudanças
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade X"
# ou
git commit -m "fix: corrige problema Y"

# Push para seu fork
git push origin feature/nome-da-feature
```

### 6. Pull Request

1. Vá para o GitHub e crie um Pull Request
2. Descreva claramente suas mudanças
3. Referencie issues relacionadas (se houver)
4. Aguarde a revisão

## 📝 Convenções de Commit

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças na documentação
- `style:` formatação, ponto e vírgula, etc
- `refactor:` refatoração de código
- `test:` adição ou correção de testes
- `chore:` tarefas de manutenção

## 🎯 Tipos de Contribuição

### 🐛 Reportar Bugs

- Use o template de issue para bugs
- Inclua passos para reproduzir
- Adicione screenshots se relevante
- Especifique o ambiente (OS, browser, etc.)

### ✨ Sugerir Features

- Use o template de issue para features
- Descreva o problema que resolve
- Explique a solução proposta
- Considere alternativas

### 📖 Melhorar Documentação

- Corrija erros de digitação
- Melhore explicações
- Adicione exemplos
- Traduza conteúdo

### 🎨 Melhorias de UI/UX

- Mantenha consistência visual
- Considere acessibilidade
- Teste em diferentes dispositivos
- Documente mudanças visuais

## 🔍 Revisão de Código

### Critérios de Aceitação

- ✅ Código funciona corretamente
- ✅ Segue padrões do projeto
- ✅ Inclui testes (quando aplicável)
- ✅ Documentação atualizada
- ✅ Performance não degradada
- ✅ Acessibilidade mantida

### Processo de Revisão

1. Revisão automática (CI/CD)
2. Revisão por mantenedores
3. Testes adicionais se necessário
4. Merge após aprovação

## 📞 Dúvidas?

- Abra uma issue com a tag `question`
- Entre em contato: contato@mpauloalves.dev

## 📄 Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mantenha discussões profissionais

---

**Obrigado por contribuir! 🚀**