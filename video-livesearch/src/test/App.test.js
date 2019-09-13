import React from 'react';
import {shallow} from 'enzyme';
import App from '../components/App'
import SearchResults from '../components/SearchResults'

describe('App', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    })
    it('renders the search results component', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(<SearchResults />))
    })
})