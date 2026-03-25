export default () => {
    return {
        theme: {
            dark: true,
            name: "dark",
        },

        getThemeName() {
            if (localStorage.getItem("theme")) {
                this.theme.name = localStorage.getItem("theme");
                this.theme.dark = this.theme.name === "dark";
            } else if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                this.theme.name = "dark";
                this.theme.dark = true;
            }

            return this.theme.dark ? "dark" : "light";
        },

        toggleTheme() {
            this.theme.dark = !this.theme.dark;
            localStorage.setItem("theme", this.theme.dark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", this.theme.dark);
        },

        init() {
            console.log("AlpineJS DOM init");
            this.theme.dark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        },
    };
};
