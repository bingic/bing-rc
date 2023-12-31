import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

interface Props {
  /** Function to call when click outside is detected */
  onClickOutside: (e: any) => void
}

export class ClickOutside extends PureComponent<Props> {
  public static readonly displayName = 'ClickOutside'

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true)
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true)
  }

  public render() {
    // @ts-ignore
    return React.Children.only(this.props.children)
  }

  private handleClickOutside = (e: any) => {
    const domNode = ReactDOM.findDOMNode(this)
    if (!domNode || !domNode.contains(e.target)) {
      this.props.onClickOutside(e)
    }
  }

}
