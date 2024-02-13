'use client'

import { useEffect, useState } from "react";
import Image from 'next/image'
import Loader from '/public/salon.gif'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(()=>{
    router.push('/login')
    setIsLoading(false)
  },[])

  return (<>
  {isLoading && (<>
    <div className="loader_container">
      <Image src={Loader} id="loader" alt="salon_poll"/>
    </div>
  </>)}
  </>
  );
}
