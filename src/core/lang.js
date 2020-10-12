export function getLangList() {
  return Object.keys(strings)
}

export function getString(langId, compId, strId) {
  if (langId in strings && compId in strings[langId] && strId in strings[langId][compId]) {
    return strings[langId][compId][strId];
  } else {
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
    },
    footerlinks: {
      label_aboutUs: "About us",
      label_contactUs: "Talk with us",
    },
    headerlinks: {
      label_home: "Home",
      label_yourWallet: "Your wallet",
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
    strategiespage: {
      label_title: "Strategies",

      desc_title: "Automated Technical Analysis",
      desc_p1: "Our goal was to stop spending hours looking for opportunities that market offers... So, we developed",
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
      sec2_infoarea2_desc: "Looking only at the last two periods (candles) of a chart, we can see not only the correlation between price and other indicators, but also its transitions/moves, such as: when price crosses a moving average.",
      sec2_infoarea3_title: "Always Up to Date",
      sec2_infoarea3_desc: "We work hard to keep everything organized as soon as possible, so that you receive the most up to date information.",

      sec3_title: "How does it work?",
      sec3_desc: "We prepared a playlist for you to familiarize yourself with the product. Don't even need popcorn, they're super objective. ;)"
    }
  },
  ptBR: {
    keywords: {
      label_strategies: "Estratégias",
      label_time: "tempo",
    },
    footerlinks: {
      label_aboutUs: "Sobre nós",
      label_contactUs: "Fale com a gente",
    },
    headerlinks: {
      label_home: "Início",
      label_yourWallet: "Sua carteira",
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
    strategiespage: {
      label_title: "Estratégias",

      desc_title: "Análise Técnica Automatizada",
      desc_p1: "Nosso objetivo era não precisar mais procurar pelas oportunidades que o mercado oferece... Então desenvolvemos",
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
      sec2_infoarea2_desc: "Observando apenas para os dois últimos períodos (candles) de um gráfico, podemos perceber não apenas a correlação do preço e outros indicadores, mas também suas transições/movimentos, como por exemplo: quando o preço ultrapassa uma média móvel.",
      sec2_infoarea3_title: "Sempre atualizado(a)",
      sec2_infoarea3_desc: "Trabalhamos sem parar para deixar tudo organizado o quanto antes, para que você receba a informação mais atualizada possível.",

      sec3_title: "Como funciona na prática?",
      sec3_desc: "Preparamos uma playlist para que você se familiarizar com o produto. Nem precisa de pipoca, eles são super objetivos. ;)"
    }
  }
}