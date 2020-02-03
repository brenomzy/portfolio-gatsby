import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let projetos

    if (location.pathname === rootPath) {
      projetos = (
        <Link
          className="cursor-pointer"
          activeClass="active"
          to="projetos"
          spy={true}
          smooth={true}
          offset={550}
          duration={500}
        >
          Projetos
        </Link>
      )
    } else {
      projetos = (
        <AniLink cover direction="up" to="/" bg="#ED8936">
          Projetos
        </AniLink>
      )
    }

    return (
      <>
        <span className="-z-1 border-t-2 border-orange-500 fixed top-0 bottom-0 right-0 left-0 animated fadeIn"></span>
        <nav className="p-8 z-10 flex justify-between items-center fixed right-0 left-0 top-0 bottom-auto m-auto animated fadeInDown">
          <div>
            <AniLink cover direction="up" to="/" bg="#ED8936">
              <img
                className="h-8 w-8 rounded-full"
                src={"/avatar.jpg"}
                alt="Foto Breno"
              />
            </AniLink>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="mr-6 font-semibold text-gray-900">{projetos}</li>
              <li className="mr-6 font-semibold text-gray-900">
                <AniLink to="/sobre">Sobre</AniLink>
              </li>
              <li>
                <a
                  className="bg-gray-900 hover:bg-gray-800 text-sm font-semibold text-gray-100 transition py-3 px-6 rounded hover:text-white hover:shadow-md"
                  href="mailto:brenomzy@gmail.com"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col min-h-screen">
          <div className="container mx-auto mt-32">
            <main id="projetos" className="mb-32 animated fadeIn">
              {children}
            </main>
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
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              className="mr-6 text-sm font-semibold text-gray-900"
              href="https://twitter.com/brenomzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="text-sm font-semibold text-gray-900"
              href="https://github.com/brenomzy"
              target="_blank"
              rel="noopener noreferrer"
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
