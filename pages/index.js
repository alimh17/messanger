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
  ``
  return (
    <>
      {status === "authenticated" ? (
        <div className="mr-20 h-screen flex overflow-hidden">
          <div className='md:w-8/12'>
            <h1>Home</h1>
          </div>
          <Messages />
        </div>
      ) :
        router.replace("/auth")
      }
    </>
  )
}


export default Home
