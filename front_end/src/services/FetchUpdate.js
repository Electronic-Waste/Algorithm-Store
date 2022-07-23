import React from "react";
import Settings from "../utils/Settings";
function FetchUpdate(data) {

    fetch(Settings.url + Settings.update_path, {
        method: "POST",
        // headers: {
        //     'Content-Type': 'multipart /form-data'
        // },
        // processData: false,
        // contentType: false,
        body: data
    }).then(data => {

    });

}
export default FetchUpdate;
