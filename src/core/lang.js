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
    headerlinks: {
      label_home: "Home",
      label_yourWallet: "Your wallet",
      label_strategies: "Strategies",
      label_phiTrader: "Phi Trader",
      label_pricing: "Pricing",
      label_aboutUs: "About us",
      label_signUp: "Join PHIOON",
    },
    presentationpage: {
      label_title: "Slogan top aqui",
    },
    sectiondescription: {
      label_desc_p1: "Our products are planned to improve your trading performance in the stock market.",
      label_desc_p2: "Our idea is to be the bridge between your knowledge and the efficiency of Technology ;)"
    },
    sectionstrategies: {
      label_title: "Strategies",
      label_desc: "A new way to invest... in yourself.",
      btn_details: "Learn more"
    },
  },
  ptBR: {
    headerlinks: {
      label_home: "Início",
      label_yourWallet: "Sua carteira",
      label_strategies: "Estratégias",
      label_phiTrader: "Phi Trader",
      label_pricing: "Planos",
      label_aboutUs: "Sobre nós",
      label_signUp: "Quero ser PHIOON",
    },
    presentationpage: {
      label_title: "Slogan top aqui",
    },
    sectiondescription: {
      label_desc_p1: "Nossos produtos são planejados para melhorar a sua performance no mercado financeiro.",
      label_desc_p2: "Nossa proposta é ser ponte entre seu conhecimento e a eficiência da Tecnologia ;)",
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
  }
}