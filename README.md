# React Route With Props

[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]

A simple wrapper to pass properties into a `react-router-dom` route component

## Installation

`npm i smujmaiku/react-route-with-props`

## Examples

### ES6

Babel with `import`

```jsx
import React from 'react';
import { Switch } from 'react-router-dom';
import makeRoute from 'react-route-with-props';

const Home = props => <div {...props}>Home</div>;
const About = props => <div {...props}>About</div>;

const RouterSwitch = (props) => {
	const Route = makeRoute(props);

	return <Switch>
		<Route path="/" exact Component={Home} />
		<Route path="/about" exact Component={About} />
	</Switch>;
};

export default RouterSwitch;
```

## License

Copyright (c) 2019, Michael Szmadzinski. (MIT License)

[travis-image]: https://travis-ci.org/smujmaiku/react-route-with-props.svg?branch=master
[travis-url]: https://travis-ci.org/smujmaiku/react-route-with-props
[codecov-image]: https://coveralls.io/repos/github/smujmaiku/react-route-with-props/badge.svg
[codecov-url]: https://coveralls.io/github/smujmaiku/react-route-with-props
