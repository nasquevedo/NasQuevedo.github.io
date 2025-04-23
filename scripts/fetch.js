const getFetch = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch(e) {
        console.log("Error trying to get info", e);
    }
}