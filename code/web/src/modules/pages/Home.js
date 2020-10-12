// Imports
//These lines import from different packages
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
//The main use of these imports is style.
import { Grid, GridCell } from '../../ui/grid'
import { H1, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { white } from '../../ui/common/colors'
import { textLevel1 } from '../../ui/common/shadows'

// App Imports
// These imports bring in routes and important info.
import { APP_URL } from '../../setup/config/env'
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user'
import Onboarding from './Onboarding'

// Component
//This is a styled component for the Home page.
const Home = (props) => (
  <div>
    {/* Home */}
    {/*Grid is a component where many alignment choices are already preset.*/}
    <Grid alignCenter={true} style={{
      backgroundImage: `url('${ APP_URL }/images/cover.jpg')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      //Interesting mathematical way to do the height
      height: 'calc(100vh - 5em)',
      textAlign: 'center',
      color: white
    }}>
      {/* SEO */}
      {/*Helmet is brought in by a package - it's a head manager and can change several different tags including title and meta.*/}
      <Helmet>
        <title>Monthly supply of clothes and accessories for Men and Women - Crate</title>
      </Helmet>

      {/* Content */}
      {/*GridCell is a styled component created to fit into a Grid component. Ironically, they use flexbox.*/}
      <GridCell>
      {/*Each header size already has a component made in the ui folder setting up their exact styling.*/}
        <H1 font="secondary" style={{ textShadow: textLevel1 }}>Crate</H1>

        <H4 style={{ textShadow: textLevel1, marginTop: '0.5em' }}>
          Your monthly subscription of trendy clothes and accessories
        </H4>

        {/* Call to action */}
        {
          //This ternary statement is checking to see if the user is authenticated or not. if it is, it goes to the first link;
          //if not, it goes to the second
          props.user.isAuthenticated
          //this adds the path '/crates' to the link
            ? <Link to={crateRoutes.list.path}>
            //this button uses the above link
                <Button theme="secondary" style={{ marginTop: '1em' }}>Get Subscription</Button>
              </Link>
              //this adds the path '/signup' to the link
            : <Link to={userRoutes.signup.path}>
                <Button theme="secondary" style={{ marginTop: '1em' }}>Get Started</Button>
              </Link>
        }
      </GridCell>
    </Grid>

    {/* Onboarding */}
    <Onboarding/>
  </div>
)

// Component Properties
Home.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function homeState(state) {
  return {
    user: state.user
  }
}

export default connect(homeState, {})(Home)
