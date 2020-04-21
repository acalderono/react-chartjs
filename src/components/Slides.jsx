import React, { className } from 'react'
import Charts from './Charts';
import nextWeek from './../assets/icons/next_week-white.svg';
import people from './../assets/icons/people-white-shadow.svg';
import keyGreen from './../assets/icons/key-lightgreen-shadow.svg';



export const Slides = () => {

    const background = "#B4E462";
    const horas = "100 HH";
    const colorText = "white";

    return (
        <div className="slides">
            <div>
                <div className="title">Ocupación del Equipo</div>
                <div className="subtitle">Representación de las horas semanales</div>
            </div>
            <div className="group">
                <div className="real">
                    <Boton background={background} horas={horas} colorText={colorText}></Boton>
                </div>
                <div className="mini">
                    <MiniBoton></MiniBoton>
                </div>
            </div>

        </div>
    )

}

const Boton = ({ background, horas, colorText }) => {

    const styleText = `hh ${colorText}`;
    return (
        <div className="grupo" style={{ background }}>
            <img src={people} alt="people" className="vector" />
            <div className={styleText}>{horas}</div>
        </div>
    )

};

const MiniBoton = ({ background, horas, colorText }) => {
    const styleText = `hh ${colorText}`;

    return (
        <div className="grupo" style={{ background }}>
            <img src={keyGreen} alt="people" className="vector" />
            <div className="hh light-green">{horas}</div>
        </div>

    );
};


export default Slides;