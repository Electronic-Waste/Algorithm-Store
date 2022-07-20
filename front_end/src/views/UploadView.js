import { InboxOutlined } from '@ant-design/icons';
import {Button, Input, message, Select, Upload} from 'antd';
import React from 'react';
import TopMenu from "../components/TopMenu";
import TextArea from "antd/es/input/TextArea";
const {Option} = Select;
const { Dragger } = Upload;

class UploadView extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const props = {
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

            onChange(info) {
                const { status } = info.file;

                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }

                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },

            onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
            },
        };
        const Submit=(e)=>{
            console.log(e);
        };

        const handleChange = (value) => {
            console.log(`selected ${value}`);
        };

        return(
            <React.Fragment>
            <TopMenu/>
                <Input id={"title"} placeholder="Algorithm's Title" />
                <Input id={"author"} placeholder="Your name" />
                <Select
                    defaultValue="algorithm"
                    onChange={handleChange}
                >
                    <Option value="algorithm">Algorithm</Option>
                    <Option value="crawler">Crawler</Option>
                </Select>
                <Input id={"url"} placeholder="The url of the img you want to show" />
                <Input id={"tag"} placeholder="Algorithm's tag" />
                <TextArea id={"description"} showCount maxLength={200} rows={4} placeholder="The description of your algorithm"  />
                <Dragger{...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
                <Button onClick={Submit} type={"primary"} block>提交</Button>
            </React.Fragment>
        );
    }
}



export default UploadView;