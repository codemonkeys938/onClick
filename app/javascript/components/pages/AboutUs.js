import React, { Component } from 'react'
import { Card, CardGroup, CardImg, CardSubtitle, CardTitle, CardBody, CardText } from 'reactstrap'
import joseicon from '../assets/hi.png'
import katicon from '../assets/my cat says hi.png'
import daneicon from '../assets/File.png'


class AboutUs extends Component {

  render() {
    return (
      <><div className="aboutpage">
        <h1>About Us</h1>
        <div className="aboutuscards">
          <CardGroup>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://avatars.githubusercontent.com/u/99694167?v=4"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  <strong className="aboutusname">Nico</strong>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Product Manager
                </CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src={joseicon}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  <strong className="aboutusname">Jose</strong>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Project Manager
                </CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src={daneicon}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  <strong className="aboutusname">Dane</strong>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Tech Lead
                </CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src={katicon}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  <strong className="aboutusname">Kat</strong>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Design Lead
                </CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
        <div className="background-image missionpage"></div>
      </div>
      </>
    )
  }
}

export default AboutUs
