import './index.css'

const TabItem = props => {
  const {tabItemDetails, onChangeCategory, isActive} = props
  const {displayText, tabId} = tabItemDetails

  const changeTabId = () => {
    onChangeCategory(tabId)
  }

  const borderStyle = isActive ? 'borderStyle' : ''

  const fontColor = isActive ? 'fontColor' : ''

  return (
    <li className={`listItems ${borderStyle}`}>
      <button className="button" type="button">
        <h1 onClick={changeTabId} className={`tabItem ${fontColor}`}>
          {displayText}
        </h1>
      </button>
    </li>
  )
}

export default TabItem
