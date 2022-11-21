import React, { Component } from 'react'

export class Collegelist extends Component {
  render() {
    let { title, description, imageurl, more} = this.props;
    return (

      <div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-5">
            <img src={imageurl} width={300} height={300} />
          </div>

          <div className="col-md-7">
            <h2 className="featurette-heading">{title}</h2>
            <p className="lead">{description.slice(0, 600)}...</p>
            <a href={more} className="btn btn-sm btn-primary">Read More</a>
          </div>

        </div>

       




      </div>

    )
  }
}
//https://www.cvmu.edu.in/assets/uploads/colleges/1594358861_infra1.jpg
//https://i.ytimg.com/vi/rjADALv_rSc/maxresdefault.jpg

export default Collegelist