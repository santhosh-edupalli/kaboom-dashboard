import React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink as Link } from 'react-router-dom'
import HistoricalChart from './HistoricalChart/HistoricalChart'
import LiveChart from './LiveChart/LiveChart'
import { ROUTES } from '../config/routes'
import './decider.css'

export default function Decider() {
    return (
        <React.Fragment>
            <div className="height-100">
                <Router>
                    <div className="nav">
                        <Link className="nav-btn" exact activeClassName="active-nav" to={ROUTES.HISTORICAL_DATA}>Home</Link>
                        <Link className="nav-btn" activeClassName="active-nav" to={ROUTES.LIVE_DATA}>Live Chart</Link>
                    </div>
                    <Switch>
                        <Route path={ROUTES.HISTORICAL_DATA} exact component={HistoricalChart}></Route>
                        <Route path={ROUTES.LIVE_DATA} exact component={LiveChart}></Route>
                    </Switch>
                </Router>
            </div>
        </React.Fragment>
    );
}

