import strategies_iphone_enus from "assets/img/phioon_app/strategies/iphone_enus.png";
import strategies_iphone_ptbr from "assets/img/phioon_app/strategies/iphone_ptbr.png";

export function getImage(langId, compId, strId) {
  if (langId in images && compId in images[langId] && strId in images[langId][compId])
    return images[langId][compId][strId];
  else {
    if (strId === "")
      return ""
    else
      return images["enUS"][compId][strId];
  }
}

const images = {
  enUS: {
    strategiespage: {
      iphone: strategies_iphone_enus,
    }
  },
  ptBR: {
    strategiespage: {
      iphone: strategies_iphone_ptbr,
    }
  }
}