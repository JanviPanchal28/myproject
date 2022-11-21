import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'


export class Home extends Component {
  render() {
    let { text } = this.props
    return (

      <div>

        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block" height={400} width={900}
              style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}
              src="https://images.unsplash.com/photo-1559557809-e9b6eabeabfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>CVM University</h3>
              <p>The purpose of education is to turn mirrors into window</p>
              <Link className="btn btn-sm btn-primary" to="/Ccom" target="_blank">{text}</Link>


            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block" height={400} width={900}
              style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=2070&q=80"
              alt="Education"
            />

            <Carousel.Caption>
              <h3>CVM University</h3>
              <p>The purpose of education is to turn mirrors into window</p>
              <Link className="btn btn-sm btn-primary" to="/Ccom" target="_blank">{text}</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block" height={400} width={900}
              style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}
              src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=870&q=80"
              alt="Education"
            />

            <Carousel.Caption>
              <h3>CVM University</h3>
              <p>The purpose of education is to turn mirrors into window</p>
              <Link className="btn btn-sm btn-primary" to="/Ccom" target="_blank">{text}</Link>
            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>

        <div className="container my-4">
          <div className="row">

            <div className="col-md-4">
              <div className="imgAbt">
                <img width="250" height="250" src="https://www.gcet.ac.in/assets/img/management/chairman.png" alt='' />
                <h4 className='center my-1'>Chair Man,CVM</h4>
              </div>
            </div>
            <div className="col-md-8">
              <h3>Er.Bhikhabhai B. Patel</h3>
              <p> Education is said to be the transmission of culture and civilization. New Vallabh Vidyanagar of today seems
                like the fulfillment of Sardar Patel's vision of new India. The inner spirit of India is calling us to
                establish a great center on this land, where all intellectual forces will gather for the purpose to creat
                the wealth of knowledge. We are the inheritors of the dreams of Shri Bhaikaka, Shri Bhikhabhai Saheb and
                Shri H.M. Patel and wish to steer New Vallabh Vidyanagar into a center of excellence in the field of education.
                I heartily express all my good wishes for the excellent progress of this institute and bright future for the
                students.
              </p>
              <p>-CVM's ChairMan</p>
            </div>
          </div>
        </div>
        <Card className="text-center" id="Contact">

          <Card.Body>
            <Card.Title>Contact Us</Card.Title>
            <Card.Text>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg><p>Beside BVM College, Opp Shastri Maidan, Vallabh Vidhyanagar-388120 Gujarat-india</p>
                </li>


                <li>
                  <div className="mail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg><div style={{ cursor: "pointer" }} onClick={(e) => { window.location.href = 'mailto:adminoffice@cvmu.edu.in'; }}>adminoffice@cvmu.edu.in</div>
                  </div>
                </li>

                <li><br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <p class="content_gray_color sfregular font_22">
                    <a href="tel:912692238001" class="content_gray_color"> +91 2692-238001 </a>
                  </p>

                </li>
              </ul>


            </Card.Text>
            <Button variant="primary" href="https://www.cvmu.edu.in/">More details</Button>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>

      </div>
    )
  }
}


export default Home
