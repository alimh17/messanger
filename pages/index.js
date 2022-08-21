import CurrentChat from 'components/currentChat/currentChat'
import Messages from 'components/messeges/messeges'

const Home = () => {

  return (
    <div className="md:mr-20 h-screen flex overflow-hidden">
      <CurrentChat />
      <Messages />
    </div>
  )
}


export default Home
