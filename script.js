document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const cursosCarouselContainer = document.getElementById('cursos-carousel-container');
    const loginLink = document.getElementById('login-link');
    const criarContaLink = document.getElementById('criar-conta-link');
    const logoutLink = document.getElementById('logout-link');
    const usuarioLogadoSpan = document.getElementById('usuario-logado');
    const nomeUsuarioSpan = document.getElementById('nome-usuario');
    const formLogin = document.getElementById('form-login');
    const formCriarConta = document.getElementById('form-criar-conta');

    // Dados de cursos (em array)
    const cursos = [
        {
            id: 1,
            imagem: "1.jpeg", 
            titulo: "Gestão de Projetos",
            descricao: "Aprenda metodologias como Agile, Scrum e Kanban para organizar tarefas, gerenciar equipes e melhorar a produtividade.",
            categoria: "Gestão",
            topico: "Produtividade",
            preco: 249.90,
            modalContent: `
                <h2>Gestão de Projetos</h2>
                <p>Domine ferramentas e técnicas para gerenciar projetos com eficiência.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Metodologias ágeis</li>
                    <li>Planejamento e estruturação</li>
                    <li>Gerenciamento de riscos</li>
                    <li>Ferramentas como Trello, Asana, Jira</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Profissionais de diversas áreas</li>
                    <li>Líderes de equipe</li>
                    <li>Estudantes</li>
                    <li>Empreendedores</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Aumente a produtividade</li>
                    <li>Melhore a organização</li>
                    <li>Gerencie equipes de forma eficaz</li>
                </ul>
            `
        },
        {
            id: 2,
            imagem: "2.jpeg", 
            titulo: "Excel Avançado e Análise de Dados",
            descricao: "Domine planilhas e ferramentas de análise para criar relatórios, analisar dados financeiros e acompanhar indicadores.",
            categoria: "Tecnologia",
            topico: "Análise de Dados",
            preco: 299.90,
            modalContent: `
                <h2>Excel Avançado e Análise de Dados</h2>
                <p>Transforme dados em insights valiosos com o Excel avançado.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Funções avançadas</li>
                    <li>Tabelas dinâmicas</li>
                    <li>Gráficos e visualização de dados</li>
                    <li>Macros e automação</li>
                    <li>Power Query, Power Pivot, Power BI</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Profissionais de diversas áreas</li>
                    <li>Estudantes de análise de dados</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Tome decisões estratégicas</li>
                    <li>Aumente a qualidade e a velocidade da análise</li>
                    <li>Domine uma ferramenta essencial</li>
                </ul>
            `
        },
        {
            id: 3,
            imagem: "3.jpeg", 
            titulo: "Marketing Digital e Gestão de Mídias Sociais",
            descricao: "Conecte-se com seu público e conquiste o mercado online! Aprenda estratégias de marketing digital e a usar as mídias sociais com profissionalismo para fortalecer a presença online de empresas ou desenvolver seus negócios.",
            categoria: "Marketing",
            topico: "Marketing Digital",
            preco: 199.90,
            modalContent: `
                <h2>Marketing Digital e Gestão de Mídias Sociais</h2>
                <p>Desvende os segredos do Marketing Digital e domine as redes sociais.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Estratégias de marketing digital</li>
                    <li>SEO, marketing de conteúdo, redes sociais</li>
                    <li>Google Analytics, Google Ads</li>
                    <li>Marketing de email e influenciadores</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Empreendedores</li>
                    <li>Profissionais de marketing</li>
                    <li>Pessoas que desejam aumentar sua visibilidade online</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Aumente o alcance de seus produtos e serviços</li>
                    <li>Gere leads qualificados</li>
                    <li>Impulsione suas vendas e resultados</li>
                    <li>Construa uma marca forte</li>
                </ul>
            `
        },
        {
            id: 4,
            imagem: "4.jpeg", 
            titulo: "Design Gráfico e Ferramentas de Edição",
            descricao: "Crie artes incríveis para fortalecer sua marca e comunicar seus projetos com impacto! Aprenda a usar softwares como Photoshop, Illustrator e Canva para criar conteúdo visual profissional.",
            categoria: "Design",
            topico: "Design Gráfico",
            preco: 299.90,
            modalContent: `
                <h2>Design Gráfico e Ferramentas de Edição</h2>
                <p>Dê vida à sua criatividade com Photoshop, Illustrator e Canva.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Edição de imagens, fotografia e design</li>
                    <li>Criação de vetores, logos e ilustrações</li>
                    <li>Marketing de conteúdo visual</li>
                    <li>Técnicas de colorimetria e composição</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Profissionais de marketing e comunicação</li>
                    <li>Estudantes de design gráfico</li>
                    <li>Empreendedores</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Crie artes visuais de alta qualidade</li>
                    <li>Projetar logos e branding</li>
                    <li>Desenvolva layouts para sites</li>
                </ul>
            `
        },
        {
            id: 5,
            imagem: "5.jpeg", 
            titulo: "Liderança e Gestão de Equipes",
            descricao: "Desenvolva habilidades de gestão e motivação para liderar equipes com sucesso! Este curso aborda os principais conceitos de liderança e gestão de pessoas, preparando você para assumir cargos de responsabilidade.",
            categoria: "Gestão",
            topico: "Liderança",
            preco: 249.90,
            modalContent: `
                <h2>Liderança e Gestão de Equipes</h2>
                <p>Inspire e motive sua equipe para alcançar resultados.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Princípios de liderança</li>
                    <li>Comunicação eficaz e feedback</li>
                    <li>Motivação e engajamento de equipes</li>
                    <li>Resolução de conflitos</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Profissionais que desejam cargos de liderança</li>
                    <li>Líderes de equipe</li>
                    <li>Estudantes</li>
                    <li>Empreendedores</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Melhore a performance da equipe</li>
                    <li>Crie um ambiente de trabalho positivo</li>
                    <li>Aumente o engajamento e a motivação</li>
                </ul>
            `
        },
        {
            id: 6,
            imagem: "6.jpeg", 
            titulo: "Inglês Profissional e Técnico",
            descricao: "Domine o inglês técnico para se comunicar com profissionais do mundo todo, ler manuais, entender pesquisas e avançar em sua carreira.",
            categoria: "Idiomas",
            topico: "Inglês",
            preco: 299.90,
            modalContent: `
                <h2>Inglês Profissional e Técnico</h2>
                <p>Expanda seus horizontes profissionais com o domínio do inglês técnico.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Vocabulário essencial</li>
                    <li>Gramática e estrutura</li>
                    <li>Compreensão de textos técnicos</li>
                    <li>Comunicação oral e escrita</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Profissionais de diversas áreas</li>
                    <li>Estudantes</li>
                    <li>Pessoas que buscam oportunidades internacionais</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Aumente suas chances de emprego em empresas multinacionais</li>
                    <li>Aprimore sua carreira</li>
                    <li>Domine uma habilidade essencial para o mercado globalizado</li>
                </ul>
            `
        },
        {
            id: 7,
            imagem: "7.jpeg", 
            titulo: "Finanças Pessoais e Planejamento Financeiro",
            descricao: "Organize suas finanças, planeje seus investimentos e alcance a liberdade financeira! Este curso te ensina a gerenciar seu dinheiro de forma inteligente, investir com segurança e alcançar seus objetivos financeiros.",
            categoria: "Finanças",
            topico: "Finanças Pessoais",
            preco: 199.90,
            modalContent: `
                <h2>Finanças Pessoais e Planejamento Financeiro</h2>
                <p>Domine suas finanças e conquiste a liberdade financeira.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Orçamento familiar e controle de gastos</li>
                    <li>Planejamento financeiro pessoal</li>
                    <li>Investimentos: renda fixa, renda variável, imóveis</li>
                    <li>Crédito e dívidas</li>
                    <li>Impostos e planejamento tributário</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Estudantes</li>
                    <li>Profissionais</li>
                    <li>Pessoas que desejam ter mais controle sobre seu dinheiro</li>
                    <li>Empreendedores</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Tenha mais controle sobre suas finanças</li>
                    <li>Evite dívidas</li>
                    <li>Invista seu dinheiro com segurança</li>
                    <li>Construa um futuro financeiro mais seguro</li>
                </ul>
            `
        },
        {
            id: 8,
            imagem: "8.jpeg", 
            titulo: "Programação Básica (Python ou JavaScript)",
            descricao: "Desvende o mundo da programação e abra portas para novas oportunidades! Aprenda os fundamentos da programação em Python ou JavaScript e domine as habilidades essenciais para desenvolver soluções digitais.",
            categoria: "Tecnologia",
            topico: "Programação",
            preco: 249.90,
            modalContent: `
                <h2>Programação Básica (Python ou JavaScript)</h2>
                <p>Mergulhe no mundo da programação e construa seu futuro digital.</p>
                <h3>Conteúdo</h3>
                <ul>
                    <li>Introdução à programação</li>
                    <li>Conceitos básicos</li>
                    <li>Estruturas de controle</li>
                    <li>Funções e escopo</li>
                    <li>Listas, tuplas, dicionários (Python) ou arrays e objetos (JavaScript)</li>
                    <li>Projetos práticos</li>
                </ul>
                <h3>Para quem?</h3>
                <ul>
                    <li>Estudantes que desejam aprender a programar</li>
                    <li>Profissionais que desejam adicionar habilidades de programação</li>
                    <li>Empreendedores</li>
                </ul>
                <h3>Benefícios</h3>
                <ul>
                    <li>Abra portas para novas oportunidades de carreira</li>
                    <li>Desenvolva habilidades essenciais para o futuro</li>
                    <li>Crie soluções digitais inovadoras</li>
                </ul>
            `
        }
    ];

    // Dados de usuários (em array)
    let usuarios = []; // Array para armazenar os usuários

    // Carrega usuários do LocalStorage (se houver)
    if (localStorage.getItem('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }

    // Função para criar os cards dos cursos
    function criarCardCurso(curso) {
        const article = document.createElement('article');
        article.classList.add('swiper-slide');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        const img = document.createElement('img');
        img.src = `${curso.id}.jpeg`; 
        img.alt = curso.titulo;
        img.classList.add('card-img-top', 'lazy');
        img.setAttribute('loading', 'lazy');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = curso.titulo;

        const badge = document.createElement('span');
        badge.classList.add('badge', 'bg-secondary');
        badge.textContent = curso.topico;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = curso.descricao;

        const priceText = document.createElement('p');
        priceText.classList.add('card-text');
        priceText.textContent = `R$ ${curso.preco.toFixed(2)}`;

        const saibaMaisButton = document.createElement('a');
        saibaMaisButton.classList.add('btn', 'btn-primary', 'saiba-mais', 'mt-auto');
        saibaMaisButton.textContent = 'Saiba Mais';
        saibaMaisButton.setAttribute('data-curso-id', curso.id);

        // Adiciona os elementos ao cardBody
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(badge);
        cardBody.appendChild(cardText);
        cardBody.appendChild(priceText);
        cardBody.appendChild(saibaMaisButton);

        // Adiciona os elementos ao card
        card.appendChild(img);
        card.appendChild(cardBody);

        // Adiciona os elementos ao article
        article.appendChild(card);

        return article;
    }

    // Função para exibir mensagens
    function exibirMensagem(tipo, mensagem) {
        const mensagemElement = document.createElement('div');
        mensagemElement.classList.add('mensagem', tipo);
        mensagemElement.innerHTML = `
            <p>${mensagem}</p>
            <span class="close-button" onclick="this.parentElement.remove();">×</span>
        `;
        document.body.appendChild(mensagemElement);
        setTimeout(() => {
            mensagemElement.remove();
        }, 5000);
    }

    // Função para abrir detalhes do curso (Exemplo Simples - Modal)
    function abrirDetalhesDoCurso(curso) {
        // Abre o modal
        $('#cursoModal').modal('show');

        // Define o título e o conteúdo do modal
        $('#cursoModalLabel').text(curso.titulo);
        $('#curso-detalhes').html(curso.modalContent);
    }

    // Função para verificar se o usuário está logado
    function usuarioLogado() {
        return localStorage.getItem('usuarioLogado') !== null;
    }

    // Função para atualizar o estado de login
function atualizarEstadoLogin() {
    if (usuarioLogado()) {
        loginLink.style.display = 'none';
        criarContaLink.style.display = 'none';
        logoutLink.style.display = 'block';
        usuarioLogadoSpan.style.display = 'block'; // Mostra o elemento de usuário logado
        nomeUsuarioSpan.textContent = localStorage.getItem('usuarioLogado');
    } else {
        loginLink.style.display = 'block';
        criarContaLink.style.display = 'block';
        logoutLink.style.display = 'none';
        usuarioLogadoSpan.style.display = 'none'; // Esconde o elemento de usuário logado
    }
}

    // Função para fazer login
    function fazerLogin(email, senha) {
        const usuario = usuarios.find(u => u.email === email && u.senha === senha);
        if (usuario) {
            localStorage.setItem('usuarioLogado', usuario.nome);
            // Mostra prompt de sucesso e fecha o modal
            if (confirm("Login realizado com sucesso! Deseja continuar?")) {
                $('#loginModal').modal('hide'); // Fecha o modal de login
                atualizarEstadoLogin();
            }
        } else {
            alert("Email ou senha inválidos!");
        }
    }

    // Função para criar uma conta
    function criarConta(nome, email, senha) {
        const usuarioExistente = usuarios.find(u => u.email === email);
        if (usuarioExistente) {
            alert("Email já cadastrado!");
        } else {
            const novoUsuario = { nome, email, senha };
            usuarios.push(novoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            // Mostra prompt de sucesso e fecha o modal
            if (confirm("Conta criada com sucesso! Deseja continuar?")) {
                $('#criarContaModal').modal('hide');
            }
        }
    }

    // Função para fazer logout
    function fazerLogout() {
        localStorage.removeItem('usuarioLogado');
        alert('Logout realizado!');
        atualizarEstadoLogin();
    }

    // Cria os slides do carrossel com os cursos
    cursos.forEach(curso => {
        const cursoElement = criarCardCurso(curso);
        cursosCarouselContainer.appendChild(cursoElement);
    });

    // Adiciona o evento click ao botão "Saiba Mais" 
    // APÓS a criação dos cards
    cursosCarouselContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('saiba-mais')) {
            const cursoId = parseInt(event.target.getAttribute('data-curso-id'), 10);
            const curso = cursos.find(c => c.id === cursoId);
            if (curso) {
                abrirDetalhesDoCurso(curso);
            }
        }
    });

    // Swiper (Depoimentos)
    const swiperDepoimentos = new Swiper('.mySwiperDepoimentos', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Swiper para cursos adicionais
    const swiperCursos = new Swiper('.mySwiperCursos', {
        slidesPerView: 4, // Mostra 4 slides por vez
        spaceBetween: 30,
        loop: false, // Desabilita o loop para evitar repetição de cursos
        navigation: { // Adiciona a navegação com botões
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: { // Adaptação responsiva
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Lazy Load
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });

    // AOS
    AOS.init({ disable: 'mobile' });

    // Botão de rolagem para o topo
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    scrollToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });

    // Eventos de login e criar conta
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email-login').value;
        const senha = document.getElementById('senha-login').value;
        fazerLogin(email, senha);
    });

    formCriarConta.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome-criar-conta').value;
        const email = document.getElementById('email-criar-conta').value;
        const senha = document.getElementById('senha-criar-conta').value;
        criarConta(nome, email, senha);
    });

    // Evento de logout
    logoutLink.addEventListener('click', (event) => {
        event.preventDefault();
        fazerLogout();
    });

    // Atualiza o estado de login na inicialização
    atualizarEstadoLogin();
});