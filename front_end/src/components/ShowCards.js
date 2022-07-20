import React from "react";
import 'antd/dist/antd.min.css';
import {Card} from "antd";
import "../css/ShowCards.css";
import Meta from "antd/es/card/Meta";
class ShowCards extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            cards:this.props.cards,
        }


    }
    render() {
        return(
            <div className="ShowCards">
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>
                <div className="Cards">
                    <a href={"/index"}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </a>

                    {/*<div className="Blank"></div>*/}
                </div>



            </div>
        );
    }
}
export default ShowCards;