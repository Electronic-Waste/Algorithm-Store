import React from "react";
import "antd/dist/antd.min.css";
import TopMenu from "../components/TopMenu";
import "../css/IndexView.css";
import {Button, Image} from "antd";
class IndexView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:this.props.data,
        }
    }
    render() {
        function handleClick() {

        }

        return(
            <React.Fragment>
                <TopMenu/>
                <div className={"FirstBox"}>
                    <div className={"FirstBoxImg"}>
                        <Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width={120} height={120}/>
                    </div>
                    <div className={"FirstBoxText"}>
                        <div className={"Title"}>
                            A Long Long Title
                        </div>
                        <div className={"author"}>
                            author
                        </div>
                        <div className={"tag"}>
                            tag
                        </div>
                        <div className={"type"}>
                            type
                        </div>
                    </div>
                    <div className={"FirstBoxButton"}>
                        <Button size={"large"} onClick={handleClick} type={"primary"}>
                            点此获取本算法包
                        </Button>
                    </div>
                </div>
                <div className={"SecondBox"}>
                    <div className={"SecondBoxTitle"}>
                        说明
                    </div>
                    <div className={"SecondBoxText"}>
                        <div className={"TextContent"}>
                            12312312312321312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212
                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}
export default IndexView;
