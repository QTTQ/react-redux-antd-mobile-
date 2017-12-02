import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import { BrowserRouter, Route, Link } from 'react-router-dom';
//连接redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//导入action
import { LoginAction } from '../../store/action';

//antd-mobile
import { Flex, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'


import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import HomePage from "./HomePage/HomePage";
import NewPage from "./NewPage/NewPage";


class childe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Content {...this.props} >
                    <Header  {...this.props} />
                    {/* <Footer /> */}
                </Content>
                {/* <Content>
                    <BrowserRouter>
                    <Route path="/Content/Pages1" exact component={Pages1} />
                    <Route path="/Content/Pages2" component={Pages2} />
                    </BrowserRouter>
                    <Pages1/>
                    <Pages2 />                    
                </Content >
                <Footer /> */}
            </div>
        );
    }
}



// 将 store 中的数据作为 props 绑定到 LoginForm 上
const mapStateToProps = (state, ownProps) => {
    // let { Common, ClickAdd, LoginApp } = state;
    let { LoginReducer } = state; //获取reducer中的方法
    return {
        successLogin: LoginReducer.LoginData
    }
}
// 将 action 作为 props 绑定到 Product 上。我感觉是把actions方法添加到props上
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     actions: bindActionCreators({ }, dispatch) //发射action中的方法
// });

// const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux
const createFormMain_redux = connect(mapStateToProps)(createForm()(childe)); // 连接redux


export default createFormMain_redux
