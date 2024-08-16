import PropTypes from 'prop-types';
import { FileUploader } from 'evergreen-ui';

const ImageUploader = ({ onUpload }) => (
  <FileUploader
    label="Subir Imagen"
    description="Arrastra una imagen aquí o haz clic para seleccionar una"
    onChange={onUpload}
    maxFiles={1}
    accept="image/*"
  />
);

ImageUploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default ImageUploader;
