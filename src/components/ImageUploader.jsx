import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const ImageUploader = ({ onUpload }) => (
  <Button
    variant="contained"
    component="label"
    fullWidth
    style={{ marginBottom: '16px' }}
  >
    Subir Imagen
    <input type="file" accept="image/*" hidden onChange={onUpload} />
  </Button>
);

ImageUploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default ImageUploader;
