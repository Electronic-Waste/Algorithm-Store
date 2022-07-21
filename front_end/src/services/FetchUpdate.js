import React from "react";
import Settings from "../utils/Settings";
function FetchUpdate(props) {
    let title = props.title;
    let type = props.type;
    let author = props.author;
    let url= props.url;
    let description= props.description;
    let tag= props.tag;
    const ans=fetch(Settings.url + Settings.update_path, {
        method: "POST",
        headers: {

        },
        body: JSON.stringify({
            title: title,
            type: type,
            author: author,
            url: url,
            description: description,
            tag: tag,
        }),
    });


    return !!ans?null:ans.json();
}
export default FetchUpdate;