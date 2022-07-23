import React from "react";
import Settings from "../utils/Settings";
function FetchCrawlerView() {
    const data = fetch(Settings.url + Settings.algorithm_path).then(e => e.json());
    return data;
}
export default FetchCrawlerView;