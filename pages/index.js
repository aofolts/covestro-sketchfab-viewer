import React from 'react'
import '../src/less/global.less'
import css from '../src/less/index.less'
import Header from '../components/Header.js'
import Categories from '../components/Categories'
import {AppContext} from '../components/AppContext.js'

class IndexPage extends React.Component {

  constructor(props) {
    super(props)

    const boundMethods = [
      'setView'
    ]

    boundMethods.forEach(method => this[method] = this[method].bind(this))

    this.state = {
      view: 'categories',
      setView: this.setView
    }
  }

  setView(view) {
    this.setState({
      view: view
    })
  }

  render() {
    const body = this.state.view === 'categories'
      ? <Categories/>
      : null

    return (
      <div id='app'>
        <AppContext.Provider value={this.state}>
          <Header/>
          {body}
        </AppContext.Provider>
      </div>
    )
  }
}

export default IndexPage
