import React from 'react';
var papaParse = window.Papa;

export default class FileParser extends React.component{
  handleFile(e) {
    let file = e.target.files[0];
    let parsedData = papaParse.parse(file, {header: true});
    this.props.addFileData(parsedData);
  }

  render(){
    return (
      <div>
        <label htmlFor="fileParser">Upload File (.txt or .csv)</label>
        <input type="file" onChange={this.handleFile.bind(this)} />
      </div>
    )
  }
}
