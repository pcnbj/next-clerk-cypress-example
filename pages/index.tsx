import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { withServerSideAuth } from "@clerk/nextjs/ssr";

const Index = () => {
  return (
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  );
};

export default Index;

export const getServerSideProps = withServerSideAuth(({ req, resolvedUrl }) => {
  const { sessionId } = req.auth;

  if (!sessionId) {
    return {
      redirect: {
        destination:
          "https://accounts.beloved.elf-18.lcl.dev/sign-in?redirect_url=" +
          resolvedUrl,
      },
      props: {},
    };
  }

  return { redirect: { destination: "/dashboard" }, props: {} };
});
