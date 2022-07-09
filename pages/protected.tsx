import { SignedIn, SignedOut } from "@clerk/nextjs";

const Protected = () => {
  return (
    <div>
      <SignedIn>You can only see this if you are signed in</SignedIn>
      <SignedOut>You can only see this if you are signed out</SignedOut>
    </div>
  );
};

export default Protected;
