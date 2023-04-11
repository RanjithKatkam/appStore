import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {imageUrl, appName} = appItemDetails
  return (
    <li className="app-item">
      <div className="listDiv">
        <img className="appImage" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
