import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchResults from '../components/SearchResults';
import sampleSearchData from '../assets/sampleSearchData'

describe('SearchResults', () => {
    it('renders without crashing', () => {
        shallow(<SearchResults />)
    })
    it('renders a series of youtube tumbnails', () => {
        const wrapper = mount(<SearchResults />)
        expect(wrapper.find(sampleSearchData.items[0].id.videoId))
        expect(wrapper.find(sampleSearchData.items[1].id.videoId))
        expect(wrapper.find('img')).toHaveLength(2)
    })
})