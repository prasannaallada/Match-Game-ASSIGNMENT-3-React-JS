import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText} = tabDetails

  return (
    <li className="tab-list-item">
      <button type="button" className="tab-btn active-tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
