import * as React from 'react';
import { Spin, Button } from 'antd';
import { useAPI } from '@umijs/hooks';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = ({}) => {
  const { data: Id, loading, timer } = useAPI({
    url: 'https://helloacm.com/api/random/?n=8&x=4',
    pollingInterval: 3000,
  });
  return (
    <div>
      <Spin spinning={loading}>
        <div>id: {Id}</div>
      </Spin>
      <Button.Group style={{ marginTop: 16 }}>
        <Button type={'primary'} onClick={timer.pause}>
          pause goat
        </Button>
        <Button type={'primary'} onClick={timer.stop}>
          stop
        </Button>
        <Button type={'primary'} onClick={timer.resume}>
          resume
        </Button>
      </Button.Group>
    </div>
  );
};

export default App;
