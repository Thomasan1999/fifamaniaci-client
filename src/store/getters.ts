import dayjs        from 'dayjs';
import {StoreState} from '@/vue-extend.d';
import VueObject    from '../plugins/VueObject';
import VueString    from '../plugins/VueString';
import router       from '../router';

type StoreGetters2 = {
    readonly [P in keyof typeof gettersExportable]: ReturnType<typeof gettersExportable[P]>;
}

const gettersExportable = {
    authData({userLogged: {id, token}}: StoreState): { id?: number, token?: string }
    {
        return (id && token) ? {id, token} : {};
    },
    dataProps({userLogged: {verified}}: StoreState): string[]
    {
        return [
            `users`,
            `matches`,
            `messages`,
            ...((verified === false || verified === null) ? [] : [`messagesTabs`]),
            `players`,
            `divisions`,
            `leagueRegistrations`,
            `leagueTableRecords`,
            `leaguePrizes`
        ];
    },
    leagueSeason({leagueSeasons}: StoreState): Merge<Omit<LeagueSeasonValue, 'id'>, {
        [s in 'playOffEnd' | 'playOffStart' | 'registrationTo' | 'seasonStart' | 'seasonEnd' | 'finalStart' | 'leagueEnd' | 'paymentEnd' | 'semiFinalsEnd']: dayjs.Dayjs
    }> | {}
    {
        const leagueSeason = leagueSeasons.value[leagueSeasons.active];

        if (!leagueSeason)
        {
            return {};
        }

        const leagueSeasonGetter = Object.keys(leagueSeason).reduce((a, prop) =>
        {
            if ([`seasonEnd`, `playOffEnd`, `playOffStart`, `registrationTo`, `seasonStart`].includes(prop))
            {
                a[prop] = dayjs(leagueSeason?.[prop]);
            }
            else
            {
                a[prop] = leagueSeason?.[prop];
            }

            return a;
        }, {} as Merge<Merge<Omit<LeagueSeasonValue, 'id'>, {
            [s in 'playOffEnd' | 'playOffStart' | 'registrationTo' | 'seasonStart' | 'seasonEnd']: dayjs.Dayjs
        }>, {
            [s in 'finalStart' | 'leagueEnd' | 'paymentEnd' | 'semiFinalsEnd']?: dayjs.Dayjs
        }>);

        leagueSeasonGetter.leagueEnd = leagueSeasonGetter.playOffStart.add(-1, `d`);
        const paymentEndAdd: number = (() =>
        {
            switch ((leagueSeasonGetter.seasonStart.add(8, `d`).add(-1, `ms`).day() + 6) % 7)
            {
                case 3:
                case 4:
                    return 2;
                case 5:
                    return 1;
                default:
                    return 0;
            }
        })();

        leagueSeasonGetter.paymentEnd = leagueSeasonGetter.seasonStart.add(10 + paymentEndAdd, `d`).add(-1, `ms`);
        leagueSeasonGetter.semiFinalsEnd = leagueSeasonGetter.playOffStart.add(3, `d`);
        leagueSeasonGetter.finalStart = leagueSeasonGetter.semiFinalsEnd.add(1, `d`);

        return leagueSeasonGetter;
    },
    leagueUnseen(state: StoreState)
    {
        const {categories, divisions, leaguePrizes, leagueRegistrations, leagueSeasons, leagueTableRecords} = state;

        const leagueMatchesReduceFn: (a: Unseen, match: Omit<MatchValue, 'id'>) => Unseen = (a, match) =>
        {
            // eslint-disable-next-line no-unused-expressions
            state.matches.unseenPersonalCondition(match) ? a.personal += 1 : a.general += 1;

            return a as Unseen;
        };

        const [matches, playOff]: [Unseen, Unseen] = Object.entries(state.matches.value[categories.active] || {}).filter(([, match]) =>
        {
            return typeof match.week === `number` && match.unseen && match.divisionId === divisions.active && match.seasonId === leagueSeasons.active;
        }).reduce((a, [, match]) =>
        {
            a[typeof match.leg !== `number` ? 0 : 1].push(match);

            return a;
        }, [[], []] as [MatchValue[], MatchValue[]]).map((leagueMatches) =>
        {
            return leagueMatches.reduce(leagueMatchesReduceFn, {general: 0, personal: 0} as Unseen);
        }) as [Unseen, Unseen];

        return {
            matches,
            playOff,
            prizes: leaguePrizes.unseen[categories.active]?.[leagueSeasons.active]?.[divisions.active],
            registrations: leagueRegistrations.unseen[categories.active]?.[leagueSeasons.active],
            table: leagueTableRecords.unseen[categories.active]?.[leagueSeasons.active]?.[divisions.active]
        };
    },
    matchesMax(state: StoreState, getters: typeof gettersExportable): number
    {
        return 6 + (4 * (dayjs().diff(getters.leagueSeason.seasonStart, `w`) + 1));
    },
    mobile({windowWidth}: StoreState): boolean
    {
        return windowWidth < 768;
    },
    nestedValues(state: StoreState): number[]
    {
        return new VueObject({categoryId: `categories`, divisionId: `divisions`, seasonId: `leagueSeasons`}).map(([, tableName]) =>
        {
            return state[tableName].active;
        }).value;
    },
    params(state: StoreState, getters: StoreGetters2): { [s: string]: string }
    {
        const tables: { [s: string]: string } = {category: `categories`, division: `divisions`, season: `leagueSeasons`, username: ``};

        return new VueObject(tables).map(([param, tableName]) =>
        {
            const routeParam = router.currentRoute.params[param];
            const table = state[tableName];

            if (!table)
            {
                if (param === `username`)
                {
                    return routeParam || state.profileUsername;
                }

                return routeParam || ``;
            }

            const nestedValues: number[] = ([...(table.nestedProps || []), tableName]).map((nestedProp) =>
            {
                return (state[nestedProp] || table[nestedProp.replace(/Id$/, ``)]).active;
            });

            const fieldActive: number = new VueObject(table.categoryHas ? table.value[state.categories.active] : table.value).findNested(nestedValues);

            if (!fieldActive)
            {
                if (tableName === `divisions` && state.leagueSeasons.active)
                {
                    return new VueString(table.htmlGet({index: 0, level: 0}, {getters})).urlTo();
                }

                return routeParam || ``;
            }

            return new VueString(table.htmlGet(fieldActive, {getters, state})).urlTo();
        }).value;
    },
    tabProps(state: StoreState): string[]
    {
        return Object.keys(state).filter((prop) =>
        {
            return prop.includes(`Tabs`);
        });
    },
    texts({lang, locales}: StoreState): typeof locales.value.sk
    {
        return locales.value[lang];
    },
    touchscreen({windowWidth}: StoreState): boolean
    {
        return windowWidth < 1024;
    }
};

export default gettersExportable;
