'use client';

//import Image from "@/node_modules/next/image";
import Image from "@/node_modules/next/image";

import { useRouter } from "@/node_modules/next/navigation";

const Logo = () => {
    const router = useRouter();
  
    return ( 
      <Image
      //  onClick={() => router.push('/')}
        className="hidden md:block cursor-pointer" 
       // src="/images/logo.png" 
        src="/images/logov5.png"
        height="100" 
        width="100" 
        alt="Logo" 
      />
     );
  }
   
  export default Logo;