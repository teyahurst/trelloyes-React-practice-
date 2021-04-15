import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';

describe('Card component', () => {

    //smoke

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title="title" content="content" />, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    //snapshot
    if('renders a card as expected', () => {
        const tree = renderer.create(
            <Card title="title" content="content"/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });



});