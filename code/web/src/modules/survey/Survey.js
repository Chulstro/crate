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

import { APP_URL_API } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { moveForward, moveBackward, getImages, resetSurvey, selectClothing, submitSurvey } from './api/actions'

class Survey extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }

    this.startForward = this.startForward.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.getResults = this.getResults.bind(this)
  }

  startForward() {
    this.props.moveForward()
  }

  renderCards() {
    return this.props.surveyInfo.clothingList.map(product => {
      if (product.category === this.props.surveyInfo.views[this.props.surveyInfo.currentView]) {
        return (
          <GridCell>
            <Card style={{ width: '25em', margin: '2.5em auto'}} className={`product0${product.id} ${product.styleId} Card`} onClick={this.selectProduct}>
              <img src={ APP_URL_API + product.image } alt={product.image.substring(14)} style={{ width: '100%' }}/>
            </Card>
          </GridCell>
        )
      }
    })
  }

  selectProduct(event) {
    const allCards = document.querySelectorAll('.Card');
    allCards.forEach(card => card.style.border = 'none');
    const card = event.target.closest('.Card');
    console.log(card);
      this.props.selectClothing(event);
      card.style.border = "3px solid magenta";
  }

  getResults() {
    console.log(this.props.surveyInfo.selectedClothing)
    const styleValues = Object.values(this.props.surveyInfo.selectedClothing).reduce((styleValue, clothingStyle) => {
      styleValue[clothingStyle] ? styleValue[clothingStyle] += 1 : styleValue[clothingStyle] = 1;
      return styleValue;
    }, {})
    //If we're returning total style ids:
    //this.props.submitSurvey(styleValues)
    //If we're returning a single style id:
    // const arrangedValues = Object.keys(styleValues).sort((styleA, styleB) => {
    //   return styleValues[styleB] - styleValues[styleA];
    // })
    // const finalStyle = { styleId: Number(arrangedValues[0]) }
    // this.props.submitSurvey(finalStyle);
    //If it's just the number, use the above one but change finalStyle to be assigned to just Number(arrangedValues[0])
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
              {this.props.surveyInfo.views[this.props.surveyInfo.currentView + 1] === 'survey-finish' && (
                <Button
                  theme="primary"
                  style={{ alignBottom: true, 'marginTop': '3em' }}
                  onClick={ this.getResults }
                >
                  See Your Style
                </Button>
              )}
              {this.props.surveyInfo.views[this.props.surveyInfo.currentView + 1] !== 'survey-finish' && (
              <Button
                theme="primary"
                style={{ alignBottom: true, 'marginTop': '3em' }}
                onClick={ this.props.moveForward }
              >
                Next Page
              </Button>
            )}
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

export default connect(surveyState, { moveForward, moveBackward, getImages, resetSurvey, selectClothing, submitSurvey })(Survey)
