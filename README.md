# &CONTI - Marketing Digital

Site institucional completo para a empresa &CONTI, especializada em gestão de redes sociais e marketing digital.

## 🚀 Funcionalidades Implementadas

### ✅ Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Menu mobile com animações suaves
- Grid system flexível e responsivo

### ✅ Componentes Principais
- **Header**: Navegação fixa com menu mobile e animações
- **Hero Section**: Apresentação principal com call-to-action
- **Sobre**: Seção com diferenciais da empresa
- **Soluções**: Produtos e serviços oferecidos
- **Depoimentos**: Avaliações de clientes
- **Planos**: Página completa de preços com 3 planos
- **Contato**: Formulário funcional com validação
- **Footer**: Informações da empresa e links úteis

### ✅ Página de Planos
- 3 planos: Starter, Professional e Enterprise
- Toggle entre cobrança mensal e anual (20% desconto)
- FAQ interativo com animações
- Garantia de 30 dias
- Design moderno com efeitos hover

### ✅ Efeitos e Animações
- Animações de entrada (fade-in, slide-up, slide-left, slide-right)
- Efeitos hover em cards e botões
- Transições suaves em todos os elementos
- Scroll suave entre seções

### ✅ Cores e Design
- Paleta de cores consistente com a marca
- Gradientes modernos
- Sombras e elevações
- Tipografia hierárquica

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Sass/SCSS** - Estilização avançada
- **React Icons** - Ícones
- **React Hook Form** - Formulários
- **Zustand** - Gerenciamento de estado

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎨 Sistema de Cores

```scss
--color-primary: #8b6eda
--color-primary-hover: #CFAAE8
--color-secondary: #2196F3
--color-accent: #FF6B35
--color-background: #fef7ff
--color-text: #191919
```

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
# ou
pnpm install
```

2. **Executar em desenvolvimento:**
```bash
npm run dev
# ou
pnpm dev
```

3. **Build para produção:**
```bash
npm run build
# ou
pnpm build
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── planos/page.tsx       # Página de planos
│   ├── layout.tsx            # Layout principal
│   └── packages/
│       ├── ui/styles/        # Estilos globais
│       └── components/       # Componentes compartilhados
├── components/
│   ├── header/               # Header responsivo
│   ├── footer/               # Footer completo
│   ├── home/                 # Componentes da home
│   ├── pricing/              # Componentes de planos
│   ├── contact/              # Formulário de contato
│   └── partners/             # Seção de parceiros
└── hooks/                    # Hooks customizados
```

## 📄 Páginas

### Home (`/`)
- Hero section com apresentação
- Seção sobre a empresa
- Produtos e soluções
- Depoimentos de clientes
- Formulário de contato

### Planos (`/planos`)
- 3 planos de preços
- Toggle mensal/anual
- FAQ interativo
- Recursos dos planos
- Call-to-action

## 🎯 Funcionalidades Especiais

### Header
- Menu mobile responsivo
- Navegação suave entre seções
- Header fixo com efeito de scroll
- Animações de entrada

### Formulário de Contato
- Validação em tempo real
- Estados de loading e sucesso
- Design responsivo
- Feedback visual

### Página de Planos
- Comparação de planos
- Toggle de cobrança
- FAQ expansível
- Garantia de satisfação

## 🔧 Configurações

### Variáveis de Ambiente
Crie um arquivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Estilos
Os estilos utilizam SCSS com:
- Variáveis CSS customizadas
- Mixins para responsividade
- Sistema de grid flexível
- Animações CSS

## 📱 Compatibilidade

- ✅ Chrome (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Edge (últimas versões)
- ✅ Mobile browsers

## 🚀 Deploy

O projeto está configurado para deploy em:
- Vercel (recomendado)
- Netlify
- Qualquer servidor Node.js

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: contato@econti.com.br
- Telefone: (11) 99999-9999

---

**&CONTI** - Transformando sua presença digital 🚀
