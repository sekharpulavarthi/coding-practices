import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    status: false,
  }

  statusChange = id => {
    this.setState = prev => ({
      status: !prev.status,
    })
  }

  render() {
    const {faqsList} = this.props

    const {status} = this.state

    return (
      <div>
        <div>
          <h1>FAQs</h1>

          <ul>
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                details={each}
                status={status}
                statusChange={this.statusChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
