import React from 'react'
import Helmet from 'react-helmet'

const Title = ({ title }) => {
    var defaultTitle = 'Blog-UI'
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    )
}

export { Title }