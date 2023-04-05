import React from "react";

function Toogle () {
    state = {
        on: false,
    };

    toogle =() => {
        this.setState({
            on: !this.state.on,
        })
    }
    const {children} = this.props;
    return(
        <>
        {children({
            on: this.state.on,
            toogle: this.toogle
        })
        }
        </>
    );
}

export default Toogle;