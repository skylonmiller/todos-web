import React from "react";
import { connect } from "react-redux";
import withBreadCrumb from "../../components/withBreadCrumb";
import Container from "../../components/layout/container";
import Jumbotron from "../../components/layout/jumbotron";
import { Divider } from "antd";
import Tod from "../../components/todolist";
// import { Button, message, Input, Checkbox } from "antd";
// import { MenuUnfoldOutlined } from "@ant-design/icons";
// import { connect } from "react-redux";
// import "./todo.css";

@withBreadCrumb("TODO-LIST", "Front")
@connect(state => ({}))
export default class extends React.PureComponent {
  render() {
    return (
      <Container>
        <Jumbotron> Todo Example. </Jumbotron>
        <Divider />
        <Tod></Tod>
      </Container>
    );
  }
}
