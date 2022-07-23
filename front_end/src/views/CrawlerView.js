import React from "react";
import 'antd/dist/antd.min.css';
import TopMenu from "../components/TopMenu";
import "../css/AlgorithmView.css"
import {Link} from "react-router-dom";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import FetchCrawlerView from "../services/FetchCrawlerView";
class CrawlerView extends React.Component{
    constructor(props) {
        super(props);


        this.state={
            cards:[],
        }

    }
    componentDidMount() {
        FetchCrawlerView().then(res=>{
            // console.log(res)
            this.setState({
                cards:res,
            })
        });
    }
    render() {

        console.log(this.state.cards)
        const Cards = this.state.cards.map((card,index)=>{
            return(
                <div className={"FlexEle"}>
                    <Link to={"/index/"+card.id} >
                        <Card
                            key={index}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={card.image} />}
                        >
                            <Meta title={card.title} description={card.author} />
                        </Card>
                    </Link>
                </div>
            );
        });
        return(
            <React.Fragment>
                <TopMenu/>
                <h1 className="CenterTitle">爬虫展示</h1>
                <div>
                    {Cards}
                </div>

            </React.Fragment>
        );
    }
}
export default CrawlerView;