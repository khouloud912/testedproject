import { GET_ARTICLEINPUT,GET_ARTICLEOUTPUT,GET_ARTICLES } from "./AllArticleTypes";
import axios from 'axios';

export const getAllArticles=()=> {
    console.log("hjkjkj")
    return function(dispatch) {
      return axios.get("http://localhost:3001/Article/getAllArticles")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_ARTICLES,
            payload:{
                articles:response.data
            }
               });
      });
    }
}
export const addArticle=(newArticle)=>dispatch=>{
    axios.post("http://localhost:3001/Article/addArticle",newArticle)
    .then(res=>dispatch(getAllArticles()))
    // .then(res =>alert("user added"))1
    .catch(err=>console.log(err))
}
export const deleteArticle=(id)=>dispatch=>{
    axios.delete(`http://localhost:3001/Article/deleteArticle/${id}`)
    .then(res=>dispatch(getAllArticles()))
    .catch(err=>console.log(err))
}
/*
export const putArticle=(id,quantity  )=>dispatch=>{
    axios.put(`http://localhost:5000/Article/${id}`,new  )
    .then(res=>dispatch(getAllArticles()))
    .catch(err=>console.log(err))
}*/
export const getOneArticle=(id,quantity, action)=>dispatch=>{
    console.log("koki habitek");
    console.log("id:", id, "action:", action , "quantity" , quantity)
      axios.post(`http://localhost:3001/Article/getArticle/${id}`, { quantity , action})
    .then(res=>{
        console.log(res)
        dispatch(getAllArticles())
    })
    .catch(err=>console.log(err))
}

/********************************************************************************************* Article Inputs*/


export const getArticlesInputs=()=> {
    console.log("Article inputs")
    return function(dispatch) {
      return axios.get("http://localhost:3001/ArticleInput/getAllArticleInputs")
        .then(( response ) => {
            console.log(response.data);
        dispatch({
            type:GET_ARTICLEINPUT,
            payload:{
                articlesInput:response.data
            }
               });
      });
    }
}

export const addArticleInput=(newArticleInput)=>dispatch=>{
    console.log( "new Article input quantity",newArticleInput.quantity)
    axios.post("http://localhost:3001/ArticleInput/addArticleInput",newArticleInput)
    .then(res=>{
        dispatch(getArticlesInputs())
        dispatch(getOneArticle(newArticleInput.articleId, newArticleInput.quantity , "input"))
    })
    // .then(res =>alert("user added"))
    .catch(err=>console.log(err))
}
export const deleteArticleInput=(id)=>dispatch=>{
    axios.delete(`http://localhost:3001/ArticleInput/deleteArticleInput/${id}`)
    .then(res=>dispatch(getArticlesInputs()))
    .catch(err=>console.log(err))
}
/*
export const putContact=(id,updatedContact)=>dispatch=>{
    axios.put(`http://localhost:5000/contacts/${id}`,updatedContact)
    .then(res=>dispatch(getProviders()))
    .catch(err=>console.log(err))
}*/




/********************************************************************************************ArticleOutputs */


export const getAllArticlesOutputs=()=> {
    console.log("hjkjkj")
    return function(dispatch) {
      return axios.get("http://localhost:3001/ArticleOutput/getAllArticleOutput")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_ARTICLEOUTPUT,
            payload:{
                articlesOutput:response.data
            }
               });
      });
    }
}

export const addArticleOutput=(newArticleOutput)=>dispatch=>{
    axios.post("http://localhost:3001/ArticleOutput/addArticleOutput",newArticleOutput)
    .then(res=>{
        dispatch(getAllArticlesOutputs())
        dispatch(getOneArticle(newArticleOutput.articleId, newArticleOutput.quantity , "output"))
    })
    // .then(res =>alert("user added"))
    .catch(err=>console.log(err))
}
export const deleteArticleOutput=(id)=>dispatch=>{
    axios.delete(`http://localhost:3001/ArticleOutput/deleteArticleOutput/${id}`)
    .then(res=>dispatch(getAllArticlesOutputs()))
    .catch(err=>console.log(err))
}
/*
export const putContact=(id,updatedContact)=>dispatch=>{
    axios.put(`http://localhost:5000/contacts/${id}`,updatedContact)
    .then(res=>dispatch(getProviders()))
    .catch(err=>console.log(err))
}*/


