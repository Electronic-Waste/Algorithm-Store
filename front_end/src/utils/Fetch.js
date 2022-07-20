import React from "react";
import Settings from "./Settings";
class Fetch{
    Fetchout(e){
        return fetch(Settings.url+Settings.Login_path,e).then(e=>e.json());
    }
}
export default Fetch;