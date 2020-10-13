// enUS
import strategies_iphone_enus from "assets/img/phioon_app/strategies/iphone_enus.png";
import wallets_cards_enus from "assets/img/phioon_app/wallets/wallets_cards_enus.png";
// ptBR
import strategies_iphone_ptbr from "assets/img/phioon_app/strategies/iphone_ptbr.png";
import wallets_cards_ptbr from "assets/img/phioon_app/wallets/wallets_cards_ptbr.png";

export function getImage(langId, strId) {
  if (langId in images && strId in images[langId])
    return images[langId][strId];
  else {
    if (strId === "")
      return ""
    else
      return images["enUS"][strId];
  }
}

const images = {
  enUS: {
    strategies_iphone: strategies_iphone_enus,
    wallets_cards: wallets_cards_enus,
  },
  ptBR: {
    strategies_iphone: strategies_iphone_ptbr,
    wallets_cards: wallets_cards_ptbr,
  }
}