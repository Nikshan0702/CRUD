import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
        MyApp
      </Link>

      <div className="flex items-center space-x-4">
        <button
          aria-label="View cart"
          className="relative text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
            8
          </span>
        </button>

        <button
          aria-label="User menu"
          className="block rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <img
            className="h-10 w-10 object-cover"
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
            alt="User avatar"
          />
        </button>
      </div>
    </nav>
  );
}
