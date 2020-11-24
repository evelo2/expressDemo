const loadNavHTML = async (selector = '.navigation ul') => {
    const res = await fetch('nav');
    const html = await res.text();

    document.querySelector(selector).innerHTML = html;
};

export {
    loadNavHTML
};