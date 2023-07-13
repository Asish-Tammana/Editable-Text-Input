import {Component} from 'react'
import {BgContainer, MainContainer} from './EditableTextStles'

class EditableText extends Component {
  state = {
    textWritten: '',
    showResult: false,
  }

  updateText = event => {
    this.setState({
      textWritten: event.target.value,
    })
  }

  toggleDisplay = () => {
    this.setState(prevState => ({
      showResult: !prevState.showResult,
    }))
  }

  render() {
    const {textWritten, showResult} = this.state
    return (
      <BgContainer>
        <MainContainer>
          <h1>Editable Text input</h1>
          {showResult ? (
            <>
              <p>{textWritten}</p>
              <button type="button" onClick={this.toggleDisplay}>
                Edit
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={textWritten}
                onChange={this.updateText}
              />
              <button type="button" onClick={this.toggleDisplay}>
                Save
              </button>
            </>
          )}
        </MainContainer>
      </BgContainer>
    )
  }
}

export default EditableText
