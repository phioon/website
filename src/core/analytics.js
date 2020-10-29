import ReactGA from 'react-ga';

const TRACKING_ID = "G-MVL98EN42K"
 
function init() {
  // Enable debug mode on the local development environment
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
  ReactGA.initialize(TRACKING_ID, { debug: isDev })
  
}
 
function sendEvent(payload) {
  ReactGA.event(payload)
}
 
function sendPageview(path) {
  ReactGA.set({ page: path })
  ReactGA.pageview(path)
}
 
export default {
  init,
  sendEvent,
  sendPageview,
}

/*
export const initGA = (trackingID) => {           
    ReactGA.initialize(trackingID); 
  }
  
  export const PageView = () => {  
    ReactGA.pageview(window.location.pathname +  
                     window.location.search); 
  }
  
  initGA("G-MVL98EN42K")
  PageView()
  */