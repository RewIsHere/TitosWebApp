import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './sidebar.css'

const Sidebar = (props) => {
  const [isActive, setIsActive] = useState(true)
  return (
    <div className={`sidebar-container ${props.rootClassName} `}>
      <div className="sidebar-sidebar">
        <nav className="sidebar-nav">
          <div className="sidebar-container1">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="sidebar-logo"
            />
          </div>
          <div className="sidebar-dashboard-button">
            <div className="sidebar-icon-box">
              <svg viewBox="0 0 1024 1024" className="sidebar-icon">
                <path d="M101.803 350.336c-10.069 7.851-16.469 20.011-16.469 33.664v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-469.333c-0.043-12.8-5.717-25.301-16.469-33.664l-384-298.667c-15.275-11.733-36.736-12.16-52.395 0zM682.667 896v-384c0-23.552-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667v384h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-448.469l341.333-265.472 341.333 265.472v448.469c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM426.667 896v-341.333h170.667v341.333z"></path>
              </svg>
            </div>
            <span className="sidebar-text">Inicio</span>
          </div>
          <div className="sidebar-dashboard-button1">
            <div className="sidebar-icon-box1">
              <svg viewBox="0 0 1024 1024" className="sidebar-icon2">
                <path d="M512 640q34 0 60-26t26-60-26-59-60-25-60 25-26 59 26 60 60 26zM298 298q0 34 26 60t60 26 60-26 26-60-26-59-60-25-60 25-26 59zM512 86q230 0 384 170l-384 682-384-682q154-170 384-170z"></path>
              </svg>
            </div>
            <span className="sidebar-text1">Menu</span>
          </div>
          <div className="sidebar-dashboard-button2">
            <div className="sidebar-container2">
              <div className="sidebar-icon-box2"></div>
              <svg viewBox="0 0 1024 1024" className="sidebar-icon4">
                <path d="M908.672 602.325c24.875-25.003 37.291-57.685 37.291-90.24 0.043-32.597-12.373-65.365-37.291-90.453l-366.507-366.507c-7.723-7.68-18.389-12.459-30.165-12.459h-426.667c-23.552 0-42.667 19.115-42.667 42.667v426.667c0 10.923 4.181 21.845 12.501 30.208l366.592 366.165c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.453-37.504zM848.341 541.995l-305.92 305.92c-8.363 8.363-19.2 12.544-30.165 12.544s-21.845-4.139-30.165-12.459l-354.091-353.707v-366.293h366.336l354.005 354.005c8.192 8.235 12.331 19.072 12.331 30.037 0 10.923-4.139 21.717-12.331 29.952zM341.333 298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
              </svg>
            </div>
            <span className="sidebar-text2">Promos</span>
          </div>
          <div className="sidebar-dashboard-button3">
            <div className="sidebar-icon-box3">
              <svg viewBox="0 0 1024 1024" className="sidebar-icon6">
                <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
            </div>
            <span className="sidebar-text3">
              <span className="sidebar-text4">Pedidos</span>
              <br></br>
            </span>
          </div>
        </nav>
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src1: '/playground_assets/logo-200h.png',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
}

Sidebar.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Sidebar
