# ✨ Calculadora 3D

Uma calculadora web com uma estética feminina, delicada e inspirada em elementos Y2K e retrô, combinando HTML, CSS e JavaScript com efeitos de profundidade e interação 3D utilizando apenas CSS.

O projeto começou como uma calculadora simples e foi evoluído para uma experiência visual mais completa, explorando conceitos de frontend, UI/UX, animações, responsividade e CSS 3D.

---

## 💻 Sobre o projeto

A proposta foi transformar uma calculadora tradicional em uma pequena experiência interativa.

Em vez de utilizar uma biblioteca 3D ou um framework frontend, a sensação de profundidade foi construída utilizando recursos nativos do CSS, criando um objeto visualmente tridimensional que reage aos movimentos do usuário.

O projeto também foi desenvolvido como uma oportunidade de estudar, na prática, a relação entre **estrutura, lógica, estilo e interação** em uma aplicação frontend.

---

## ✨ Funcionalidades

- Operações matemáticas básicas
- Adição, subtração, multiplicação e divisão
- Números decimais
- Limpeza da calculadora
- Função de backspace
- Exibição da expressão atual
- Tratamento de divisão por zero
- Interface responsiva
- Animações e microinterações
- Perspectiva 3D utilizando CSS
- Movimento baseado na interação do usuário
- Profundidade visual e faces laterais
- Suporte a `prefers-reduced-motion`

---

## 🎀 Design

A identidade visual combina elementos de:

- Y2K
- retrô
- estética feminina
- tons pastel
- rosa como cor principal
- lilás
- azul
- amarelo
- formas arredondadas
- sombras suaves
- profundidade
- microinterações

A intenção foi criar uma calculadora que tivesse a aparência de um pequeno objeto físico, mantendo uma interface simples e agradável.

O design evita excesso de elementos decorativos para manter o foco na calculadora e na interação 3D.

---

## 🧩 Tecnologias

### HTML5

Utilizado para estruturar a interface e os elementos da calculadora.

### CSS3

Responsável pela identidade visual e pela experiência 3D:

- layout
- responsividade
- animações
- sombras
- perspectiva
- transformações 3D
- CSS Custom Properties
- microinterações

### JavaScript

Responsável pela lógica da calculadora e pelas interações visuais.

A lógica matemática e a interação 3D foram separadas em arquivos diferentes para manter as responsabilidades organizadas.

---

## 🏗️ Estrutura do projeto

```text
calculadora/
├── css/
│   ├── style.css
│   └── 3d.css
│
├── js/
│   ├── calculator.js
│   └── calculator-3d.js
│
├── index.html
└── README.md