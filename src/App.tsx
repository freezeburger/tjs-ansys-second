import React from 'react'
import './App.css'

import {
  PageAsk,
  PageDashboard,
  PageHome,
  PageQuestions,
  PageQuestionDetail
} from './components/layouts'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
} from 'react-router-dom'


const RoutedWithId = (props: { children: any }) => {
  const Child = props.children;
  let { id } = useParams<any>();
  return <Child id={id} />
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <PageHome></PageHome>
          </Route>
          <Route path="/dashboard" component={PageDashboard}></Route>
          <Route path="/ask" component={PageAsk}></Route>
          <Route path="/questions" exact component={PageQuestions}></Route>
          <Route path="/questions/:id">
              <RoutedWithId children={PageQuestionDetail}></RoutedWithId>
          </Route>
          {/* Redirection */}
          <Route exact path="/">
            <Redirect to="/home" />
        </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
