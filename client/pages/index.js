import CurrentChat from 'components/currentChat/currentChat'
import Messages from 'components/messeges/messeges'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentChatAction } from 'store/action/currentChatAction'

const Home = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user) {
      dispatch(currentChatAction(user.chatList[0]))
    }
  }, [user])

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
