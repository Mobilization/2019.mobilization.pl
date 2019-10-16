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
                "talks": true,
                "agenda": true,
                "speakers": true,
                "sponsors": true,
                "partners": true,
                "venue": true,
                "workshops": true,
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
                        "name" : "ePassi",
                        "logo_url" : sponsorsImgBaseUrl + "epassi.png",
                        "link" : "https://www.epassi.fi/en/home"
                    },
                ],
                platinum: [
                {
                    "name" : "Allegro",
                    "logo_url" : sponsorsImgBaseUrl + "allegro_submar_tech_300_300.png",
                    "link": "https://allegro.tech/"
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
                    "name" : "Intive",
                    "logo_url" : sponsorsImgBaseUrl + "intive_logo_blue_square.png",
                    "link": "https://www.intive.com"
                },
                ],
                gold: [
                {
                    "name" : "BinarApps",
                    "logo_url" : sponsorsImgBaseUrl + "binarapps-300-300.png",
                    "link" : "https://binarapps.com/"
                }
                ],
                silver: [
                {
                    "name" : "Cybercom",
                    "logo_url" : sponsorsImgBaseUrl + "cybercom.png",
                    "link" : "https://www.cybercom.com/pl/Poland/"
                },
                {
                    "name" : "Mobica",
                    "logo_url" : sponsorsImgBaseUrl + "mobica-square.png",
                    "link" : "https://www.mobica.com"
                }
                ],
                afterparty: [
                {
                    "name" : "DNA Poland",
                    "logo_url" : sponsorsImgBaseUrl + "dna.png",
                    "link" : "https://www.digitalnewagency.com/"
                },
                ],
                copper: [
                    {
                        "name" : "Blacklane",
                        "link" : "https://blacklane.com/ ",
                        "logo_url" : sponsorsImgBaseUrl + "blacklane-square.png",
                    },
                    {
                        "name" : "Heryson",
                        "link" : "https://heryson.com/",
                        "logo_url" : sponsorsImgBaseUrl + "heryson_square.png",
                    },
                    {
                        "name" : "k7",
                        "link" : "https://k7.eu",
                        "logo_url" : sponsorsImgBaseUrl + "k7_square.png",
                    },
                    {
                        "name" : "Kaspersky",
                        "link" : "https://www.kaspersky.com/",
                        "logo_url" : sponsorsImgBaseUrl + "kaspersky_square.png",
                    },
                    {
                        "name" : "Wayfair",
                        "link" : "https://www.wayfair.com",
                        "logo_url" : sponsorsImgBaseUrl + "wayfair-square.png",
                    },
                    {
                        "name" : "Workday",
                        "link" : "https://www.workday.com/en-us/company/careers.html",
                        "logo_url" : sponsorsImgBaseUrl + "workday-square.png",
                    }
                    ,
                    {
                        "name" : "StickersCraft",
                        "link" : "http://www.stickerscraft.com?utm_source=mobilization&utm_medium=display&utm_campaign=conf_spons",
                        "logo_url" : sponsorsImgBaseUrl + "stickers-craft.png",
                    }
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
                    },
                    {
                        "name" : "Festiwal Cyfryzacji",
                        "logo_url" : partnersImgBaseUrl + 'festiwal-cyfryzacji.png',
                        "link" : "http://festiwalcyfryzacji.pl"
                    },
                    {
                        "name" : "Poznań Flutter Developers Group",
                        "logo_url" : partnersImgBaseUrl + 'pfdg-square.png',
                        "link" : "https://www.facebook.com/poznanflutter"
                    },
                    {
                        "name": "GDG DevFest Wrocław",
                        "link": "https://devfest.wroclaw.pl/",
                        "logo_url" : partnersImgBaseUrl + 'gdg-devfest-wroclaw-square.png'
                    },
                    {
                        "name": "Soldiers of Mobile",
                        "link": "https://SzkoleniaAndroid.pl/blog/",
                        "logo_url" : partnersImgBaseUrl + 'soldiers-of-mobile-square.png'
                    },
                    {
                        "name": "Kt.Academy",
                        "link": "http://kt.academy",
                        "logo_url" : partnersImgBaseUrl + 'ktacademy-square.png'
                    },
                    {
                        "name": "Flutter Europe",
                        "link": "https://fluttereurope.dev",
                        "logo_url" : partnersImgBaseUrl + 'flutter-europe-square.png'
                    }
                    ,
                    {
                        "name": "IT Łódź",
                        "link": "http://tiny.cc/itlodz",
                        "logo_url" : partnersImgBaseUrl + 'itlodz-square.png'
                    },
                    {
                        "name": "DevFest.cz",
                        "link": "https://devfest.cz",
                        "logo_url" : partnersImgBaseUrl + 'devfest_cz_square.png'
                    },
                    {
                        "name": "Łódź wiOSłuje",
                        "link": "https://www.facebook.com/lodzwiosluje/",
                        "logo_url" : partnersImgBaseUrl + 'lodz-wiosluje.png'
                    }
                ],
                media : [
                    {
                        "name": "Bulldogjob",
                        "logo_url": partnersImgBaseUrl + 'bulldogjob-square.png',
                        "link": "https://bulldogjob.pl"
                    },
                    {
                        "name": "Manning Publications",
                        "logo_url": partnersImgBaseUrl + 'manning-square.png',
                        "link": "htttps://manning.com"
                    },
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
                    from: '8:30',
                    to: '9:30'
                },
                'slot-hello-world': {
                    from: '9:30',
                    to: '09:45'
                },
                'slot-no-coffee-0': {
                    from: '09:45',
                    to: '09:50'
                },
                'slot-1': {
                    from: '09:50',
                    to: '10:35'
                },
                'slot-coffee-1': {
                    from: '10:35',
                    to: '10:55'
                },
                'slot-2': {
                    from: '10:55',
                    to: '11:40'
                },
                'slot-coffee-2': {
                    from: '11:40',
                    to: '12:00'
                },
                'slot-3': {
                    from: '12:00',
                    to: '12:45'
                },
                'slot-lunch': {
                    from: '12:45',
                    to: '13:45'
                },
                'slot-4': {
                    from: '13:45',
                    to: '14:30'
                },
                'slot-coffee-4': {
                    from: '14:30',
                    to: '14:45'
                },
                'slot-5': {
                    from: '14:45',
                    to: '15:30'
                },
                'slot-coffee-5': {
                    from: '15:30',
                    to: '15:45'
                },
                'slot-6': {
                    from: '15:45',
                    to: '16:30'
                },
                'slot-no-coffee-6': {
                    from: '16:30',
                    to: '16:35'
                },
                'slot-finally': {
                    from: '16:35',
                    to: '16:50'
                },
                'slot-afterparty': {
                    from: '18:00',
                    to: '23:59'
                },
            },
            speakers: {
                "speaker-filip-babic": {//1
                    "firstname": "Filip",
                    "lastname": "Babić",
                    "bio_html": "Professional developer with extensive knowledge of Android, Kotlin, and Java. Developing since 2015, I’ve amassed a great deal of experience and finished projects using only best practices, building high-quality products. Huge Kotlin lover and preacher, mostly focusing on Kotlin Coroutines and other low-level concurrency mechanisms. Gaming when not coding, writing about coding or speaking about coding at various events, meetups, and conferences. Dungeon master in spare time.",
                    "www": "",
                    "twitter": "https://twitter.com/filbabic",
                    "github": "https://github.com/filbabic",
                    "linkedin": "https://www.linkedin.com/in/filip-babić-52b73a130",
                    "photo_url": speakersImgBaseUrl + "filip-babic.png"
                },
                "speaker-nishant-srivastava": {//7
                    "firstname": "Nishant",
                    "lastname": "Srivastava",
                    "bio_html": "Nishant is a Sr.Android Engineer at Soundbrenner in Berlin, Germany and an open source enthusiast who spends his time doodling when not hacking on Android. He is a caffeine-dependent life-form and can be found either talking about android libraries or advocating that coffee is the elixir of life at community gatherings.<br>He has been part of 2 startups in the past (Founding Team Member at<BR>OmniLabs, Inc. and one of the first employees at Silverpush) with experience in Android SDK Engineering and Audio Digital Signal Processing(DSP) on Android.<BR>While working at his past company (Silverpush), he developed the company’s patented UAB (Unique Audio Beacon) Technology.",
                    "www": "https://nisrulz.com/",
                    "twitter": "https://twitter.com/@nisrulz",
                    "github": "https://github.com/nisrulz",
                    "linkedin": "https://www.linkedin.com/in/nisrulz",
                    "photo_url": speakersImgBaseUrl + "nishant-srivastava.png"
                },
                "speaker-raul-portales": {//9
                    "firstname": "Raul",
                    "lastname": "Portales",
                    "bio_html": "Raul is a Software Engineer with a love for computers, electronics and gadgets in general since as long as he remembers. He jumped into Android as soon as it was released. Raul has worked on social networks, education, healthcare and even founded a gaming studio and a consultancy company. Specialized on mobile and UX, he speaks frequently at conferences and meetups.",
                    "www": "http://plattysoft.com",
                    "twitter": "https://twitter.com/sla_shalafi",
                    "github": "https://github.com/plattysoft",
                    "linkedin": "https://www.linkedin.com/in/raulportales",
                    "photo_url": speakersImgBaseUrl + "raul-portales.png"
                },
                "speaker-mateusz-szklarek": {//12
                    "firstname": "Mateusz",
                    "lastname": "Szklarek",
                    "bio_html": "I work as an Senior iOS developer at EL Passion (Warsaw) for more than 4 years. I created several mobile applications in Objective-C & Swift from scratch. I’m big fan of unit testing in PRACTICE and believe that “each line of code matters”. Lately worked as Flutter developer.",
                    "www": "",
                    "twitter": "https://twitter.com/SzklarekMateusz",
                    "github": "https://github.com/mateuszszklarek",
                    "linkedin": "https://linkedin.com/in/mateuszszklarek",
                    "photo_url": speakersImgBaseUrl + "mateusz-szklarek.png"
                },
                "speaker-eugene-matsyuk": {//17
                    "firstname": "Eugene",
                    "lastname": "Matsyuk",
                    "bio_html": "I have been an android developer since 2012 and engaged at a lot of different projects like <a href='https://play.google.com/store/apps/details?id=com.lingualeo.android'>LinguaLeo</a>, <a href='https://play.google.com/store/apps/details?id=ru.sberbank_sbbol'>SberbankBusinessOnline</a> (famous apps in Russia). My current project is <a href='https://play.google.com/store/apps/details?id=com.kms.free'>Kaspersky Internet Security for Android</a>. Also, there are my personal development blogs in <a href='https://habr.com/ru/users/xoxol_89/'>Russian</a> and in <a href='https://medium.com/@eugenematsyuk'>English</a>. Welcome to my GitHub page, where you may find out different opensource projects starting with small examples for articles and ending with frameworks(<a href='https://github.com/KasperskyLab/Kaspresso'>Kaspresso</a>), libraries(<a href='https://github.com/KasperskyLab/AdbServer'>AdbServer</a>) and even architectural <a href='https://github.com/AndroidArchitecture/AndroidArchitectureBook'>CookBook</a>. My current passion is autotests. I believe that autotests can make our lives easier. Yes, we need to complete a lot of preparing work to reach the mentioned dream. But the dream is even closer than it had been not so long ago. ",
                    "www": "https://medium.com/@eugenematsyuk",
                    "twitter": "",
                    "github": "https://github.com/matzuk",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "eugene-matsyuk.png"
                },
                "speaker-peter-john-welcome": {//18
                    "firstname": "Peter-John",
                    "lastname": "Welcome",
                    "bio_html": "P-J, who is based in Johannesburg, South Africa, is the Mobile Engineering Lead at DVT where he develops iOS and Android app and teaches these technologies to graduates.He is the organiser for GDG Johannesburg, speaks at meetups and conferences and blogs about development technologies on Medium.",
                    "www": "https://medium.com/@pjwelcome",
                    "twitter": "https://twitter.com/pjapplez",
                    "github": "https://github.com/pjwelcome",
                    "linkedin": "https://www.linkedin.com/in/peter-john-welcome-33b74185/",
                    "photo_url": speakersImgBaseUrl + "peter-john-welcome.png"
                },
                "speaker-luca-nicoletti": {//19
                    "firstname": "Luca",
                    "lastname": "Nicoletti",
                    "bio_html": "Android Developer since 4.0.3, always wanted to become a speaker. Always seeking knowledge (and new challenges) and want to share what I learn with others. Shared knowledge is the best knowledge. Recently moved in London. Love reading books, blog posts, documentation.",
                    "www": "",
                    "twitter": "https://twitter.com/luca_nicolett",
                    "github": "https://github.com/lnicolet/",
                    "linkedin": "https://www.linkedin.com/in/luca-nicoletti-7171b1ab/",
                    "photo_url": speakersImgBaseUrl + "luca-nicoletti.png"
                },
                "speaker-vipul-shah": {//21
                    "firstname": "Vipul",
                    "lastname": "Shah",
                    "bio_html": "I’m a Android/iOS developer, currently working for a Backbase as an Android & iOS Developer. I love public speaking and presenting talks. I regularly give talks at GDG events & Local meetups, and blog at Medium. Before joining Backbase I was working with awesome product teams @Microsoft. I have been developing Android & iOS applications since last 7 years and have worked for few notable clients like FirstData, BMW, Wallmart labs. During my tenure in Microsoft I was part core Outlook team and worked on couple of Office apps. I regularly speak at technical events like GDG & Developer meetups.",
                    "www": "",
                    "twitter": "https://twitter.com/_vipuls",
                    "github": "https://github.com/vipulshah2010",
                    "linkedin": "https://in.linkedin.com/in/vipulshah123",
                    "photo_url": speakersImgBaseUrl + "vipul-shah.png"
                },
                "speaker-piotr-madry": {//29
                    "firstname": "Piotr",
                    "lastname": "Mądry",
                    "bio_html": "Android Developer at AppUnite, a functional programming and rx-based solutions lover, inspired by back-end technologies like Elixir/Phoenix.<BR>A huge fan of coding challenges, fascinated in inventing and creating completely new things.",
                    "www": "",
                    "twitter": "https://twitter.com/coala_beers",
                    "github": "https://github.com/piotrmadry",
                    "linkedin": "https://www.linkedin.com/in/piotr-mądry-40281610b",
                    "photo_url": speakersImgBaseUrl + "piotr-madry.png"
                },
                "speaker-martin-petrulak": {//32
                    "firstname": "Martin",
                    "lastname": "Petrulak",
                    "bio_html": "Martin is an Android enthusiast currently living in Munich, Germany. He had worked as an independent (indie) developer, full-time employee, and freelancer since 2011. Currently working as a contractor for large companies helping with digital transformation projects. He likes to travel, do sport and of course, to drink beer-s :)",
                    "www": "https://www.petrulak.com",
                    "twitter": "https://twitter.com/@martin_petrulak",
                    "github": "https://github.com/petrulak",
                    "linkedin": "https://www.linkedin.com/in/petrulak",
                    "photo_url": speakersImgBaseUrl + "martin-petrulak.png"
                },
                "speaker-andrii-rakhimov": {//37
                    "firstname": "Andrii",
                    "lastname": "Rakhimov",
                    "bio_html": "Lead Android Engineer at Lalafo. More than 6 years working with mobile. Have experience of scaling apps from several thousand to millions of users. Passionate about mobile and technology as well as about giving back to the community.",
                    "www": "",
                    "twitter": "",
                    "github": "https://github.com/ar-g",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "andrii-rakhimov.png"
                },
                "speaker-neem-serra": {//44
                    "firstname": "Neem",
                    "lastname": "Serra",
                    "bio_html": "Neem Serra is a mobile developer at Slalom in the United States. She teaches and mentors at a variety of non-profit organizations such as Software Carpentry. As the lead of the Google Women Techmakers group in St. Louis, she started the St. Louis Techies Project to highlight the diversity of technical people in St. Louis. Neem loves to bake, read comics, and host craft nights.",
                    "www": "https://neemserra.com",
                    "twitter": "https://twitter.com/@teamneem",
                    "github": "https://github.com/teamneem",
                    "linkedin": "https://www.linkedin.com/in/teamneem/",
                    "photo_url": speakersImgBaseUrl + "neem-serra.png"
                },
                "speaker-tomasz-grynfelder-renk": {//47
                    "firstname": "Tomasz",
                    "lastname": "Grynfelder-Renk",
                    "bio_html": "iOS Developer by heart and practice, working as a Mobile Team Lead at Applause App Quality, Inc.",
                    "www": "https://grynfelder.pl",
                    "twitter": "https://twitter.com/tgrynfelder",
                    "github": "https://github.com/tgrf",
                    "linkedin": "https://www.linkedin.com/in/tgrynfelder/",
                    "photo_url": speakersImgBaseUrl + "tomasz-grynfelder-renk.png"
                },
                "speaker-milos-marinkovic": {//54
                    "firstname": "Milos",
                    "lastname": "Marinkovic",
                    "bio_html": "Milos is a software enthusiast, software product developer, tech event organizer in Berlin's GDG, and an active open-source contributor. His interests are Android, modern web, connected devices and Internet Of Things. As an active tech community member and software professional, he likes reading about innovation, programming, and (of course) organizational skills; but loves skiing. <br>Years ago he founded GDG Novi Sad in Serbia and he worked there as a community lead, hosted some very interesting workshops with GDEs from all over the world, attended many meetups and hackathons, gave talks for the community on conferences and meetups, and hosted many dev-jams on open-source projects - so he is no stranger to our tech community.<br>Today, Milos is based in Berlin, working on building amazing software products - primarily for the Android platform.",
                    "www": "https://angrybyte.me/",
                    "twitter": "https://twitter.com/milosmns",
                    "github": "https://github.com/milosmns",
                    "linkedin": "https://www.linkedin.com/in/milosmns",
                    "photo_url": speakersImgBaseUrl + "milos-marinkovic.png"
                },
                "speaker-pawel-urbanowicz": {//57
                    "firstname": "Pawel",
                    "lastname": "Urbanowicz",
                    "bio_html": "Pawel spent last 5 years working as an iOS Developer and contributed to multiple projects during that period. He's constantly trying to master how to deliver a product which is good enough to ship and advanced, but at the same time ensures good quality in reasonable amount of time. At his spare time he likes to watch motorsport due to its nature focused on technological advancement and performance, which matters both in code and on the racetrack.",
                    "www": "",
                    "twitter": "https://twitter.com/pawelurbanowicz",
                    "github": "https://github.com/pawelurb",
                    "linkedin": "https://www.linkedin.com/in/pawelurbanowicz",
                    "photo_url": speakersImgBaseUrl + "pawel-urbanowicz.png"
                },
                "speaker-alexandre-genet": {//58
                    "firstname": "Alexandre",
                    "lastname": "Genet",
                    "bio_html": "Alexandre is Android developer for more than 5 years. He passionate about Kotlin, MotionLayout and Framework created by Google. His current goal is to craft more intuitive and more usable applications. In addition, Alexandre enjoys to share his knowledge to the Android community. Currently working for Xebia in Paris.",
                    "www": "https://medium.com/@agenet_34672",
                    "twitter": "https://twitter.com/@AlexAlexandreG",
                    "github": "https://github.com/alexandre7777",
                    "linkedin": "https://www.linkedin.com/in/alexandre-genet-25298042",
                    "photo_url": speakersImgBaseUrl + "alexandre-genet.png"
                },
                "speaker-michal-baran": {//70
                    "firstname": "Michał",
                    "lastname": "Baran",
                    "bio_html": "Michal is an Android developer, loving Flutter. With 3 years of mobile development. Technical articles writer. Passionate about scalable, lasting solutions.<br>He is working in Miquido in Cracow.",
                    "www": "",
                    "twitter": "https://twitter.com/@baranmichal25",
                    "github": "https://github.com/baranmichal25",
                    "linkedin": "https://www.linkedin.com/in/baranmichal",
                    "photo_url": speakersImgBaseUrl + "michal-baran.png"
                },
                "speaker-rafal-wachol": {//70
                    "firstname": "Rafal",
                    "lastname": "Wachol",
                    "bio_html": "Rafal has over 9 years of experience in software development. Programming Flutter from its early stages. Active member of London Flutter Community. Passionate about reactive programming and open source.",
                    "www": "",
                    "twitter": "https://twitter.com/@RafalWachol",
                    "github": "https://github.com/charafau",
                    "linkedin": "https://www.linkedin.com/in/rafal-wachol-857a2ab5",
                    "photo_url": speakersImgBaseUrl + "rafal-wachol.png"
                },
                "speaker-milosz-staszewski": {//71
                    "firstname": "Milosz",
                    "lastname": "Staszewski",
                    "bio_html": "Milosz is an Apple Certified Trainer for App Development with Swift 4 course.",
                    "www": "https://k7.eu",
                    "twitter": "https://twitter.com/@sofcik",
                    "github": "",
                    "linkedin": "https://www.linkedin.com/in/milosz-staszewski-243b6735",
                    "photo_url": speakersImgBaseUrl + "milosz-staszewski.png"
                },
                "speaker-mateusz-duc": {//71
                    "firstname": "Mateusz",
                    "lastname": "Duc",
                    "bio_html": "Mateusz is a legally blind person specialising in accessibility-related training.",
                    "www": "",
                    "twitter": "",
                    "github": "",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "mateusz-duc.png"
                },
                "speaker-abizer-nasir": {//73
                    "firstname": "Abizer",
                    "lastname": "Nasir",
                    "bio_html": "Lead/Contract iOS Developer in London. I've worked in different fields of iOS Development, except for Games.",
                    "www": "https://abizern.org",
                    "twitter": "https://twitter.com/abizern",
                    "github": "https://github.com/Abizern",
                    "linkedin": "https://www.linkedin.com/in/Abizern",
                    "photo_url": speakersImgBaseUrl + "abizer-nasir.png"
                },
                "speaker-lukasz-wisniewski": {//74
                    "firstname": "Lukasz",
                    "lastname": "Wisniewski",
                    "bio_html": "Lead Mobile Architect at EyeEm",
                    "www": "",
                    "twitter": "https://twitter.com/vishna",
                    "github": "https://github.com/vishna",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "lukasz-wisniewski.png"
                },
                "speaker-timirah-james": {//75
                    "firstname": "Timirah",
                    "lastname": "James",
                    "bio_html": "Timirah James is a developer advocate at Cloudinary and an influencer in the evangelism space, creating awareness around STEM and diversity in tech as well as helping others build great technical skills and become great developers. She’s best known for being a leader in the Los Angeles and Silicon Beach tech community, her active roles in the hackathon realm, and mentoring through TechniGal LA, her meetup for women exploring the world of STEM. Previously, she spent several years as a full-time iOS engineer. <br>Fun fact: She’s also a noted singer-songwriter and recently released “Coderitis,” a song about her love for technology and innovation, which can be found on SoundCloud and Spotify.",
                    "www": "",
                    "twitter": "https://twitter.com/@TimirahJ",
                    "github": "https://github.com/timirahj",
                    "linkedin": "https://www.linkedin.com/in/timirahjames/",
                    "photo_url": speakersImgBaseUrl + "timirah-james.png"
                },
                "speaker-marcin-moskala": {//77
                    "firstname": "Marcin",
                    "lastname": "Moskala",
                    "bio_html": "Marcin Moskala is an experienced developer, speaker and technology evangelist, founder of Kt. Academy, an official JetBrains partner, author of the book \"Android Development with Kotlin\", active programming community member.",
                    "www": "https://marcinmoskala.com",
                    "twitter": "",
                    "github": "",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "marcin-moskala.png"
                },
                "speaker-tomasz-gebarowski": {//78
                    "firstname": "Tomasz",
                    "lastname": "Gebarowski",
                    "bio_html": "Senior Mobile Software Engineer and Team Leader at Allegro. Currently focused on iOS platform, interested in scaling things and improving the process. Having background in e-commerce, mobile banking and distributed VoIP servers. Experienced in maintaining large codebases and long term projects. Privately father of two kids and LEGO builder.",
                    "www": "http://www.tomaszgebarowski.pl",
                    "twitter": "https://twitter.com/@tgebarowski",
                    "github": "	https://github.com/tgebarowski",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "tomasz-gebarowski.png"
                },
                "speaker-krzysztof-pawski": {//78
                    "firstname": "Krzysztof",
                    "lastname": "Pawski",
                    "bio_html": "iOS developer with 6 years of experience. He started his career in a small software house mostly dealing with machine translation tools. Then he proceeded through shopping startup, big aerospace and pharmaceutical corporations. Currently working in one of Allegro teams where he is doing his best to use knowledge acquired over these years to keep high quality code. Apart from iOS he loves his wife and various sports likes bike, snowboard, longboard or capoeira.",
                    "www": "",
                    "twitter": "",
                    "github": "",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "krzysztof-pawski.png"
                },
                "speaker-mateusz-figlewicz": {//27
                    "firstname": "Mateusz",
                    "lastname": "Figlewicz",
                    "bio_html": "IT professional with 10 years experience mainly in mobile development area. Currently for about a year acts as a Mobile Solution Architect in Intive company working together with both mobile engineers and business stakeholders to find the solutions for eCommerce projects. ",
                    "www": "",
                    "twitter": "",
                    "github": "",
                    "linkedin": "https://www.linkedin.com/in/mateuszfiglewicz",
                    "photo_url": speakersImgBaseUrl + "mateusz-figlewicz.png"
                },
                "speaker-dylan-drost": {//56
                    "firstname": "Dylan",
                    "lastname": "Drost",
                    "bio_html": "Freelance Android and Flutter Developer working on projects like Schiphol, SnappCar and Karify. As the resident geek at home I do the occasional web development/server admin for a <a href='https://bettyskitchen.nl'>food blog</a> which is run by my wife with over a 1300 post and around 100/150k visitors per month.",
                    "www": "https://dynadroid.nl",
                    "twitter": "https://twitter.com/@aegis321",
                    "github": "https://github.com/aegis123",
                    "linkedin": "https://www.linkedin.com/in/dylandrost/",
                    "photo_url": speakersImgBaseUrl + "dylan-drost.png"
                },
                "speaker-kaushik-gopal": {//59
                    "firstname": "Kaushik",
                    "lastname": "Gopal",
                    "bio_html": "I've been a developer for about 12 years now, and an Android developer for about half of those. <br>I'm also known in some circles of the internet for starting one of the most popular development podcasts - <a href='http://fragmentedpodcast.com/about/'>Fragmented</a>. We talk about building better software and becoming better Android developers.<br>I currently work as a Senior Staff Mobile Engineer at Instacart. In the past, I've worked for a bunch of startups and companies always tinkering with computers and software. I believe in open source and you can find most my open source stuff on github.<br>Google was gracious to recognize some of my contributions to the community and has me listed as a <a href='https://google-developers.appspot.com/community/experts/directory/profile/profile-kaushik_gopal'>Google Developer Expert</a> for Android.<br><a href='https://kaush.co'>kaush.co</a>",
                    "www": "https://kaush.co/",
                    "twitter": "https://twitter.com/kaushikgopal",
                    "github": "https://github.com/kaushikgopal",
                    "linkedin": "https://www.linkedin.com/in/gopalkaushik",
                    "photo_url": speakersImgBaseUrl + "kaushik-gopal.png"
                },
                "speaker-jayesh-kawli": {//90
                    "firstname": "Jayesh ",
                    "lastname": "Kawli",
                    "bio_html": "Jayesh Kawli is a Senior iOS developer working at Wayfair in Boston, Massachusetts. He has been writing iOS applications for more than 5 years and currently works as a Mobile Engineering Manager for cart and checkout team for the Wayfair iOS application. He has previously worked as a tech lead for this team and mentored at multiple occasions in current and previous organizations. As a senior developer, he likes to share his knowledge and experience with other people. He has presented a variety of topics at his company's internal Lunch and learn meetings, local meetups as well as several other international platforms. He also writes a blog which touches active topics in iOS development along with occasional off-topics such as food, travel and web development.",
                    "www": "https://jayeshkawli.ghost.io",
                    "twitter": "https://twitter.com/jayeshkawli",
                    "github": "https://github.com/jayesh15111988",
                    "linkedin": "https://www.linkedin.com/in/jayesh-kawli-8aa22633",
                    "photo_url": speakersImgBaseUrl + "jayesh-kawli.png"
                },
                "speaker-alex-zhukovich": {//64
                    "firstname": "Alex",
                    "lastname": "Zhukovich",
                    "bio_html": "Alex Zhukovich has been developing Android since 2011. Currently, he is working for Takeaway.com. He is a public speaker in Europe and software enthusiast with a passion for technologies, which share thoughts & experiences on the private technical <a href='https://alexzh.com'>blog</a> and YouTube <a href='bit.ly/AlexZhYouTube'>channel</a>",
                    "www": "https://alexzh.com",
                    "twitter": "https://twitter.com/Alex_Zhukovich",
                    "github": "https://github.com/AlexZhukovich",
                    "linkedin": "https://www.linkedin.com/in/alex-zhukovich",
                    "photo_url": speakersImgBaseUrl + "aliaksandr-zhukovich.png"
                },
                "speaker-kassem-wridan": {//91
                    "firstname": "Kassem",
                    "lastname": "Wridan",
                    "bio_html": "Kassem Wridan is a software engineer at Bloomberg London, working in the iOS Platform team. He is passionate about UI navigation paradigms, testing and as of late, Xcode project tooling!<br/><br/>From time to time Kassem blogs about his technical findings, and in his spare time is learning partner dancing and experimenting with filmography.",
                    "www": "https://www.matrixprojects.net",
                    "twitter": "https://twitter.com/kwridan",
                    "github": "https://github.com/kwridan",
                    "photo_url": speakersImgBaseUrl + "kassem-wridan.png"
                },
                "speaker-jacek-rondio": {//92
                    "firstname": "Jacek",
                    "lastname": "Rondio",
                    "bio_html": "A software engineer currently working at HARMAN Connected Services mainly focused on Android applications development, however not afraid of deeper layers of the system. Passionate about mobile and technology as well as understanding his 2 y.o. son",
                    "photo_url": speakersImgBaseUrl + "jacek-rondio.png",
                },
                "speaker-xi-chen": {//93
                    "firstname": "Xi",
                    "lastname": "Chen",
                    "bio_html": "I am a passionate software engineer, currently working in ePassi Oy. I have been working on android and iOS app development for six years, besides that I'm also very interested in backend development. I'm keen on better quality of software, in my spare time I work on my hobby projects as a software craftman.",
                    "photo_url": speakersImgBaseUrl + "xi-chen.png",
                },
                "speaker-andrea-posemato": {//94
                    "firstname": "Andrea",
                    "lastname": "Possemato",
                    "twitter" : "https://twitter.com/@_pox_",
                    "github" : "https://github.com/dpox",
                    "linkedin" : "https://www.linkedin.com/in/andrea-possemato-93a8b1aa",
                    "bio_html": "Andrea is a Security R&D Engineer at IDEMIA and currently he is enroll as PhD student at the Software and System Security group of EURECOM (France). His main research interests are focusing on Android, where he is trying to solve some open research problems spanning from UI to System Security. When he is not focus on finding vulnerable components, he is messing up with fuzzing and reversing Android apps. CTF player/lover.",
                    "photo_url": speakersImgBaseUrl + "andrea-posemato.png",
                },
            },
            talks: {
                "talk-tbd": {
                    "title": "TBD",
                    "description_html": "TBD",
                    "speakers_keys": [],
                    "language": "EN",
                    "audience_level" : "Beginner",
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
                },
                "talk-kooking_with_koroutine_recipes": {//7
                    "title": "Cooking with Coroutine Recipes",
                    "description_html": "Kotlin Coroutines or Koroutines graduated to stable release just last year and are fairly new for everyone adopting them. That means a lot of the information is not quite straightforward when it comes to implementing them in current projects. <BR>In this talk, you will be cooking up a hot pot of various Kotlin Coroutine approaches. You will be covering some aromatic recipes that provide step by step process to add that specific flavor to your current Kotlin and/or Android projects to unlock the full potential of Coroutines. By the end of the talk, you walk away with some really nice byte sized but complete usage approaches of Coroutines, solving daily problems in your current projects.",
                    "speakers_keys": ['speaker-filip-babic','speaker-nishant-srivastava'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-mobile_visual_testing_with_vizzy": {//9
                    "title": "Mobile Visual testing with Vizzy",
                    "description_html": "In this talk Raul will show how to configure and use Vizzy for visual testing your app (platform agnostic)<br>You have your UI tests, and they verify that a button with the right text is on screen... but how do you check that the style is consistent, or that the padding hasn't changed, or anything about the actual visual representation of the UI.<BR>You can do it manually, but what if there were a tool that simplify that? That is what Vizzy does.",
                    "speakers_keys": ['speaker-raul-portales'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-mvvm_as_good_antipattern_in_ios": {//12
                    "title": "MVVM as good (anti)pattern in iOS",
                    "description_html": "Nowadays there are a lot of materials, presentations & talks about how great MVVM architecture is. Hype about the view models look like a never ending story. There are a lot of developers who like this approach and use it in their own projects. I tried to go against the grain and show a different perspective of MVVM. I also try to answer questions like: Do we really need it? Does it solves any particular problem or is it overkill?.",
                    "speakers_keys": ['speaker-mateusz-szklarek'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-how_to_start_to_writing_autotests_and_not_go_crazy": {//17
                    "title": "How to start to writing autotests and not go crazy",
                    "description_html": "The mobile world is growing and developing. Our applications are not only “to download from a server and to show in a list”. Our applications are big infrastructure, increasing the complexity of projects and the desire to release faster. And if we want stable and frequent releases then we need autotests. But. Autotests - is a good solution, no doubts. But where to begin? How do you  write them? What underwater icebergs are  waiting for us? In my speech, I want to describe how to start. Together we will go through:<ul><li>history of the implementation of autotests in processes of the mobile department in KasperskyLab<li>choosing of appropriate tools<li>creating of code-style (yes-yes, autotest’s code is also a common program code)<li>our pain that we had and why we have created a new framework. And how this framework has made  our life easier<li>How to write end-to-end tests with integration tests. How to make sure  that your autotests start to work and that you receive the benefits as early as possible?<li>How have we made the process of creating screenshots light and fast?</ul>I’m sure that after my speech you will not be afraid of autotests.",
                    "speakers_keys": ['speaker-eugene-matsyuk'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-building_a_ci_cd_pipeline_for_your_mobile_app": {//18
                    "title": "Building a CI/CD pipeline for your mobile app",
                    "description_html": "Mobile apps have evolved over the years and there is many components to starting a new projects and having working and maintainable software. Something that has become important to building good mobile apps is having a CI/CD pipeline. In this talk I will cover the different components needed to create a successful pipeline. This will include choosing a git strategy, a choice of static code analysis tools, unit testing and automatic deployments with Fastlane.",
                    "speakers_keys": ['speaker-peter-john-welcome'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-android_mvi_with_jetpack_compose": {//19
                    "title": "Android MVI with Jetpack Compose",
                    "description_html": "A little intro on how Jetpack Compose will help use a real MVI approach in the Android world. Views will become dumber than ever!",
                    "speakers_keys": ['speaker-luca-nicoletti'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-kotlin_native_and_multiplatform_development": {//21
                    "title": "Kotlin/Native and Multiplatform Development ",
                    "description_html": "This workshop will introduced you to Kotlin/Native and build a Kotlin Multiplatform app that runs on both iOS and Android using shared Kotlin code. We will cover following topics in this workshop Introduction to Kotlin/Native and Multiplatform Your First Kotlin/Native Program Creating a Multiplatform Project Shared Library from Android & iOS Networking & Concurrency using Ktor & Coroutines Designing Android & iOS user interface Debugging multiplatform Project Drawbacks",
                    "speakers_keys": ['speaker-vipul-shah'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-how_to_talk_to_computers": {//27
                    "title": "How to talk to computers ",
                    "description_html": "A new line of thinking about interfacing with devices around human. Presentation will describe the possibilities, risks and challenges with voice communication both from design and ecosystem approach and implementation level.",
                    "speakers_keys": ['speaker-mateusz-figlewicz'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-how_i_moved_a_large_production_app_to_navigation_component": {//29
                    "title": "How I moved a large production app to Navigation Component",
                    "description_html": "For some time, the Android team from Google has been providing us a new, attractive solutions to problems that every Android Developer will encounter sooner or later in his career.<BR>One of such solutions is Navigation component, which simplify the implementation of the transition from screen to screen, and at the same time provide a tool that is an amiable to use and allows testing.<BR>In my talk I would like to raise the question, whether this will work well in every project?<BR>Why we decided to use Navigation component in our production app and how we dealt with problems on our way, as well as provide a knowledge about how to prepare for the migration from the current implementation to a new idea from Google.",
                    "speakers_keys": ['speaker-piotr-madry'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-structured_unit_testing_with_spek": {//32
                    "title": "Structured unit testing with Spek",
                    "description_html": "Are you tired of decrypting the JUnit test that you wrote a few weeks back? Do you want to write nice, readable & structured tests that are actually fun to write and joy to read? If you have answered yes to at least one of the questions above, I have a solution for you. Join this talk and fall again in love with unit testing. We will cover:<ul><li>Describe how Spek works<li>Comparison with JUnit <li>Sample tests for a project following a clean architecture pattern (data, domain & view layer)</ul>",
                    "speakers_keys": ['speaker-martin-petrulak'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-how_to_build_a_messenger_for_android": {//37
                    "title": "How to build a messenger for Android?",
                    "description_html": "It looks so simple outside, the app which can send messages from one user and receive from others. This is what we were thinking from start. 9 months passed we're still on it. In this talk, I will go through the main parts of the messenger project such as transport, synchronization, architecture, storage, pagination as well as explain common mistakes we've made on the way to instant messenger. <br>You’ll leave this talk with a solid understanding of how modern messengers are built and the confidence to get started.",
                    "speakers_keys": ['speaker-andrii-rakhimov'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-functional_magic_in_swift": {//44
                    "title": "Functional Magic in Swift",
                    "description_html": "Do you find yourself creating messy code in order to transform Swift optionals? Do you wish you harnessed the functional power of Swift more? This talk is for you! You’ll learn about creating elegant code with map and flatMap, and some tips and tricks to use this magic to make your code more Swifty.<BR>Introduction",
                    "speakers_keys": ['speaker-neem-serra'],
                    "language": "EN",
                    "audience_level" : "Beginner"
                },
                "talk-iap_subscriptions_-_lessons_learned": {//47
                    "title": "IAP Subscriptions - Lessons learned",
                    "description_html": "Traps, Tips and Tricks on implementing (auto-)renewable subscriptions with In-app purchase APIs on iOS.",
                    "speakers_keys": ['speaker-tomasz-grynfelder-renk'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-coroutines_vs_reactivex_handling_errors": {//54
                    "title": "Coroutines vs. ReactiveX: Handling errors",
                    "description_html": "Imagine you’re writing asynchronous code.<br>- Are you using callbacks? (no)<BR>- Are you using Futures? Reactive streams?<BR>- Are you using async features of your language of choice?<br>Whatever the answers are, you want to do error handling right. Let’s compare Coroutines and ReactiveX in this regard.<br>Whether you’re coming from the Android world or not, you’ve probably heard about Kotlin (the programming language) and its asynchronous programming concept called Coroutines. It’s a neat concept that helps you create execution blocks similar to light-weight threads, while at the same time allowing you to write your asynchronous code in a synchronous fashion.<br>On the other hand, many of us got really (really) used to Reactive Extensions in many languages, and we prefer to go down this road. With ReactiveX, you can chain your asynchronous blocks in future-like structures, and easily control threading around them.<br>Well, you know how it usually goes - you read about something (aha! what is this coroutines thing)… maybe you see a couple of talks on the topic, maybe you get interested. After you try it out and decide to use it in a real project, you start typing your code… and boom! Your program crashes. You then go to StackOverflow to check for answers to your problem, and surprise: you’re not handling errors properly. You copy-paste the solution without any edits or tests and you’re ready for release.<br>Hopefully this is not you. You want to check everything before using a new language or library, you want to fully understand the consequences of switching over to a different solution from the one you currently have. There are some quirks in every approach, sure, but do you know all of the corner cases?<br>That’s why we need to have this talk. Let’s go together through the most interesting examples of how we can get (and handle) errors with ReactiveX and Coroutines.",
                    "speakers_keys": ['speaker-milos-marinkovic'],
                    "language": "EN",
                     "audience_level" : "Intermediate"
                },
                "talk-how_to_test_on_you_flutter_app": {//56
                    "title": "How to test on you Flutter app",
                    "description_html": "Creating a cross platform app on Flutter is really efficient but can everything be tested and automated so you can create high quality apps. And if everything is test does run on IOS and Android as expected.",
                    "speakers_keys": ['speaker-dylan-drost'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-tips_tricks_for_daily_ui_development": {//57
                    "title": "Tips & tricks for daily UI development",
                    "description_html": "Time spent on developing User Interfaces is often costly when it comes to mobile software development. It's also one of main reasons that led to the rise of cross-platform technologies. During this talk, I'd like to show you a couple of techniques how we can optimise UI development and maintain good code quality while working on 100% Swift and UIKit codebase.",
                    "speakers_keys": ['speaker-pawel-urbanowicz'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-make_some_move_with_motionlayout": {//58
                    "title": "Make some move with MotionLayout",
                    "description_html": "Always wanted to build better animations on Android ? Let’s explore Motion Layout in order to know its capabilities. MotionLayout beta-1 was release during the Google I/O. It promises to simplify the way we create animation on Android. Based on XML we will be able to describe on animation that could connected to a swipe on the screen or a native component.<br>In this talk, I will explore an Android app that list version of Android. For each version we will discover a new example, starting with basic modification of a constraint. Then adding KeyFrame with position, scale and rotation. Next playing with customs attributes to change the image color saturation. Lastly we will explore connection with Coordinator Layout, View Pager, Drawer and SeekBar.<br>At the end, you should know how to use and what are the capabilities of MotionLayout. Should you use it in your application ?<br>Want to know more, you can read this <a href='https://medium.com/xebia-france/move-my-app-with-motionlayout-part-1-7800637feb22'>article</a>.",
                    "speakers_keys": ['speaker-alexandre-genet'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-architecting_android_and_ios_app_features_for_2020": {//59
                    "title": "Architecting Android and iOS app features for 2020",
                    "description_html": "Inspired by some well known architecture patterns like MVVM/MVI, I set out to come up with an agnostic set of principles that would help developers build features in their app in a robust, safe and (importantly) “testable” way. At Instacart, we've started to use these principles to build features on both iOS and Android.<br>In this talk, we'll examine these principles, discuss the merits (+ disadvantages!) and see how these can be implemented with precise code examples. Having implemented this pattern for sometime now at Instacart, I'll also share some of our learnings along the way for both platforms.",
                    "speakers_keys": ['speaker-kaushik-gopal'],
                    "language": "EN",
                    "audience_level" : "Advanced"
                },
                "talk-2_years_of_flutter_-_retrospection": {//70
                    "title": "2+ years of Flutter - Retrospection",
                    "description_html": "Flutter is lately gaining more and more traction, but how is it in practice?<BR>In this talk we will reflect on our 2 years long journey - what went well and what didn't and why we're still excited about it.<br>In this talk you will learn when Flutter can be useful for you and when to consider it for your next app.",
                    "speakers_keys": ['speaker-michal-baran', 'speaker-rafal-wachol'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-two_perspectives_on_ios_accessibility": {//71
                    "title": "Two Perspectives on iOS Accessibility ",
                    "description_html": "During our talk, we would like to present two perspectives on implementing proper accessibility support on iOS. We will focus on visual impairment-related topics and try to clearly distinguish between efforts to technically meet the requirement of \"providing accessibility support\" and factually designing solutions that meet the needs of potential users. It is one thing to comply with the regulations, and other – to design and build really usable products.",
                    "speakers_keys": ['speaker-milosz-staszewski', 'speaker-mateusz-duc'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-core_data_alive_and_kicking": {//73
                    "title": "Core Data: Alive and Kicking",
                    "description_html": "Core Data is Apple’s native framework for persisting data that works across all their platforms.<br>It has a reputation of being hard to use, not performant, and complicated to debug - many people have used other persistence methods such as SQLite or Realm.<br>But Over the past few years it has improved and continues to improve. A few years ago a method was introduced to more easy create stacks and use multiple threads for performance. At WWDC this year further changes were made to allow some storage in iCloud and also support with diffable data sources.<br>This will not be a beginner tutorial for Core Data. I propose to cover modern ways of working through best practices: - Setting up data sources, effective fetching of data from stores - Cloud storage, connecting to UITableViews/UICollectionViews through the new diffable data sources. How to bind SwiftUI Views to data.<br>Many people think that Core Data is unsupported and not a good solution for persistence. I will show how it is still relevant in modern application development and it is still Alive and Kicking.",
                    "speakers_keys": ['speaker-abizer-nasir'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-voyager_di_and_navigation_for_flutter": {//74
                    "title": "Voyager - DI and Navigation for Flutter",
                    "description_html": "Voyager is the widget router. It combines yaml configuration map, custom plugins architecture and dependency injection into one comprehensive system that allows you to define readable requirements as code and turn them into flutter components.<br>If you have ever thought HOW MIGHT WE:<ul><li>make deep links easy<li>make requirements trackable across git history and different branches<li>A/B test different navigation flows without code pollution</ul>I might have some answers for you.",
                    "speakers_keys": ['speaker-lukasz-wisniewski'],
                    "language": "EN",
                    "audience_level" : "Beginner"
                },
                "talk-jump-starting_with_swift_ui": {//75
                    "title": "Jump-starting with Swift UI",
                    "description_html": "SwiftUI is arguably the most exciting thing announced this year at WWDC. The new Apple framework has quickly become popular amongst developers, as a sleek new API for designing and writing code across all Apple platforms -- iOS, watchOS, MacOS, and tvOS! <br>In this talk, we’ll walk through examples and touch on all the basics to get you up and going with SwiftUI, including creating and combining views, state variables, experimenting with layouts such as HStack and VStack, dynamic lists, and more!",
                    "speakers_keys": ['speaker-timirah-james'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-kotlin-not-to-do-list": {//77
                    "title": "Kotlin Not-to-Do List - What we should avoid doing in Kotlin",
                    "description_html": "Kotlin gives us a lot of possibilities, but with every power comes responsibility. What should we avoid doing in Kotlin? What are Kotlin internal contracts in terms of different features and functions? What is dangerous and should be avoided? How to code responsively?",
                    "speakers_keys": ['speaker-marcin-moskala'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-invest-in-test": {//90
                    "title": "Invest in tests - Unit testing iOS applications",
                    "description_html": "Unit tests is often forgotten part in a fast-paced culture. I will use my past experience and examples to teach why unit tests should be integrated into regular workflow. We will see how to write testable code with attention to test things that matter. We will discuss how to write unit tests that carry high value, spot potential bugs and pitfalls to avoid while trying to only test things that matter. The presentation will be accompanied by examples to demonstrate how writing testable code should not be regarded as a boring and discretionary task, but rather part of regular software development and how the choice of architecture makes a big difference in the test quality. Attendees of the session will take away the following:<ul><li>What exactly is unit testing and why should I worry about it?</li><li>Unit tests as a tool to write quality code eventually leading to a reduced future maintenance cost for the codebase</li><li>Code reviewing unit tests</li><li>Demystifying the illusion of code coverage obsession</li></ul>",
                    "speakers_keys": ['speaker-jayesh-kawli'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-breaking-the-monolith": {//77
                    "title": "Breaking the monolith",
                    "description_html": "Eight years ago, when we started building Allegro for iOS, there was no Swift, our team was very small and no one thought about scaling the process. Since that time applications have grown significantly, have become more complex and now lots of teams have to deal with decisions that were taken when mobile app development was still a niche. This presentation is a subjective journey through changes in Allegro iOS application, resulting in breaking the monolith into module driven architecture. We will tell you how our architecture has evolved, how we’ve scaled our process, what we’ve improved and what did wrong. Everything with a dose of pragmatism and our experiences after successfully breaking the monolith on the backend and progressing it to microservice architecture. Showing that two different worlds of backend and mobile suffer due to the same fundamental problems when scaling up." ,
                    "speakers_keys": ['speaker-krzysztof-pawski', 'speaker-tomasz-gebarowski'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-xcode_project_generation": {//91
                    "title": "Xcode Project Generation",
                    "description_html": "Managing large iOS projects, like building the Bloomberg Professional mobile application, can be challenging, as they can quickly run into scaling issues. This past year, the iOS Platform team at Bloomberg undertook a few initiatives to build out and use open source tooling to help manage their Xcode projects. This talk will cover some of the key insights and learnings from their experience on the nuances of Xcode projects. We'll see why project generation tooling may be needed and the landscape of tools out there. ",
                    "speakers_keys": ['speaker-kassem-wridan'],
                    "language": "EN",
                    "audience_level" : "Intermediate"
                },
                "talk-android-auto": {//92
                    "title": "Android Auto - How to build a custom app and not distract users",
                    "description_html": "During this talk, we will check the latest changes in the Android Auto interface and functionalities. We will build the application guiding driver through the food festival and make it work as a standalone application on the head unit running Android Automotive OS.",
                    "speakers_keys": ['speaker-jacek-rondio'],
                    "language": "EN",
                    "audience_level" : "Beginner"
                },
                "talk-evolving-mobile-app": {//93
                    "title": "The evolving of our mobile app",
                    "description_html": "It is probably common that a startup needs to quickly develop some thing to put to the market. But when the growth of the startup is beyond expectation, the scalability, maintainability of its product become issues. ePassi is not anymore a startup but we faced those issues. This story is about how we managed to re-think our app and managed to build an app fits the future needs of business growth. I will take about how we adapt ourselves to a multi-module design, how it works with dagger,  a further modularised architecture with the help of MVVM pattern and Kotlin coroutine. BTW, we are still on our way to make it better.",
                    "speakers_keys": ['speaker-xi-chen'],
                    "language": "EN",
                    "audience_level" : "Beginner"
                },
                "talk-journey-into-security": {//93
                    "title": "A journey into the Android Security world",
                    "description_html": "Writing secure code is probably one of the most difficult task to accomplish while developing complex mobile applications. Testing the security of our app before publishing it has become one fundamental step on the app's lifecycle. In this talk, we will analyze real-world vulnerabilities and discuss how to identify and correct them before attackers can compromise the security of our application.",
                    "speakers_keys": ['speaker-andrea-posemato'],
                    "language": "EN",
                    "audience_level" : "Advanced"
                },
            },
            breaks: {
                'break-registration': {
                    title: 'Registration',
                    description_html: 'If you do not want to miss any presentation please register between 8:30-9:30. However, registration will be opened all day!'
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
                    title: 'AfterParty in Odlewnia',
                    description_html: 'Free pizza and beer and follow up talks.<br>15min from the conference venue.<br>ul. Piotrkowska 217, Łódź'
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
                        "talk_key":"talk-hello-world"
                    }
                },
                "slot-no-coffee-0": {"break_key": "break-no-coffee"},
                "slot-1": {
                    "venue-epassi" : {
                        "talk_key":"talk-evolving-mobile-app"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-breaking-the-monolith"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-android-auto"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-journey-into-security"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-how_to_talk_to_computers"
                    }
                },
                "slot-coffee-1": {"break_key": "break-coffee"},
                "slot-2": {
                    "venue-epassi" : {
                        "talk_key":"talk-android_mvi_with_jetpack_compose"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-two_perspectives_on_ios_accessibility"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-mvvm_as_good_antipattern_in_ios"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-how_to_build_a_messenger_for_android"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-structured_unit_testing_with_spek"
                    }
                },
                "slot-coffee-2": {"break_key": "break-coffee"},
                "slot-3": {
                    "venue-epassi" : {
                        "talk_key":"talk-building_a_ci_cd_pipeline_for_your_mobile_app"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-jump-starting_with_swift_ui"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-voyager_di_and_navigation_for_flutter"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-coroutines_vs_reactivex_handling_errors",
                    },
                    "venue-intive" : {
                        "talk_key":"talk-core_data_alive_and_kicking"
                    }
                },
                "slot-lunch": {"break_key": "break-lunch"},
                "slot-4": {
                    "venue-epassi" : {
                        "talk_key":"talk-tips_tricks_for_daily_ui_development"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-kooking_with_koroutine_recipes"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-how_to_start_to_writing_autotests_and_not_go_crazy"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-invest-in-test"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-how_to_test_on_you_flutter_app"
                    }
                },
                "slot-coffee-4": {"break_key": "break-coffee"},
                "slot-5": {
                    "venue-epassi" : {
                        "talk_key":"talk-architecting_android_and_ios_app_features_for_2020"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-make_some_move_with_motionlayout"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-functional_magic_in_swift"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-kotlin_native_and_multiplatform_development"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-xcode_project_generation"
                    }
                },
                "slot-coffee-5": {"break_key": "break-coffee"},
                "slot-6": {
                    "venue-epassi" : {
                        "talk_key":"talk-kotlin-not-to-do-list"
                    },
                    "venue-allegro" : {
                        "talk_key":"talk-2_years_of_flutter_-_retrospection"
                    },
                    "venue-harman" : {
                        "talk_key":"talk-mobile_visual_testing_with_vizzy"
                    },
                    "venue-idemia" : {
                        "talk_key":"talk-iap_subscriptions_-_lessons_learned"
                    },
                    "venue-intive" : {
                        "talk_key":"talk-how_i_moved_a_large_production_app_to_navigation_component"
                    }
                },
                "slot-no-coffee-6": {"break_key": "break-no-coffee"},
                "slot-finally": {
                    "venue-epassi": {
                        "talk_key":"talk-finally"
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
            workshops: {
                "workshop-robust-ui": {
                    "title": "Creating robust Android UI tests",
                    "datetime": "25th October, 9:00 - 17:00",
                    "description_html": "Mobile apps are growing. They become more complex and require more testing. It means that it is time to integrate automated tests to your project inefficient way because they should be fast and stable. During this workshop, we will write a lot of test cases efficiently. We start with a fast introduction to Espresso and UiAutomator frameworks. Afterwards, we are moving to write different types of UI tests and finally, we create a DSL which helps us to write stable test cases with minimum noise... <br/><b>To participate in this workshop purchase a separate <a href='https://mobilization-ix-robust-ui-workshop.konfeo.com/en/groups'>ticket</a></b>.",
                    "speakers_keys": ['speaker-alex-zhukovich'],
                },
                "workshop-kotlin-coroutines": {
                    "title": "Kotlin Coroutines",
                    "datetime": "28th October, 9:00 - 17:00",
                    "description_html": "The workshop covers asynchronous programming in Kotlin using coroutines. It covers both build-in support for coroutines and dives deeper into <i>kotlinx.coroutines</i> library. In the workshop we cover: <ul><li>Styles of concurrence</li><li>Sequence builders</li><li>Continuation</li><li>Understanding how suspension works</li><li>Coroutine Context</li><li>Interceptors and dispatchers</li><li>Coroutine Scope</li><li>Coroutine builders</li><li>Structured concurrency</li><li>Understanding Job</li><li>Composing suspending functions</li><li>Exceptions handling</li><li>Shared mutable state and concurrency</li><li>Channels</li><li>Actors</li><li>Unit testing</li></ul><b>To participate in this workshop purchase a separate <a href='https://mobilization-ix-kotlin-coroutines-workshop.konfeo.com/en/groups'>ticket</a></b>.",
                    "speakers_keys": ['speaker-marcin-moskala']
                }
            }
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
