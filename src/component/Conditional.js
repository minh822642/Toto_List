import React, { Component } from 'react';

class Conditional extends Component {

    render() {
        // if (this.props.isLoading === true) {
        //     return (
        //         <div>
        //             <h1>Loading....</h1>
        //         </div>)
        // }
        // else {
        //     return (
        //         <div>
        //             <h1>To-to List is Running</h1>
        //         </div>
        //     )
        // }
        return (
            <div>
                {this.props.isLoading ? <h1>Loading...</h1> : <h1>To-do List is running</h1>}

            </div>
        )
    }
}

export default Conditional;