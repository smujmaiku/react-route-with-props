/*!
 * React Route With Props <https://github.com/smujmaiku/react-route-with-props>
 * Copyright(c) 2019 Michael Szmadzinski
 * MIT Licensed
 */

const React = require('react');
const { Route } = require('react-router-dom');
const PropTypes = require('prop-types');

const makeRoute = (props) => {
	const RouteWithProps = ({
		Component,
		...routeProps
	}) => (
		<Route
			component={({ location, match, history }) => (
				<Component
					location={location}
					match={match}
					history={history}
					{...props}
				/>
			)}
			{...routeProps}
		/>
	);

	RouteWithProps.propTypes = {
		Component: PropTypes.func.isRequired,
	};

	return RouteWithProps;
};

exports = module.exports = makeRoute;
