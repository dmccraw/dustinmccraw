import React, { Fragment } from "react"
import PropTypes from "prop-types"

const isBrowser = global.window

function Dashboard({ location }) {
  return isBrowser ? (
    <Fragment>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </Fragment>
  ) : null
}

Dashboard.propTypes = {
  location: PropTypes.object,
}

export default Dashboard
