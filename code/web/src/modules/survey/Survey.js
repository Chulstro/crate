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
import { moveForward, moveBackward } from './api/actions'

class Survey extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  render() {
    return(
      <div>
        <Grid style={{height: '7em'}}>
          <GridCell style={{ textAlign: "center", alignCenter: true }}>
            <H4 style={{'paddingTop': '2em'}}>WELCOME TO THE DRAMARAMA!</H4>
            <p style={{'marginTop': '1em'}}>Visualize your style.</p>
          </GridCell>
        </Grid>

        <Grid>
          <GridCell style={{ textAlign: "center" }}>
            <Button 
              theme="primary"  
              style={{ alignBottom: true, 'marginTop': '3em' }}
              onClick={ this.props.moveForward }
            >
              Start survey
            </Button>
          </GridCell>
        </Grid>
      </div>
    )
  }
}

const surveyState = state => {
  return {
    surveyInfo: state.surveyInfo,
    currentView: state.surveyInfo.views[state.surveyInfo.currentView]
  }
}

export default connect(surveyState, { moveForward })(Survey)
