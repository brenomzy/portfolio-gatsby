import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <h1 className="text-7xl font-bold text-gray-900 mb-1">Breno Daroz</h1>
        <h2 className="text-5xl font-medium leading-tight tracking-tight text-gray-800 mb-4">
          <strong>UX/UI Designer.</strong>
        </h2>
        <p className="max-w-xl text-gray-800 leading-relaxed mb-64">
          Atualmente em Maringá-PR, criando e recriando experiências em
          aplicações e websites. Interessado em integrar o design como método de
          solução de problemas nas mais diversas áreas da tecnologia.
        </p>

        <h2 className="text-5xl font-bold text-gray-900 mb-8">Meus projetos</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              className="flex justify-between pt-16 pl-16 max-w-full h-card bg-gray-900 shadow-lg rounded-lg transition mb-16 transition"
              key={node.fields.slug}
            >
              <div>
                <header>
                  <h3 className="text-2xl text-white font-bold">
                    <Link to={node.fields.slug}>{title}</Link>
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
                <Link to={node.fields.slug}>
                  <button className="bg-orange-400 hover:bg-orange-300 hover:shadow rounded py-3 px-6 text-orange-900 font-bold mt-8 transition">
                    Case study
                  </button>
                </Link>
              </div>

              <div className="overflow-hidden -mt-16">
                <BackgroundImage
                  fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                />
              </div>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

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
