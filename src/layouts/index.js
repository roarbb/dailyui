import React from 'react'
import PropTypes from 'prop-types'

const TemplateWrapper = ({ children }) => (
  <div className="site-wrap">
      {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
