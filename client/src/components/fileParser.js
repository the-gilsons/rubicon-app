import React from 'react';
import Dropzone from 'react-dropzone';
var papaParse = window.Papa;

export default class FileParser extends React.Component{
  handleFile(files) {
    let file = files[0];
    this.props.addFileName(file.name);

    let parsedData = papaParse.parse(file, {
      header: true,

      complete: results => {
      this.props.addFileData(results.data.map(item => {
        return {
          name: `${item.first_name} ${item.last_name}`,
          email: item.email
        };
      }));
    }});
  }

  onDrop(files) {
    console.log('received files: ', files);
  }

  render(){
    let dropMsg = this.props.fileName === '' ? 'Drop a csv or txt file' : 'File to Upload: ' + this.props.fileName;
    return (
      <div className="dropZone">
        <Dropzone onDrop={this.handleFile.bind(this)}>
          <div className='dropMsg'>{dropMsg}</div>
        </Dropzone>
      </div>
    )
  }
}
