import {Row, Col} from 'antd';
import MangaBasicCard from "../components/MangaBasicCard";
import React from "react";
import Link from 'umi/link';
// import styles from './index.css';

export default function () {
  return (
    <div>
      <div>
        <Row type="flex" justify="start">
          <Col span={8} style={{paddingBottom: 15}} align="center"><Link to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
          <Col span={8} style={{paddingBottom: 15}} align="center"><Link to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
          <Col span={8} style={{paddingBottom: 15}} align="center"><Link to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
          <Col span={8} style={{paddingBottom: 15}} align="center"><Link to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
          <Col span={8} style={{paddingBottom: 15}} align="center"><Link to={`/detail?id=${0}`}><MangaBasicCard/></Link></Col>
        </Row>
      </div>
    </div>
  );
}
