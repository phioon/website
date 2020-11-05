export function getLangList() {
  return Object.keys(strings)
}

export function getString(langId, compId, strId) {
  if (langId in strings && compId in strings[langId] && strId in strings[langId][compId])
    return strings[langId][compId][strId];
  else {
    if (strId === "") {
      // In some cases - labelAlerts - strId can be ""
      return ""
    }
    else
      return strings["enUS"][compId][strId];
  }
}

const strings = {
  enUS: {
    aboutuspage: {
      label_title: "About us",
      label_desc: "A bit of our story, ideas and what to expect for the future."
    },
    aboutuscontact: {
      label_title: "So... Do you have an amazing idea and would like to see it at PHIOON?",
      label_desc_p1: "Write us at ",
      label_desc_p2: "and let's build bridges together! ;)",
    },
    aboutusdescription: {
      label_desc: "We were just born and we love making things simpler. Our goal is to revolutionize, break down limitations and serve as support for you to go much further."
    },
    aboutuspillars: {
      label_title: "Pillars",

      label_infoarea1_title: "Technology",
      label_infoarea1_desc: "We love Technology. We love it even more when we can use it to make our customers lives easier.",
      label_infoarea2_title: "Efficiency",
      label_infoarea2_desc: "We question any task that could be executed with less resources or in less time.",
      label_infoarea3_title: "Customer Experience",
      label_infoarea3_desc: "After all, everything we build is for our customers self-development.",
    },
    aboutustext: {
      label_title: "Since the beginning...",

      label_text_p1: "Brazilians have never been so active in the financial market as they are lately. The last few years have been marked by an increasing number of people investing.",
      label_text_p2: "Our story started in this scenario, at the end of 2019, when the creator of the idea began to see the financial market from a more technological and technical perspective.",
      label_text_p3: "The initial goal was to develop a simple report/dashboard that could make it easier to analyze variable income assets. Then we noticed a possibility for something much bigger! And we thought: why not share this idea with others?",
      label_text_p4: "At that point, PHIOON emerged: an intelligent and robust platform designed to accelerate the performance of investors and traders in the financial market.",
      label_text_p5: "Since then, our team has been working hard on new solutions to make this journey as simple as possible.",

      label_quote_text: "It was never about shortcuts, but about using technology as a bridge to the next challenge.",
      label_quote_signature: "Founder",
    },
    contactus: {
      label_title: "Talk with us",
      label_desc_p1: "Do you still have a question or would like to know more about our products?",
      label_desc_p2: "Feel free to contact us any time!",
      label_footer: "We'll get back to you as soon as possible! ;)",

      label_infoarea1_title: "Send us a message",
      label_infoarea1_desc: "Write us at",
      label_infoarea2_title: "Find us on Social Media"
    },
    emails: {
      support: "helpme@phioon.com",
      newIdeas: "newideas@phioon.com"
    },
    footerlinks: {
      label_aboutUs: "About us",
      label_contactUs: "Talk with us",
    },
    headerlinks: {
      label_home: "Home",
      label_wallets: "Wallets",
      label_strategies: "Strategies",
      label_phiTrader: "Phi Trader",
      label_pricing: "Pricing",
      label_aboutUs: "About us",
      label_goToApp: "Go to App",
    },
    languages: {
      enUS: "English",
      ptBR: "Português",
    },
    phitraderpage: {
      label_title: "Phi Trader",

      desc_title: "Technical Analysis with AI",
      desc_p1: "Nothing like technology working to our advantage...",
      desc_p2: "Phi",
      desc_p3: "is our bot, designed to assist you in your",
      desc_p4: "operational development",

      sec1_infoarea1_title: "Accuracy",
      sec1_infoarea1_desc: "More than 10 years of history data, with validation and integrity systems that garantee high quality data.",
      sec1_infoarea2_title: "Individual Analysis",
      sec1_infoarea2_desc: "There is a technical behavior for every asset, isn't that right? That's why Phi works with each one in a distinct way.",
      sec1_infoarea3_title: "Advisory",
      sec1_infoarea3_desc: "Detailed information in order to support your technical development in the stock market.",

      sec2_title: "Phi operates with you",
      sec2_desc: "He has his own portfolio (Swing Trade) and you can follow up all his positions and analysis.",
      sec2_infoarea1_title: "Self-Validation",
      sec2_infoarea1_desc: "We teach Phi the best technical strategies on the market. And he takes care of validating them for each asset.",
      sec2_infoarea2_title: "High Performance",
      sec2_infoarea2_desc: "Based on asset's history, Phi only opens a position if there is a high probability of success.",
      sec2_infoarea3_title: "More confidence",
      sec2_infoarea3_desc: "The information of each position is calculated to fulfill for knowledge. Your development in the financial market is what matters most to us.",
      sec2_infoarea4_title: "Panoramic Sight",
      sec2_infoarea4_desc: "Far beyond the current technical condition, Phi brings the asset's history. More experience for your decision making.",

      footer_title: "Phi Trader is ready to show you the best market opportunities. Let's get started?",
      footer_btn: "See Subscriptions",
      footer_redirectTo: "/pricing",
      footer_desc_p1: "Want to learn more about the product? Write us at",
      footer_desc_p2: "It'll be a pleasure to speak with you! ;)",
    },
    presentationpage: {
      label_slogan: "Technology for Investments",
    },
    presentationdescription: {
      label_desc_p1: "Our products are developed for improving your trading performance in the stock market.",
      label_desc_p2: "Our idea is to be the bridge between your knowledge and the efficiency of technology.",

      label_infoarea1_title: "Convenience",
      label_infoarea1_desc: "There are certain things that only human beings can handle, right? But why not rely on Technology for some of them?",
      label_infoarea2_title: "Efficiency",
      label_infoarea2_desc: "We take care of those difficult and time taking tasks, so you can focus on what really matters... Technical Analysis has never been so simple.",
      label_infoarea3_title: "Control",
      label_infoarea3_desc: "Not only of your investments, but also of your emotional and psychological well-being as an investor and trader.",
    },
    presentationfooter: {
      label_title: "Ready to leverage your performance in the stock market?",
      label_signUp: "Join PHIOON",
      label_share: "Share this idea with your friends and make their lives easier too!"
    },
    presentationphitrader: {
      label_title: "Phi Trader",
      label_desc: "The Artificial Intelligence that operates with you.",
      btn_details: "Learn more"
    },
    presentationstrategies: {
      label_title: "Strategies",
      label_desc: "Stop wasting time analysing tons of charts every day. Let us take care of it for you.",
      btn_details: "Learn more"
    },
    presentationwallets: {
      label_title: "Wallets",
      label_desc: "Bring your wallets to PHIOON.",
      btn_details: "See features"
    },
    pricingpage: {
      label_title: "Pricing",
      label_desc: "There is a plan for every need. What is yours?",
    },
    pricingfaq: {
      label_title: "Frequently Asked Questions",

      label_q1_title: "Can I cancel my subscription?",
      label_q1_desc: "Yes, you can cancel and perform other actions on your subscription via the Profile page on the App.",
      label_q2_title: "Is there a discount for an annual subscription?",
      label_q2_desc: "Yes, we offer a 20% discount if you choose an annual subscription for any plan.",
      label_q3_title: "Which payment methods do you accept?",
      label_q3_desc: "We are working to offer you the best service. So, don't worry, until the end of 2020, everything is on us.",
      label_q4_title: "Any other questions we can answer?",
      label_q4_desc: "We are happy to help you.",

      label_contactUs: "Talk with us."
    },
    pricingsubscriptions: {
      label_tab_monthly: "Monthly",
      label_tab_yearly: "Yearly",

      label_month: "month",
      label_year: "year",

      label_subscription1_name: "Free",
      label_subscription2_name: "Premium",
      label_subscription3_name: "Platinum",

      label_access: "Access",
      label_perDay: "per day",
      label_runs: "runs",

      label_stockExchange: "Stock Exchange",
      label_stockExchange_hint: "Soon, other stock exchanges will be included in PHIOON. ;)",
      label_stockExchanges: "Stock Exchanges",
      label_stockExchanges_hint: "Soon, other stock exchanges will be included in PHIOON. ;)",
      label_wallets: "Wallets",
      label_staticPanels: "Position Panels",
      label_staticPanels_hint: "Auto-Refresh not available.",
      label_dashboards: "Position Dashboards",
      label_dashboards_hint: "Auto-Refresh included.",
      label_strategyRuns: "Strategy runs",
      label_strategies: "Strategies",
      label_phiTrader: "Phi Trader",

      btn_getStarted: "Get Started"
    },
    strategiespage: {
      label_title: "Strategies",

      desc_title: "Smart Technical Analysis",
      desc_p1: "Our goal is to optimize the way you look for opportunities that the market offers... So, we developed",
      desc_p2: "Strategies",
      desc_p3: "to save your most precious asset:",
      desc_p4: "time",

      sec1_infoarea1_title: "Create",
      sec1_infoarea1_desc: "There is a correlation between the asset's price and its indicators. A filter that we apply to this correlation is called Strategy.",
      sec1_infoarea2_title: "Execute",
      sec1_infoarea2_desc: "It works like a radar. When we find an asset that matches the given technical condition, we add it into a list for you to check it out later.",
      sec1_infoarea3_title: "Analyze",
      sec1_infoarea3_desc: "Done! You have a list of potential opportunities waiting for you. ;)",

      sec2_title: "Simple is better than complex",
      sec2_infoarea1_title: "Hundreds of Assets",
      sec2_infoarea1_desc: "Some time ago, it used to take a lot out of you as you looked for opportunities in 10, 20, 30 assets everyday... Now, you can filter hundreds of them in just one click.",
      sec2_infoarea2_title: "Easy to Use",
      sec2_infoarea2_desc: "Focusing on the last two periods (candles) of a chart, we noticed not only the correlation between price and other indicators, but also its transitions and moviments, such as: when price crosses a moving average.",
      sec2_infoarea3_title: "Your own way",
      sec2_infoarea3_desc: "Keep your methods, your strategies and setups. Nothing better than your knowledge and experience aligned to opportunities. Ease and efficiency when investing.",

      sec3_title: "How does it work?",
      sec3_desc: "We prepared a playlist for you to familiarize yourself with the product. Don't even need popcorn, they're super objective. ;)",

      footer_title: "Ready to be even more efficient in your technical analysis?",
      footer_btn: "See Subscriptions",
      footer_redirectTo: "/pricing",
      footer_desc_p1: "Want to learn more about the product? Write us at",
      footer_desc_p2: "It'll be a pleasure to speak with you! ;)",
    },
    walletspage: {
      label_title: "Wallets",

      desc_title: "Everything under control",
      desc_p1: "We believe it's important to know",
      desc_p2: "where we are",
      desc_p3: ", so we can start planning",
      desc_p4: "where we are going to.",

      sec1_infoarea1_title: "Investment Income",
      sec1_infoarea1_desc: "Designed for stock market, real estate funds and indexes funds.",
      sec1_infoarea2_title: "Dashboards",
      sec1_infoarea2_desc: "Charts and metrics designed to assist you in your behavioral and psychological development.",
      sec1_infoarea3_title: "Insights",
      sec1_infoarea3_desc: "Extract the most relevant information from your wallet.",

      sec2_infoarea1_title: "Filters and Dimensions",
      sec2_infoarea1_desc: "The way you invest says a lot about you. Explore your behavior in the financial market from the different perspectives that each chart offers.",
      sec2_infoarea2_title: "Metrics and formats",
      sec2_infoarea2_desc: "The data is the same... How should they be shown? You decide. ;)",

      sec3_title: "How does it work?",
      sec3_desc: "We prepared a playlist for you to familiarize yourself with the product. Don't even need popcorn, the videos are super objective. ;)",

      footer_title: "Manage your wallets with us. Above all, it's free!",
      footer_btn: "Join PHIOON",
      footer_desc_p1: "Want to learn more about the product? Write us at",
      footer_desc_p2: "It'll be a pleasure to speak with you! ;)",
    },
  },
  ptBR: {
    aboutuspage: {
      label_title: "Sobre nós",
      label_desc: "Um pouco da nossa história, ideais e o que esperar para o futuro."
    },
    aboutuscontact: {
      label_title: "E aí... Você tem uma ideia incrível que gostaria de ver no PHIOON também?",
      label_desc_p1: "Escreva pra gente no",
      label_desc_p2: "e vamos construir pontes juntos.",
    },
    aboutusdescription: {
      label_desc: "Acabamos de nascer e somos apaixonados por tornar as coisas mais simples. Nosso objetivo é revolucionar ideais, quebrar limitações e servir de suporte para que você possa ir muito mais longe."
    },
    aboutuspillars: {
      label_title: "Pilares",

      label_infoarea1_title: "Tecnologia",
      label_infoarea1_desc: "Amamos a tecnologia. Amamos ainda mais quando conseguimos aplica-la para facilitar a vida dos nossos clientes.",
      label_infoarea2_title: "Eficiência",
      label_infoarea2_desc: "Questionamos quaisquer tarefas que possam ser executadas com menos recursos ou em menos tempo.",
      label_infoarea3_title: "Experiência do Usuário",
      label_infoarea3_desc: "Afinal, tudo o que construimos é para o autodesenvolvimento dos nossos clientes.",
    },
    aboutustext: {
      label_title: "Desde o início...",

      label_text_p1: "Os brasileiros nunca foram tão ativos no mercado financeiro quanto nos dias atuais, não é mesmo? Os últimos anos estão sendo marcados por uma quantidade crescente de pessoas investindo na bolsa de valores brasileira.",
      label_text_p2: "E nossa história nasceu neste cenário, no final de 2019, quando o idealizador da ideia, passou a enxergar o mercado financeiro de uma perspectiva mais tecnológica e técnica.",
      label_text_p3: "O objetivo inicial era desenvolver um simples relatório que pudesse facilitar a análise técnica dos ativos de renda variável. Logo enxergamos a possibilidade de algo muito maior! E por que não compartilhar essa ideia com outras pessoas?",
      label_text_p4: "A partir daí surgiu o PHIOON: uma plataforma inteligente, robusta e planejada para acelerar o desempenho de investidores e traders na bolsa de valores.",
      label_text_p5: "Desde então nosso time vem investindo fortemente em novas soluções que sirvam de suporte para tornar essa jornada o mais simples possível.",

      label_quote_text: "Nunca foi sobre atalhos, mas sobre usar a tecnologia como ponte para o próximo desafio.",
      label_quote_signature: "Fundador",
    },
    contactus: {
      label_title: "Fale com a gente",
      label_desc_p1: "Ficou com alguma dúvida ou quer saber mais sobre nossos produtos?",
      label_desc_p2: "Fique à vontade para nos contatar!",
      label_footer: "Vamos retornar seu contato assim que possível! ;)",

      label_infoarea1_title: "Nos envie uma mensagem",
      label_infoarea1_desc: "Fale com a gente no",
      label_infoarea2_title: "Estamos nas Redes Sociais",
    },
    emails: {
      support: "meajuda@phioon.com",
      newIdeas: "novasideias@phioon.com"
    },
    footerlinks: {
      label_aboutUs: "Sobre nós",
      label_contactUs: "Fale com a gente",
    },
    headerlinks: {
      label_home: "Início",
      label_wallets: "Carteiras",
      label_strategies: "Estratégias",
      label_phiTrader: "Phi Trader",
      label_pricing: "Planos",
      label_aboutUs: "Sobre nós",
      label_goToApp: "Acessar App",
    },
    languages: {
      enUS: "English",
      ptBR: "Português",
    },
    phitraderpage: {
      label_title: "Phi Trader",

      desc_title: "Análise Técnica com IA",
      desc_p1: "Nada como a tecnologia trabalhando ao nosso favor... O",
      desc_p2: "Phi",
      desc_p3: "é o nosso robô, desenvolvido para auxiliar seu",
      desc_p4: "desenvolvimento operacional",

      sec1_infoarea1_title: "Precisão",
      sec1_infoarea1_desc: "São mais de 10 anos de dados históricos, com sistemas de validação e integridade que garantem uma alta qualidade dos dados.",
      sec1_infoarea2_title: "Análise Individual",
      sec1_infoarea2_desc: "Cada ativo possui um comportamento técnico, não é mesmo? Por isso, o Phi analisa cada um de forma distinta.",
      sec1_infoarea3_title: "Didático",
      sec1_infoarea3_desc: "Informações detalhadas para auxiliar seu desenvolvimento técnico no mercado financeiro.",

      sec2_title: "O Phi opera junto com você",
      sec2_desc: "Ele tem sua própria carteira de operações (Swing Trade) e você acompanha suas análises e entradas na íntegra.",
      sec2_infoarea1_title: "Auto-Validação",
      sec2_infoarea1_desc: "Ensinamos as melhores estratégias técnicas do mercado para o Phi. E ele se encarrega de validá-las para cada ativo.",
      sec2_infoarea2_title: "Alta Performance",
      sec2_infoarea2_desc: "Considerando o histórico do ativo, o Phi inicia uma operação apenas em caso de alta probabilidade de sucesso.",
      sec2_infoarea3_title: "Mais Confiança",
      sec2_infoarea3_desc: "As informações de cada operação são calculadas para complementar o seu conhecimento. Pra gente o que importa mesmo é o seu desenvolvimento no mercado financeiro.",
      sec2_infoarea4_title: "Visão Panorâmica",
      sec2_infoarea4_desc: "Muito além da condição técnica atual, o Phi trabalha o histórico do ativo. Mais experiência para sua tomada de decisão.",

      footer_title: "Phi Trader está pronto para te mostrar as melhores oportunidades do mercado. E você?",
      footer_btn: "Ver Planos",
      footer_redirectTo: "/pricing",
      footer_desc_p1: "Quer saber mais sobre o produto? Escreva pra gente no",
      footer_desc_p2: "Vai ser um prazer conversar com você! ;)",
    },
    presentationpage: {
      label_slogan: "Tecnologia para Investimentos",
    },
    presentationdescription: {
      label_desc_p1: "Nossos produtos são desenvolvidos para melhorar a sua performance no mercado financeiro.",
      label_desc_p2: "Nossa proposta é ser ponte entre seu conhecimento e a eficiência da inteligência artificial.",
      label_infoarea1_title: "Praticidade",
      label_infoarea1_desc: "Existem certas coisas que apenas o ser humano pode fazer, não é mesmo? Mas por que não contar com uma ajudinha da tecnologia?",
      label_infoarea2_title: "Eficiência",
      label_infoarea2_desc: "A gente cuida da parte trabalhosa e demorada para você poder focar no que realmente importa... Análise Técnica nunca foi tão simples. ",
      label_infoarea3_title: "Controle",
      label_infoarea3_desc: "Não apenas para os seus investimentos, mas também para seu comportamento emocional e psicológico enquanto investidor e trader.",
    },
    presentationfooter: {
      label_title: "Preparado para alavancar a sua performance no mercado financeiro?",
      label_signUp: "Quero ser PHIOON",
      label_share: "Compartilhe essa ideia com seus amigos e facilite a vida deles também!"
    },
    presentationphitrader: {
      label_title: "Phi Trader",
      label_desc: "A Inteligência Artificial que opera com você.",
      btn_details: "Saiba como funciona"
    },
    presentationstrategies: {
      label_title: "Estratégias",
      label_desc: "Pare de perder tempo todos os dias analisando gráficos de dezenas de ativos. Deixe isso com a gente.",
      btn_details: "Saiba como funciona"
    },
    presentationwallets: {
      label_title: "Carteiras",
      label_desc: "Traga sua carteira para o PHIOON.",
      btn_details: "Ver funcionalidades"
    },
    pricingpage: {
      label_title: "Planos",
      label_desc: "Existe um plano para cada necessidade. Qual é a sua?",
    },
    pricingfaq: {
      label_title: "Perguntas Frequentes",

      label_q1_title: "Posso cancelar minha Assinatura?",
      label_q1_desc: "Sim, você pode cancelar e realizar outras ações em sua Assinatura através da página \"Perfil\" do App.",
      label_q2_title: "Tem algum desconto para Assinatura anual?",
      label_q2_desc: "Sim, oferecemos desconto de 20% se você escolher pela Assinatura anual de qualquer plano.",
      label_q3_title: "Quais os meios de pagamento?",
      label_q3_desc: "Estamos trabalhando para oferecer o melhor serviço possível. Mas não se preocupe, até o final de 2020, é tudo por nossa conta.",
      label_q4_title: "Está com outras dúvidas?",
      label_q4_desc: "Estamos aqui para te ajudar.",

      label_contactUs: "Fale com a gente."
    },
    pricingsubscriptions: {
      label_tab_monthly: "Mensal",
      label_tab_yearly: "Anual",

      label_month: "mês",
      label_year: "ano",

      label_subscription1_name: "Free",
      label_subscription2_name: "Premium",
      label_subscription3_name: "Platinum",

      label_access: "Acesso",
      label_perDay: "por dia",
      label_runs: "execuções",

      label_stockExchange: "Bolsa de Valores",
      label_stockExchange_hint: "Em breve, mais mercados serão inclusos no PHIOON. ;)",
      label_stockExchanges: "Bolsas de Valores",
      label_stockExchanges_hint: "Em breve, mais mercados serão inclusos no PHIOON. ;)",
      label_wallets: "Carteiras",
      label_staticPanels: "Painéis de Posições",
      label_staticPanels_hint: "Auto-Refresh não disponível.",
      label_dashboards: "Dashboards de Posições",
      label_dashboards_hint: "Auto-Refresh incluso.",
      label_strategyRuns: "Execuções de Estratégias",
      label_strategies: "Estratégias",
      label_phiTrader: "Phi Trader",

      btn_getStarted: "Começar"
    },
    strategiespage: {
      label_title: "Estratégias",

      desc_title: "Análise Técnica Inteligente",
      desc_p1: "Nosso objetivo é otimizar a procura pelas oportunidades que o mercado oferece... Então, desenvolvemos",
      desc_p2: "Estratégias",
      desc_p3: "para poupar o seu ativo mais precioso: o",
      desc_p4: "tempo",

      sec1_infoarea1_title: "Crie",
      sec1_infoarea1_desc: "Existe uma correlação entre o preço de um ativo e seus indicadores. O filtro que aplicamos à essa correlação é chamado Estratégia.",
      sec1_infoarea2_title: "Execute",
      sec1_infoarea2_desc: "Funciona como um radar. E quando identificamos um ativo em certa condição técnica, separamos ele pra você dar uma olhada também.",
      sec1_infoarea3_title: "Analise",
      sec1_infoarea3_desc: "Pronto! Você tem uma lista de potenciais oportunidades te esperando. ;)",

      sec2_title: "Simples é melhor que complexo",
      sec2_infoarea1_title: "Centenas de Ativos",
      sec2_infoarea1_desc: "Antes, você se desgastava procurando oportunidades em 10, 20, 30 ativos por dia... Agora, você filtra centenas em apenas um clique.",
      sec2_infoarea2_title: "Fácil de Usar",
      sec2_infoarea2_desc: "Observando os dois últimos períodos (candles) de um gráfico podemos perceber não apenas a correlação do preço e outros indicadores, mas também suas transições e movimentos, como por exemplo: quando o preço supera uma média móvel.",
      sec2_infoarea3_title: "Do seu Jeito",
      sec2_infoarea3_desc: "Continue utilizando os seus métodos, suas estratégias, seus setups. Nada melhor que seu conhecimento e experiências alinhados à oportunidade. Facilidade e eficiência na hora de investir.",

      sec3_title: "Como funciona na prática?",
      sec3_desc: "Preparamos alguns vídeos para você se familiarizar com o produto. Nem precisa de pipoca, eles são super objetivos. ;)",

      footer_title: "Preparado para ser ainda mais eficiente em suas análises técnicas?",
      footer_btn: "Ver Planos",
      footer_redirectTo: "/pricing",
      footer_desc_p1: "Quer saber mais sobre o produto? Escreva pra gente no",
      footer_desc_p2: "Vai ser um prazer conversar com você! ;)",
    },
    walletspage: {
      label_title: "Carteiras",

      desc_title: "Tudo sob controle",
      desc_p1: "Acreditamos que é importante saber",
      desc_p2: "onde estamos",
      desc_p3: ", para então planejar",
      desc_p4: "onde queremos chegar.",

      sec1_infoarea1_title: "Renda Variável",
      sec1_infoarea1_desc: "Feito para o mercado de ações, fundos imobiliários e fundos de índice.",
      sec1_infoarea2_title: "Dashboards",
      sec1_infoarea2_desc: "Gráficos e métricas planejados para auxiliar seu desenvolvimento comportamental e psicológico.",
      sec1_infoarea3_title: "Insights",
      sec1_infoarea3_desc: "Extraia as informações mais relevantes da sua carteira.",

      sec2_infoarea1_title: "Dimensões e Filtros",
      sec2_infoarea1_desc: "A forma como investe diz muito sobre você. Explore melhor seu comportamento no mercado financeiro a partir das diferentes perspectivas que cada gráfico oferece.",
      sec2_infoarea2_title: "Métricas e Formatos",
      sec2_infoarea2_desc: "Os dados são os mesmos... Como eles devem ser aprensentados? Você decide. ;)",

      sec3_title: "Como funciona na prática?",
      sec3_desc: "Preparamos alguns vídeos para você se familiarizar com o produto. Nem precisa de pipoca, eles são super objetivos. ;)",

      footer_title: "Gerencie suas carteiras com a gente. Além de tudo, é de graça!",
      footer_btn: "Quero ser PHIOON",
      footer_desc_p1: "Quer saber mais sobre o produto? Escreva pra gente no",
      footer_desc_p2: "Vai ser um prazer conversar com você! ;)",
    },
  }
}