export default function Footer() {
  return (
    <footer className="max-w-5xl w-full mx-auto">
      <div className="border-t border-gray-200 py-12 text-center md:flex md:justify-between">
        <p className="text-base text-gray-400">Made by Josh Mayer 2/6/22</p>
        <div className="mt-6 flex justify-center space-x-8 md:mt-0">
          <a href="https://joosh.me" className="text-base text-gray-400">
            joosh.me
          </a>
        </div>
      </div>
    </footer>
  );
}
