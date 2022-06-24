import { Component } from "react";
import FeaturedCollection from "./FeaturedCollection";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import OurStory from './OurStory'

class Homepage extends Component {
    render() {
        return(
        <>
            <Hero />
            <FeaturedCollection />
            <OurStory />
            <FeaturedCollection />
            <Newsletter />
        </>
        )
    }
}

export default Homepage