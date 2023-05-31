/* eslint-disable no-unused-vars */
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        Login With Github
      </Button>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <img className="" src={bg} alt="" />
      <div className="text-center ">
        <h4>Create an Amazing Newspaper</h4>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default RightNav;
