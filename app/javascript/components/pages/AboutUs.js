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
                  That rewarding feeling you get after creating something from a blank canvas is the best and the main reason why I got into software development. Outside of programming, I like to spend time with my family and eat tacos all day. “If it aint broke, don't fix it” - Bert Lance
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
                  Puzzle enthusiast that enjoys taking on new and unique problems.  When I'm not ruining my posture sitting at a computer all day, you find me walking along the beach or playing catch with my friends.  "Never memorize something that you can look up." ― Albert Einstein
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
                  UX/UI/Random backgrounds, Keeper of The Wireframes, and Guardian of CSS. I draw pictures and occasionally do code. When I'm not doing mock-ups or UI, I'm petting cats and wondering if they hate me. “Learn the rules like a pro, so you can break them like an artist” ~Pablo Picasso"
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
