import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PDFObject from 'pdfobject';

class PdfViewer extends Component {
  componentDidMount() {
    const { filePath, containerId } = this.props;
    PDFObject.embed(filePath, `#${containerId}`);
  }

  render() {
    const { width, height, containerId } = this.props;

    return <div style={{ width, height }} id={containerId} />;
  }
}

PdfViewer.propTypes = {
  filePath: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  containerId: PropTypes.string,
};

PdfViewer.defaultProps = {
  width: '100%',
  height: '100%',
  containerId: 'pdf-viewer',
};

export default PdfViewer;
