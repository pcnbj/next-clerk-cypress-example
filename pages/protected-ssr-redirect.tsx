import { withServerSideAuth } from "@clerk/nextjs/ssr";

const ProtectedSSRRedirect = () => {
  return <div>This is protected by server side rendering</div>;
};

export default ProtectedSSRRedirect;

export const getServerSideProps = withServerSideAuth(
  async ({ req, resolvedUrl }) => {
    const { sessionId } = req.auth;

    if (!sessionId) {
      return {
        redirect: {
          destination: "/sign-in?redirect_url=" + resolvedUrl,
        },
        props: {},
      };
    }

    return { props: {} };
  }
);
