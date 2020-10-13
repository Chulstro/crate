import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'
import H4 from '../../ui/typography/H4'

import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'

class Survey extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  render() {
    return(
      <H4>WELCOME TO THE DRAMARAMA!</H4>
    )
  }
}

export default Survey
