import React, {Component} from 'react'
import {connect} from "react-redux";

class Checkout extends Component {
    render() {
        const {id} = this.props.params
        const checkout = (e) => {
            e.preventDefault()
            this.props.checkoutCart(id)
        }
        return (
            <div className='checkout' id={id}>
                <p>Checkout your items</p>
                <div><button onClick={checkout}>Checkout</button></div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkoutCart: () => {
            dispatch({
                type: 'CHECKOUT'
            })
        }
    }
}

export default connect(mapDispatchToProps)(Checkout)
