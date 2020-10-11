// this component will be the hub, with additional conditional rendering.

// following the conventions here, I think utilizing PureComponent wouldn't hurt

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Want to follow design system already laid out for us.
// Definitely will use the Grid and GridCell components, colors will probably be
// similar but are definitely subject to change.

import { Grid, GridCell } from '../../ui/grid'
import ImageTile from "../../ui/image/Tile" // might come in handy as well
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// Want to have Loading handy

import Loading from "../common/Loading";

// We'll need to use mapState && mapDispatch for the clothing images, as well as
// an indicator for which screen we should be on - the instructions screen, each
// survey page, or the survey finish page. Will ask team about this, not sure
// how I feel about everything living in this one file and rendering conditionally.

// if so, however, that means we'll be using indicators within state for the
// conditional renders

class StylePreferences extends PureComponent {
  constructor() {}

  componentDidMount = () => {
    // fetches images for correct crate
  }

  moveForward = () => {
    // sets state to change the view for conditional render
  }

  moveBackward = () => {
    // similar to moveForward... but backwards
  }

  render = () => {
    // will contain conditionals for each page
  }
}

// propTypes and all that fun stuff

export default connect()(StylePreferences)


