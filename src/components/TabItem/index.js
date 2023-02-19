import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updatedActiveTabId(tabId)
  }
  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`tab-btn ${activeTabBtn}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
