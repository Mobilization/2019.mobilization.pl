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
                "speakers": true,
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
                    "name" : "Intive",
                    "logo_url" : sponsorsImgBaseUrl + "intive_logo_blue_square.png",
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
                    {
                        "name" : "Heryson",
                        "link" : "https://heryson.com/ ",
                        "logo_url" : sponsorsImgBaseUrl + "heryson_square.png",
                    },
                    {
                        "name" : "Kaspersky",
                        "link" : "https://www.kaspersky.com/",
                        "logo_url" : sponsorsImgBaseUrl + "kaspersky_square.png",
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
                    "bio_html": "Bio:<BR>I have beenan android developer since 2012. I have takenpart in many projects, some of those are <a href='https://play.google.com/store/apps/details?id=com.lingualeo.android'>LinguaLeo</a>, <a href='https://play.google.com/store/apps/details?id=ru.sberbank_sbbol'>SberbankBusinessOnline</a> (famous apps in Russia). My current project is <a href='https://play.google.com/store/apps/details?id=com.kms.free'>Kaspersky Internet Security</a> for Android.<BR>I have personal development blogs in <a href='https://habr.com/ru/users/xoxol_89/posts/'>Russian</a> and in <a href='https://medium.com/@eugenematsyuk'>English</a>. <BR>I have a github <a href='https://github.com/matzuk'>page</a> that contains my small projects written mainly for articles. Also I am a main author of the architecture <a href='https://github.com/AndroidArchitecture/AndroidArchitectureBook'>CookBook</a> that is a set of rules and recommendations on how to build your project’s architecture. <BR>And what matters I have rich experience in public speaking but all speeches were in Russian (some videos are <a href='https://www.conferencecast.tv/speaker/6932/yevgenii-matsyuk'>here</a>).",
                    "www": "",
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
                    "bio_html": "Michal is an Android developer, loving Flutter. With 3 years of mobile development. Technical articles writer. Passionate about scalable, lasting solutions.<br>Both are working together in Ocado Technology in London.",
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
                    "bio_html": "Freelance Android and Flutter Developer working on projects like Schiphol, SnappCar and Karify. As the resident geek at home I do the occasional web development/server admin for https://bettyskitchen.nl a food blog which is run by my wife with over a 1300 post and around 100/150k visitors per month.",
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
                "speaker-jayesh-kawli": {//70
                    "firstname": "Jayesh ",
                    "lastname": "Kawli",
                    "bio_html": "Jayesh Kawli is a Senior iOS developer working at Wayfair in Boston, Massachusetts. He has been writing iOS applications for more than 5 years and currently works as a Mobile Engineering Manager for cart and checkout team for the Wayfair iOS application. He has previously worked as a tech lead for this team and mentored at multiple occasions in current and previous organizations. As a senior developer, he likes to share his knowledge and experience with other people. He has presented a variety of topics at his company's internal Lunch and learn meetings, local meetups as well as several other international platforms. He also writes a blog which touches active topics in iOS development along with occasional off-topics such as food, travel and web development.",
                    "www": "https://jayeshkawli.ghost.io",
                    "twitter": "https://twitter.com/jayeshkawli",
                    "github": "https://github.com/jayesh15111988",
                    "linkedin": "https://www.linkedin.com/in/jayesh-kawli-8aa22633",
                    "photo_url": speakersImgBaseUrl + "jayesh-kawli.png"
                },
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
