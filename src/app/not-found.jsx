import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] space-y-5">
      <h2 className="text-7xl font-black">Not Found</h2>
      <p className="text-4xl font-medium">Could not find requested resource</p>
      <Link
        href="/"
        className="btn-primary py-2 px-3 rounded-lg text-white font-medium hover:scale-102 transition-transform duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}
