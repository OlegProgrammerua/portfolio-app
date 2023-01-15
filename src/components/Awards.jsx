import React, { Component } from 'react'
import Award from './Award'

export class Awards extends Component {
  render() {
    return (
        <div className="award_block">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2 className='text-center'>My Awards</h2>
                    <div className="awards">
                        {this.props.awards.map(el =>(
                            <Award key={el.id} award={el}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Awards