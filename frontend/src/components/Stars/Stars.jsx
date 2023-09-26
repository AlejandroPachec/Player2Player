import './stars.css';
import PropTypes from 'prop-types';

export const Stars = (handleClick) => {
    return (
        <div className="box" onClick={handleClick}>
            <img className="stars" alt="Stars" src="/img/stars.png" />
        </div>
    );
};

const handleClick = () => {
    //! Falta agregar la lógica y agregar iconos de media estrella y entera para reflejar el rating del usuario en concreto y que el onClick te lleve a la página de reviews de ese usuario
};
Stars.propTypes = {
    handleClick: PropTypes.func.isRequired
};
