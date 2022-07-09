import { withServerSideAuth } from "@clerk/nextjs/ssr";

const ProtectedSSR = () => {
  return <div>This is protected by server side rendering</div>;
};

export default ProtectedSSR;

export const getServerSideProps = withServerSideAuth(async ({ req, res }) => {
  const { sessionId } = req.auth;

  if (!sessionId) {
    res.statusCode = 401;
    res.end();

    return { props: { error: "Unauthorized" } };
  }

  return { props: {} };
});
