import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

class CaseStudyTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header className="bg-gray-100 py-16">
            <div className="flex justify-between container mx-auto">
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {post.frontmatter.title}
                </h1>
                <p className="mt-4 max-w-lg text-gray-700">
                  {post.frontmatter.description}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Minhas contribuições:
                </h3>
                <p className="mt-4 max-w-lg text-gray-700">
                  {post.frontmatter.contributions}
                </p>
              </div>
            </div>
          </header>
          <section
            className="mt-32 markdown-body max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr className="container mx-auto mt-6" />
          <footer></footer>
        </article>

        <nav className="mt-16">
          <ul className="container flex justify-between mx-auto">
            <li>
              {previous && (
                <AniLink
                  className="text-gray-900 tracking-wider"
                  cover
                  direction="right"
                  to={previous.fields.slug}
                  rel="prev"
                  bg="#1A202C"
                >
                  <p className="font-bold tracking-wider text-gray-700">
                    ￩ Anterior
                  </p>
                  {previous.frontmatter.title}
                </AniLink>
              )}
            </li>
            <li>
              {next && (
                <AniLink
                  className="text-gray-900 tracking-wider"
                  cover
                  direction="left"
                  to={next.fields.slug}
                  rel="next"
                  bg="#1A202C"
                >
                  <p className="font-bold tracking-wider text-gray-700">
                    Próximo ￫
                  </p>
                  {next.frontmatter.title}
                </AniLink>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY")
        description
        contributions
      }
    }
  }
`
