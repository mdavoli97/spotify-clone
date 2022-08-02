import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify"
      />

      <div>
        <button
          onClick={() => signIn(providers.spotify.id, { callbackUrl: "/" })}
          className="bg-[#12D860] text-white p-5 rounded-full"
        >
          Login with {providers.spotify.name}
        </button>
      </div>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
