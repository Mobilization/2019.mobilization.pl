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
                },
                "talk-ui-profiling": { //1
                    "title": "UI profiling in examples. Where is my bottleneck?",
                    "description_html": "You developed a feature, tested it yourself - everything works well. You send it to the internal testing, your managers... And they say it is slow!<br>Artur ran into the exact same situation and dug into the tools that may be used to make your Android app work on 60 frames per second. This presentation is intended for the people who haven't dived into the UI performance yet. You will see some examples of easy and fast ways to check if your app works well and if it is not, how to find the potential problem.<br>In the presentation, Artur will tell you about:<ul><li>How android renders views and why does it matter to you (DisplayLists, Choreographer, VSync, Render Thread - things that will be covered)<li>How to understand that you have a problem (GPU profiling, SysTrace)<li>How to get metrics about the current rendering speed (fps) of your app (dumpsys gfxinfo, Systrace, HierarchyViewer)<li>Some of their mistakes they made, how he found them and how he fixed them (overlaying Controllers (analog of Fragments), incorrect usage of RecyclerView with NestedScrollViewHow to easily find GPU overdraw and fix it (using GPU overdraw in dev settings and export view layers in HierarchyViewer or Scalpel to show you the ways to improve)<li>How to be sure that the problem doesn’t regress (Android Vitals, dumpsys gfxinfo)</ul>",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-artur-badretdinov']
                },
                "talk-kotlin-sandwich": { //2
                    "title": "Making a Kotlin, Architecture Components, Rx and Coroutines sandwich",
                    "description_html": "Architecture keeps being a buzzword in the Android world, even though years have passed since we've seen the first version of the OS. Problems like orientation changes, navigation, data mapping, parsing or display are still around us, and we struggle to make them go away.<br>Using Kotlin and it's Coroutines, enveloping the application in Rx and finalizing it with Architecture Components, we can bring the end to nuisances that these problems cause. By heavily relying on generics, asynchronous programming and data persistance, we're able to make a solution, that fits most applications and has an understandable API.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-filip-babic']
                },
                "talk-callbacks-hell": { //3
                    "title": "If callbacks are hell, are coroutines the way to heaven?",
                    "description_html": "This talk will focus on use cases on Android, but most of it can perfectly be applied on other platforms.<br>While nearly all apps need to perform computations or I/O asynchronously, often off the UI thread (to avoid UI freezes on blocking calls), the solutions have never been straightforward. You could choose between AsyncTask, threads, executors or third-party java libraries, but couldn't avoid the callback hell. Coroutines which came in Kotlin 1.1 are changing this.<br>Kotlin coroutines allow to write code that reads like a good recipe, line by line, without jumps, yet, doesn't block the calling thread.<br>This talk will show how coroutines are relevant in many Android components (ViewModels, Jobs, Services, Activities/Fragments, Views…), for I/O, UI animations, Google Play Services Tasks API usage, and custom async logic.<br>But that's not all. I'll show you how you can take down any callback hell and do things you'd not have done before because it would have polluted your code base too much. You'll also see how Kotlin coroutines can help you handle errors more easily, and exhaustively.<br>Bluetooth Low Energy, a great callback hell example, can also get good with coroutines, and I'll show how I Made GATT Great Again! If you have some safe BLE devices we can connect to, please, bring them at the conference!<br>Camera2 has another big callback hell, plus a complex state machine, and I'll also show how to remove it with coroutines and other Kotlin language features!<br>What you'll learn here will enable you to better take advantage of coroutines features to solve complex problems and deal with hard or badly designed APIs you can't escape.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-louis-cad']
                },
                "talk-kotlin-quality": { //4
                    "title": "Kotlin on Code Quality Tools",
                    "description_html": "Some might have heard about code quality tools such as Checkstyle, PMD, Findbugs, Lint, Detekt and others but which ones are applicable to Kotlin?<br>I'll list a bunch of tools, explain what they can do, touch on how they work and most importantly show you how you can start using them to be more productive and save a lot of time.<br>With the help of these analyzers you can focus on coding conventions in your team, catch a few bugs and concentrate on what really matters when reviewing code.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-niklas-baudy']
                },
                "talk-dependency-injection": { //5
                    "title": "Dependency Injection Pattern for iOS App",
                    "description_html": "Dependency injection (DI) was introduced as one of the modern best practices at a past WWDC, and is getting popular to make an app maintainable, scalable and testable. To apply DI pattern, a DI container is often used to define a dependency graph to retrieve instances with their dependencies resolved.<br>In this talk, the original author of Swinject, the most popular DI framework for Swift, will introduce DI pattern for an iOS app. The talk is based on the speaker's experience developing a production app used by tens of millions of users.<br>The talk covers:<ul><li> Basic concept and motivation of dependency injection in dependency inversion principle.<li>Comparison of iOS architectures, e.g. MVC, MVVM and VIPER.<li>Introduction of a minimum architecture to apply dependency injection.<br>- Practical structure to configure dependency definitions using Swinject Container, Assembly and Assembler.<li>Unit testing with test doubles and dependency injection.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-yoichi-tagaya']
                },
                "talk-rust-sharing": { //6
                    "title": "Sharing Code between iOS & Android with Rust",
                    "description_html": "When having to share code between iOS and Android, most companies choose C++. It is a well known language with very good tooling, but it also has a lot of pitfalls. For one, it is a very complex language. It also makes it really easy to accidentally introduce memory leaks or segmentation faults; especially if you're used to automatic memory management via a GC (Kotlin) or Arc (Swift). It also looks quite different from modern language like Swift or Kotlin. Now that we iOS developers got (mostly) rid of Objective-C, and Android Developers got (mostly) rid of Java, it feels archaic having to go back to a language with an archaic Syntax like C++.<br>Rust looks and feels a lot like Kotlin or Swift, and it offers the same easy ways of sharing code as C++. In addition to that, Rust has a very safe memory management model, high performance, a way to do fearless concurrency, and a very rich package ecosystem. As a bonus, it compiles to WebAssembly, so the shared code could also be used in any HTML5 app. At XING, we started some experiments in Rust in order to find out whether it would be useful to leverage it for code sharing. We're not using it in production yet or anything, but I feel like it would still be nice to introduce it to more developers so they can also start doing some experiments.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-benedikt-terhechte']
                },
                "talk-green-rocket": { //7
                    "title": "Living on a green rocket field",
                    "description_html": "At Google IO 2018 the Android team announced Jetpack for Android, which is an opinionated set of libraries and architecture, which is a recommendation for Android developers. We at LAB1886, the incubator for the Daimler AG (Mercedes Benz), thought to give it a try with our latest project called RaceScout from AMG. We have the luxury to work always on green fields for projects. So we wanted to share our experience with Jetpack and also give some recommendations for all the library & SDK developers.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-hasan-hosgel']
                },
                "talk-idealistic-apps": { //8
                    "title": "Writing idealistic apps",
                    "description_html": "This talk will learn you how to develop clean, maintainable and stable applications in Swift. It will also look at some examples of how I applied these methods in my work.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-joannis-orlandos']
                },
                "talk-app-connected": { //9
                    "title": "Is your app really connected?",
                    "description_html": "Today, almost every Android app communicates with a remote server through a provided API. We often forget that mobile applications can work offline. Moreover, network can be down or not connected to the Internet. We may also want to synchronize our data through the WiFi, but not through the mobile data transfer to save user's money. What to do, when connection is lost and someone is using an application at the same time? How can we keep the track of network or Internet connectivity changes in our app? How to deal with this problem across all recent Android versions? How to write an application, which is network aware and optimized to reduce power consumption? If you want to know answers to these questions and get rid of endlessly rolling spinners in your app, then this talk is for you.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-piotr-wittchen']
                },
                "talk-superpowers-delegation": { //10
                    "title": "Superpowers of Kotlin Delegation",
                    "description_html": "Property delegation is pretty new feature in the programming world and most developers use only small amount of possibilities it provides. On the other hand, class delegation is known for decades and it was promoted by big authorities. All it needed was language support, which was introduced in Kotlin. On this session, we are going to dive into possibilities that Kotlin delegation gives. Let's discover this features and understand its superpowers.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-marcin-moskala']
                },
                "talk-tensorflow-mlkit": { //11
                    "title": "From TensorFlow to ML Kit: power your mobile application with machine learning",
                    "description_html": "As a mobile app developer, you probably have noticed Google's active efforts on bringing their machine learning expertise to mobile development. From TensorFlow's earliest mobile app demo to TensorFlow Lite and Android Neural Networks API, we are witnessing how latest research (e.g. MobileNet) drastically reduced machine learning model size and CPU / memory consumption on mobile devices. This year, with the beta release of ML Kit, we now have another powerful toolbox to leverage machine learning in the mobile application development.<br>This talk features a side project Magritte, an educational application that helps people learn foreign languages. It's sort of like Duolingo but with eyes, the application recognizes daily objects using custom machine learning models embedded on device and speaks the vocabulary out loud with the chosen language. By presenting the Magritte app, the talk will reveal how the models for TensorFlow mobile were initially trained and optimized, how the performance was improved with TensorFlow Lite and MobileNets models, and eventually the ongoing migration towards ML Kit.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-qian-jin']
                },
                "talk-effective-tdd": { //12
                    "title": "Effective TDD on Android with Kotlin",
                    "description_html": "After one year working with Kotlin in 5+ production Apps, it is time to show a TDD-based stack that made my development process more pleasant, and my life happier :-)",
                    "audience_level": "Advanced",
                    "language": "EN",
                    "speakers_keys": ['speaker-olmo-gallegos']
                },
                "talk-ios-performance": { //13
                    "title": "Performance of Standard iOS Elements and Technologies",
                    "description_html": "We all know that autolayout comes with a performance hit, but how does it really compare to manual layout, especially with the improvements to the autolayout engine in iOS 12? And what’s a performant way to round the corners of an image? CoreText, UILabel, UITextView: how do all the different ways to draw text perform against each other? Let's discuss the performance differences between comparable iOS elements and technologies.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-janina-kutyn']
                },
                "talk-koin-android": { //14
                    "title": "Simplify your Android development with Koin",
                    "description_html": "In 2016, the Kotlin language has shaken the Android development landscape. It's now time to break the chains from the Java language and get the best of Kotlin.<br>Koin is a pragmatic dependency injection framework for Kotlin/Android developers. Let's see how it's very simple to take in hand and how it will make your life easier: from basic dependency injection to the Android architecture's components, without forgetting the testing part.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-arnaud-giuliani']
                },
                "talk-offline-challenges": { //15
                    "title": "The Challenges of Offline Work in Mobile",
                    "description_html": "Reliable internet connection can't be taken for granted on mobile devices. Therefore, when network is unavailable, mobile apps should either fail gracefully or be able to work offline.<br>However, offline work is one of the most challenging topics in mobile development. And it's not just about mobile: the entire system might need to be offline capable.<br>In this session we will discuss the fundamental challenges of offline work and understand what it takes to implement an offline capable apps.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-vasiliy-zukanov']
                },
                "talk-flutter-sdk": { //16
                    "title": "Why is Flutter the mobile SDK developers deserve, but the also the one that they need right now?",
                    "description_html": "Flutter is an open-source mobile application development SDK created by Google. It is used to develop applications for Android and iOS by coding just once in Dart and deploying to both of these platforms. Flutter makes it so easy to build mobile apps without impacting the app’s performance. The app it produces is a treat for the eyes as everything is drawn right on the screen, pixel perfect!<br>“Why do I need this when I already have React Native?”. I got that covered in this talk for you along with the following takeaways:<br>Why coding twice is not productive anymore?<br>A brief about how Flutter came into existence<br>Flutter’s ability to keep the same performance as the native app<br>Comparison with React Native and other dual platform frameworks<br>Best resources to get started with Flutter<br>Fun Fact: Flutter was meant to use JS at first, but the team eventually decided to go with Dart. I’ll talk about this as well.<br>By the end of this talk, you will be itching to write your first app in Flutter!<br>Get ready for some engaging questions and punny one-liners ready that would make you want to not miss a second of this talk.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-rohan-taneja']
                },
                "talk-machine-learning": { //17
                    "title": "Machine Learning for Mobile Developers",
                    "description_html": "The ML Kit for Firebase lets you bring powerful machine learning features to your app whether it's for Android or iOS, and whether you're an experienced machine learning developer or you're just getting started. During this talk we are going to see use cases and best practices to boost your app using this feature.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-laura-morinigo']
                },
                "talk-crypt-ography": { //18
                    "title": "Why? Because I can - the stories from the crypt(ography)",
                    "description_html": "Based on my CryptoSwift open source project experience, I'd like to outline the most frequent issues reported to the support. Programmers comes from various programming environments and uses various schemes, not always understanding what and why. Let's review the most common scenarios to approach encryption with Swift (but in general really)",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-marcin-krzyzanowski']
                },
                "talk-hands-coordinators": { //19
                    "title": "Hands on with Coordinators",
                    "description_html": "One of the easiest ways to simplify your code is to switch to the coordinator pattern. The concept is simple enough: why should one view controller know about, create, configure, and display another, when all you're doing is creating the worst form of coupling?<br>With coordinators you can split up your app into sensible chunks, where each view controller has no concept of where it exists in your app's flow – or even that the flow exists at all.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-paul-hudson']
                },
                "talk-tricky-stuff": { //20
                    "title": "Testing the Tricky Stuff",
                    "description_html": "Tutorials all over the internet explain how to setup tests and write simpler ones, but what about in a real app where things aren't so straightforward?",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-samuel-goodwin']
                },
                "talk-errors-swift": { //21
                    "title": "Straying From the Happy Path: Taking Control of Errors in Swift",
                    "description_html": "Have you ever seen a code comment saying \"this should never happen\"? Have you ever wondered what would happen if it did? Swift has a diverse set of error-handling capabilities, from using throw to send errors up the stack to using a Result to handle errors in asynchronous methods. In this talk, we'll look at the landscape of handling errors in Swift, create new ways of expressing and handling them, and show how even the most impossible code-level situations can have 100% test coverage. By the end, you'll be taking control of the errors in your code, instead of letting them take control of you.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-jeff-kelley']
                },
                "talk-eschew-convention": { //22
                    "title": "Codify the Pattern - How Swift lets us eschew convention",
                    "description_html": "This talk will explore how we can use Swift’s strict typing and generics to create structures that better represent our intentions. I will show how this can decrease the use of internal conventions, which can often lead to misunderstandings and mistakes.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-daniel-tull']
                },
                "talk-connected-cars": { //23
                    "title": "Connected cars in a mobile world",
                    "description_html": "With the premiere of the new Mercedes A-Class and its next-generation MBUX interface, the connected car has been taken to the next level. Learn about connected infotainment systems, how mobile-friendly they are, and about the software that powers them.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-tomasz-cholewinski']
                },
                "talk-less-code": { //24
                    "title": "How to write less code. Practical meta-programming and automation.",
                    "description_html": "The more lines of code we write the more bugs we welcome. Smart and properly tested algorithms are less likely to be wrong, compared to, well.. human beings. This talk is therefore about what I do to avoid boilerplate code and automate everything that needs to run at least twice with the same settings.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-jakub-mazur']
                },
                "talk-prototyping-javascript": { //25
                    "title": "Effective mobile applications prototyping with JavaScript",
                    "description_html": "We found hybrid applications as an amazing way of prototyping. During the talk I'm going to talk how we leverage possibilities of React Native and Cordova, what's the different between them and how your team could benefit from giving it a try.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-oleksandr-tryshchenko']
                },
                "talk-kotlin-arrow": { //26
                    "title": "An Arrow to the Kotlin",
                    "description_html": "Kotlin has been a revolution in the past two years, especially in the Android world which were using outdated versions of Java.<br>The language leap is so high, that now we are even allowed to put some Functional Programming in the mix.<br>This is being done through Arrow project, a FP typed library for Kotlin (and compatible with Java)<br>But, instead of doing a boring theroretical introduction to FP principles, we will see practical examplen on how we can complement our classic OOP with FP structures and patterns Arrow provides, and how can we apply them to have more concise and robust code.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-saul-diaz-gonzalez']
                },
                "talk-splitting-monolithic": { //27
                    "title": "Splitting Monolithic Swift Code Base Into Modules",
                    "description_html": "Modular Architecture - insights from a big French e-commerce. How to challenge the status quo, boost team motivation, productivity and start writing cleaner code with more tests? A journey of sailing from monolithic codebase to modules.<br>Come and hear our story of challenging the status quo and introducing modular architecture:<ul><li>how do we switch to a MVVM+C architecture within existing Swift code base?<li>how do we approach splitting the monolith into modules?<li>how do we boost features development with product modules?<li>how do we get rid of Core Data?<li>is TDD possible in a slowly compiling Swift code base?<li>what are some unobvious benefits of code modularization?</ul>Maciek and Paul represent the international team of 9 iOS developers from Vente-privee. They will give you both, the Core and Product team insights about working with modular architecture.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-paul-emanuel-garcia', 'speaker-maciej-grzybowski']
                },
                "talk-home-automation": { //28
                    "title": "Home Automation with Android Things and the Google Assistant",
                    "description_html": "Smart lights are fun, but have you ever wondered how it works under the hood, when you say to your Google Home something like: \"OK Google, turn on the lights\"?<br>Could we just buy some colored LED bulbs for $10, and create our own home automation system, compatible with the Google Assistant?<br>That's what we will see today, first doing some slight reverse-engineering to understand how those light bulbs work, and then creating an Android Things and an Actions on Google project to control those.<br>This talk is a way to discover \"Actions on Google\", \"Google Cloud Functions\", \"Firebase Cloud Firestore\" and \"Android Things\"",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-gautier-mechling']
                },
                "talk-crafting-expo": { //29
                    "title": "Crafting cross-platform native apps using Expo",
                    "description_html": "I'd like to show what Expo is and how it helps in building cross-platform apps with native feeling.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-tomasz-sapeta']
                },
                "talk-testing-kotlin": { //30
                    "title": "Testing with Kotlin",
                    "description_html": "Everyone agrees, that testing our code is essential for development. Yet, creating clean and readable tests is not a piece of cake.<br>We put a lot of effort in keeping our codebase in a good shape. But let's be honest - most of testing frameworks aren't modern, friendly tools. That's where Kotlin and it’s ecosystem comes to help. Data and behavior driven testing combined with specifications can give you more freedom - I will show how to apply those strategies to everyday development.<br>Besides of general ideas, I will discuss Kotlin and Android testing frameworks. You will also learn how we managed to tailor testing patterns for specific problems.<br>I hope that after my talk you will have bunch of ideas to be more productive while writing tests.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-jaroslaw-michalik']
                },
                "talk-grumpy-man": { //31
                    "title": "Code Quality on Android - A grumpy old man's perspective",
                    "description_html": "In this talk Raul describes the approach they have taken at OneView to improve code quality: CICD, Static code analysis, Unit test, testing Android code efficiently, libraries and architectural approach.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-raul-portales']
                },
                "talk-ios-debugging": { //32
                    "title": "Take your iOS debugging skills to the next level",
                    "description_html": "Debugging is an essential, but complex part of app development. No wonder iOS developers have come up with tools that make this process less daunting. By applying a few tricks from our talk, you will be able to speed up debugging on all layers, from networking to the UI. This in turn will reduce the time you need to ship your product.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-ewa-ludwiczak', 'speaker-henryk-ratajczak']
                },
                "talk-animations-gestures": { //33
                    "title": "Animations and gesture handling in React Native and native languages",
                    "description_html": "Gestures and animations are a very extensive subjects where advanced development meets very highUX requirements and these meetings seems to be difficult.<br>During this talk I wish to show two libraries which solve this problem in React Native. In addition I'd like to raise a subject of gesture handling in 'native' developments and consistence of whole gesture system on mobile platforms. What's more, I'm going to present some related experiments.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-michal-osadnik']
                },
                "talk-kotlin-mobile": { //34
                    "title": "Kotlin for Android, iOS & the mobile web",
                    "description_html": "Kotlin is an official language for Android development, but did you know you can use the Kotlin language to compile for iOS via LLVM as well as for the web via JS ?<br>In this talk, I will show how to create a mobile application that runs on Android, on iOS and on the web while remaining true to each platform.<br>We will see how to organize your code to share your business logic between platforms while keeping the presentation specific to each of them.<br>Finally, we will discuss the current state of Kotlin multi-platform, as well as its future.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-salomon-brys']
                },
                "talk-dart-flutter": { //35
                    "title": "Dart: I'm your Flutter",
                    "description_html": "Is Flutter the next big thing in developing multi platform apps with a single codebase. Google seems to think so. So lets try this out by making a Star wars movies app. And see if we can make that run on both Android and IOS by using the Flutter Framework.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-dylan-drost']
                },
                "talk-technology-moving": { //36
                    "title": "Technology for a Moving World",
                    "description_html": "TomTom builds technology for a moving world. We help drivers – human or computer – to safely drive the 1.2 billion cars in the world. Every day, moving goods or people from A to B. TomTom started 1984 with mapping the world for navigation applications that help drivers finding their way from A to B and so we eliminated the need for paper maps. Later, in 2006, we developed global traffic services and connected navigation applications for drivers to outsmart traffic congestion altogether. Currently, we help drivers navigating their electric vehicles, making sure they do not run out of battery and so we fight range anxiety. Going forward, we already enabling automated vehicles to see beyond its physical sensors by remapping the world in centimeter accuracy and building applications that assist people’s drive or even drive a car all on their own – more safely and more efficient as human drivers.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-heiko-schilling']
                },
                "talk-7th-continent": { //37
                    "title": "Your passport to the 7th continent",
                    "description_html": "The goal of this presentation is to introduce to you the current biometric techniques and review those of them, which are applicable or are already present in the mobile world.  We will look under the hood of the most popular use cases and discuss the challenges and the obstacles, which lies ahead of them, both from users and engineer’s perspective.<br>We will try to prove, that whenever you hear phrase \"Enter your PIN code\", you have full right to feel like someone who is living in middle age instead of 21st century. <br>All above just to answer simple question: Is mobile device ready to be our passport to the 7th continent?",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": ['speaker-przemyslaw-pyznarski']
                },
                "talk-efficient-testing": { //38
                    "title": "Efficient testing UI Android apps by example",
                    "description_html": "This talk will cover:<ul><li>analyzing general use cases which apply to many applications<li>tools which can help us with efficient testing<li>efficient combination of different types of UI tests<li>best practices for adding and maintaining test cases to your project</ul>",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": ['speaker-aliaksandr-zhukovich']
                },
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
                "venue-tomtom": {
                    "title": "TomTom"
                },
                "venue-glase": {
                    "title": "Glase"
                },
                "venue-harman": {
                    "title": "Harman"
                },
                "venue-idemia": {
                    "title": "Idemia"
                },
                "venue-mobica": {
                    "title": "Mobica"
                },
            },
            schedule: {
                "slot-registration": {"break_key": "break-registration"},
                "slot-hello-world": {
                    "venue-tomtom": {
                        "talk_key": "talk-hello-world"
                    }
                },
                "slot-no-coffee-0": {"break_key": "break-no-coffee"},
                "slot-1": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-technology-moving"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-empty"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-connected-cars"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-7th-continent"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-empty"
                    }
                },
                "slot-coffee-1": {"break_key": "break-coffee"},
                "slot-2": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-testing-kotlin"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-rust-sharing"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-idealistic-apps"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-efficient-testing"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-animations-gestures"
                    }
                },
                "slot-coffee-2": {"break_key": "break-coffee"},
                "slot-3": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-callbacks-hell"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-flutter-sdk"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-kotlin-quality"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-eschew-convention"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-tricky-stuff"
                    }
                },
                "slot-lunch": {"break_key": "break-lunch"},
                "slot-4": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-kotlin-sandwich"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-dart-flutter"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-grumpy-man"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-hands-coordinators"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-app-connected"
                    }
                },
                "slot-coffee-4": {"break_key": "break-coffee"},
                "slot-5": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-offline-challenges"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-superpowers-delegation"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-ios-performance"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-crafting-expo"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-tensorflow-mlkit"
                    }
                },
                "slot-coffee-5": {"break_key": "break-coffee"},
                "slot-6": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-machine-learning"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-ios-debugging"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-green-rocket"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-crypt-ography"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-koin-android"
                    }
                },
                "slot-coffee-6": {"break_key": "break-coffee"},
                "slot-7": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-effective-tdd"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-ui-profiling"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-errors-swift"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-prototyping-javascript"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-dependency-injection"
                    }
                },
                "slot-coffee-7": {"break_key": "break-coffee"},
                "slot-8": {
                    "venue-tomtom" : {
                        "talk_key" : "talk-less-code"
                    },
                    "venue-glase" : {
                        "talk_key" : "talk-splitting-monolithic"
                    },
                    "venue-harman" : {
                        "talk_key" : "talk-kotlin-mobile"
                    },
                    "venue-idemia" : {
                        "talk_key" : "talk-kotlin-arrow"
                    },
                    "venue-mobica" : {
                        "talk_key" : "talk-home-automation"
                    }
                },
                "slot-no-coffee-8": {"break_key": "break-no-coffee"},
                "slot-finally": {
                    "venue-tomtom": {
                        "talk_key": "talk-finally"
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
