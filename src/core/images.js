// Any
import strategies_actions from "assets/img/phioon_app/strategies/actions.png";
// enUS
import wallets_cards1_enus from "assets/img/phioon_app/wallets/cards1_enus.png";
import wallets_cards2_enus from "assets/img/phioon_app/wallets/cards2_enus.png";
import wallets_cards3_enus from "assets/img/phioon_app/wallets/cards3_enus.png";
import strategies_card1_enus from "assets/img/phioon_app/strategies/card-1_enus.png";
import strategies_card2_enus from "assets/img/phioon_app/strategies/card-2_enus.png";
import strategies_iphone_enus from "assets/img/phioon_app/strategies/iphone_enus.png";
import strategies_macbook_enus from "assets/img/phioon_app/strategies/macbook_enus.png";
import phitrader_ipad_enus from "assets/img/phioon_app/phitrader/ipad_enus.png";
import phitrader_analysis_enus from "assets/img/phioon_app/phitrader/analysis_enus.png";
import phitrader_conditions_enus from "assets/img/phioon_app/phitrader/conditions_enus.png";
import phitrader_summary_enus from "assets/img/phioon_app/phitrader/iphone_enus.png";
import phitrader_technical_enus from "assets/img/phioon_app/phitrader/ipad3_enus.png";

// ptBR
import wallets_cards1_ptbr from "assets/img/phioon_app/wallets/cards1_ptbr.png";
import wallets_cards2_ptbr from "assets/img/phioon_app/wallets/cards2_ptbr.png";
import wallets_cards3_ptbr from "assets/img/phioon_app/wallets/cards3_ptbr.png";
import strategies_card1_ptbr from "assets/img/phioon_app/strategies/card-1_ptbr.png";
import strategies_card2_ptbr from "assets/img/phioon_app/strategies/card-2_ptbr.png";
import strategies_iphone_ptbr from "assets/img/phioon_app/strategies/iphone_ptbr.png";
import strategies_macbook_ptbr from "assets/img/phioon_app/strategies/macbook_ptbr.png";
import phitrader_ipad_ptbr from "assets/img/phioon_app/phitrader/ipad_ptbr.png";
import phitrader_analysis_ptbr from "assets/img/phioon_app/phitrader/analysis_ptbr.png";
import phitrader_conditions_ptbr from "assets/img/phioon_app/phitrader/conditions_ptbr.png";
import phitrader_summary_ptbr from "assets/img/phioon_app/phitrader/iphone_ptbr.png";
import phitrader_technical_ptbr from "assets/img/phioon_app/phitrader/ipad3_ptbr.png";


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
    wallets_cards1: wallets_cards1_enus,
    wallets_cards2: wallets_cards2_enus,
    wallets_cards3: wallets_cards3_enus,

    strategies_actions: strategies_actions,
    strategies_card1: strategies_card1_enus,
    strategies_card2: strategies_card2_enus,
    strategies_iphone: strategies_iphone_enus,
    strategies_macbook: strategies_macbook_enus,

    phitrader_ipad: phitrader_ipad_enus,
    phitrader_analysis: phitrader_analysis_enus,
    phitrader_conditions: phitrader_conditions_enus,
    phitrader_summary: phitrader_summary_enus,
    phitrader_technical: phitrader_technical_enus,

  },
  ptBR: {
    wallets_cards1: wallets_cards1_ptbr,
    wallets_cards2: wallets_cards2_ptbr,
    wallets_cards3: wallets_cards3_ptbr,

    strategies_actions: strategies_actions,
    strategies_card1: strategies_card1_ptbr,
    strategies_card2: strategies_card2_ptbr,
    strategies_iphone: strategies_iphone_ptbr,
    strategies_macbook: strategies_macbook_ptbr,

    phitrader_ipad: phitrader_ipad_ptbr,
    phitrader_analysis: phitrader_analysis_ptbr,
    phitrader_conditions: phitrader_conditions_ptbr,
    phitrader_summary: phitrader_summary_ptbr,
    phitrader_technical: phitrader_technical_ptbr,
  }
}