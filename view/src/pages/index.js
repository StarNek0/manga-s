import {Col, Row} from 'antd';
import MangaBasicCard from "../components/MangaBasicCard";
import React from "react";
import Link from 'umi/link';
import routes from "../routes";
// import mp4 from "@/demo.mp4";
// import styles from './index.css';

export default function () {
  return (
    <Row type="flex" justify="start" gutter={16}>
      <Col xs={24} sm={12} lg={8} style={{paddingBottom: 16}} align="center">
        <Link to={`${routes.pathHash.detailPage}?id=${0}`}>
          <MangaBasicCard/>
        </Link>
      </Col>
      <Col xs={24} sm={12} lg={8} style={{paddingBottom: 16}} align="center">
        <Link to={`${routes.pathHash.detailPage}?id=${0}`}>
          <MangaBasicCard/>
        </Link>
      </Col>
      <Col xs={24} sm={12} lg={8} style={{paddingBottom: 16}} align="center">
        <Link to={`${routes.pathHash.detailPage}?id=${0}`}>
          <MangaBasicCard/>
        </Link>
      </Col>
      <Col xs={24} sm={12} lg={8} style={{paddingBottom: 16}} align="center">
        <Link to={`${routes.pathHash.detailPage}?id=${0}`}>
          <MangaBasicCard/>
        </Link>
      </Col>
      <Col xs={24} sm={12} lg={8} style={{paddingBottom: 16}} align="center">
        <Link to={`${routes.pathHash.detailPage}?id=${0}`}>
          <MangaBasicCard/>
        </Link>
      </Col>
      <Col xs={24} sm={12} lg={8} style={{paddingBottom: 16}} align="center">
        <Link to={`${routes.pathHash.detailPage}?id=${0}`}>
          <MangaBasicCard/>
        </Link>
      </Col>
      <Col xs={24} sm={12} lg={8} style={{paddingBottom: 16}} align="center">
        <Link to={`${routes.pathHash.detailPage}?id=${0}`}>
          <MangaBasicCard/>
        </Link>
      </Col>
    </Row>
  );
}
