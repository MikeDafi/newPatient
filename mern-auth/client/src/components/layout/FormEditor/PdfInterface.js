import React from 'react';
import Pdf2Pic from './Pdf2Pic';
import UploadForms from './UploadForms';
class PdfInterface extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }


    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        
        // const data = new FormData() 
        // data.append('file', this.state.selectedFile)
    }

    render() {
        return (
            <div>
                hi
                <UploadForms gotSubmitted={this.onClickHandler.bind(this)} gotChanged={this.onChangeHandler.bind(this)} /> 
            </div>
        );
    };
}

export default PdfInterface;