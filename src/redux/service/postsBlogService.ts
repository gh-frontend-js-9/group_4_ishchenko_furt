import axios from "axios";
import {Component} from "react";
import './axiosConfig'

export class postsBlogService extends Component {
    static get appUrl() {
        return axios.defaults.baseURL;
    }
    static get appFakeUrl() {
        return 'http://www.mocky.io/v2/';
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

    static get popularThematicPostsUrl() {
        return '/posts/?category=popular&page=1&limit=4&fields=title,tags'
    }

    static get freelanceThematicPostsUrl() {
        return '/posts/?category=freelance&page=1&limit=4&fields=title,tags'
    }

    static get essentialsThematicPostsUrl() {
        return '/posts/?category=essentials&page=1&limit=4&fields=title,tags'
    }
    static get commentsListUrl() {
        return '5e9345b330000091001569c5'
    }

    static get newPostUrl() {
        return '5e9754303000006000b6dde5'
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

    static getPopularThematicPost() {
        return axios.get(this.appUrl + this.popularThematicPostsUrl)
    }

    static getFreelanceThematicPost() {
        return axios.get(this.appUrl + this.freelanceThematicPostsUrl)
    }

    static getEssentialsThematicPost() {
        return axios.get(this.appUrl + this.essentialsThematicPostsUrl)
    }
    static getCommentsList() {
        return axios.get( this.appFakeUrl + this.commentsListUrl)
    }
    static getNewPost() {
        return axios.get( this.appFakeUrl + this.newPostUrl)
    }
}