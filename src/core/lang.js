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
      navbarscroll: {
        aboutus: "About Us",
        application: "Application", 
        technicalanalysis: "Technical Analysys",
        phi: "Phi",
        products: "Products",  
        
        login: "Login"
      },
      index: {
        convenience: "Convenience",
        efficiency: "Efficiency",  
        control: "Control"
  
      },
      introduction: {
        titleaboutus: "About Us",
        aboutus1: "We are the technology that simplifies your investment experience.",
        aboutus2: "Of course, we have an intuitive and robust platform to manage your investments that has real-time reports that you will freak out ... But relax, this is just the beginning.",
        aboutus3: "Speaking of uncomplicated, how many hours of your day do you spend analyzing graphics, looking for the best opportunities of the day? 1 hour? Two? Never made that count before?",
        aboutus4: "What if there was a platform to assist you in these analyzes, showing the assets most likely to bring your profitability to the Moon?",
        aboutus5: "What would you do with all that free time? ;)",
        aboutus6: "This is technology. This is PHIOON." ,

      },
      phi: {
        titlephiname: "PHI",
        phiname1: "The name PHIOON is related to the fundamental part of our technical analyzes: the PHI number, also known as Golden Mean (Golden Ratio).",
        phiname2: "Represented by the value 1.618, PHI is seen in all nature, from small formats (such as DNA strands, the shape of your ear and face) to large formats (such as hurricanes, storms and galaxies).",
        phiname3: "We realized that the chaotic environment of the market also respects PHI, so we decided to call this idea PHIOON. ;)",

      },
      products: {
        titlesuggestions: "Techinical Analysys",
        suggestions1: "Techinical Analysys",
        suggestions2: "Techinical Analysys",
        suggestions3: "Techinical Analysys",

      },
      phitrader: {
        titlesuggestions: "phitrader-en",
        suggestions1: "phitrader-en",
        suggestions2: "phitrader-en",
        suggestions3: "phitrader-en",
  
      },
      strategies: {
        titlesstrategies: "Strategies",
        strategies1: "Strategies",
        strategies2: "Strategies",
        strategies3: "Strategies",

      },
      footer: {
        contactus: "Contact Us",
        followus: "Follow Us",
        email: "helpme@phioon.com",
        likeus: "Like Us",
      },
      languages: {
        enUS: "English",
        ptBR: "Português (Brasil)",
      }, 
    },  
    ptBR: {
      navbarscroll: {
        aboutus: "Sobre Nós ",
        application: "Aplicação",  
        technicalanalysis: "Análise Técnica",
        phi: "Phi",
        products: "Produtos",  
        
        login: "Login"
      },
      index: {
        convenience: "Praticidade",
        efficiency: "Eficiência",  
        control: "Controle"
  
      },
      introduction: {
        titleaboutus: "Sobre Nós",
        aboutus1: "Somos a tecnologia que descomplica a sua experiência com investimentos. ",
        aboutus2: "É claro que temos uma plataforma intuitiva e robusta para gerir seus investimentos que conta com relatórios em tempo real que você vai pirar... Mas relaxa, isso é só o começo.",
        aboutus3: "Falando em descomplicar, quantas horas do seu dia você passa analisando gráficos, procurando pelas melhores oportunidades do dia? 1 hora? Duas? Nunca fez essa conta antes?",
        aboutus4: " E se existisse uma plataforma que te auxiliasse nessas análises, mostrando os ativos com maior probabilidade de levar sua rentabilidade para a Lua?",
        aboutus5: "O que você faria com todo esse tempo livre? ;)",
        aboutus6: "Isso é tecnologia. Isso é PHIOON."    
      },
      phi: {
        titlephiname: "PHI",
        phiname1: "O nome PHIOON tem relação com a peça fundamental de nossas análises técnicas: o número PHI, também conhecido como Média Áurea (Golden Ratio).",
        phiname2: "Representado pelo valor 1,618, PHI é visto em toda a natureza, desde pequenos formatos (como cadeias de DNA, formato de sua orelha e rosto) à grandes formatos (como furacões, tempestades e galáxias).",
        phiname3: "Percebemos que o ambiente caótico do mercado também respeita PHI, então resolvemos chamar essa ideia de PHIOON. ;)",
  
      },
      products: {
        titlesuggestions: "Análise Técnica",
        suggestions1: "Análise Técnica",
        suggestions2: "Análise Técnica",
        suggestions3: "Análise Técnica",
  
      },
      phitrader: {
        titlesuggestions: "phitrader",
        suggestions1: "phitrader",
        suggestions2: "phitrader",
        suggestions3: "phitrader",
  
      },
      strategies: {
        titlesstrategies: "Estratégias",
        strategies1: "Estratégias",
        strategies2: "Estratégias",
        strategies3: "Estratégias",

      },
      footer: {
        contactus: "Fale com a gente",
        followus: "Siga-nos",
        email: "meajuda@phioon.com",
        likeus: "Curta",

      },
      languages: {
        enUS: "English",
        ptBR: "Português (Brasil)",
      }, 
    },     

  };