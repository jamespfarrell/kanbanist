import React from 'react'
// import { Link } from 'react-router-dom'
// import { Icon, Position, Tooltip } from '@blueprintjs/core'

export default class Footer extends React.Component {
    render () {
        return (
            <div>
                <h3 style={{ marginLeft: '20px' }}>
                    "The only thing that's real is the way we look at things" <span role='img'>🦜</span>
                </h3>
                {/* <nav className="Footer bp3-navbar bp3-dark">
                    <div className="bp3-navbar-group bp3-align-left">
                        <a href="https://github.com/mwakerman/kanbanist" target="_blank" rel="noopener noreferrer">
                            <button className="bp3-button bp3-minimal bp3-icon-code" />
                        </a>
                        <span className="bp3-navbar-divider hide-if-small-750" />
                        <Tooltip content={"Support Kanbanist"} on="hover" position={Position.RIGHT}>
                            <a href="https://www.buymeacoffee.com/RUZ5hab" target="_blank" rel="noopener noreferrer">
                                <button className="bp3-button bp3-minimal bp3-icon-dollar" />
                            </a>
                        </Tooltip>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <Link to="/issues" className="hide-if-small-750">
                            <button className="bp3-button bp3-minimal bp3-icon-application">Known Issues</button>
                        </Link>

                        <a
                            href="https://github.com/mwakerman/kanbanist/issues"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="bp3-button bp3-minimal bp3-icon-error hide-if-small-750">
                                Bugs & Feature Requests
                            </button>
                        </a>

                        <span className="bp3-navbar-divider hide-if-small-750" />
                        <Tooltip content={`v.${process.env.REACT_APP_VERSION}`} position={Position.LEFT} on="hover">
                            <Icon icon="info-sign" />
                        </Tooltip>
                    </div>
                </nav> */}
            </div>
        )
    }
}
