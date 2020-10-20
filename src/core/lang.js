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
    keywords: {
      label_strategies: "Strategies",
      label_time: "time",
      label_opportunities: "opportunities",
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
      label_signUp: "Join PHIOON",
      label_goToApp: "Go to App",
    },
    presentationpage: {
      label_title: "Slogan top aqui",
    },
    sectiondescription: {
      label_desc_p1: "Our products are planned to improve your trading performance in the stock market.",
      label_desc_p2: "Our idea is to be the bridge between your knowledge and the efficiency of technology ;)"
    },
    sectionstrategies: {
      label_title: "Strategies",
      label_desc: "A new way to invest... in yourself.",
      btn_details: "Learn more"
    },
    sectionwallets: {
      label_title: "Wallets",
      label_desc: "Bring your wallets to PHIOON",
      btn_details: "See features"
    },
    sectionphitrader: {
      label_title: "Phi Trader",
      label_desc: "Our Artificial Intelligence in constant learning.",
      btn_details: "See more about our product"
    },
    strategiespage: {
      label_title: "Strategies",

      desc_title: "Smart Technical Analysis",
      desc_p1: "Our goal is to optimize the way you look for opportunities that market offers... So, we developed",
      desc_p2: "to save your most precious asset:",

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
    phitraderpage: {
      label_title: "Wallets",

      desc_title: "Automated Technical Analysis",
      desc_p1: "Our goal is to optimize the way you look for opportunities that market offers... So, we developed",
      desc_p2: "to save your most precious asset:",

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

      sec3_infoarea1_title: "Technical Condition",
      sec3_infoarea1_desc:  "More experience and information for your decision making",
      sec3_infoarea2_title: "Success Rate",
      sec3_infoarea2_desc: "Setup's success rate for this Asset in the las four years",
      sec3_infoarea3_title: "Estimated Time",
      sec3_infoarea3_desc: "Base on its history, that's an estimative of how long it may take to reach the target",
      sec3_infoarea4_title: "Occurrencies",
      sec3_infoarea4_desc: "Amount of times this Technical Condition occurred for this asset in the last four years",
      sec3_infoarea5_title: "Last Occurrence",
      sec3_infoarea5_desc: "Last time this Technical Condition occurred for this asset",
    }
  },
  ptBR: {
    keywords: {
      label_strategies: "Estratégias",
      label_time: "tempo",
      label_opportunities: "oportunidades",
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
      label_signUp: "Quero ser PHIOON",
      label_goToApp: "Acessar App",
    },
    presentationpage: {
      label_title: "Slogan top aqui",
    },
    sectiondescription: {
      label_desc_p1: "Nossos produtos são planejados para melhorar a sua performance no mercado financeiro.",
      label_desc_p2: "Nossa proposta é ser ponte entre seu conhecimento e a eficiência da tecnologia ;)",
      label_title_info1: "",
      label_desc_info1: "",
      label_title_info2: "",
      label_desc_info2: "",
      label_title_info3: "",
      label_desc_info3: "",
    },
    sectionstrategies: {
      label_title: "Estratégias",
      label_desc: "Um jeito novo de investir... em você mesmo.",
      btn_details: "Saiba como funciona"
    },
    sectionwallets: {
      label_title: "Carteiras",
      label_desc: "Traga sua carteira para o PHIOON.",
      btn_details: "Ver funcionalidades"
    },
    sectionphitrader: {
      label_title: "Phi Trader",
      label_desc: "Nossa Inteligência Artificial em constante aprendizado.",
      btn_details: "Conheça nosso produto"
    },
    strategiespage: {
      label_title: "Estratégias",

      desc_title: "Análise Técnica Inteligente",
      desc_p1: "Nosso objetivo é otimizar a procura pelas oportunidades que o mercado oferece... Então, desenvolvemos",
      desc_p2: "para poupar o seu ativo mais precioso: o",

      sec1_infoarea1_title: "Crie",
      sec1_infoarea1_desc: "Existe uma correlação entre o preço e seus indicadores em um determinado espaço de tempo. Chamamos essa correlação de Estratégia.",
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
      sec3_desc: "Preparamos uma playlist para você se familiarizar com o produto. Nem precisa de pipoca, eles são super objetivos. ;)"
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
      sec3_desc: "Preparamos uma playlist para você se familiarizar com o produto. Nem precisa de pipoca, os videos são super objetivos. ;)"
    },
    phitraderpage: {
      label_title: "Phi Trader",

      desc_title: "Nossa Inteligência Artificial em constante aprendizado",
      desc_p1: "Diariamente, procura por ",
      desc_p2: "nos mais de 400 ativos da bolsa de valores brasileira.",

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
      sec3_infoarea1_desc:  "Mais experiência e informação para sua tomada de decisão ",
      sec3_infoarea2_title: "Taxa de Sucesso",
      sec3_infoarea2_desc: "Porcentagem de sucesso desse Setup para este ativo nos últimos anos.",
      sec3_infoarea3_title: "Prazo Estimado",
      sec3_infoarea3_desc: "Previsão estimada para que o papel alcance o alvo com base histórica.",
      sec3_infoarea4_title: "Ocorrências",
      sec3_infoarea4_desc: "Quantidade de vezes que está condição técnica ocorreu para esse ativo nos últimos anos.",
      sec3_infoarea5_title: "Última Ocorrência",
      sec3_infoarea5_desc: "Última vez que está condição ocorreu para este Ativo.",
      
    }
  }
}