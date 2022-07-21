import React from "react";
import Settings from "../utils/Settings";
function FetchIndexView(props){
    let id = props.id;
    let type = props.type;
    const data = fetch(Settings.url+Settings.index_path+"/?type="+type+"&id="+id).then(e=>e.json());
    return data;

}
export default FetchIndexView;