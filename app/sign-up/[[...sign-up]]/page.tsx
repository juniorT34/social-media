import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (<div className="h-[calc(100vh-96px)] flex flex-col justify-center items-center">
            <SignUp />
        </div>);
}