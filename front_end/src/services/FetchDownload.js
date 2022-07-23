import React from "react";
import Settings from "../utils/Settings";
function FetchDownload(props){

    console.log(props);
    window.open(Settings.url+Settings.download_path+"/"+props.type+"/"+props.filename);


}
export default FetchDownload;