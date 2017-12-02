import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import { BrowserRouter, Route, Link } from 'react-router-dom';
//连接redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//导入action
import { LoginAction } from '../../../store/action';

//antd-mobile
import { Flex, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'


class childe extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log("Header--this.props", this.props);
        const { HideIconData, NavTabTextData } = this.props;
        let bg = {
            background: '#CCC'
        }
        return (
            <NavBar className="cl-navbar" style={bg}
                mode="light"
                icon={HideIconData === 'hideGoBackIocn' ? null : < Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={HideIconData === 'hideGoBackIocn' ? null : [
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{NavTabTextData}</NavBar>

            // {/* <NavBar
            //         mode="dark"
            //         leftContent="Back"
            //         rightContent={[
            //             <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            //             <Icon key="1" type="ellipsis" />,
            //         ]}
            //     >NavBar</NavBar> */}
        );
    }
}


// 将 store 中的数据作为 props 绑定到 LoginForm 上
const mapStateToProps = (state, ownProps) => {
    let { HideGoBackIocnReducer, NavTabTextReducer } = state; //获取reducer中的方法
    console.log('header---state', state)
    return {
        HideIconData: HideGoBackIocnReducer.HideIconData,
        NavTabTextData: NavTabTextReducer.NavTabTextData
    }
}
// 将 action 作为 props 绑定到 Product 上。我感觉是把actions方法添加到props上
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     actions: bindActionCreators({ }, dispatch) //发射action中的方法
// });

// const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux
const createFormMain_redux = connect(mapStateToProps)(createForm()(childe)); // 连接redux


export default createFormMain_redux
