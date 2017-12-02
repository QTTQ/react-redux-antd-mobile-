import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import { BrowserRouter, Route, Link } from 'react-router-dom';
//连接redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//导入action
import { LoginAction } from '../../store/action';

//antd-mobile
import { List, InputItem, WhiteSpace, Form } from 'antd-mobile';
import { createForm } from 'rc-form';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'


class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.successLogin=0
        this.state = {
            successLogin: 0
        }
    }
    componentDidMount() {
    }
    componentwillmount() {

    }
    _Register = () => {
        const { history } = this.props
        history.push('/Register')
    }
    render() {
        const { getFieldProps } = this.props.form;
        const { LoginReducer, history, actions} = this.props;
        console.log('Login--this.props', this.props);
        if (LoginReducer == 1) {
            history.push("/Layout")
        }
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
                                // onClick={() => { this._loginClick() }}
                                onClick={() => { actions.LoginAction('denglu')}}
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


// 将 store 中的数据作为 props 绑定到 LoginForm 上
const mapStateToProps = (state, ownProps) => {
    let { LoginReducer } = state; //获取reducer中的方法
    return {
        LoginReducer: LoginReducer.LoginData
    }
}
// 将 action 作为 props 绑定到 Product 上。我感觉是把actions方法添加到props上
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({ LoginAction}, dispatch) //发射action中的方法
});

// const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux
const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux


export default createFormLogin_redux
