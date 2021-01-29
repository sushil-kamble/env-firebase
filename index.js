const app = Vue.createApp({
    el: "#app",
    data() {
        return {
            picked: "react",
            vueInit: "const firebaseConfig = {\n" +
                "  apiKey: process.env.VUE_APP_API_KEY,\n" +
                "  authDomain: process.env.VUE_APP_AUTH_DOMAIN,\n" +
                "  projectId: process.env.VUE_APP_PROJECT_ID,\n" +
                "  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,\n" +
                "  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,\n" +
                "  appId: process.env.VUE_APP_APP_ID\n" +
                "};\n" +
                "\n" +
                "firebase.initializeApp(firebaseConfig);",
            reactInit: "const firebaseConfig = {\n" +
                "  apiKey: process.env.REACT_APP_API_KEY,\n" +
                "  authDomain: process.env.REACT_APP_AUTH_DOMAIN,\n" +
                "  projectId: process.env.REACT_APP_PROJECT_ID,\n" +
                "  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,\n" +
                "  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,\n" +
                "  appId: process.env.REACT_APP_APP_ID\n" +
                "};\n" +
                "\n" +
                "firebase.initializeApp(firebaseConfig);",
            normalInit: "const firebaseConfig = {\n" +
                "  apiKey: process.env.API_KEY,\n" +
                "  authDomain: process.env.AUTH_DOMAIN,\n" +
                "  projectId: process.env.PROJECT_ID,\n" +
                "  storageBucket: process.env.STORAGE_BUCKET,\n" +
                "  messagingSenderId: process.env.MESSAGING_ID,\n" +
                "  appId: process.env.APP_ID\n" +
                "};\n" +
                "\n" +
                "firebase.initializeApp(firebaseConfig);",
            config: null,
            options: ["normal", "react", "vue"],
            hidden: true,
            result: []
        };
    },
    computed: {
        renderToTemplate() {
            if (this.picked && this.config) {
                return this.renderRes();
            } else {
                return "Paste your config. (Copy everything from Firebase SDK snippet)";
            }
        }
    },
    watch: {
        picked() {
            this.hidden = true
        },
        config() {
            this.hidden = true
        }
    },
    methods: {
        renderRes() {
            let mainStrToList = this.getFromBetween(this.config).split(",");
            let prepend = "";
            if (this.picked === "react") {
                prepend = "REACT_APP_";
            } else if (this.picked === "vue") {
                prepend = "VUE_APP_";
            } else {
                //
            }

            this.result = [];
            mainStrToList.forEach(prop => {
                let trimmed = prop.trim();
                const index = trimmed.indexOf(":");
                const leftSide =
                    prepend + this.camelToUnderscore(trimmed.slice(0, index));
                const rightSide = trimmed.slice(index + 3, -1);
                this.result.push(leftSide + "=" + rightSide + "\n");
            });
            return this.result.join("");
        },
        getFromBetween(str) {
            return str.substring(str.indexOf("{") + 1, str.indexOf("}"));
        },
        copyText() {
            navigator.clipboard
                .writeText(this.renderToTemplate)
                .then(() => console.log("copied"));
            this.hidden = false;
        },
        copyTextInit() {
            if (this.picked === "react") {
                navigator.clipboard
                    .writeText(this.reactInit)
                    .then(() => console.log("copied init"));
            } else if (this.picked === "vue") {
                navigator.clipboard
                    .writeText(this.vueInit)
                    .then(() => console.log("copied init"));
            } else {
                navigator.clipboard
                    .writeText(this.normalInit)
                    .then(() => console.log("copied init"));
            }

            this.hidden = false;
        },
        camelToUnderscore(key) {
            const result = key.replace(/([A-Z])/g, " $1");
            return result.split(" ").join("_").toUpperCase();
        }
    }
});

app.mount("#app");
