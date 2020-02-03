import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const activeStyle = {
  color: "#ED8936",
}

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
        <nav className="p-8 z-10 flex justify-between items-center fixed right-0 left-0 top-0 bottom-auto m-auto animated fadeIn">
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
                <AniLink
                  activeStyle={activeStyle}
                  cover
                  direction="down"
                  to="/sobre"
                  bg="#F7FAFC"
                >
                  Sobre
                </AniLink>
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
          <div className="mt-32">
            <main id="projetos" className="mb-32 animated fadeIn">
              {children}
            </main>
          </div>
          <footer className="py-12 bg-gray-100 border border-gray-300 flex justify-center mt-auto">
            <a
              className="mr-6 text-sm font-semibold text-gray-900 effect inline-block"
              href="https://www.linkedin.com/in/breno-daroz-74337b172/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6v0zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              className="mr-6 text-sm font-semibold text-gray-900 effect inline-block"
              href="https://twitter.com/brenomzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.279-.028-.556-.08-.83A7.72 7.72 0 0023 3v0z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              className="text-sm font-semibold text-gray-900 effect inline-block"
              href="https://github.com/brenomzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 22.027v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77S18.73.677 16 2.507a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 4.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v3.87m0-3c-5 1.5-5-2.5-7-3l7 3z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
