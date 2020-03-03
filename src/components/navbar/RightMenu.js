import React, { Component } from 'react'
import '../../style/navbar.scss'
import Modal from "react-responsive-modal";

class SignIn extends Component {
    state = {
        open: false
    }

    onOpenModal = () => {
        this.setState({ open: true })
    }
    onCloseModal = () => {
        this.setState({ open: false })
    }

    render() {
        const { open } = this.state
        return (
            <div className="RightMenu" >
                <div className="RightMenu__SignIn">
                    <button onClick={this.onOpenModal}>Sign In</button>
                    <Modal open={open} onClose={this.onCloseModal}>
                        <p>login</p>
                    </Modal>
                </div>

            </div>
        )
    }
}
export default SignIn