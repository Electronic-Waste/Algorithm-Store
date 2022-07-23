import React from "react";
import "antd/dist/antd.min.css";
import TopMenu from "../components/TopMenu";
import "../css/IndexView.css";
import {Button, Image} from "antd";
import {useParams} from "react-router-dom";
import FetchIndexView from "../services/FetchIndexView";
import FetchDownload from "../services/FetchDownload";
class IndexView extends React.Component{
    constructor(props) {
        super(props);
        let index = window.location.href.split('/')[4];
        const Data=FetchIndexView(index);
        console.log(Data);
        this.state={
            data:Data,
            id:'',
            type:''
        }



    }
    componentDidMount() {
        this.state.data.then(res=>{
            console.log(res);
            this.setState({
                data:res,
                type:res.type?"crawler":"algorithm"
            })
            }

        )
        // if(this.state.type=='0')
        // {
        //     this.setState({
        //         type:"algorithm"
        //     })
        //     console.log(this.state.type)
        // }
        // if(this.state.type=='1') {
        //     this.setState({
        //         type:"crawler"
        //     })
        //     console.log(this.state.type)
        // }
    }

    render() {

        // console.log(index);
        let ps = {
            type:this.state.data.type,
            filename:this.state.data.filename,
        }
        console.log("non");
        console.log(this.state.data)
        console.log(this.state.type)
        function handleClick() {

            FetchDownload(ps);
        }

        return(
            <React.Fragment>
                <TopMenu/>
                <div className={"FirstBox"}>
                    <div className={"FirstBoxImg"}>
                        <Image alt="example" src={this.state.data.image} width={120} height={120}/>
                    </div>
                    <div className={"FirstBoxText"}>
                        <div className={"Title"}>
                            {this.state.data.title}
                        </div>
                        <div className={"author"}>
                            {this.state.data.author}
                        </div>
                        <div className={"tag"}>
                            {this.state.data.tag}
                        </div>
                        <div className={"type"}>
                            {this.state.type}
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
                            {this.state.data.description}
                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}
export default IndexView;
