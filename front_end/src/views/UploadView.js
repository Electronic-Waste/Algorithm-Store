import { InboxOutlined } from '@ant-design/icons';
import {Button, Form, Input, message, Select, Upload} from 'antd';
import React from 'react';
import TopMenu from "../components/TopMenu";
import TextArea from "antd/es/input/TextArea";
import FetchUpdate from "../services/FetchUpdate";
const {Option} = Select;
const { Dragger } = Upload;

class UploadView extends React.Component{
    constructor(props) {
        super(props);

    }

    handleSubmit = (value) => {
        let file = document.getElementById("input-file").files[0];
        let formData = new FormData();
        console.log(value);
        value["type"] = (value["type"] === "algorithm") ? 0 : 1;
        formData.append("title", value["title"]);
        formData.append("author", value["author"]);
        formData.append("type", value["type"]);
        formData.append("image", value["image"]);
        formData.append("description", value["description"]);
        formData.append("file", file);
        formData.append("tag", value["tag"]);
        console.log(value);
        FetchUpdate(formData);
    }

    render() {
        return(
            // <React.Fragment>
            // <TopMenu/>
            //     <Input id={"title"} placeholder="Algorithm's Title" value = {this.state.title} onChange={ChangeTitle}/>
            //     <Input id={"author"} placeholder="Your name"  value = {this.state.author} onChange = {ChangeAuthor}/>
            //     <Select
            //         id={"type"}
            //         defaultValue="algorithm"
            //         onChange={handleChange}
            //     >
            //         <Option value="algorithm">Algorithm</Option>
            //         <Option value="crawler">Crawler</Option>
            //     </Select>
            //     <Input id={"url"} placeholder="The url of the img you want to show" value = {this.state.url} onChange = {ChangeUrl}/>
            //     <Input id={"tag"} placeholder="Algorithm's tag"  value = {this.state.tag} onChange = {ChangeTag}/>
            //     <TextArea
            //         id={"description"}
            //         showCount
            //         maxLength={200}
            //         rows={4}
            //         placeholder="The description of your algorithm"
            //         value = {this.state.description}
            //         onChange = {ChangeDescription}
            //     />
            //     <Dragger{...props}>
            //     <p className="ant-upload-drag-icon">
            //         <InboxOutlined />
            //     </p>
            //     <p className="ant-upload-text">Click or drag file to this area to upload</p>
            //     <p className="ant-upload-hint">
            //         Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            //         band files
            //     </p>
            // </Dragger>
            //     <Button onClick={Submit} type={"primary"} block>提交</Button>
            // </React.Fragment>
            <React.Fragment>
                <TopMenu/>
                <Form onFinish={this.handleSubmit}>
                    <Form.Item name="title">
                        <Input placeholder="Algorithm's Title"/>
                    </Form.Item>
                    <Form.Item name="author">
                        <Input placeholder="Your name"/>
                    </Form.Item>
                    <Form.Item name="type">
                        <Select placeholder="==请选择==">
                            <Option value="algorithm">Algorithm</Option>
                            <Option value="crawler">Crawler</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="image">
                        <Input placeholder="The url of the img you want to show"/>
                    </Form.Item>
                    <Form.Item name="tag">
                        <Input placeholder="Algorithm's tag"/>
                    </Form.Item>
                    <Form.Item name="description">
                        <TextArea showCount maxLength={200} rows={4} placeholder="The description of your algorithm"/>
                    </Form.Item>
                    <Form.Item name="file">
                        <Input id="input-file" type="file"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>提交</Button>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}



export default UploadView;
