function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-20 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
          The coding club
        </h1>

        <p className="mb-6 text-1xl md:text-2xl lg:text-0.6xl text-gray-400">
          Join and be part of our community and start writing your algorithms
          now.
        </p>

        <div
          className="text-lg md:text-2x1 lg:text-3x1 py-0.5 px-4 md:py-1 md:px-10 lg:py-1.5
        lg:px-10 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full"
        >
          👨‍🚀 2,263 members
        </div>

        <form
          action="https://www.getrevue.co/profile/icegreen__/add_subscriber"
          method="post"
          target="_blank"
        >
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder="E.g. naruto@gmail.com"
              type="email"
              name="member[email]"
              className="text-lg md:text-2xl placeholder:text-gray-400 placdeholder:italic py-2
              px-8 md:px-10 lg:py-2 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full
              md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"
            />

            <input
              type="submit"
              value="Join today"
              name="member[subscribe]"
              className="bg-primary rounded-full md:rounded-tl-none
              md:rounded-bl-none text-lg md:text-2xl py-1.5
              px-8 md:px-10 lg:py-2 lg:px-10 cursor-pointer hover:opacity-75 duration-150"
            />
          </div>

          <div className="opacity-75 italic">
            By subscribing, you agree with Revue’s{" "}
            <a
              target="_blank"
              href=""
              className="hover:opacity-80 duration-150"
            >
              Terms of Service{" "}
            </a>
            and
            <a
              target="_blank"
              href="#"
              className="hover:opacity-80 duration-150"
            >
              {" "}
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between ">
        <p>Build with ❤️ by Flavio Aquila</p>

        <div className="flex -mx-6">
          <a href="" className="mx-3 hover:opacity-80 duration-150">
            About us
          </a>
          <a href="" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>
          <a href="" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
