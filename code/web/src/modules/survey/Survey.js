import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'
import H4 from '../../ui/typography/H4'
import { grey, grey2 } from '../../ui/common/colors'
import Card from '../../ui/card/Card'

import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { moveForward, moveBackward, getImages, resetSurvey, selectClothing } from './api/actions'

class Survey extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
    
    this.startForward = this.startForward.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }

  startForward() {
    this.props.moveForward()
    // this.props.getImages()
  }

  renderCards() {
    return this.props.surveyInfo.clothingList.map(product => {
      return (
        <GridCell>
          <Card style={{ width: '25em', margin: '2.5em auto'}} className={`${product.name.split(" ").join("")} Card`} onClick={this.selectProduct}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }}/>
          </Card>
        </GridCell>
      )
    })
  }

  selectProduct(event) {
    const card = event.target.closest('.Card');
    console.log(card);
    if(!Object.keys(this.props.surveyInfo.selectedClothing).includes(this.props.surveyInfo.views[this.props.surveyInfo.currentView])) {
      this.props.selectClothing(event);
      card.style.border = "3px solid magenta";
    }
  }

  render() {
    return(
      <div>
        {this.props.currentView === "survey-start" &&
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
                onClick={ this.startForward }
              >
                Start survey
              </Button>
            </GridCell>
          </Grid>
        </div>
        }
        {this.props.currentView !== "survey-start" && this.props.currentView !== "survey-finish" &&
        <div>
          <Grid style={{height: '7em'}}>
            <GridCell style={{ textAlign: "center", alignCenter: true }}>
              <H4 style={{'paddingTop': '2em'}}>Choose your style</H4>
            </GridCell>
          </Grid>
          <Grid>
          {this.renderCards()}
          </Grid>
          <Grid>
            <GridCell style={{ textAlign: "center" }}>
              <Button
                theme="primary"
                style={{ alignBottom: true, 'marginTop': '3em' }}
                onClick={ this.props.moveBackward }
              >
                Previous Page
              </Button>
              <Button
                theme="primary"
                style={{ alignBottom: true, 'marginTop': '3em' }}
                onClick={ this.props.moveForward }
              >
                Next Page
              </Button>
            </GridCell>
          </Grid>
        </div>
        }
        {this.props.currentView === "survey-finish" &&
        <div>
          <Grid style={{height: '7em'}}>
            <GridCell style={{ textAlign: "center", alignCenter: true }}>
              <H4 style={{'paddingTop': '2em'}}>Your Style is Complete</H4>
            </GridCell>
          </Grid>
          <Grid>
            <GridCell style={{ textAlign: "center" }}>
              <Button
                theme="primary"
                style={{ alignBottom: true, 'marginTop': '3em' }}
                onClick={ this.props.resetSurvey }
              >
                Reset Survey
              </Button>
              <Link to={'/user/subscriptions'}>
                <Button
                  theme="primary"
                  style={{ alignBottom: true, 'marginTop': '3em' }}
                >
                  View Your Subscriptions
                </Button>
              </Link>
            </GridCell>
          </Grid>
        </div>
        }
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

export default connect(surveyState, { moveForward, moveBackward, getImages, resetSurvey, selectClothing })(Survey)
