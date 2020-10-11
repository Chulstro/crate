// formatted similar to other actions files in this code base, this will contain
// necessary network requests and action creators as well as dispatch as needed

// similar imports for network requests, subject to change
import axios from "axios";
import { query, mutation } from "gql-query-builder";

// example action types
export const GET_MENS_CLOTHING = ''
export const GET_WOMENS_CLOTHING = ''
export const GET_MENS_ACCESSORIES = ''
export const GET_WOMENS_ACCESSORIES = ''
export const GET_ALL_MENS = ''
export const GET_ALL_WOMENS = ''

// nav action types as well? for moving forward and backward

export const moveForward = () => {
  // handles navigation forward through survey
}

export const moveBackward = () => {
  // handles navigation backward through survey
}

export const fetchItems = () => {
  // gets images, conditional based on which crate is clicked on?
}

