export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 bottom-0 fixed w-full">
        <div className="mx-auto max-w-screen-xl justify-center p-4 md:flex md:items-center md:justify-center">
          <span className="text-sm text-white dark:text-gray-400 sm:text-center sm:text-sm">
            © 2023{' '}
            Developed by{' '}
            <a href="https://lma-dev.github.io/" className="hover:underline">
              Recycle
            </a>
            . All Rights Reserved™.
          </span>
        </div>
      </footer>

    </div>
  )
}
