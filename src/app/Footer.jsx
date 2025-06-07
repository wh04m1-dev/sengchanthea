export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm">
        <p className="text-center sm:text-left">
          &copy; {year} Chanthea Seng. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
