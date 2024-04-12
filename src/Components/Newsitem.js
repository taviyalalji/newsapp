import React,{Component} from "react";

export default class Newsitem extends Component {

    render(){
        let {title, discription, imageUrl, newsUrl } = this.props;
        return(
           <div>
           <div className="card" style={{width: "18rem", marginTop:'70px'}} >
            <img className="card-img-top" style={{height: '200px', objectFit: 'cover'}} src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{discription}...</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
            </div>
        )
    }
}