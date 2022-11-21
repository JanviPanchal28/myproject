import React, { Component } from 'react'

import Collegelist from './Collegelist'

export class Ccom extends Component {
  render() {
    return (

      <div id="Colleges">

        <h3 className="text-center my-2">Charutar VidhyaMandal(CVM) University</h3>
        
        <div className="container my-2">
        <hr/>
          <div>
            <div >
              <Collegelist title="N.V.Pas" description="Established in 1996 by Dr. C. L. Patel, ex-Chairman of Charutar Vidya Mandal(CVM) Natubhai V. Patel College of Pure and Applied Sciences (NVPAS) has gone on to become one of the top-notch premier institutes across the nation."
                imageurl="http://nvpas.edu.in/NVPAS_front%20View.JPG" more="https://collegedunia.com/college/16752-natubhai-v-patel-college-of-pure-and-applied-science-nvpas-anand" />

            </div>
            <div>
              <Collegelist title="SEMCOM" description="SEMCOM, a constituent college of CVM University, was established in the year 1997 by Charutar Vidya Mandal, with a vision of social engineering, innovation, and value inculcation through education."
                imageurl="http://www.semcom.ac.in/img/Building3.jpg" more="https://collegedunia.com/college/16177-s-g-m-english-medium-college-of-commerce-and-management-semcom-vallabh-vidyanagar" />
            </div>

            <div >
              <Collegelist title="V.P.&R.P.T.P." description="V.P.&R.P.T.P. Science College Managed by Charutar Vidya Mandal and established in 1947. It is affiliated to Sardar Patel University, Vallabh Vidyanagar. It was first an Arts and Science College, after 1959 it has been fully devoted to Science. It has won the award of The Best Science College of Gujarat on THREE Successive occasions."
                imageurl="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/10957/2018/12/12/Campus%20front%20view%20of%20VP%20and%20RPTP%20Science%20College%20Anand_Campus-view.JPG" more="https://collegedunia.com/college/16995-vp-and-rptp-science-college-vallabh-vidyanagar/courses-fees?slug=bachelor-of-computer-application-bca" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Ccom

