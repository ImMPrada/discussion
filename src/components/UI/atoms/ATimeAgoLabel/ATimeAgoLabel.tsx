import React from 'react';
import { ATimeAgoLabelTypes } from './types'
import './styles.scss'


const ATimeAgoLabel = ({label}: ATimeAgoLabelTypes) => (
  <div className="AtimeAgoLabel">
    <span>{label}</span>
  </div>
)

export default ATimeAgoLabel
