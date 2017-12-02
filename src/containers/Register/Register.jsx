import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';

//antd-mobile
import { List, InputItem, WhiteSpace, Form } from 'antd-mobile';
import { createForm } from 'rc-form';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'


class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        aaa: null
    }
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = (e) => {
        this.customFocusInst.focus();
    }
    _Register = () => {
        const { history } = this.props
        history.push('/Register')
    }
    render() {
        const { getFieldProps } = this.props.form;
        console.log("this.propsthis.props", this.props);
        // console.log(this.props)
        return (
            <div>
                <List>
                    <InputItem
                        {...getFieldProps('focus') }
                        clear
                        placeholder="请输入姓名"
                        ref={el => this.customFocusInst = el}
                    ><div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <InputItem
                        {...getFieldProps('password') }
                        clear
                        type="password"
                        placeholder="****"
                    >密码</InputItem>
                    <List.Item>
                        <div style={{ display: "flex" }}>
                            <div
                                style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                onClick={() => { this.handleClick() }}
                            >
                                登录
                         </div>
                            <div
                                style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                onClick={() => { this._Register() }}
                            >
                                注册
                         </div>
                        </div>
                    </List.Item>
                </List>

            </div>
        );
    }
}

const createFormLogin = connect()(createForm()(Login));
export default createFormLogin
