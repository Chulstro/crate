import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'
import H4 from '../../ui/typography/H4'
import { grey, grey2 } from '../../ui/common/colors'

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
      <Grid style={{ backgroundColor: grey }}>
        <GridCell style={{ textAlign: "center", color: "green" }}>
          <H4>WELCOME TO THE DRAMARAMA!</H4>
        </GridCell>
        <GridCell style={{ textAlign: "center" }}>
        <Button theme="primary">Click Here!</Button>
        </GridCell>
      </Grid>
    )
  }
}

export default Survey
