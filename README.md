Alex Martins | Personal Trainer

Site institucional para personal trainer Alex Martins, apresentando informações sobre especialidades, planos de treino, valores e contato. O site é totalmente responsivo e inclui menu lateral para dispositivos móveis, modal de contato e interações com botões.

🔗 Demo

Insira aqui o link do site hospedado (se houver).

📝 Funcionalidades

Menu de navegação fixo no topo.

Menu lateral responsivo para dispositivos móveis.

Sessões de destaque:

Hero Section: mensagem principal, CTA para agendamento.

Especialidades: hipertrofia, emagrecimento e condicionamento.

Valores/Planos: apresentação de três planos com botão de ação.

Sobre: informações do personal trainer com imagem e bio.

Modal de contato com opções de:

WhatsApp

E-mail

Fechar modal

Interação com botões de Agendar aula que abrem o modal.

Botões de plano que preparam link de WhatsApp com plano selecionado.

Design responsivo e compatível com telas de diferentes tamanhos.

🛠 Tecnologias Utilizadas

HTML5: estrutura semântica do site.

CSS3: estilos, responsividade, flexbox, grid.

JavaScript: interatividade, menu lateral, modal de contato e links de ação.

Fonts Google: Inter e Poppins.

📁 Estrutura de Pastas
project-root/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       ├── logo.svg
│       ├── hero.svg
│       └── about.jpg
└── README.md

🎨 Layout e Estilo

Cores principais:

Fundo principal: branco (#fff)

Cartões e seções: tons escuros (#141516)

Acento e botões CTA: verde neon (#9cff2b) e azul (#0b63ff)

Tipografia:

Inter: texto geral

Poppins: títulos e destaques

Uso de flexbox e grid para layout responsivo.

Menu lateral com overlay semitransparente.

📱 Responsividade

Menu lateral para telas menores que 880px.

Grid de especialidades e planos ajusta para 2 colunas abaixo de 1100px e 1 coluna abaixo de 720px.

Hero section e About section reorganizam o layout para dispositivos móveis.

⚡ Funcionalidades JavaScript

Menu Mobile

menuToggle.addEventListener("click", () => {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
});

menuOverlay.addEventListener("click", closeMenu);
function closeMenu() {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
}


Modal de contato

function openContact() { document.getElementById('modal').style.display = 'flex' }
function closeModal() { document.getElementById('modal').style.display = 'none' }

document.getElementById('agendarTop').addEventListener('click', openContact);
document.getElementById('agendarHero').addEventListener('click', openContact);


Plano selecionado via botão

function selectPlan(name) {
    openContact();
    const wa = document.querySelector('#modal a');
    if (wa) wa.href = 'https://wa.me/5591999999999?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20plano%20' + encodeURIComponent(name);
}

📌 Como Executar

Clone o repositório:

git clone <[https://github.com/MarcusVini196/site-institucional-personal.git](https://github.com/MarcusVini196/site-institucional-personal.git)>


Abra index.html no navegador.

Observação: Não há back-end. O envio de mensagens é feito através de links externos (WhatsApp e e-mail).

📄 Licença

Este projeto é apenas para fins educacionais ou de portfólio. Todos os direitos reservados a Alex Martins.