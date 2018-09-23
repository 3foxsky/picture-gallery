// import { autobind } from 'core-decorators' // eslint-disable-line no-unused-vars
import React, { Component, Children, cloneElement } from 'react';
import { Modal } from 'react-bootstrap';

export default class ModalControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      show: () => this.setState({
        isVisible: true,
      }),
      hide: () => this.setState({
        isVisible: false
      })
    }
  }

  render() {
    const { isVisible, show, hide } = this.state
    let { children, item, index, component: ContentComponent } = this.props

    // ensure that we have only one child
    let child = Children.only(children)

    return [

      cloneElement(child, { onClick: show, key: 'modal-control', item: item,  index: index}),

      <Modal
        key="modal-control-container"
        show={isVisible}
        onHide={hide}
      >
        <ContentComponent {...this.props}
          className="modal-picture"
        />
      </Modal>
    ]
  }
}
