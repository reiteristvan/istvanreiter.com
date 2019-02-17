
import { State } from '../state';

const contentJsonUrl = 'https://raw.githubusercontent.com/reiteristvan/reiteristvan.github.io/master/posts/content.json';

export async function fetchContentJson() {
    try {
        var response = await fetch(contentJsonUrl);
        return response.json();
    } catch (exception) {
        console.log(`Something bad happened :( ${exception.message})`);
        return [];
    }
}

export async function fetchPost(urlId) {
    var postData = State.posts.find(item => item.urlId = urlId);

    try {
        var response = await fetch(postData.markdownUrl);
        return response.text();
    } catch (exception) {
        console.log(`Something bad happened :( ${exception.message})`);
        return [];
    }
}