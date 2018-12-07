const path = require('path')
exports.createPages = ({boundActionCreators, graphql}) =>{
    const { createPage } = boundActionCreators

    const postTemplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }`)
}

export default BlogPage