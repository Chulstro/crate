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
import ImageTile from "../../ui/image/Tile"
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// Want to have Loading handy

import Loading from "../common/Loading";
