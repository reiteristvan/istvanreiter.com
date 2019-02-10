
export async function fetchPost(url) {
    var response = await fetch(url);
    return response.text();
}