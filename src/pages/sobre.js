import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Sobre extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Sobre" />
        <div className="bg-gray-100">
          <div className="container max-w-mobile mx-4 md:mx-auto py-8 md:py-16">
            <h2 className="text-3xl md:text-7xl font-bold text-gray-900 mb-1 relative">
              Olá, meu nome é Breno<span className="text-orange-400">.</span>
            </h2>
            <p className="mt-12 text-gray-900 text-base md:text-xl leading-relaxed md:max-w-3xl">
              Sou um UX/UI & Frontend Designer de Maringá-PR, focado em criar
              experiências e solucionar problemas com design. Faço parte da
              internet criando websites desde a era em que se usavam{" "}
              <img
                className="inline-block h-10"
                src={"/botao-web20.png"}
                alt="Botão antigo"
              />
              .
            </p>

            <p className="mt-6 text-gray-900 text-base md:text-xl leading-relaxed md:max-w-3xl">
              Desenvolvo wireframes, protótipos e experiências prontas para uso
              que melhoram a facilidade de aprendizado com visuais modernos e
              acessíveis. No meu tempo livre, gosto de aprender novas
              tecnologias como{" "}
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-600"
              >
                GatsbyJS
              </a>
              , que utilizei para desenvolver este website.
            </p>

            <p className="mt-6 text-gray-900 text-base md:text-xl leading-relaxed max-w-3xl">
              Trabalho atualmente na{" "}
              <a
                className="font-semibold text-red-600"
                href="http://www.sabium.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sabium Sistemas
              </a>
              , onde faço parte da solução de diversos problemas interessantes
              na área de varejo.
            </p>
          </div>
        </div>

        <div className="container max-w-mobile mx-4 md:mx-auto">
          <h3 className="mt-8 md:mt-16 font-semibold text-gray-900 text-base md:text-lg leading-relaxed max-w-3xl">
            Seguem abaixo alguns dos softwares e tecnologias que tenho utilizado
            ultimamente:
          </h3>
          <ul className="mt-6 flex justify-between max-w-xs text-gray-900 font-medium">
            <div>
              <li>
                <span className="text-orange-500">‣</span> Figma
              </li>
              <li>
                <span className="text-orange-500">‣</span> Adobe XD
              </li>
              <li>
                <span className="text-orange-500">‣</span> HTML/CSS
              </li>
            </div>
            <div>
              <li>
                <span className="text-orange-500">‣</span> Javascript
              </li>
              <li>
                <span className="text-orange-500">‣</span> React
              </li>
              <li>
                <span className="text-orange-500">‣</span> VueJS
              </li>
            </div>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default Sobre
