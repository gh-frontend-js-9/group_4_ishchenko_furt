import axios from "axios";
import {Component} from "react";
import './axiosConfig'

interface IProps {
    getListPosts?: any
}

export class postsBlogService extends Component  <IProps, {}> {
    static get appUrl(){
        return axios.defaults.baseURL;
    }
    static get listOfPostsUrl() {
        return '/posts/?category=popular&page=1&limit=3'
    }
    static get postUrl() {
        return `/posts/5e6f34f5a3281f9335104043`
    }

    static getListPosts() {
        return  axios.get(this.appUrl + this.listOfPostsUrl)
    }
    static getSinglePost() {
        return  axios.get(this.appUrl + this.postUrl)
    }

}