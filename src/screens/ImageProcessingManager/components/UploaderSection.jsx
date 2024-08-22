import React from 'react';
import { Pane, Button, Image } from 'evergreen-ui';
import { ImageUploader } from '../../../components';
import PropTypes from 'prop-types';

const UploaderSection = ({
  handleImageUploadWrapper,
  imagePreviews,
  confirmImagesUpload,
  images,
}) => (
  <Pane>
    <ImageUploader onUpload={handleImageUploadWrapper} />
    <Pane
      marginY={16}
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))"
      gap={8}
    >
      {imagePreviews.map((src, index) => (
        <Image key={index} src={src} width="100%" height="auto" />
      ))}
    </Pane>
    <Pane display="flex" justifyContent="flex-end">
      <Button
        appearance="primary"
        onClick={confirmImagesUpload}
        disabled={images.length === 0}
      >
        Continuar
      </Button>
    </Pane>
  </Pane>
);

UploaderSection.propTypes = {
  handleImageUploadWrapper: PropTypes.func.isRequired,
  imagePreviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  confirmImagesUpload: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UploaderSection;
