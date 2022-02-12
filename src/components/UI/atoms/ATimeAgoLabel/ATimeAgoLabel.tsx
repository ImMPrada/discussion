import React from 'react';
import { ATimeAgoLabelTypes } from './types'
import './styles.css'


const ATimeAgoLabel = ({label}: ATimeAgoLabelTypes) => (
  <div className="AtimeAgoLabel">
    <span>{label}</span>
  </div>
)

export default ATimeAgoLabel
