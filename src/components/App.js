import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import SampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  componentDidMount() {
    const { params } = this.props.match
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId)
    console.log(localStorageRef)
    // this.ref = base.syncState(`${params.storeId}/fishes`, {
    //   context: this,
    //   state: 'fishes'
    // })
  }

  componentDidUpdate() {
    console.log(this.state.order)
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  }

  componentWillUnmount() {
    // base.removeBinding(this.ref)
  }

  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes }

    // 2. Add our new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish

    // 3. Set the new fishes new object to state
    this.setState({ fishes: fishes })
  }

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes }
    // 2. Update that state
    fishes[key] = updatedFish
    // 3. Set that to state
    this.setState({ fishes })
  }

  deleteFish = (key) => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes }
    // 2. update the state
    // fishes[key] = null // this is for mirroring with firebase
    delete fishes[key]
    // 3. update state
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: SampleFishes })
  }

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order }
    // 2. Either add the order or update the number in our order
    order[key] = order[key] + 1 || 1

    // 3. call setState to update our state
    this.setState({ order })
  }

  removeFromOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order }
    // 2. Remove item from order
    delete order[key]
    // 3. call setState to update our state
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    )
  }
}

export default App
