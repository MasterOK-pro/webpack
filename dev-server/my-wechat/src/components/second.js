import {ChatView} from "../components/chatview.js"
import {FriendView} from "../components/friendview.js"
import {MeView} from "../components/meview.js"
import {DiscoverView} from "../components/discoverview.js"


const Second = {
    data () {
        return {
            activeMsg: ""
        }
    },
    props: ["bridge", "jokelist"],
    components: {
        "chat-view": ChatView,
        "friend-view": FriendView,
        "me-view": MeView,
        "discover-view": DiscoverView
    },
    template: `
        <div class="second-view">
            <component :is="activeMsg" @change-action-sec="changeAction"
            :bridge="bridge" :jokelist="jokelist"></component>
        </div>
    `,
    created () {
        this.activeMsg = this.$route.query.id;
        // console.log(this);
    },
    methods: {
        changeAction (msg) {
            this.$emit("change-action", msg);
        }
    }
}

export {Second}