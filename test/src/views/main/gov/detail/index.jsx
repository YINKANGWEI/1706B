import React from 'react';
import { connect } from "dva";
import { Form, Input, Checkbox, Button } from 'antd';

let mapStateToProps = (state) => {
    return {
        type: state.gov.type,
        info: state.gov.info
    }
}

@connect(mapStateToProps)
@Form.create()
class Detail extends React.Component {
    handleSubmit = e => {
        this.props.form.validateFields((err, values) => {
            console.log('err: ', err, values);
        })
    }
    resetForm = e => {
        this.props.form.resetFields()
    }

    componentDidMount() {
        console.log("this.props...", this.props.info);
        let { id, ...info } = this.props.info
        this.props.form.setFieldsValue(info)
    }

    get disabled() {
        return this.props.type === "detail"
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return <>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="机构名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '请输入你的机构名称',
                        }],
                    })(<Input disabled={this.disabled} />)}
                </Form.Item>
                <Form.Item label="机构地区">
                    {getFieldDecorator('area', {
                        rules: [{
                            required: true,
                            message: '请输入你的机构地区',
                        }],
                    })(<Input disabled={this.disabled} />)}
                </Form.Item>
                <Form.Item label="机构地址">
                    {getFieldDecorator('address', {
                        rules: [{
                            required: true,
                            message: '请输入你的机构地址',
                        }],
                    })(<Input disabled={this.disabled} />)}
                </Form.Item>
                <Form.Item label="校长姓名">
                    {getFieldDecorator('master', {
                        rules: [{
                            required: true,
                            message: '请输入你的校长姓名',
                        }],
                    })(<Input disabled={this.disabled} />)}
                </Form.Item>
                <Form.Item label="校长手机号">
                    {getFieldDecorator('phone', {
                        rules: [{
                            required: true,
                            message: '请输入你的校长手机号',
                        }],
                    })(<Input disabled={this.disabled} />)}
                </Form.Item>
                <Form.Item>
                    <span>合同信息</span>
                </Form.Item>
                <Form.Item label="合同编号">
                    {getFieldDecorator('num')(<Input disabled={this.disabled} />)}
                </Form.Item>
                <Form.Item label="是否可用">
                    {getFieldDecorator('enable', {
                        valuePropName: "checked"
                    })(<Checkbox style={{ width: 30, height: 18 }} disabled={this.disabled} />)}
                </Form.Item>
                {this.disabled ? null : <Form.Item {...tailFormItemLayout}>
                    <Button onClick={this.resetForm}>取消</Button>
                    <Button type="primary" htmlType="submit" style={{ marginLeft: "30px" }}>保存</Button>
                </Form.Item>}
            </Form>
        </>
    }
}

export default Detail
