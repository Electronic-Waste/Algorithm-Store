import React from "react";
import 'antd/dist/antd.min.css';
import ImageForShow from "../assets/ShowImage.png"
import "../css/ShowImage.css";
import {Image} from "antd";
class ShowImage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            image:ImageForShow,
        };
    }
    render(){
        return(
            <div className="ShowImage">
                <img src={this.state.image} alt="" width="1200px"/>
            </div>
        )
    }
}
export default ShowImage;