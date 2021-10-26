import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'
import { Card } from '../../components';

import { Wrapper, Container, Search, Logo, Map, Carousel, CarouselTitle } from './styles'

const Home = () => {
    const [inputValue, setInputValue] = useState();

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight: true
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label='Pesquisar restaurante'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title='sei lah' />
                        <Card photo={restaurante} title='sei lah' />
                        <Card photo={restaurante} title='sei lah' />
                        <Card photo={restaurante} title='sei lah' />
                        <Card photo={restaurante} title='sei lah' />
                        <Card photo={restaurante} title='sei lah' />
                    </Carousel>
                </Search>
            </Container>
            <Map />
        </Wrapper>
    )
}

export default Home;