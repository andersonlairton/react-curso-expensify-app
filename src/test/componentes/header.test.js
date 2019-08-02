//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import React from 'react';
import Cabecalho from '../../componentes/Cabecalho';
import toJSON from 'enzyme-to-json';

test('teste componente cabecalho', () => {
    const wrapper = shallow(<Cabecalho/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Exepensivo App');
    /*
    const renderer = new ReactShallowRenderer();
    renderer.render(<Cabecalho/>);
    //console.log(renderer.getRenderOutput());
    expect(renderer.getRenderOutput()).toMatchSnapshot();
     */
});