/*
 * @Author: zhanghuiming
 * @Date:   2017-09-21 09:38:08
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-21 09:56:12
 */
import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const ParamsExample = () => (
	<Router>
		<div>
			<h2>Accounts</h2>
			<ul>
				<li>
					<Link to="/netflix">Netflix</Link>
				</li>
				<li>
					<Link to="/zillow-group">Zillow Group</Link>
				</li>
				<li>
					<Link to="/yahoo">Yahoo</Link>
				</li>
				<li>
					<Link to="/modus-create/test">Modus Create</Link>
				</li>
			</ul>
			<Route path="/:id" component={Child}/>
		</div>
	</Router>
)

const Child = ({
	match
}) => (
	<div>
		<h3>ID:{match.params.id}</h3>
	</div>
)

export default ParamsExample;