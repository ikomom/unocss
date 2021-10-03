import { Rule } from '../../../types'
import { transitions } from './animations'
import { borders, borderStyles, borderRadius } from './border'
import { bgColors, borderColors, opacity, textColors } from './colors'
import { filters } from './filters'
import { flex } from './flex'
import { fonts, fontSizes, fontWeights, leadings, trackings } from './font'
import { gaps } from './gap'
import { grids } from './grid'
import { overflows } from './layouts'
import { alignContents, alignItems, alignSelfs, floats, insets, justifies, justifyItems, justifySelfs, objectPositions, orders, placeContents, placeItems, placeSelfs, positions, zIndexes } from './positions'
import { sizes } from './size'
import { paddings, margins } from './spacing'
import { verticalAligns, appearances, breaks, cursors, displays, pointerEvents, resizes, textAligns, textDecorations, textOverflows, textTransforms, userSelects, whitespaces } from './static'

export const defaultRules: Rule[] = [
  paddings,
  margins,
  displays,
  opacity,
  textColors,
  textOverflows,
  textDecorations,
  textTransforms,
  textAligns,
  bgColors,
  borders,
  borderColors,
  borderStyles,
  borderRadius,
  fonts,
  fontSizes,
  fontWeights,
  flex,
  grids,
  gaps,
  positions,
  sizes,
  cursors,
  appearances,
  pointerEvents,
  resizes,
  verticalAligns,
  userSelects,
  whitespaces,
  breaks,
  trackings,
  leadings,
  overflows,
  positions,
  orders,
  justifies,
  justifyItems,
  justifySelfs,
  alignContents,
  alignItems,
  alignSelfs,
  placeContents,
  placeItems,
  placeSelfs,
  insets,
  floats,
  zIndexes,
  objectPositions,
  transitions,
  filters,
].flat(1)
