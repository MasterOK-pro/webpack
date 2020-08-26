import {ChatList} from "./chatlist.js"
import {Contact} from "./contact.js"
import {DiscoverList} from "./discover.js"
import {Me} from "./me.js"

const Home = {
    data () {
        return {
            pageName: "",
            activeSubMsg: ""
        }
    },
    props: ["active-msg", "jokelist"],
    created () {
        this.activeSubMsg = this.activeMsg;
        if (!this.activeSubMsg) {
            this.activeSubMsg = "wechat";
        }
        this.navGuide (this.activeSubMsg);
        // console.log (this, "home");
    },
    components: {
        wechat: ChatList,
        contact: Contact,
        discovery: DiscoverList,
        me: Me
    },
    template: `
        <div class="home">
            <div class="home-head" :class="{hiden: activeSubMsg=='me'}">
                <span class="home-head-title">{{pageName}}</span>
                <div class="home-head-btns">
                    <a href="" class="home-search">&#xe633;</a>
                    <a href="" class="home-add">+</a>
                </div>
            </div>
            <div class="home-content" @click.capture="$emit('change-action',{dirction: 'enter'})">
                <component :is="activeSubMsg" @get-info-sub="getInfo" :jokelist="jokelist"></component>
            </div>
            <div class="home-end">
                <div class="home-end-btn nav-wechat" :class="{active: activeSubMsg=='wechat'}" @click="navGuide('wechat')">
                    <p>&#xe743;</p>
                    <p>微信</p>
                </div>
                <div class="home-end-btn nav-contact" :class="{active: activeSubMsg=='contact'}" @click="navGuide('contact')">
                    <p>&#xe6c2;</p>
                    <p>通讯录</p>
                </div>
                <div class="home-end-btn nav-discovery" :class="{active: activeSubMsg=='discovery'}" @click="navGuide('discovery')">
                    <p>&#xe641;</p>
                    <p>发现</p>
                </div>
                <div class="home-end-btn nav-me" :class="{active: activeSubMsg=='me'}" @click="navGuide('me')">
                    <p>&#xe642;</p>
                    <p>我的</p>
                </div>
            </div>
        </div>
    `,
    methods: {
        navGuide (index) {
            this.activeSubMsg = index;
            if (index=="wechat") {
                this.pageName = "微信";
            }
            if (index=="contact") {
                this.pageName = "通讯录";
            }
            if (index=="discovery") {
                this.pageName = "发现";
            }
            if (index=="me") {
                // this.pageName = "me";
            }
        },
        getInfo (info) {
            this.$emit("get-info", info);
        }
    },
}

export {Home}