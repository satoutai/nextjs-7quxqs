import { useState, useEffect } from 'react';

const Sayhello = () => {
  //内部で状態を持つためにuseStateを利用
  const [data, setData] = useState({ name: '' });
  //外部のAPIリクエストするのは副作用のため、useEffect内で処理
  useEffect(() => {
    //pages/api/hello.tsの内容リクエスト
    fetch('/api/hello')
      .then((res) => res.json())
      .then((profile) => {
        setData(profile);
      });
  }, []);
  return <div>hello {data.name}</div>;
};
export default Sayhello;
