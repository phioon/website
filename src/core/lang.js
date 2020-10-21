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
      label_desc: "A bit of our story, ideals and what to expect for the future."
    },
    aboutuscontact: {
      label_title: "So... Do you have an amazing idea and would like to see it at PHIOON?",
      label_desc_p1: "Write us at ",
      label_desc_p2: "and let's build more bridges together! ;)",

      label_mailto: "newideas@phioon.com"
    },
    aboutusdescription: {
      label_desc: "We are just born and we have a passion for making things simpler. Our goal is to transform ideals, break limitations down and serve as a support for you to go much further."
    },
    aboutuspillars: {
      label_title: "Pillars",

      label_infoarea1_title: "Technology",
      label_infoarea1_desc: "We love Technology. Even more when we can use it to make our customers lives easier.",
      label_infoarea2_title: "Efficiency",
      label_infoarea2_desc: "We question any task that could be executed with less resources or in less time.",
      label_infoarea3_title: "Customer Experience",
      label_infoarea3_desc: "After all, everything we build is for our customers self-development.",
    },
    aboutustext: {
      label_title: "Como o PHIOON nasceu...",

      label_text_p1: "Brazilians have never been so active in the financial market as they are lately. The last few years have been marked by an increasing number of active people in the Brazilian stock exchange.",
      label_text_p2: "And our story was born in this scenario, at the end of 2019, when the creator of the idea began to see the financial market from a more technological and technical perspective.",
      label_text_p3: "The initial goal was to develop a simple report/dashboard that could make it easier to analyze variable income assets. So, we saw the possibility of something much bigger! And we thought: why not share this idea?",
      label_text_p4: "At this point, PHIOON emerged: an intelligent and robust platform designed to accelerate investors and traders performance in the financial market.",
      label_text_p5: "Since then, our team has been working hard on new solutions to make this journey as simple as possible.",

      label_quote_text: "It was never about shortcuts, but about using technology as a bridge to the next challenge.",
      label_quote_signature: "Founder",
    },
    contactus: {
      label_title: "Talk with us",
    },
    emails: {
      support: "helpme@phioon.com",
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
    keywords: {
      label_strategies: "Strategies",
      label_time: "time",
    },
    phitraderpage: {
      label_title: "Phi Trader",

      desc_title: "Technical Analysis with AI",
      desc_p1: "Nothing like technology working to our advantage...",
      desc_p2: "Phi",
      desc_p3: "is one more tool that we developed to assist your",
      desc_p4: "dicision making",

      sec1_infoarea1_title: "Create",
      sec1_infoarea1_desc: "There is a correlation between the price and its indicators over a given period of time. We call this correlation Strategy.",
      sec1_infoarea2_title: "Execute",
      sec1_infoarea2_desc: "It works like a radar. When we find an asset that matches the given technical condition, we add it into a list for you.",
      sec1_infoarea3_title: "Analyze",
      sec1_infoarea3_desc: "Done! You have a list of potential opportunities waiting for you. ;)",

      sec2_title: "Simple is better than complex",
      sec2_infoarea1_title: "Hundreds of Assets",
      sec2_infoarea1_desc: "Before, it used to take a lot out of you looking for opportunities in 10, 20, 30 assets everyday... Now, you filter hundreds of them in just one click.",
      sec2_infoarea2_title: "Easy to Use",
      sec2_infoarea2_desc: "Looking only at the last two periods (candles) of a chart, we can see not only the correlation between price and other indicators, but also its transitions and moviments, such as: when price crosses a moving average.",
      sec2_infoarea3_title: "Your Way",
      sec2_infoarea3_desc: "Keep using your methods, your strategies, your setups. Nothing better than your knowledge and experiences aligned to an opportunity. Ease and efficiency when investing.",

      sec3_title: "How does it work?",
      sec3_desc: "We prepared a playlist for you to familiarize yourself with the product. Don't even need popcorn, the videos are super objective. ;)",
      sec3_infoarea1_title: "Technical Condition",
      sec3_infoarea1_desc: "More experience and information for your decision making",
      sec3_infoarea2_title: "Success Rate",
      sec3_infoarea2_desc: "Setup's success rate for this Asset in the las four years",
      sec3_infoarea3_title: "Estimated Time",
      sec3_infoarea3_desc: "Base on its history, that's an estimative of how long it may take to reach the target",
      sec3_infoarea4_title: "Occurrencies",
      sec3_infoarea4_desc: "Amount of times this Technical Condition occurred for this asset in the last four years",
      sec3_infoarea5_title: "Last Occurrence",
      sec3_infoarea5_desc: "Last time this Technical Condition occurred for this asset",
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
      label_infoarea2_desc: "We take care of the hard working and taking time tasks, so you can focus on what really matters... Technical Analysis was never so simple.",
      label_infoarea3_title: "Control",
      label_infoarea3_desc: "Not only to your investments, but also for your emotional and psychological behavior as a investor and trader.",
    },
    pricingpage: {
      label_title: "Pricing",
      label_desc: "There is a plan for every need. What is yours?",
    },
    pricingfaq: {
      label_title: "Perguntas Frequentes",

      label_q1_title: "Can I cancel my Subscription?",
      label_q1_desc: "Yes, you can cancel and perform other actions on your subscriptions via the My Account page.",
      label_q2_title: "Is there any discount for an annual subscription?",
      label_q2_desc: "Yes, we offer a 20% discount if you choose annual subscription for any plan.",
      label_q3_title: "Which payment methods do you take?",
      label_q3_desc: "We are working to offer you the best service. So, don't worry, until the end of 2020, it's everything on us.",
      label_q4_title: "Any other questions we can answer?",
      label_q4_desc: "We are happy to help you.",

      label_contactUs: "Talk with us."
    },
    pricingsubscriptions: {
      label_tab_monthly: "Monthly",
      label_tab_yearly: "Yearly",

      label_currency_code: "$",

      abel_subscription1_name: "Free",
      label_subscription2_name: "Premium",
      label_subscription3_name: "Platinum",

      label_access: "Access",
      label_perDay: "a day",
      label_runs: "runs",

      label_stockExchange: "Stock Exchange",
      label_stockExchanges: "Stock Exchanges",
      label_wallets: "Wallets",
      label_staticPanels: "Position Panels",
      label_staticPanels_hint: "",
      label_dashboards: "Position Dashboards",
      label_dashboards_hint: "",
      label_strategyRuns: "Strategy runs",
      label_strategies: "Strategies",
      label_phiTrader: "Phi Trader",

      btn_getStarted: "Get Started"
    },
    sectionfooter: {
      label_title: "Ready to leverage your performance in the stock market?",
      label_signUp: "Join PHIOON",
      label_share: "Share this idea with your friends and make their lives easier too!"
    },
    sectionphitrader: {
      label_title: "Phi Trader",
      label_desc: "The Artificial Intelligence that operates with you.",
      btn_details: "Learn more"
    },
    sectionstrategies: {
      label_title: "Strategies",
      label_desc: "Stop wasting time analysing tons of charts every day. Let us take care of it for you.",
      btn_details: "Learn more"
    },
    sectionwallets: {
      label_title: "Wallets",
      label_desc: "Bring your wallets to PHIOON",
      btn_details: "See features"
    },
    strategiespage: {
      label_title: "Strategies",

      desc_title: "Smart Technical Analysis",
      desc_p1: "Our goal is to optimize the way you look for opportunities that market offers... So, we developed",
      desc_p2: "to save your most precious asset:",

      sec1_infoarea1_title: "Create",
      sec1_infoarea1_desc: "There is a correlation between the asset's price and its indicators. A filter we apply to this correlation is called Strategy.",
      sec1_infoarea2_title: "Execute",
      sec1_infoarea2_desc: "It works like a radar. When we find an asset that matches the given technical condition, we add it into a list for you.",
      sec1_infoarea3_title: "Analyze",
      sec1_infoarea3_desc: "Done! You have a list of potential opportunities waiting for you. ;)",

      sec2_title: "Simple is better than complex",
      sec2_infoarea1_title: "Hundreds of Assets",
      sec2_infoarea1_desc: "Before, it used to take a lot out of you looking for opportunities in 10, 20, 30 assets everyday... Now, you filter hundreds of them in just one click.",
      sec2_infoarea2_title: "Easy to Use",
      sec2_infoarea2_desc: "Focusing on the last two periods (candles) of a chart, we noticed not only the correlation between price and other indicators, but also its transitions and moviments, such as: when price crosses a moving average.",
      sec2_infoarea3_title: "Always Up to Date",
      sec2_infoarea3_desc: "We work hard to keep everything organized as soon as possible, so that you receive the most up to date information.",

      sec3_title: "How does it work?",
      sec3_desc: "We prepared a playlist for you to familiarize yourself with the product. Don't even need popcorn, they're super objective. ;)"
    },
    walletspage: {
      label_title: "Wallets",

      desc_title: "Everything under control",
      desc_p1: "We believe it's important to know",
      desc_p2: "where we are",
      desc_p3: ", then we can plan",
      desc_p4: "where we are going to.",

      sec1_infoarea1_title: "Investment Income",
      sec1_infoarea1_desc: "Designed for stock market, real estate funds and indexes funds.",
      sec1_infoarea2_title: "Dashboards",
      sec1_infoarea2_desc: "Charts and metrics designed to assist your behavioral and psychological development.",
      sec1_infoarea3_title: "Insights",
      sec1_infoarea3_desc: "Extract the most relevant informations from your wallet.",

      sec2_infoarea1_title: "Filters and Dimensions",
      sec2_infoarea1_desc: "The way you invest says a lot about you. Explore your behavior in the financial market from different perspectives that each chart offers.",
      sec2_infoarea2_title: "Metrics and formats",
      sec2_infoarea2_desc: "The data is the same... How should they be presented? You decide. ;)",

      sec3_title: "How does it work?",
      sec3_desc: "We prepared a playlist for you to familiarize yourself with the product. Don't even need popcorn, the videos are super objective. ;)"
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
      label_desc_p2: "e vamos construir mais pontes juntos.",
      label_mailto: "novasideias@phioon.com"
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
      label_infoarea3_desc: "Afinal, tudo o que construimos é para o auto-desenvolvimento dos nossos clientes.",
    },
    aboutustext: {
      label_title: "Desde o início...",

      label_text_p1: "Os brasileiros nunca foram tão ativos no mercado financeiro quanto nos dias atuais, não é mesmo? Os últimos anos estão sendo marcados por uma quantidade crescente de pessoas investindo na bolsa de valores brasileira.",
      label_text_p2: "E nossa história nasceu neste cenário, no final de 2019, quando o idealizador da ideia, passou a enxergar o mercado financeiro de uma perspectiva mais tecnológica e técnica.",
      label_text_p3: "O objetivo inicial era desenvolver um simples relatório que pudesse facilitar a análise técnica dos ativos de renda variável. Logo, enxergamos a possibilidade de algo muito maior! E por que não compartilhar essa ideia com outras pessoas?",
      label_text_p4: "A partir daí, surgiu o PHIOON: uma plataforma inteligente, robusta e planejada para acelerar o desempenho de investidores e traders na bolsa de valores.",
      label_text_p5: "Desde então, nosso time vem investindo fortemente em novas soluções que sirvam de suporte para tornar essa jornada o mais simples possível.",

      label_quote_text: "Nunca foi sobre atalhos, mas sobre usar a tecnologia como ponte para o próximo desafio.",
      label_quote_signature: "Fundador",
    },
    contactus: {
      label_title: "Fale com a gente",
      label_desc: "Fique à vontade para nos contatar em relação a qualquer um dos nossos produtos. Vamos retornar seu contato assim que possível! ;)"
    },
    emails: {
      support: "meajuda@phioon.com",
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
    keywords: {
      label_strategies: "Estratégias",
      label_time: "tempo",
      label_opportunities: "oportunidades",
    },
    phitraderpage: {
      label_title: "Phi Trader",

      desc_title: "Análise Técnica com IA",
      desc_p1: "Nada como a tecnologia trabalhando ao nosso favor... O",
      desc_p2: "Phi",
      desc_p3: "é mais uma ferramenta que desenvolvemos para auxiliar a sua",
      desc_p4: "tomada de decisão",

      sec1_infoarea1_title: "Phi",
      sec1_infoarea1_desc: "Sou o Phi, a Inteligência Artificial por trás das estratégias de mercado do PHIOON.",
      sec1_infoarea2_title: "Comportamento",
      sec1_infoarea2_desc: "Cada ativo possui um comportamento técnico, não é mesmo? O que torna difícil criar padrões que funcionem para todos.",
      sec1_infoarea3_title: "Aprenda",
      sec1_infoarea3_desc: "Por isso, criamos o Phi! Para mapear estes comportamentos e auxiliar no aprendizado de cada um deles.",

      sec2_infoarea1_title: "Fácil Aprendizado",
      sec2_infoarea1_desc: "Ele tem sua própria carteira de operações Swing Trade e você acompanha suas análises e entradas na íntegra.",
      sec2_infoarea2_title: "Preço Máximo",
      sec2_infoarea2_desc: "Preço limite para compra nessa operação. Este pode mudar considerando o gerenciamento de risco.",
      sec2_infoarea3_title: "Stop Loss",
      sec2_infoarea3_desc: "Ponto de segurança onde o Phi acredita que não alcance novamente.",
      sec2_infoarea4_title: "Alvo",
      sec2_infoarea4_desc: "Estimativa de onde o preço pode alcançar. Em sua maoria é utilizado a sequência de Fibonacci.",
      sec2_infoarea5_title: "Risco / Retorno",
      sec2_infoarea5_desc: "Ganho potencial dividido pela possível perda. Quanto maior este número melhor",

      sec3_infoarea1_title: "Condição Técnica",
      sec3_infoarea1_desc: "Mais experiência e informação para sua tomada de decisão ",
      sec3_infoarea2_title: "Taxa de Sucesso",
      sec3_infoarea2_desc: "Porcentagem de sucesso desse Setup para este ativo nos últimos anos.",
      sec3_infoarea3_title: "Prazo Estimado",
      sec3_infoarea3_desc: "Previsão estimada para que o papel alcance o alvo com base histórica.",
      sec3_infoarea4_title: "Ocorrências",
      sec3_infoarea4_desc: "Quantidade de vezes que está condição técnica ocorreu para esse ativo nos últimos anos.",
      sec3_infoarea5_title: "Última Ocorrência",
      sec3_infoarea5_desc: "Última vez que está condição ocorreu para este Ativo.",
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
    pricingpage: {
      label_title: "Planos",
      label_desc: "Temos um plano para cada necessidade. Qual é a sua?",
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

      label_currency_code: "R$",
      label_month: "mês",
      label_year: "ano",

      label_subscription1_name: "Free",
      label_subscription2_name: "Premium",
      label_subscription3_name: "Platinum",

      label_access: "Acesso",
      label_perDay: "por dia",
      label_runs: "execuções",

      label_stockExchange: "Bolsa de Valores",
      label_stockExchanges: "Bolsas de Valores",
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
    sectionfooter: {
      label_title: "Preparado para alavancar a sua performance no mercado financeiro?",
      label_signUp: "Quero ser PHIOON",
      label_share: "Compartilhe essa ideia com seus amigos e facilite a vida deles também!"
    },
    sectionphitrader: {
      label_title: "Phi Trader",
      label_desc: "A Inteligência Artificial que opera com você.",
      btn_details: "Saiba como funciona"
    },
    sectionstrategies: {
      label_title: "Estratégias",
      label_desc: "Pare de perder tempo todos os dias, analisando gráficos de dezenas de ativos. Deixe isso com a gente.",
      btn_details: "Saiba como funciona"
    },
    sectionwallets: {
      label_title: "Carteiras",
      label_desc: "Traga sua carteira para o PHIOON.",
      btn_details: "Ver funcionalidades"
    },
    strategiespage: {
      label_title: "Estratégias",

      desc_title: "Análise Técnica Inteligente",
      desc_p1: "Nosso objetivo é otimizar a procura pelas oportunidades que o mercado oferece... Então, desenvolvemos",
      desc_p2: "para poupar o seu ativo mais precioso: o",

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
      sec2_infoarea2_desc: "Observando os dois últimos períodos (candles) de um gráfico, podemos perceber não apenas a correlação do preço e outros indicadores, mas também suas transições e movimentos, como por exemplo: quando o preço atravessa uma média móvel.",
      sec2_infoarea3_title: "Do seu Jeito",
      sec2_infoarea3_desc: "Continue utilizando os seus métodos, suas estratégias, seus setups. Nada melhor que seu conhecimento e experiências alinhados à oportunidade. Facilidade e eficiência na hora de investir.",

      sec3_title: "Como funciona na prática?",
      sec3_desc: "Preparamos alguns vídeos para você se familiarizar com o produto. Nem precisa de pipoca, eles são super objetivos. ;)"
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
      sec3_desc: "Preparamos alguns vídeos para você se familiarizar com o produto. Nem precisa de pipoca, eles são super objetivos. ;)"
    },
  }
}