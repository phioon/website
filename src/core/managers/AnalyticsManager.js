class AnalyticsManager {
  constructor() {
    this.trackingIds = {
      default: "G-TC8QDRQ7GR",
    }

    // Initializing...
    window.gtag("js", new Date());
    window.gtag("config", this.trackingIds.default);
  }

  sendPageView(trackingId = this.trackingIds.default, location = window.location) {
    let options = {
      page_title: this.getPageTitle(location.pathname)
    }

    window.gtag("config", trackingId, options);
  }
  getPageTitle(pathname) {
    let pageTitle = String(pathname).substring(pathname.indexOf("/") + 1)
    pageTitle = pageTitle.replace("/", "_")
    console.log(`pageTitle: ${pageTitle}`)

    return pageTitle;
  }
}

export default AnalyticsManager;