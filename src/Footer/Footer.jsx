import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
<div className="pagination">
  <span className="arrow left disabled">&#10094;</span>
  <span className="page active">1</span>
  <span className="page">2</span>
  <span className="page">3</span>
  <span className="page">4</span>
  <span className="page">5</span>
  <span className="arrow right">&#10095;</span>
</div>
  )
}
