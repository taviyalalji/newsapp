import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  
  constructor(){
    super();
    this.state = {
        articles: [],
        loading: true
    }
}

async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5720d3847b5b493984cb487e0d154ae8";
  let data = await fetch(url);
  let pastData = await data.json()
  console.log(pastData)
  this.setState({articles: pastData.articles})
}

  render() {
    return (
      <div className='container my-3'>
        <h1 className='d-flex justify-content-center'>Bullet - top headline</h1>
        <div className='row my-4'>
             {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url} >
            <Newsitem title={element.title?element.title.slice(0, 45):""} discription={element.description?element.description.slice(0, 90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        </div>
     </div>
    )
  }
}
