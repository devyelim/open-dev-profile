# Open Dev Profile

Open Dev Profile é um currículo público para desenvolvedores, totalmente customizável e compartilhável, feito para GitHub Pages. Ele permite exibir informações de perfil, skills, experiência, projetos e contatos, com suporte a dark mode.

## Funcionalidades

- Perfil do desenvolvedor com foto ou inicial
- Seção de skills, experiência e projetos com destaque
- Contatos clicáveis
- Tema claro ou escuro (dark mode)
- Exportar o currículo via impressão do navegador
- Layout responsivo, mobile first

## Tecnologias utilizadas

- HTML
- CSS
- Bootstrap
- JavaScript Vanilla
- JSON como fonte de dados

## Estrutura do projeto

```
open-dev-profile/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data-loader.js
│   │   ├── main.js
│   │   ├── render-profile.js
│   │   ├── render-projects.js
│   │   ├── render-experience.js
│   │   ├── render-skills.js
│   │   ├── render-contacts.js
│   │   ├── scroll-reveal.js
│   │   └── theme.js
│   └── projects/
│     ├── dashboard.png
│     ├── exemple.jpg
│     └── resume.png
├── data/
│      └── profile.json
├── index.html
└── README.md
```

## Como usar

### 1. Clone ou faça download do projeto

Clone o repositório `https://github.com/devyelim/open-dev-profile.git`

### 2. Visualização do currículo

Após clonar o projeto, abra o `index.html` em um servidor local (ex: Live Server).

### 3. Edite o arquivo `data/profile.json`

Este projeto não armazena dados em nuvem. Para criar um currículo personalizado, edite o arquivo `data/profile.json` seguindo o passo a passo abaixo.

**3.1. Perfil do desenvolvedor**

Altere os dados básicos do perfil:

```json
"profile": {
  "photo": "assets/profile.png",
  "name": "Seu Nome",
  "title": "Sua Profissão",
  "location": "Brasil",
  "about": "Um breve resumo sobre você, suas paixões e o que você faz."
}
```

![GIF mostrando como editar o perfil](docs/profile.gif)

**3.2. Tema inicial do perfil**

Defina se o perfil terá modo claro ou escuro:
Você pode definir o tema inicial do perfil direto no JSON:

`"theme": "dark"` → inicia com o modo escuro.

`"theme": "light"` → inicia com o modo claro.

![GIF mostrando como alterar o tema](docs/dark-mode.gif)

**3.3. Disponibilidade**

Atualize seu status de trabalho:

```json
"availability": {
  "openToWork": true,
  "message": "Disponível para freelas e projetos pontuais."
}
```

![GIF mostrando como alterar disponibilidade](docs/availability.gif)

**3.4. Skills**

Adicione ou altere suas skills:

```json
"skills": [
  { "name": "HTML & CSS", "level": "Avançado" },
  { "name": "Laravel", "level": "Avançado" },
  { "name": "JavaScript", "level": "Intermediário" }
]
```

**3.5. Experiência**

Adicione experiências profissionais:

```json
"experience": [
  {
    "role": "Profissão",
    "company": "Nome da Empresa",
    "period": "Jan 2020 - Presente",
    "description": "Descrição breve das responsabilidades e conquistas."
  }
]
```

![GIF mostrando como adicionar experiências](docs/experience.gif)

**3.6. Projetos**

Adicione projetos com imagem e tecnologias:

```json
"projects": [
  {
    "title": "Nome do Projeto",
    "featured": false,
    "description": "Descrição breve do projeto.",
    "tech": ["Laravel", "Bootstrap", "MySQL"],
    "image": "assets/projects/dashboard.png",
    "repo": "https://github.com/usuario/projeto",
    "status": "Em desenvolvimento"
  }
]
```

**3.7. Contatos**

Configure links de contato:

```json
"contacts": {
  "github": "https://github.com/usuario",
  "linkedin": "https://linkedin.com/in/usuario",
  "email": "email@exemplo.com"
}
```

![GIF mostrando como editar contatos](docs/contacts.gif)

### 4. Sugestão de uso

O Open Dev Profile foi desenvolvido para ser facilmente hospedado no GitHub Pages, permitindo que você compartilhe seu currículo de forma pública, profissional e totalmente customizável.

Abaixo, o passo a passo para publicar o seu currículo:

- **4.1 Acesse as configurações do repositório**  
  Entre no seu repositório no GitHub e clique na aba `Settings` (Configurações).

- **4.2 Vá até a seção Pages**  
  No menu lateral, localize a seção `Pages`.

- **4.3 Selecione a branch principal**  
  Em `Source`, escolha a branch principal do seu projeto (geralmente `main` ou `master`). Isso garante que a versão publicada sempre reflita o que está na branch principal do seu repositório.

- **4.4 Escolha a pasta root**  
  No campo de pasta (folder), selecione `/root` ou `/`, para que o GitHub Pages publique o conteúdo diretamente da raiz do projeto, incluindo o `index.html`.

- **4.5 Salve e aguarde**  
  Clique em Save. O GitHub irá gerar uma URL pública para o seu currículo. Normalmente, em alguns minutos, a página estará disponível para acesso e compartilhamento.

## Licença

Sinta-se livre para modificar, adaptar e compartilhar.

## Considerações finais

Projeto desenvolvido por devyelim para fins de estudo.

