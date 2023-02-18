import {Component} from 'react'

import Header from '../Header'

import TabItem from '../TabItem'

import ThumbnailList from '../ThumbnailList'

import './index.css'

class MatchGame extends Component {
  render() {
    const {tabsList, imagesList} = this.props

    return (
      <div className="bg-container">
        <Header />
        <div className="game-container">
          <img
            src={imagesList[0].imageUrl}
            alt={imagesList[0].category}
            className="game-image"
          />
          <ul className="tabs-container">
            {tabsList.map(eachTab => (
              <TabItem key={eachTab.tabId} tabDetails={eachTab} />
            ))}
          </ul>
          <ul className="thumbnails-container">
            {imagesList.map(eachDetails => (
              <ThumbnailList key={eachDetails.id} imageDetails={eachDetails} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchGame
