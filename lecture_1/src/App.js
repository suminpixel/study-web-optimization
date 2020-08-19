import React,  {Suspense, lazy}from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
//as-is : 랜더링 전 컴포넌트 임포트
//import ListPage from './pages/ListPage/index'
//import ViewPage from './pages/ViewPage/index'

//to-be : 런타임 도중 컴포넌트 임포트 (레이지 로딩)
const ListPage = lazy(()=>import('./pages/ListPage/index'))
const ViewPage = lazy(()=>import('./pages/ViewPage/index'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}> {/* 컴포넌트 로드 전 출력할 컴포가 없을때 대신해서 뜨는 fallback 프로퍼티 지정 */}
      <Switch>
        <Route path="/" component={ListPage} exact />
        <Route path="/view/:id" component={ViewPage} exact />
      </Switch>
      </Suspense>
    </div>
  )
}

export default App
