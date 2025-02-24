export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <form className="bg-stone-900 p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-stone-400 mb-6">
          Register
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            className="mt-1 w-full px-4 py-2 border rounded-lg  bg-stone-700 text-stone-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Enter password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="mt-1 mb-2 w-full px-4 py-2 border rounded-lg bg-stone-700 text-stone-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-stone-600 text-white py-2 rounded-lg hover:bg-stone-400 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
