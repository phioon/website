import React from "react"
 
import analytics from "./analytics"
 
export default function useGoogleAnalytics() {

 
  React.useEffect(() => {
    analytics.init()
  }, [])
 
  React.useEffect(() => {
    console.log("window.location.pathname: " + window.location.pathname)
    console.log("window.location.pathname: " + window.location.search)
    const currentPath = window.location.pathname + window.location.search
    analytics.sendPageview(currentPath)
  }, [])
}