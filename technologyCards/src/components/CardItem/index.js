import './index.css'


const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  const container = card-container ${className}
  return (
    <li className={container}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-para">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}


export default CardItem

