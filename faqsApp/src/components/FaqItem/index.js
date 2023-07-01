const FaqItem = props => {
  const {details, status, statusChange} = props

  const {id, questionText, answerText} = details

  const imgurl = status
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const alter = status ? 'minus' : 'plus'

  const update = () => {
    statusChange(id)
  }

  return (
    <li>
      <div>
        <h1>{questionText}</h1>

        <button type="button" onClick={update}>
          <img src={imgurl} alt={alter} />
        </button>

        {status && <p>{answerText}</p>}
      </div>
    </li>
  )
}

export default FaqItem
