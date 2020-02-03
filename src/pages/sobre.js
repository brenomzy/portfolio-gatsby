import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Sobre extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Portfolio" />
        <div>Teste</div>
      </Layout>
    )
  }
}

export default Sobre
