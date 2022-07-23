import React from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';
import logo from "../assets/logo.jpg";
import "../css/TopMenu.css";
import {push,replace} from "react-router-redux";
const { Header, Content, Footer } = Layout;
class TopMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        };
    }
    render(){
        const Items=[
            {
                label: <a href={"/"}>主页</a>,
                key: 'home',
                path:'/'
            },

            {
                label:
                    <a href={"/crawler"}>爬虫</a>
                ,
                key:'crawler',
                path: '/crawler'
            },
            {
                label:
                    <a href={"/algorithm"}>算法</a>
                ,
                key:'algorithm',
                path: '/algorithm'
            },
            // {
            //     label:
            //         '搜索'
            //     ,
            //     key: 'search',
            //     path: '/search'
            // },
            {
                label: <a href={"/upload"}>上传</a>,
                key: 'upload',
                path: '/upload'
            },
            {
                label: <a href={"https://notes.sjtu.edu.cn/T-GfhUWrRY6xO_3MpnAWvw?both#"}>文档</a>,
                key:'index',
                path: '/index'
            },

        ];

        function onClick(e) {
            if(e.key=='index'){
                push('/');
                replace('/');
                console.log('index');
            }
            if(e.key=='crawler'){
                push('/crawler');
                replace('/crawler');
                console.log('crawler');
            }
            if(e.key=='algorithm'){
                push('/algorithm');
                replace('/algorithm');
                console.log('algorithm');
            }
            if(e.key=='search'){
                push('/search');
                replace('/search');
                console.log('search');
            }

        }


        return(
                <Header className="header">

                    <div className="logo" style={{float:'left'}}>
                        <img src={logo} alt="logo" style={{width:'50px'}}/>
                    </div>
                    <Menu  onClick={onClick}  theme={"light"} mode={"horizontal"} items={Items}/>
                </Header>
        )
    }
}
export default TopMenu;