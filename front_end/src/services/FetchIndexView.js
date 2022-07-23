import React from "react";
import Settings from "../utils/Settings";
function FetchIndexView(props){

    console.log(props);
    const data = fetch(Settings.url+Settings.index_path+"/"+props).then(e=>e.json());
    return data;

}
export default FetchIndexView;