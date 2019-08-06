var docpadConfig;
var indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
    }
    return -1;
};

var imgBaseUrl = '/assets/images/';
var sponsorsImgBaseUrl = imgBaseUrl + 'sponsors/';
var speakersImgBaseUrl = imgBaseUrl + 'speakers/';
var partnersImgBaseUrl = imgBaseUrl + 'partners/';

docpadConfig = {
    outPath: '../2019.mobilization.pl-gh-pages/',
    templateData: {
        site: {
            url: "http://2019.mobilization.pl",
            oldUrls: ['www.mobilization.pl'],
            title: "Mobilization 2019",
            description: "Mobilization is a conference dedicated to mobile technologies. The main scope is development of mobile solutions aimed at smartphones and tablets, with particular interest in Android and iOS mobile platforms.",
            keywords: "mobilization, conference, mobile conference, Łódź",
            author: "Java User Group Łódź",
            styles: [],
            scripts: [],
            visibility: {
                "call_for_papers": false,
                "registration": false,
                "talks": false,
                "agenda": false,
                "speakers": false,
                "sponsors": true,
                "partners": true,
                "venue": false,
            },
            event: {
                title: 'Mobilization 2019',
                location: {
                    lat: 51.7505458,
                    lng: 19.4501351,
                    place: '(Nowa) Hala Expo',
                    street: 'al. Politechniki 4',
                    city: 'Łódź',
                    zip: '93-590',
                    country: 'Polska'
                },
                data: '26th Oct 2019',
                time: '08:00-18:00'
            },
            sponsors: {
                diamond: [
                {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
                    "link" : ""
                },
                ],
                platinum: [
                {
                    "name" : "Allegro",
                    "logo_url" : sponsorsImgBaseUrl + "allegro_submar_tech_300_300.png",
                    "link": "https://allegro.tech/"
                },
                 {
                    "name" : "ePassi",
                    "logo_url" : sponsorsImgBaseUrl + "epassi.png",
                    "link" : "https://www.epassi.fi/en/home"
                },
                {
                    "name" : "Harman",
                    "logo_url" : sponsorsImgBaseUrl + "harman-300-300.png",
                    "link": "https://services.harman.com/"
                },
                {
                        "name": "Idemia",
                        "logo_url": sponsorsImgBaseUrl + "idemia-vertical-300px.jpg",
                        "link": "https://www.idemia.com/"
                },
               {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
                    "link": ""
                },
                ],
                gold: [
                {
                    "name" : "BinarApps",
                    "logo_url" : sponsorsImgBaseUrl + "binarapps-300-300.png",
                    "link" : "https://binarapps.com/"
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link" : "mailto:sponsors@mobilization.pl?subject=Mobilization IX sponsorship offer&body=Dear Mobilization, We are interested in sponsoring Mobilization IX. Please can you send a sponsorship offer for 2019"
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link" : "mailto:sponsors@mobilization.pl?subject=Mobilization IX sponsorship offer&body=Dear Mobilization, We are interested in sponsoring Mobilization IX. Please can you send a sponsorship offer for 2019"
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link" : "mailto:sponsors@mobilization.pl?subject=Mobilization IX sponsorship offer&body=Dear Mobilization, We are interested in sponsoring Mobilization IX. Please can you send a sponsorship offer for 2019"
                }
                ],
                silver: [
                {
                    "name" : "Cybercom",
                    "logo_url" : sponsorsImgBaseUrl + "cybercom.png",
                    "link" : "https://www.cybercom.com/pl/Poland/"
                },
                {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link" : "mailto:sponsors@mobilization.pl?subject=Mobilization IX sponsorship offer&body=Dear Mobilization, We are interested in sponsoring Mobilization IX. Please can you send a sponsorship offer for 2019"
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link" : "mailto:sponsors@mobilization.pl?subject=Mobilization%20IX%20sponsorship%20offer&body=Dear%20Mobilization%2C%20We%20are%20interested%20in%20sponsoring%20Mobilization%20IX.%20Please%20can%20you%20send%20a%20sponsorship%20offer%20for%202019"
                },                              
                ],
                afterparty: [
                {
                    "name" : "DNA Poland",
                    "logo_url" : sponsorsImgBaseUrl + "dna.png",
                    "link" : "https://www.digitalnewagency.com/"
                },
                ],
                copper: [
                ]
            },
            partners: {
                organizers: [
                    {
                        name: 'Java User Group Łódź',
                        logo_url: partnersImgBaseUrl + 'juglodz.jpeg',
                        "link" : "http://www.juglodz.pl",
                        description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódź area. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
                    }
                ],
                community: [
                    {
                        "name": "Android Developer Group Poznań",
                        "logo_url": partnersImgBaseUrl + 'adg-poznan-logo.png',
                        "link": "https://www.meetup.com/Poznan-Android-Developer-Group/"
                    },
                    {
                        "name": "TOAST - Android Developers Meetup",
                        "logo_url": partnersImgBaseUrl + 'toast.png',
                        "link": "https://www.meetup.com/TOAST-Android-Developers-Meetups/"
                    },
                    {
                        "name": "Let Swift",
                        "logo_url": partnersImgBaseUrl + 'let-swift.png',
                        "link": "https://www.facebook.com/letswiftwroclaw/"
                    },
                    {
                        "name": "LogCat",
                        "logo_url": partnersImgBaseUrl + 'logcat-square.png',
                        "link": "https://www.facebook.com/LogCatMeetup"
                    },
                    {
                        "name": "Meet.mobile",
                        "logo_url": partnersImgBaseUrl + 'meet-mobile.png',
                        "link": "https://www.meetup.com/meet-mobile/"
                    },                    
                    {
                        "name": "Mobile Warsaw",
                        "logo_url": partnersImgBaseUrl + 'mobile-warsaw.png',
                        "link": "https://mobile-warsaw.pl/"
                    },
                    {
                        "name": "4Developers Kraków",
                        "logo_url": partnersImgBaseUrl + '4developers_krakow.png',
                        "link": "https://4developers.org.pl/krakow/"
                    },
                    {
                        "name": "4Developers Katowice",
                        "logo_url": partnersImgBaseUrl + '4developers_katowice.png',
                        "link": "https://4developers.org.pl/katowice/"
                    },
                    {
                        "name": "4Developers Wrocław",
                        "logo_url": partnersImgBaseUrl + '4developers_wroclaw.png',
                        "link": "https://4developers.org.pl/wroclaw/"
                    },
                    {
                        "name": "4Developers Poznań",
                        "logo_url": partnersImgBaseUrl + '4developers_poznan.png',
                        "link": "https://4developers.org.pl/poznan-2019/"
                    }                                                           
                ],
                media : [
                    {
                        "name": "Młodzi w Łodzi",
                        "logo_url": partnersImgBaseUrl + 'mwl-square.png',
                        "link": "https://mlodziwlodzi.pl/"
                    },
                    {
                        "name": "Programista Magazyn",
                        "logo_url": partnersImgBaseUrl + 'programistamag.png',
                        "link": "https://programistamag.pl/"
                    },
                ]
            },
            slots: {
                'slot-registration': {
                    from: '8:00',
                    to: '9:00'
                },
                'slot-hello-world': {
                    from: '9:00',
                    to: '9:10'
                },
                'slot-no-coffee-0': {
                    from: '9:10',
                    to: '9:15'
                },
                'slot-1': {
                    from: '9:15',
                    to: '10:00'
                },
                'slot-coffee-1': {
                    from: '10:00',
                    to: '10:15'
                },
                'slot-2': {
                    from: '10:15',
                    to: '11:00'
                },
                'slot-coffee-2': {
                    from: '11:00',
                    to: '11:15'
                },
                'slot-3': {
                    from: '11:15',
                    to: '12:00'
                },
                'slot-lunch': {
                    from: '12:00',
                    to: '13:00'
                },
                'slot-4': {
                    from: '13:00',
                    to: '13:45'
                },
                'slot-coffee-4': {
                    from: '13:45',
                    to: '14:00'
                },
                'slot-5': {
                    from: '14:00',
                    to: '14:45'
                },
                'slot-coffee-5': {
                    from: '14:45',
                    to: '15:00'
                },
                'slot-6': {
                    from: '15:00',
                    to: '15:45'
                },
                'slot-coffee-6': {
                    from: '15:45',
                    to: '16:00'
                },
                'slot-7': {
                    from: '16:00',
                    to: '16:45'
                },
                'slot-coffee-7': {
                    from: '16:45',
                    to: '17:00'
                },
                'slot-8': {
                    from: '17:00',
                    to: '17:45'
                },
                'slot-no-coffee-8': {
                    from: '17:45',
                    to: '17:50'
                },
                'slot-finally': {
                    from: '17:50',
                    to: '18:10'
                },
                'slot-afterparty': {
                    from: '18:30',
                    to: '23:59'
                },
            },
            speakers: {
            },
            talks: {
                "talk-tbd": {
                    "title": "TBD",
                    "description_html": "TBD",
                    "speakers_keys": [],
                    "language": "EN",
                    "audience_level" : "Beginner"
                },
                "talk-empty": {
                    "title": "",
                    "description_html": "",
                    "speakers_keys": [],
                },
				"talk-finally": {
                    "title": "Finally meeting",
                    "description_html": "Time to give thanks to all the sponsors and the organizer\'s team.",
                    "audience_level": "Advanced",
                    "language": "EN",
                    "speakers_keys": []
                },
				"talk-hello-world": {
                    "title": "Hello world!",
                    "description_html": "This is couple of words about Mobilization. For community by community.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": []
                }
            },
            breaks: {
                'break-registration': {
                    title: 'Registration',
                    description_html: 'If you do not want to miss any presentation please register between 7:30-9:10. However, registration will be opened all day!'
                },
                // 'break-hello-world': {
                //     title: 'Hello World',
                //     description_html: 'This is couple of words about Mobilization. For community by community.'
                // },
                'break-coffee': {
                    title: 'Coffee Break',
                    description_html: ''
                },
                'break-lunch': {
                    title: 'Lunch Break',
                    description_html: 'VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.<br>Attendees will have soldiers\' soup outside the building!',
                },
                'break-no-coffee': {
                    title: 'No Coffee Break',
                    description_html: ''
                },
                // 'break-finally': {
                //     title: 'Finally meeting',
                //     description_html: 'Time to give thanks to all the sponsors and the organizer\'s team.'
                // },
                'break-afterparty': {
                    title: 'AfterParty in Browar Księży Młyn',
                    description_html: 'Free pizza and beer and follow up talks.<br>30min from the conference venue.<br>ul. Tymienieckiego 22/24, Łódź'
                }
            },
            venues: {
                "venue-epassi": {
                    "title": "ePassi"
                },
                "venue-allegro": {
                    "title": "Allegro"
                },
                "venue-harman": {
                    "title": "Harman"
                },
                "venue-idemia": {
                    "title": "Idemia"
                },
                "venue-intive": {
                    "title": "Intive"
                },
            },
            schedule: {
                "slot-registration": {"break_key": "break-registration"},
                "slot-hello-world": {
                    "venue-epassi": {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-no-coffee-0": {"break_key": "break-no-coffee"},
                "slot-1": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-coffee-1": {"break_key": "break-coffee"},
                "slot-2": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-coffee-2": {"break_key": "break-coffee"},
                "slot-3": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-lunch": {"break_key": "break-lunch"},
                "slot-4": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-coffee-4": {"break_key": "break-coffee"},
                "slot-5": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-coffee-5": {"break_key": "break-coffee"},
                "slot-6": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-coffee-6": {"break_key": "break-coffee"},
                "slot-7": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-coffee-7": {"break_key": "break-coffee"},
                "slot-8": {
                    "venue-epassi" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-tbd"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-tbd"
                    }
                },
                "slot-no-coffee-8": {"break_key": "break-no-coffee"},
                "slot-finally": {
                    "venue-epassi": {
                        "talk_key":"talk-tbd"
                    },
                },
                "slot-afterparty": {"break_key": "break-afterparty"}
            },
            volunteers: {
                //1
                "volunteer-marcin-iwanicki": {
                    "firstname": "Marcin",
                    "lastname": "Iwanicki",
                    "bio_html": "Created docpad generator for mobilization webpage. Deals with iOS talks.",
                    "www": "",
                    "twitter": "https://twitter.com/marciniwanicki",
                    "photo_url": "/images/team/marcin-iwanicki.jpeg"
                },
                //2
                "volunteer-marek-defecinski": {
                    "firstname": "Marek",
                    "lastname": "Defeciński",
                    "bio_html": "Coordinates all things with Mobilization. Seeks for speakers. The brain of Mobilization conference.",
                    "www": "",
                    "twitter": "https://twitter.com/marekdef",
                    "photo_url": "/images/team/marek-defecinski.jpeg"
                },
                //3
                "volunteer-karolina-draus": {
                    "firstname": "Karolina",
                    "lastname": "Draus",
                    "bio_html": "Coordinates promotion and contact with partners. Content Manager - Facebook & Twitter. Talented copywriter.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/karolina-draus.jpeg"
                },
                //4
                "volunteer-mariusz-saramak": {
                    "firstname": "Mariusz",
                    "lastname": "Saramak",
                    "bio_html": "If Marek is the brain, he is the heart of Mobilization. Full of crazy ideas - the first one was this conference.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/mariusz-saramak.jpeg"
                },
                //5
                "volunteer-tomasz-zielinski": {
                    "firstname": "Tomasz",
                    "lastname": "Zieliński",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/tomasz-zielinski.jpeg"
                },
                //6
                "volunteer-beata-nagorniewicz": {
                    "firstname": "Beata",
                    "lastname": "Nagórniewicz",
                    "bio_html": "Responsible for AfterParty :)",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/beata-nagorniewicz.jpeg"
                },
                //7
                "volunteer-cezary-draus": {
                    "firstname": "Cezary",
                    "lastname": "Draus",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/cezary-draus.jpeg"
                },
                //8
                "volunteer-agnieszka-saramak": {
                    "firstname": "Agnieszka",
                    "lastname": "Saramak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/agnieszka-saramak.jpeg"
                },
                //9
                "volunteer-rafal-lenarczyk": {
                    "firstname": "Rafał",
                    "lastname": "Lenarczyk",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/rafal-lenarczyk.jpeg"
                },
                //10
                "volunteer-anna-defecinska": {
                    "firstname": "Anna",
                    "lastname": "Defecińska",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/anna-defecinska.jpeg"
                },
                //11
                "volunteer-andrzej-jozwiak": {
                    "firstname": "Andrzej",
                    "lastname": "Jóźwiak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/andrzej-jozwiak.jpeg"
                },
                //12
                "volunteer-krzysztof-gutowski": {
                    "firstname": "Krzysztof",
                    "lastname": "Gutowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krzysztof-gutowski.jpeg"
                },
                //13
                "volunteer-krystian-laskowski": {
                    "firstname": "Krystian",
                    "lastname": "Laskowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krystian-laskowski.jpeg"
                },
            },
        },
        getPreparedTitle: function () {
            if (this.document.title) {
                return this.document.title + " | " + this.site.title;
            } else {
                return this.site.title;
            }
        },
        getPreparedDescription: function () {
            return this.document.description || this.site.description;
        },
        getPreparedKeywords: function () {
            return this.site.keywords.concat(this.document.keywords || []).join(', ');
        },
        getPreparedAuthor: function () {
            return this.site.author;
        },
        getHtmlLangImg: function (_talk) {
            if (_talk.language == "EN") {
                return "<img src=\"/assets/mobilization/images/lang_en.png\" alt=\"English\" class=\"language\" />";
            }
            if (_talk.language == "PL") {
                return "<img src=\"/assets/mobilization/images/lang_pl.png\" alt=\"Polish\" class=\"language\" />";
            }
            return "";
        },
        getOrderedTalkKeys: function () {
            var talks = this.site.talks;
            var items = Object.keys(talks).map(function (key) {
                return [key, talks[key]];
            });

            items.sort(function (a, b) {
                if (a[1].title < b[1].title)
                    return -1;
                if (a[1].title > b[1].title)
                    return 1;
                return 0;
            });

            return items.map(function (value) {
                return value[0];
            });
        },
        getOrderedSpeakersKeys: function () {
            var speakers = this.site.speakers;
            var items = Object.keys(speakers).map(function (key) {
                return [key, speakers[key]];
            });

            items.sort(function (a, b) {
                if (a[1].firstname < b[1].firstname) {
                    return -1;
                }
                if (a[1].firstname > b[1].firstname) {
                    return 1;
                }
                return 0;
            });

            return items.map(function (value) {
                return value[0];
            });
        },
        getSponsorLogoClass: function(sponsor_category_key) {
            if (sponsor_category_key == "diamond") {
                return "col-md-6 col-sm-6 col-xs-12 mx-auto";
            }
            if (sponsor_category_key == "platinum") {
                return "col-md-4 col-sm-4 col-xs-12";
            }
            if (sponsor_category_key == "gold") {
                return "col-md-3 col-sm-3 col-xs-12"
            }
            return "col-md-3 col-sm-3 col-xs-12";
        },
        getPartnerLogoClass: function(partner_category_key) {
            if (partner_category_key == "organizers") {
                return "col-md-6 col-sm-6 col-xs-12 mx-auto";
            }
            return "col-md-3 col-sm-3 col-xs-12";
        },
    },
    collections: {
        posts: function () {
            return this.getCollection('documents').findAllLive({
                relativeOutDirPath: 'posts'
            });
        }
    },
    environments: {
        development: {
            templateData: {
                site: {
                    url: false
                }
            }
        }
    },
    events: {
        serverExtend: function (opts) {
            var docpad, latestConfig, newUrl, oldUrls, server;
            server = opts.server;
            docpad = this.docpad;
            latestConfig = docpad.getConfig();
            oldUrls = latestConfig.templateData.site.oldUrls || [];
            newUrl = latestConfig.templateData.site.url;
            return server.use(function (req, res, next) {
                var ref;
                if (ref = req.headers.host, indexOf.call(oldUrls, ref) >= 0) {
                    return res.redirect(newUrl + req.url, 301);
                } else {
                    return next();
                }
            });
        }
    }
};

module.exports = docpadConfig;


// ---
// generated by coffee-script 1.9.2
