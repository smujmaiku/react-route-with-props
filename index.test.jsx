const React = require('react');
const { configure, shallow } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const makeRoute = require('.');

configure({ adapter: new Adapter() });

describe('react-route-with-props', () => {
	it('should pass props to the supplied component', () => {
		const component = props => <div {...props} />;
		const props = { src: 'image', alt: 'words' };
		const routeData = {
			location: { uri: 'https' },
			match: { params: { a: 1 } },
			history: { was: 'here' },
		};
		const Route = makeRoute(props);

		const mock = shallow(<Route path="/" exact Component={component} />);
		const mockProps = mock.props();
		expect(mockProps).toEqual({ path: '/', exact: true, component: expect.any(Function) });
		const MockComponent = mock.props().component;

		const mockComponent = shallow(<MockComponent {...routeData} />);
		expect(mockComponent.props()).toEqual({ ...routeData, ...props });
	});
});
