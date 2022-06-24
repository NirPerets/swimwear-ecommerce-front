import { Component } from "react";
import StoryImage from '../../story.jpg'

class OurStory extends Component {
    render() {
        return(
            <div className="section about_section">
                <div className="image_container" style={{ backgroundImage: "url(" + StoryImage + ")" }}></div>
                <div className="text_block">
                    <div className="subtitle heading">Our Story</div>
                    <div className="title heading">Meet Floral Love</div>
                    <p className="body__text">
                        "Before I begin the process of creation, I cleanse external stimuli around me and my airway expands 
                        within me and deepens to the entrance of the fountain of creation pulsing within me, 
                        connected, like an umbilical cord, to the heart of ancient Jerusalem.<br/><br/>

                        I'm washed away in a wave of soft and healing life energy. Hence, the jewel seems to be made by itself: 
                        through my palms, in my breathing rate and out of soft attention to the material. 
                        Suddenly: the jewel appears! All I have to do is be filled with a sense of satisfaction,
                        meaning and delicate charm."<br/><br/>

                        The jewels on "To-Be" collection are sculpted by Tzipora Oriya out of unique meditation,
                        which draws its inspiration from the connection to ancient Hebrew roots,
                        the land of Israel and ancient Jerusalem.  
                    </p>
                    <a href="#" className="btn btn__primary">
                        View All Products
                    </a>
                </div>
            </div>
        )
    }
}

export default OurStory