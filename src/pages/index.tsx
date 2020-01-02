import React, { useState } from 'react';
import { Button } from 'antd';
import { useDebounceFn } from '@umijs/hooks';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = ({}) => {
  const [value, setValue] = useState<number>(0);
  const { run, cancel } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    [value],
    500,
  );

  return (
    <div>
      <p>clicked: {value} times</p>
      <Button style={{ marginTop: 16 }} onClick={run}>
        Click Fast Hot_Fix
      </Button>
    </div>
  );
};

export default App;
