
import { fetchContentJson } from './services/postService';

export async function initializeState() {
    var content = await fetchContentJson();
    State.posts = content;
}

export var State = {
    posts: []
};