import React from 'react';
import Dropzone from 'react-dropzone';
var papaParse = window.Papa;

export default class FileParser extends React.Component{
  handleFile(files) {
    // console.log(files)
    let file = files[0];
    // console.log(file, papaParse.parse);
    let parsedData = papaParse.parse(file, {
      header: true,

      complete: results => {
      this.props.addFileData(results.data.map(item => {
        return {
          name: `${item.first_name} ${item.last_name}`,
          email: item.email
        }
      }));
    }});
  }

  onDrop(files) {
    console.log('received files: ', files);
  }

  render(){
    return (

      <div className="dropZone">
        <Dropzone onDrop={this.handleFile.bind(this)}>
          <div>Drop a csv or txt file</div>
        </Dropzone>
      </div>
    )
  }
}
