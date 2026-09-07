import Link from "next/link";

export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Studio disabled</h1>
      <p className="text-gray-600 max-w-md">
        This demo uses local product data instead of Sanity CMS. Edit fixtures
        in <code className="text-sm bg-gray-100 px-1 rounded">data/local</code>.
      </p>
      <Link href="/" className="text-shop_dark_green underline font-medium">
        Back to store
      </Link>
    </main>
  );
}
