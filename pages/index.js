import React from 'react'
import '../src/less/global.less'
import css from '../src/less/index.less'
import Header from '../components/Header.js'
import Categories from '../components/Categories'
import {AppContext} from '../components/AppContext.js'
import * as contentful from 'contentful'

class IndexPage extends React.Component {

  static async getInitialProps() {
    const client = contentful.createClient({
      space: 'wozd62c9qvac',
      accessToken: 'beff361ee1e1cc7916dd7417ccb952f16cc3c95761ac1c829cfea793db33d974' 
    })
    
    const items = await client.getEntries({
      content_type: 'category'
    }).then(r => r.items)

    return {
      items
    }
  } 

  constructor(props) {
    super(props)

    const boundMethods = [
      'setTitle',
      'setView'
    ]

    boundMethods.forEach(method => this[method] = this[method].bind(this))

    this.state = {
      setTitle: this.setTitle,
      view: 'subCategories',
      setView: this.setView,
      items: props.items,
      title: null
    }
  }

  setTitle(title) {
    this.setState({
      title: title
    })
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
