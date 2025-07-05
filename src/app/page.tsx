import Link from "next/link";

export default function Home(){

  return <div>
    <div className="text-4xl flex justify-center items-center ">
    TODO APPLICATION
    </div>
    <div className="grid justify-center items-center">
      <Link className="text-xl justify-center items-center p-2 border rounded-md mt-5" href={"/signup"} >SIGNUP</Link>
      <Link href={"/signin"} className="text-xl justify-center p-2 items-center border rounded-md mt-5" >SIGNIN</Link>
    </div>
  </div>
}