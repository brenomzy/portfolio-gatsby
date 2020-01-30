import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <span className="-z-1 border-t-2 border-orange-500 fixed top-0 bottom-0 right-0 left-0"></span>
        <nav className="p-8 z-10 flex justify-between items-center fixed right-0 left-0 top-0 bottom-auto m-auto">
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
        <div className="container mx-auto mt-32">
          <main className="mb-32">{children}</main>
          <footer>
            © {new Date().getFullYear()}, Feito com
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
