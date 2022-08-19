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
        <div>
          Home
        </div>
      ) :
        router.replace("/auth")
      }
    </>
  )
}


export default Home
