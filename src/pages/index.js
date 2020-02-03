import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PortfolioIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <div className="container mx-auto">
          <div className="animated fadeIn">
            <h1 className="text-7xl font-bold text-gray-900 mb-1">
              Breno Daroz
            </h1>
            <h2 className="text-5xl font-medium leading-tight tracking-tight text-gray-800 mb-4">
              <strong>UX/UI Designer.</strong>
            </h2>
            <p className="max-w-xl text-gray-800 leading-relaxed mb-64">
              Atualmente em Maringá-PR, criando e recriando experiências em
              aplicações e websites. Interessado em integrar o design como
              método de solução de problemas nas mais diversas áreas da
              tecnologia.
            </p>
          </div>
        </div>

        <h2 className="container mx-auto text-5xl font-bold text-gray-900 mb-8">
          Meus projetos
        </h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="container mx-auto">
              <article
                className="flex justify-between pt-16 pl-16 max-w-full h-card bg-gray-900 shadow-lg rounded-lg transition mb-16 transition"
                key={node.fields.slug}
              >
                <div>
                  <header>
                    <h3 className="text-2xl text-white font-bold">
                      <AniLink
                        cover
                        direction="down"
                        to={node.fields.slug}
                        bg="#1A202C"
                      >
                        {title}
                      </AniLink>
                    </h3>
                    <p className="text-gray-200 uppercase tracking-wider font-medium mb-16">
                      {node.frontmatter.role} - {node.frontmatter.date}
                    </p>
                  </header>
                  <section>
                    <p
                      className="max-w-md text-xl text-gray-100 font-medium leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                  <AniLink
                    cover
                    direction="down"
                    to={node.fields.slug}
                    bg="#1A202C"
                  >
                    <button className="bg-orange-400 hover:bg-orange-300 hover:md-shadow rounded py-3 px-6 text-orange-900 font-bold mt-8 effect transition">
                      Case study
                    </button>
                  </AniLink>
                </div>

                <div className="overflow-hidden -mt-16">
                  <BackgroundImage
                    fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                  />
                </div>
              </article>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
            description
            role
            featuredImage {
              childImageSharp {
                fixed(width: 700, height: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
