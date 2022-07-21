import React from "react";
// import Settings from "./Settings";
import TopMenu from "../components/TopMenu";
import ShowImage from "../components/ShowImage";
import ShowCrawlerCards from "../utils/ShowCrawlerCards";
import ShowAlgorithmCards from "../utils/ShowAlgorithmCards";
class HomeView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            cards:[],
        }
    }
    render() {
        return(
            <React.Fragment>
                <TopMenu/>
                <ShowImage/>
                {/*<ShowCards/>*/}
                <ShowCrawlerCards/>
                <ShowAlgorithmCards/>
            </React.Fragment>
        );
    }
}
export default HomeView;