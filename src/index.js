import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css'

import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App'

ReactDom.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ConfigProvider>
  ,
  document.getElementById('root')
)