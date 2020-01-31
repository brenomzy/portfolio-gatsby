import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <span className="-z-1 border-t-2 border-orange-500 fixed top-0 bottom-0 right-0 left-0"></span>
        <nav className="p-8 z-10 flex justify-between items-center fixed right-0 left-0 top-0 bottom-auto m-auto animated fadeInDown">
          <div>
            <Link to="/">
              <img
                className="h-8 w-8 rounded-full"
                src={"/avatar.jpg"}
                alt="Foto Breno"
              />
            </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="mr-6 font-semibold text-gray-900">
                <Link to="/projetos">Projetos</Link>
              </li>
              <li className="mr-6 font-semibold text-gray-900">
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <a
                  className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition py-2 px-3 border border-gray-800 hover:border-orange-500 rounded"
                  href="#"
                >
                  Currículo
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col min-h-screen">
          <div className="container mx-auto mt-32">
            <main className="mb-32 animated fadeIn">{children}</main>
          </div>
          <footer className="py-4 bg-gray-100 border border-gray-300 flex justify-center mt-auto">
            <a
              className="mr-6 text-sm font-semibold text-gray-900"
              href="mailto:brenomzy@gmail.com"
            >
              Email
            </a>
            <a
              className="mr-6 text-sm font-semibold text-gray-900"
              href="https://www.linkedin.com/in/breno-daroz-74337b172/"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              className="mr-6 text-sm font-semibold text-gray-900"
              href="https://twitter.com/brenomzy"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="text-sm font-semibold text-gray-900"
              href="https://github.com/brenomzy"
              target="_blank"
            >
              Github
            </a>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
