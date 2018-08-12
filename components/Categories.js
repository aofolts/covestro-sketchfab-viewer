import React from 'react'
import css from '../src/less/categories.less'
import {withAppContext} from '../components/AppContext'

class Categories extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const cats = [
      {
        name: 'Cylindrical Cells',
        image: 'cylindrical-cells.jpg'
      },
      {
        name: 'Pouch Cells',
        image: 'pouch-cells.jpg'
      }
    ]
  
    const catsEl = cats.map(cat => {
      return (
        <div key={cat.name} className={css.card} onClick={() => this.props.context.setView('subCategories')}>
          <h3>{cat.name}</h3>
          <img className={css.image} src={`/static/img/${cat.image}`}/>
        </div>
      )
    })
  
    return (
      <div className={css.categories}>
        <div className={css.wrap}>
          {catsEl}
        </div>
      </div>
    )
  }
}

export default withAppContext(Categories)