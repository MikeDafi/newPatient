import React from 'react';

class UploadForms extends React.Component {



    render(){
        return(
            <div>
                 <input type="file" name="file" onChange={this.props.gotChanged}/>
                 <button type="button" class="btn btn-success btn-block" onClick={this.props.gotSubmitted}>Upload</button>
            </div>
        );
    };
}

export default UploadForms;