import React from 'react'
import css from '../src/less/header.less'
import { withAppContext } from './AppContext';

class Header extends React.Component {

  constructor(props) {
    super(props)


  }

  render() {
    const {view,setView} = this.props.context

    const headerClasses = [
      css.header,
      view === 'categories' ? css.categoriesHeader : null,
      view === 'subCategories' ? css.subCategoriesHeader : null
    ].join(' ')

    console.log(view)

    return (
      <header className={headerClasses} onClick={() => setView('categories')}>
        <img className={css.logo} src='/static/img/logo.png'/>
      </header>
    )
  }
}

export default withAppContext(Header)