import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//reuseable component (presentational)
//use either function Name() method or arrow function.

// const Submit = props => {
//     return(
//         <>
//         <div className='container'>
//             <div className='row'>
//                 <h1 className='text-center mt-3'>Presentational Components</h1>
//             </div>
//             <hr />
//             <div className='row'>
//                 <h3 className='col-4 text-center'>Hi</h3>
//                 <h3 className='col-4 text-center'>Hello</h3>
//                 <h3 className='col-4 text-center'>Cool</h3>
//                 <p className='col-4 text-center'>My name is rishabh and i am currently studying cs in vit vellore.</p>
//                 <p className='col-4 text-center'>My name is rishabh and i am currently studying cs in vit vellore.</p>
//                 <p className='col-4 text-center'>My name is rishabh and i am currently studying cs in vit vellore.</p>
//             </div>
//         </div>
//         </>
//     );
// }

class Submit extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Rishabh',
            surName: 'Sharma',
            dish:{
                id:1,
                name:'chili potato'
            }
        };
    }

    render(){
        return(
            <>
            <div className='container'>
                <div className='row'>
                    <h4 className='col-12 text-center'>
                        Learning how to pass props and Learning
                        this.state methods
                    </h4>
                </div>
                <hr />
                <div className='row'>
                    <h2 className='col-12 text-center'>
                        {this.state.firstName} {this.state.surName}
                    </h2>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-12 text-center'>I really like {this.state.dish.name} which has an id {this.state.dish.id}</p>
                </div>             
            </div>
            </>
        )
    }
}


export default Submit;


