import React from "react";
import 'antd/dist/antd.min.css';
import {Card} from "antd";
import "../css/ShowCards.css";
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom"
class ShowCards extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            cards:[],
        }

    }
    componentDidMount() {
        // console.log(this.props.cards);

    }

    render() {
        // console.log("InShowCards");
        // console.log(this.state.cards);
        console.log(this.props.cards);
        // this.props.history.push("/index/7");
        const cards = this.props.cards.map((card,index)=>{
            return(<Link to={"/index/"+card.id}>
                <Card
                    key={index}
                    hoverable
                    style={{ width: 240 ,display:"inline-block"}}
                    cover={<img alt="example" src={card.image} />}
                >
                    <Meta title={card.title} description={card.author} />
                </Card></Link>
            );
        });
        return(
            <div className="ShowCards">
                <div className="Cards">
                    {cards}
                {/*    <Link to={"/index/7"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </Link>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                {/*</div>*/}
                {/*<div className="Cards">*/}
                {/*    <a href={"/index"}>*/}
                {/*        <Card*/}
                {/*            hoverable*/}
                {/*            style={{*/}
                {/*                width: 240,*/}
                {/*            }}*/}
                {/*            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*        >*/}
                {/*            <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*        </Card>*/}
                {/*    </a>*/}

                {/*    /!*<div className="Blank"></div>*!/*/}
                </div>



            </div>
        );
    }
}
export default ShowCards;