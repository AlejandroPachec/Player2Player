import PropTypes from 'prop-types';
import './ImgInput.css';

export const ImageInput = ({ handleClick, Text }) => {
    return (
        <div className="box" onClick={handleClick}>
            <div className="upload-photos">
                <div className="overlap-group">
                    <p className="text-wrapper">{Text}</p>
                    <img className="folders" src='/img/Folders.svg' alt="" />
                </div>
            </div>
        </div>
    );
};

ImageInput.propTypes = {
    handleClick: PropTypes.func.isRequired,
    Text: PropTypes.string.isRequired
};
