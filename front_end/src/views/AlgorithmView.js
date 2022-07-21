import React from "react";
import 'antd/dist/antd.min.css';
import TopMenu from "../components/TopMenu";
import CardGrid from "../components/CardGrid";
import "../css/AlgorithmView.css"
class AlgorithmView extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <React.Fragment>
                <TopMenu/>
                <h1 className="CenterTitle">算法展示</h1>
                <CardGrid/>
                <CardGrid/>
                <CardGrid/>
            </React.Fragment>
        );
    }
}
export default AlgorithmView;