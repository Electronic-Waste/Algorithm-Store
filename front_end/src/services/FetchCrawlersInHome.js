import React from "react";
import Settings from "../utils/Settings";
function FetchCrawlersInHome(){
    const data = fetch(Settings.url+Settings.crawler_path).then(e=>e.json());
    // console.log(data);
    return data;
}
export default FetchCrawlersInHome;