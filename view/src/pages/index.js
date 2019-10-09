import {Row, Col, Card} from 'antd';
import MangaBasicCard from "../components/MangaBasicCard";
import React from "react";
import Link from 'umi/link';
// import mp4 from "@/demo.mp4";
// import styles from './index.css';

export default function () {
  return (
    <Card bordered={false}>
      <Row type="flex" justify="start">
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        <Col xs={24} sm={12} lg={8} style={{paddingBottom: 15}} align="center"><Link
          to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
      </Row>
    </Card>
  );
}
