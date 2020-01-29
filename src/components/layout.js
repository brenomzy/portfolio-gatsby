import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="font-sans border-t-2 border-orange-500">
        <div className="bg-white py-6">
          <nav className="flex justify-between container mx-auto">
            <div>
              {header}
            </div>
            <ul className="flex">
              <li className="mr-8"><a href="#">Projetos</a></li>
              <li className="mr-8"><a href="#">Sobre mim</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </div>
        <div className="container mx-auto">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Feito com
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
