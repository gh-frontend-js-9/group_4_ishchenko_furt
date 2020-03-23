import axios from "axios";
import {Component} from "react";
import './axiosConfig'

interface IProps {
    getListPosts?: any
}

export class postsBlogService extends Component  <IProps, {}> {
    static get appUrl() {
        return axios.defaults.baseURL;
    }

    static get listOfPostsUrl() {
        return '/posts/?category=popular&page=1&limit=3'
    }

    static get popularPostsUrl() {
        return '/posts/?category=popular&page=1&limit=1'
    }

    static get essentialsPostsUrl() {
        return '/posts/?category=essentials&page=1&limit=1'
    }

    static get freelancePostsUrl() {
        return '/posts/?category=freelance&page=1&limit=1'
    }

    static get featuredPostsUrl() {
        return '/posts/?category=popular&page=1&limit=2'
    }

    static get postUrl() {
        return `/posts/5e6f34f5a3281f9335104043`
    }

    static getListPosts() {
        return axios.get(this.appUrl + this.listOfPostsUrl)
    }

    static getPopularPosts() {
        return axios.get(this.appUrl + this.popularPostsUrl)
    }

    static getFeaturedPost() {
        return axios.get(this.appUrl + this.featuredPostsUrl)
    }

    static getEssentialsPost() {
        return axios.get(this.appUrl + this.essentialsPostsUrl)
    }

    static getFreelancePost() {
        return axios.get(this.appUrl + this.freelancePostsUrl)
    }

    static getSinglePost() {
        return axios.get(this.appUrl + this.postUrl)
    }

}