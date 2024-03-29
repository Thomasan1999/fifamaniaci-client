<template>
    <div id="app">
        <alert-container/>
        <template v-if="sectionsActiveObject">
            <template v-if="$route.path !== `/` && sectionsActiveObject.nav !== false">
                <nav-component :links="navLinks" :sections="sections"/>
                <div class="section-container" :style="sectionStyle" @click="$store.commit(`set`, {props: {keyMode: `section`}})">
                    <router-view/>
                </div>
            </template>
            <router-view v-else-if="sectionsActiveObject.nav === false"/>
        </template>
    </div>
</template>

<script lang="ts">
    import {mixins}           from 'vue-class-component';
    import {Component, Watch} from 'vue-property-decorator';
    import AlertContainer     from '@/components/alert/AlertContainer.vue';
    import Category           from '@/views/Category.vue';
    import NavComponent       from '@/components/NavComponent.vue';
    import MainMixin          from '@/mixins/Main';

    @Component({
        components: {
            AlertContainer,
            NavComponent
        },
        name: `App`
    })
    export default class App extends mixins(MainMixin)
    {
        public async keydownOn($event: Merge<KeyboardEvent, { target: HTMLElement }>): Promise<void>
        {
            if (document.activeElement?.tagName === `INPUT`)
            {
                return;
            }

            if ($event.target.closest(`.app-types-select`))
            {
                $event.preventDefault();
            }

            const {commit, state} = this.$store;

            if (state.keyMode === `nav`)
            {
                if ($event.key === `ArrowLeft` && state.navVisible)
                {
                    commit(`set`, {props: {keyMode: `section`, navVisible: false}});
                }
                else if ($event.key === `ArrowRight`)
                {
                    commit(`set`, {props: {keyMode: `section`}});
                }
            }
            else if (state.keyMode === `section` && $event.key === `ArrowLeft`)
            {
                const tabs = state[`${this.sectionsActive}Tabs`];

                const navShow: () => void = () =>
                {
                    commit(`set`, {props: {keyMode: `nav`, navVisible: true}});
                };

                if (tabs)
                {
                    // const tabsValue = new this.$Object(new this.$Object(tabs.value).findNested(this.$store.state.nestedValuesGet(tabs))).entries();
                    const tabsValue: [string, TabValue][] = Object.entries(state[this.sectionsActive]?.categoryHas ? tabs.value[this.categoriesActive] : tabs.value);
                    const [tabFirstId] = tabsValue.find(([, tab]) =>
                    {
                        return tab.order === 0;
                    }) || [];

                    if (tabFirstId === tabs.active)
                    {
                        navShow();
                    }
                }
                else
                {
                    navShow();
                }
            }

            if (state.keyMode === `section` || document.activeElement?.tagName === `SELECT` || ($event.key !== `ArrowUp` && $event.key !== `ArrowDown`))
            {
                return;
            }

            const indexCurrent: number = this.navLinks.findIndex(([sectionName]) =>
            {
                return sectionName === this.sectionsActive;
            });

            const shift: -1 | 1 = $event.key === `ArrowDown` ? 1 : -1;
            const indexNew: number = new this.$Range(0, this.navLinks.length - 1).incorporate(indexCurrent + shift);

            this.$router.push(this.navLinks[indexNew][1].href as string).catch((err) =>
            {
                console.error(err);
            });
        }

        public resizeOn(): void
        {
            this.$store.commit(`set`, {props: {windowHeight: window.innerHeight, windowWidth: window.innerWidth}});
            document.documentElement.style.setProperty(`--vh`, `${window.innerHeight * 0.01}px`);
            this.smartsuppRenderOn();
        }

        public async $routerInit(): Promise<void>
        {
            const _vm = this;
            const {dispatch, getters, state} = this.$store;
            const sectionsActive: string = await dispatch(`sectionsActiveCalc`);

            const sectionsDefault: string = state.sections.value[sectionsActive].loggedIn ? state.sections.default : sectionsActive;
            const tabsTable = state[`${sectionsDefault}Tabs`];
            const tabsDefault: string = tabsTable?.default ? this.$cookies.get(`${sectionsDefault}TabsActive`) || tabsTable.default : ``;
            const redirectDefault = {name: `${sectionsDefault}${new this.$String(tabsDefault).capitalize()}`};

            this.$router.addRoutes([
                ...Object.entries(state.sections.value).filter(([, section]) =>
                {
                    return section.category === false;
                }).map(([sectionName, section]) =>
                {
                    const sectionCapitalized: string = new this.$String(sectionName).capitalize().toString();

                    return {
                        component()
                        {
                            // eslint-disable-next-line
                            return import(`./views/` + sectionCapitalized);
                        },
                        meta: {
                            sectionName,
                            title: this.texts[sectionName].title
                        },
                        name: sectionName,
                        path: `/${new this.$String(this.texts[sectionName].title).urlTo()}${section.params ? `/:${section.params.join(`?/:`)}?` : ``}`
                    };
                }),
                {
                    component: Category,
                    meta: {
                        sectionName: sectionsDefault,
                        title: `FIFA maniaci`
                    },
                    path: `/:category`,
                    children: [
                        ...Object.entries(state.sections.value).filter(([, section]) =>
                        {
                            return section.category !== false;
                        }).map(([sectionName, section]) =>
                        {
                            const sectionCapitalized: string = new this.$String(sectionName).capitalize().toString();
                            const tabsTableName: string = `${sectionName}Tabs`;
                            const sectionTitle: string = this.texts[sectionName].title;
                            const tabsTable2 = state[tabsTableName];

                            const childrenHas: boolean = tabsTable2 && !this.$Tomwork.emptyIs(tabsTable2.value);

                            const redirectName: string = this.$cookies.get(`${tabsTableName}Active`) || tabsTable2?.default;
                            const redirectNameCapitalized: string = new this.$String(redirectName).capitalize().toString();

                            return {
                                component()
                                {
                                    // eslint-disable-next-line
                                    return import(`./components/` + sectionName + `/` + sectionCapitalized);
                                },
                                meta: {
                                    sectionName,
                                    ...(tabsTable2 && this.$Tomwork.emptyIs(tabsTable2.value) && {tabId: 0}),
                                    title: sectionTitle
                                },
                                ...(!childrenHas && {name: sectionName}),
                                path: `${new this.$String(this.texts[sectionName].title).urlTo()}${section.params ? `/:${section.params.join(`?/:`)}?` : ``}`,
                                ...(childrenHas && {
                                    children: [
                                        ...Object.entries(tabsTable2.value as { [s: string]: TabValue }).filter(([, tab]) =>
                                        {
                                            return !tab.disabled;
                                        }).map(([tabName]) =>
                                        {
                                            const tabNameCapitalized: string = new this.$String(tabName).capitalize().toString();
                                            const tabsName: string = this.texts[sectionName].tabs[tabName];

                                            return {
                                                component()
                                                {
                                                    // eslint-disable-next-line
                                                    return import(`./components/` + sectionName + `/` + sectionCapitalized + tabNameCapitalized);
                                                },
                                                meta: {
                                                    sectionName,
                                                    tabId: tabName,
                                                    title: `${sectionTitle}${tabsName ? ` > ${tabsName}` : ``}`
                                                },
                                                name: `${sectionName}${tabNameCapitalized}`,
                                                path: new this.$String(this.texts[sectionName].tabs[tabName]).urlTo(),
                                                props: {
                                                    text: this.texts[sectionName][tabName]
                                                }
                                            };
                                        }),
                                        {
                                            name: `${sectionName}Default`,
                                            path: ``,
                                            redirect()
                                            {
                                                const {category, division, season} = getters.params;

                                                const routePathParts: string[] = _vm.$route.path.split(`/`).map((part) =>
                                                {
                                                    return part.toLowerCase();
                                                });

                                                const params = sectionName === `league` ? {
                                                    ...(!category && {category: routePathParts[1]}),
                                                    ...(!division && {division: routePathParts[4] || `${_vm.texts.dictionary.division}-1`}),
                                                    ...(!season && {season: routePathParts[3]})
                                                } : {};

                                                return {
                                                    name: `${sectionName}${redirectNameCapitalized}`,
                                                    params: {...getters.params, ...params}
                                                };
                                            }
                                        }
                                    ]
                                }),
                                props: {
                                    text: this.texts[sectionName]
                                }
                            };
                        }),
                        {
                            path: `hraci`,
                            redirect: `rebricek`
                        },
                        {
                            path: `/`,
                            redirect: redirectDefault
                        }
                    ]
                },
                {
                    path: `/`,
                    redirect()
                    {
                        if (state.categories.activeCalc())
                        {
                            return {
                                name: redirectDefault.name,
                                params: getters.params
                            };
                        }

                        return {
                            name: `categoriesSelect`
                        };
                    }
                }
            ]);
        }

        public smartsuppInit(): void
        {
            window._smartsupp = window._smartsupp || {};
            window._smartsupp.key = `f718fc3941bbe23cc43d6d32da97e3fd5c5dcf9a`;
            window._smartsupp.smallDeviceMinWidth = 1024;

            window._smartsupp.offsetX = this.smartsuppRenderOn();

            (window.smartsupp || ((d: Document, ...args) =>
            {
                window.smartsupp = () =>
                {
                    // @ts-ignore
                    o._.push(d, ...args);
                };

                const o = window.smartsupp;
                // @ts-ignore
                o._ = [];
                const [s] = d.getElementsByTagName(`script`);
                const c = d.createElement(`script`);
                c.type = `text/javascript`;
                c.async = true;
                c.src = `https://www.smartsuppchat.com/loader.js?`;
                c.onload = this.smartsuppRenderOn;
                // eslint-disable-next-line no-unused-expressions
                s.parentNode?.insertBefore(c, s);
            }))(document);

            window.smartsupp(`on`, `rendered`, this.smartsuppRenderOn);
            window.addEventListener(`navVisibilityChange`, this.smartsuppRenderOn);
        }

        public smartsuppRenderOn(): number
        {
            const {getters, state} = this.$store;
            const {touchscreen} = getters;

            if (document.querySelector<HTMLDivElement>(`#chat-application`))
            {
                this.chatApplication = document.querySelector<HTMLDivElement>(`#chat-application`) as HTMLDivElement;
            }

            const left: number = (Number(!state.navVisible) * -this.navWidth) + (Number(touchscreen) * 10);
            window._smartsupp.offsetX = left;

            if (this.chatApplication)
            {
                this.chatApplication.className = state.navVisible ? `app-nav-visible` : `app-nav-invisible`;
            }

            return left;
        }

        public chatApplication!: HTMLDivElement;

        public get navLinks(): [string, SectionValue][]
        {
            return Object.entries(this.sections).filter(([, section]) =>
            {
                return section.navLink;
            }).sort(([, sectionA], [, sectionB]) =>
            {
                return (sectionA.order as number) - (sectionB.order as number);
            });
        }

        public get navWidth(): number
        {
            return this.$store.getters.touchscreen ? 242.5 : 257.5;
        }

        public get sections(): { [s: string]: SectionValue }
        {
            const {getters, state} = this.$store;

            return new this.$Object(state.sections.value).map(([sectionName, section]) =>
            {
                const sectionClone = this.$Tomwork.clone(section);

                if (!this.categoriesActive)
                {
                    sectionClone.href = ``;
                    return sectionClone;
                }

                const category = new this.$String(state.categories.value[this.categoriesActive].name).urlTo();

                const categoryHref = state.sections.value[sectionName].category !== false ? `/${category}` : ``;

                const tabsTableName = `${sectionName}Tabs`;
                const tabsActive = state[tabsTableName]?.active;
                const tabHref = tabsActive && this.texts[sectionName].tabs ? `/${new this.$String(this.texts[sectionName].tabs[tabsActive]).urlTo()}` : ``;
                const paramsHref = state.sections.value[sectionName].params ? `/${(state.sections.value[sectionName].params as string[]).map((param) =>
                {
                    return getters.params[param];
                }).join(`/`)}` : ``;

                sectionClone.href = `${categoryHref}/${new this.$String(this.texts[sectionName].title).urlTo()}${paramsHref}${tabHref}`;

                return sectionClone;
            }).value;
        }

        public get sectionsActiveObject(): DeepReadonlyObject<Partial<SectionValue>>
        {
            return this.$store.state.sections.value[this.sectionsActive];
        }

        public get sectionStyle(): { height: string, width: string }
        {
            const {getters, state} = this.$store;
            const {touchscreen} = getters;

            return {
                height: `calc(100% - ${52.36 * touchscreen}px)`,
                width: `calc(100% - ${(state.navVisible ? this.navWidth : 52.5) * Number(!touchscreen)}px)`
            };
        }

        @Watch('categoriesActive')
        categoriesActiveChangeOn()
        {
            this.$store.dispatch(`unseenCountUpdateAll`).catch((err) =>
            {
                console.error(err);
            });
            this.$store.dispatch(`titleUpdate`).catch((err) =>
            {
                console.error(err);
            });
        }

        @Watch('$store.state.userLogged.loggedIn')
        '$store.state.userLogged.loggedInChangeOn'()
        {
            const {getters, state} = this.$store;

            const sectionsLoggedIn = state.sections.value[this.sectionsActive].loggedIn;

            if (typeof sectionsLoggedIn !== `undefined` && sectionsLoggedIn !== state.userLogged.loggedIn)
            {
                this.$router.push({
                    name: `${state.sections.default}${new this.$String(state[`${state.sections.default}Tabs`].default).capitalize()}`,
                    params: getters.params
                }).catch((err) =>
                {
                    console.error(err);
                });
            }
        }

        public beforeCreate(): void
        {
            this.$socket.emit(`userPropsUpdate`, {cookies: document.cookie});
        }

        public async created(): Promise<void>
        {
            if (process.env.NODE_ENV === `development`)
            {
                // @ts-ignore
                window._vm = this;
            }

            const _vm = this;
            const {dispatch, state} = this.$store;

            await dispatch(`localesGet`).catch((err) =>
            {
                console.error(err);
            });
            Object.entries({appType_id: `categoriesActive`, appTypesActive: `categoriesActive`, section: `sectionsActive`}).filter(([cookieKeyOld]) =>
            {
                return this.$cookies.get(cookieKeyOld);
            }).forEach(([cookieKeyOld, cookieKeyNew]) =>
            {
                this.$cookies.set(cookieKeyNew, this.$cookies.get(cookieKeyOld));
                this.$cookies.remove(cookieKeyOld);
            });

            if (this.$cookies.get(`categoriesActive`)?.length === 24)
            {
                this.$cookies.set(`categoriesActive`, parseInt((this.$cookies.get(`categoriesActive`) as string).slice(-1)) - 1);
            }

            if (this.$cookies.get(`leagueSeasonsActive`)?.length === 24)
            {
                this.$cookies.set(`leagueSeasonsActive`, [
                    '5c82f6b88e9d772b9624887b',
                    '5d139a0416e30a3da637d7a0',
                    '5d8bdee1fbd244cb4203a82d',
                    '5d9316b428a27c6115c11df9'
                ].indexOf(this.$cookies.get(`leagueSeasonsActive`) as string) + 1);
            }

            if (this.$cookies.get(`divisionsActive`)?.length === 24)
            {
                this.$cookies.set(`divisionsActive`, 1);
            }

            if (this.$cookies.get(`_id`)?.length === 24)
            {
                await this.$http.get(`https://api.${process.env.VUE_APP_FM_HOSTNAME}/users/retrieveId`, {_id: this.$cookies.get(`_id`)}).then(async (res) =>
                {
                    if (res.body.id)
                    {
                        this.$cookies.remove(`_id`);
                    }

                    return this.$store.dispatch(`userPropsUpdate`, {props: {id: res.body.id}});
                }).catch((err) =>
                {
                    console.error(err);
                });
            }

            this.$store.subscribeAction({
                after({payload, type})
                {
                    if (type === `socket_userPropsUpdate`)
                    {
                        const {transaction} = payload;

                        if (transaction)
                        {
                            const {categoryName, money, place, type: transactionType} = transaction;

                            const typeCapitalized = new _vm.$String(transactionType).capitalize();

                            const valueDependentGet = () =>
                            {
                                return money > 0 ? `Positive` : `Negative`;
                            };

                            const valueDependent = transactionType === `bankTransfer` ? valueDependentGet() : ``;

                            _vm.alertShow({
                                alertType: `transaction${typeCapitalized}${valueDependent}`,
                                state: `successful`,
                                variables: {categoryName: _vm.texts.categories[categoryName], money: Math.abs(money), place}
                            });
                        }
                    }
                }
            });

            await this.$routerInit();

            window.fbq(`track`, `ViewContent`);

            document.documentElement.style.setProperty(`--vh`, `${window.innerHeight * 0.01}px`);
            window.addEventListener(`resize`, this.resizeOn);

            dispatch(`imageFormatSet`).catch((err) =>
            {
                console.error(err);
            });

            if (state.userLogged.loggedIn)
            {
                dispatch(`userPropsGet`).catch((err) =>
                {
                    console.error(err);
                });
            }

            this.smartsuppInit();

            dispatch(`get`, {tableName: `matchesTypes`}).catch((err) =>
            {
                console.error(err);
                return Promise.reject(err);
            });

            await Promise.all([
                dispatch(`categoriesGet`),
                dispatch(`leagueSeasonsGet`)
            ]).catch((err) =>
            {
                console.error(err);
                return Promise.reject(err);
            });

            await dispatch(`tabsActiveCalcAll`).catch((err) =>
            {
                console.error(err);
                return Promise.reject(err);
            });
        }

        public mounted(): void
        {
            const {verified} = this.$route.query;
            const {subscribe, state} = this.$store;

            if (verified === `true` || verified === `false`)
            {
                const verifiedState: 'successful' | 'failed' = verified === `true` ? `successful` : `failed`;

                this.alertShow({alertType: `emailVerification${new this.$String(verifiedState).capitalize()}`, state: verifiedState});

                if (verifiedState === `successful`)
                {
                    let dataLoaded: boolean = false;

                    subscribe(({type}) =>
                    {
                        if (!dataLoaded && type === `dataLoadedSet`)
                        {
                            const registeredIs = Object.values(new this.$Object(state.leagueRegistrations.value).findNested([
                                state.categories.active,
                                state.leagueSeasons.active
                            ]) || {}).some((leagueRegistration: any) =>
                            {
                                return leagueRegistration.userId === state.userLogged.id;
                            });

                            if (registeredIs)
                            {
                                this.alertShow({alertType: `successful`, state: verifiedState, targetType: `LeagueRegistration`});
                            }

                            dataLoaded = true;
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="stylus">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,800&display=swap')
    @import './styles/tomwork.styl'
    @import 'mixins/Matches.styl'

    #app
        background-color $sectionGray
        box-sizing border-box
        font-color #ffffff
        font-type 'Open Sans', sans-serif
        height 100vh
        height calc(var(--vh, 1vh) * 100)
        overflow hidden
        position relative
        width 100vw

        @media (max-width 679px)
            font-size 14px

        @media (max-width 499px)
            font-size 13px

        @media (max-width 359px)
            font-size 12px

    form
        position relative
        width 100%

        .error-show
            input
                background-color #dd8888 !important
                border-color #cc0000
                box-sizing border-box
                font-color #cc0000

                &:-webkit-autofill
                    -webkit-box-shadow 0 0 0 30px #dd8888 inset
                    -webkit-text-fill-color #cc0000

            label
                font-color #dd8888

        .element
            position relative

            & > *
                box-sizing border-box
                height 2.3em
                line-height 2.3em

    .form-container, .login-form
        input
            padding-left 8px

    input, label
        transition 0s

    input
        border 1px transparent
        box-sizing border-box
        outline 0
        overflow auto
        resize false

        &:-webkit-autofill
            -webkit-box-shadow 0 0 0 30px #ffffff inset

    .input-alert
        background-color #cc0000
        border 1px solid #cc0000
        font-color #ffffff
        position absolute
        text-align left
        top 0
        white-space nowrap

        &:after
            border-bottom 1.15em transparent
            border-top 1.15em transparent
            bottom 0
            content ''
            display block
            height 0
            margin auto
            position absolute
            top 0
            width 0

    .bordered-button
        background-color transparent
        border 2px #ffffff
        padding .5em 1.5em
        text-transform uppercase

        &:hover
            background-color #ffffff

    select
        appearance none
        background-color $tabGray
        background-image url("data:image/svg+xml;utf8,<svg fill='%23ffffff' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
        background-position right center
        background-repeat no-repeat
        color #ffffff
        height $navLineHeight
        line-height $navLineHeight

    sub
        font-size smaller

    #chat-application
        bottom 10px !important
        left (($navWidth / 2) - 56px) !important
        transition left .5s !important
        z 5 !important

        @media (max-width 1023px)
            left (($navWidthTouchscreen / 2) - 56px) !important

        &.app-nav-visible
            left (($navWidth / 2) - 56px) !important

            @media (max-width 1023px)
                left (($navWidthTouchscreen / 2) - 56px) !important

        &.app-nav-invisible
            left (-($navWidth) + (($navWidth / 2) - 56px)) !important

            @media (max-width 1023px)
                left (-$navWidthTouchscreen + (($navWidthTouchscreen / 2) - 56px)) !important

    .connectivity
        border-radius 50%
        height 8px
        margin-right 9px
        width 8px

        &.offline
            background-color $red

        &.online
            background-color $green

    .soon
        font-size .6em
        font-style italic
        margin-left 8px
        text-transform uppercase
        vertical-align center

    .text-container
        align-self center
        border 1px #ffffff
        line-height 1.75
        margin-vertical auto
        max-width 600px
        padding 60px
        text-align center

        @media (max-width 1023px)
            border 0
            margin-vertical 18px
            padding 0 15px

    .section-container
        bottom 0
        position absolute
        right 0
        top 0
        transition width .5s

        @media (max-width 1023px)
            top $navAppHeightTouchscreen

        & > *
            position relative

        section
            display flex
            flex-direction column
            height 100%
            width 100%

    .money-icon
        font-color $yellow
        margin-left 4px

    p, li, .h
        a
            &:hover
                font-color $blue

    a
        &.router-link-active, &.disabled
            pointer-events none

        &.disabled
            color #878787

    footer
        line-height 1
        margin-bottom 76px

    h1
        font-size 2.5em

    h2
        font-size 1.875em

    h3
        font-size 1.5em
</style>
