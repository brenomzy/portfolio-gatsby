import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <div className="antialiased border-t-2 border-orange-500">
          <nav className="p-8 z-10 flex justify-between items-center fixed right-0 left-0 top-auto bottom-auto m-auto">
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
              <ul className="flex">
                <li className="mr-6">
                  <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
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
        </div>
      </>
    )
  }
}

export default Layout
