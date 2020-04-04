import React from 'react'

class Fish extends React.Component {
  render() {
    const image = this.props.details.image
    const name = this.props.details.name

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
      </li>
    )
  }
}

export default Fish
