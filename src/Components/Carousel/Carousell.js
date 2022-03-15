import imgCarousell1 from "../../img/carousel/1.jpg"
import imgCarousell2 from "../../img/carousel/2.jpg"
import imgCarousell3 from "../../img/carousel/3.jpg"
import Carousel from 'react-bootstrap/Carousel'

export const Carousell = () =>{

    return(
        <Carousel fade>
            <Carousel.Item>
                <img
                className=" d-block w-100"
                src={imgCarousell1}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imgCarousell2}
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imgCarousell3}
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}