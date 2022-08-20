import CurrentChat from 'components/currentChat/currentChat'
import Messages from 'components/messeges/messeges'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Home = (props) => {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return (
      <div>
        Loading....
      </div>
    )
  }

  return (
    <>
      {status === "authenticated" ? (
        <div className="md:mr-20 h-screen flex overflow-hidden">
          <CurrentChat />
          <Messages />
        </div>
      ) :
        router.replace("/auth")
      }
    </>
  )
}


export default Home
