let contentData = {};

async function fetchContent(language) {
    try {
        const response = await fetch(`language/${language}.json`);
        if (!response.ok) {
            throw new Error("Failed to load content");
        }
        contentData = await response.json();
        updateContent(language);
    } catch (error) {
        console.error(error);
    }
}

function updateContent(language) {
    document.title = contentData.title;

    for (const [key, value] of Object.entries(contentData.content)) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = value;
        }
    }
}

function syncLangSelection(event) {
    const lang1 = document.getElementById("lang1");
    const lang2 = document.getElementById("lang2");

    if (event.target.id === "lang1") {
        lang2.value = lang1.value;
        fetchContent(lang1.value);
    } else if (event.target.id === "lang2") {
        lang1.value = lang2.value;
        fetchContent(lang2.value);
    }
}

document.getElementById("lang1").addEventListener("change", syncLangSelection);
document.getElementById("lang2").addEventListener("change", syncLangSelection);

window.onload = () => fetchContent("en-us");
