// import React, { Component } from 'react'
// class Slideshow extends Component {
//     render() {
//         const listItems = [
//             { img: 'https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg' },
//             { img: 'https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg' },
//             { img: 'https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg' },
//             { img: 'https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg' }
//         ]

//         return (
//             <div>
//                 <img src='https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg'></img>
//                 <h1>asd</h1>
//             </div>
//         )
//     }
// }
// export default Slideshow

import React, { Component } from 'react'
import './SlideShow.css'
class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                "https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
                "https://image.tmdb.org/t/p/original/cGOPbv9wA5gEejkUN892JrveARt.jpg",
                "https://image.tmdb.org/t/p/original/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg",
                "https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">

                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}


const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}


const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}
export default Slider
