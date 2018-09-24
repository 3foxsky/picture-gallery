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
    };
  }

  render() {
    const { isVisible, show, hide } = this.state
    const {
      children,
      item,
      index,
      component: ContentComponent
    } = this.props;

    // ensure that we have only one child
    const child = Children.only(children);

    return [

      cloneElement(child, {
        onClick: show, key: 'modal-control', item: item,  index: index
      }),

      <Modal
        key="modal-control-container"
        show={isVisible}
        onHide={hide}
      >
        <ContentComponent
          className="modal-picture"
          {...this.props}
        />
      </Modal>
    ];
  }
}
