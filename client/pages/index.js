import CurrentChat from 'components/currentChat/currentChat'
import Messages from 'components/messeges/messeges'
import Head from 'next/head'

const Home = () => {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>صفحه اصلی</title>
      </Head>
      <div className="md:mr-20 h-screen flex overflow-hidden">
        <CurrentChat />
        <Messages />
      </div>
    </>
  )
}




export default Home
