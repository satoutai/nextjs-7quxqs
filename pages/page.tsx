import { useRouter } from 'next/router'; // インポート
import { useEffect } from 'react'; //副作用を伴う処理用に導入

const Page = () => {
  const router = useRouter(); //userRouterを使用

  //以下のコメント部分を解除すると/userouterに移動するようになる
  /*
  useEffect(()=>{
      router.push("/userouter");
  })
  */
  return <span>{router.pathname}</span>;
};

export default Page;
