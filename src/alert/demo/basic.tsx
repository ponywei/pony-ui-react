import React from 'react';
import Alert from '../index';
import '../style';

export default () => (
  <>
    <Alert kind="warning">这是一条警告提示</Alert>
    <br />
    <Alert kind="info">这是一条警告提示</Alert>
    <br />
    <Alert kind="positive">这是一条警告提示</Alert>
    <br />
    <Alert kind="negative">这是一条警告提示</Alert>
  </>
);
