// Any
import strategies_actions from "assets/img/phioon_app/strategies/actions.png";
// enUS
import strategies_card1_enus from "assets/img/phioon_app/strategies/card-1_enus.png";
import strategies_card2_enus from "assets/img/phioon_app/strategies/card-2_enus.png";
import strategies_iphone_enus from "assets/img/phioon_app/strategies/iphone_enus.png";
import strategies_macbook_enus from "assets/img/phioon_app/strategies/macbook_enus.png";
import wallets_cards_enus from "assets/img/phioon_app/wallets/wallets_cards_enus.png";
// ptBR
import strategies_card1_ptbr from "assets/img/phioon_app/strategies/card-1_ptbr.png";
import strategies_card2_ptbr from "assets/img/phioon_app/strategies/card-2_ptbr.png";
import strategies_iphone_ptbr from "assets/img/phioon_app/strategies/iphone_ptbr.png";
import strategies_macbook_ptbr from "assets/img/phioon_app/strategies/macbook_ptbr.png";
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
    strategies_actions: strategies_actions,
    strategies_card1: strategies_card1_enus,
    strategies_card2: strategies_card2_enus,
    strategies_iphone: strategies_iphone_enus,
    strategies_macbook: strategies_macbook_enus,

    wallets_cards: wallets_cards_enus,
  },
  ptBR: {
    strategies_actions: strategies_actions,
    strategies_card1: strategies_card1_ptbr,
    strategies_card2: strategies_card2_ptbr,
    strategies_iphone: strategies_iphone_ptbr,
    strategies_macbook: strategies_macbook_ptbr,

    wallets_cards: wallets_cards_ptbr,
  }
}