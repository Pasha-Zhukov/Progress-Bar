import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { receive } from './actions';
import ProgressBarCustom from './ProgressBarCustom';
import { items } from './items';
import './style.scss';

function App() {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receive(items));
  }, []);

  return <ProgressBarCustom items={data} height={19} width={9} />;
}

export default App;
