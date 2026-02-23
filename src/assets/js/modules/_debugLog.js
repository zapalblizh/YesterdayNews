export default (...args) => {
    if (location.hostname.match("local") || window.sessionStorage.debug)
        console.log("🐍:", ...args);
};