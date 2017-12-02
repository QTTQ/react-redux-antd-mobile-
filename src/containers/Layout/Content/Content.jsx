// import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// //连接redux
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// //导入action
// import { LoginAction } from './action';

// //antd-mobile
// import { Flex, WhiteSpace } from 'antd-mobile';
// import { createForm } from 'rc-form';
// import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'


// class childe extends Component {
//     constructor(props, context) {
//         super(props, context);
//     }
//     render() {
//         console.log("content---this.propsthis.props", this.props);
//         console.log("content---this.propsthis.context", this.context);
//         console.log("this.propsthis.route", this.props.route);

//         let style = {
//             backgroundColor: '#ebebef',
//             justifyContent: 'center',
//             flex: 1,
//             color: 'blue',
//             textAlign: 'center',
//             height: '30px',
//             lineHeight: '30px',
//             width: '100%',
//         }
//         return (
//             <Flex>
//                 {/* <Flex.Item style={style}>Place</Flex.Item> */}
//                 {(() => {
//                     React.Children.map(this.props.children,(v, i) => {
//                         // <Route key={i} path={v.path} exact component={v.component} />
//                         console.log(v);
//                     })
//                 })()}
//                 {/* const MainContent = ({route}) => (
//                  <div className='content'>
//                     {
//                         route.routes.map((routeDetail, i) => (
//                             <Route key={i} path={routeDetail.path} exact component={routeDetail.component} />
//                         ))
//                     }
//                 </div>
//                 ); */}
//             </Flex>
//         );
//     }
// }


// // 将 store 中的数据作为 props 绑定到 LoginForm 上
// const mapStateToProps = (state, ownProps) => {
//     // let { Common, ClickAdd, LoginApp } = state;
//     let { LoginReducer } = state; //获取reducer中的方法
//     console.log('statestatestate', state);
//     return {
//         successLogin: LoginReducer.LoginData
//         // userName: RegisterReducer.userNameState,
//         // passWord: RegisterReducer.passWordState,
//     }
// }
// // 将 action 作为 props 绑定到 Product 上。我感觉是把actions方法添加到props上
// // const mapDispatchToProps = (dispatch, ownProps) => ({
// //     actions: bindActionCreators({ }, dispatch) //发射action中的方法
// // });

// // const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux
// const createFormMain_redux = connect(mapStateToProps)(createForm()(childe)); // 连接redux


// export default createFormMain_redux

import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import { BrowserRouter, Route, Link } from 'react-router-dom';
//连接redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//导入action
import { HideGoBackIocnAction, NavTabTextAction } from '../../../store/action';

//antd-mobile
import { TabBar, Flex, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

import HomePage from "../HomePage/HomePage";
import NewPage from "../NewPage/NewPage";


class childe extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: 'redTab',
            selectedTabTitle: "首页",
            hidden: false,
            fullScreen: false,
        };
    }
    componentWillMount() {
        let pathname = this.props.history.location.pathname
        if (pathname == '/Layout') {
            this.props.dispatch(HideGoBackIocnAction('hideGoBackIocn'))
        }
    }
    componentDidMount() {
    }
    _changeTitle = (e) => {
        const { selectedTabTitle } = this.state;
        this.props.dispatch(NavTabTextAction(e))
    }
    renderContent = (pageText) => {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center', overflow: 'hidden' }}>
                {
                    React.Children.map(this.props.children, (v, i) => {return <div pageText={pageText} className={`cl-${i}`}>{v}</div>})
                }
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    Click to switch fullscreen
                </a>
            </div>
        );
    }
    render() {
        console.log('content---this.props', this.props);
        return (
            <div className="cl-content" style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="首页"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            this._changeTitle('首页')
                        }}
                        data-seed="logId"
                    >
                        <HomePage>
                            {this.renderContent('HomePage')}
                        </HomePage>

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            this._changeTitle('新闻')
                        }}
                        data-seed="logId1"
                    >
                        <NewPage>
                        {this.renderContent('Koubei')}
                        </NewPage>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            this._changeTitle('美食')
                        }}
                    >
                        {this.renderContent('美食')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            this._changeTitle('设置')
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

// 将 store 中的数据作为 props 绑定到 LoginForm 上
const mapStateToProps = (state, ownProps) => {
    let { LoginReducer } = state; //获取reducer中的方法
    return {
        successLogin: LoginReducer.LoginData,
        // HideIconData: HideGoBackIocnReducer.HideIconData
    }
}
// 将 action 作为 props 绑定到 Product 上。我感觉是把actions方法添加到props上
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     actions: bindActionCreators({ }, dispatch) //发射action中的方法
// });

// const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux
const createFormMain_redux = connect(mapStateToProps)(createForm()(childe)); // 连接redux


export default createFormMain_redux
