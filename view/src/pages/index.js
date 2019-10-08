import {Row, Col} from 'antd';
import MangaBasicCard from "../components/MangaBasicCard";
import React from "react";
// import styles from './index.css';

export default function () {
  return (
    <div>
      <div>
        <Row type="flex" justify="start">
          <Col span={8} style={{paddingBottom:15}} align="center"><MangaBasicCard/></Col>
          <Col span={8} style={{paddingBottom:15}} align="center"><MangaBasicCard/></Col>
          <Col span={8} style={{paddingBottom:15}} align="center"><MangaBasicCard/></Col>
          <Col span={8} style={{paddingBottom:15}} align="center"><MangaBasicCard/></Col>
          <Col span={8} style={{paddingBottom:15}} align="center"><MangaBasicCard/></Col>
        </Row>
      </div>
    </div>
  );
}
