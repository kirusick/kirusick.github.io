const messages = {
    en: {
        'skills' : 'Skills:',
        'fio' : 'Orlovskiy Kirill Vladimirovich',
        'age' : 'Age: %{ages} years old',
        'base_education': 'Education: BSUIR Affiliate "Minsk Radioengineering College", Software for Information Technology, Programmer (2013 - 2017)',
        'hight_education': 'Education: BSUIR, Faculty of Computer Technologies, Software for Information Technology, Software-Engineer (2017 - 2021)',
        'contacts_label': 'Contacts:',
        'look_works': 'View works',
        'work_href': 'View',
        'page_title': 'Orlovskiy Kirill\'s portfolio',
        'jobs_article': 'Worked/Work here:',
        'in_progress': 'In progress',
        'this_portfolio': 'This page'
    },
    ru: {
        'skills' : 'Навыки:',
        'fio' : 'Орловский Кирилл Владимирович',
        'age' : 'Возраст: %{ages} лет',
        'base_education': 'Образование: УО БГУИР "Филлиал МРК", ПОИТ, Техник-программист (2013 - 2017 гг)',
        'hight_education': 'Образование: УО БГУИР, Факультет Компьютерных Технологий, ПОИТ, Инженер-программист (2017 - 2021 гг) (вечерняя форма обучения)',
        'contacts_label': 'Контакты:',
        'look_works': 'Посмотреть работы',
        'work_href': 'Просмотреть',
        'page_title': 'Портфолио Орловского Кирилла',
        'jobs_article': 'Работал/Работаю там:',
        'in_progress': 'В прогрессе',
        'this_portfolio': 'Это портфолио'
    }
};

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

let app = new Vue({
    i18n,
    data: {
        skills: [
            'CSS',
            'SASS/SCSS',
            'HTML',
            'JS',
            'ES6',
            'Angular',
            'Nodejs',
            'JIRA',
            'jQuery',
            'Responsive',
            'Photoshop',
            'Vue',
            'Vuex',
            'Redux',
            'Aurellia',
            'React',
        ],
        projects: [
            {
                title: 'Bikeshop',
                date: '9 May 2017',
                url:'layouts/bikeshop/index.html',
                dateTime: '2017-05-09 20:00',
                backgroundUrl: 'img/bikeshop.jpg'
            }, {
                title: 'Glow',
                dateTime: '2016-10-16 20:00',
                date: '23 October 2016',
                url:'layouts/3/index.html',
                backgroundUrl: 'img/glow.jpg'
            },
        ],
        jobs: [
            {
                orgName: 'LWO',
                from: 'September 2017',
                to: 'January 2018',
                month: 4,
                logoUrl: 'https://img1.infobank.by/images/imagesindb/lwo_logo_180216.png.aspx',
                position: 'Frontend Developer'
            },
            {
                orgName: 'Ultalab',
                from: 'January 2018',
                to: 'Now',
                logoUrl: 'https://companies.dev.by/system/companies/logos/67046/pre_medium_white/picture_67046.png',
                month: (new Date()).getMonth() + ((new Date()).getFullYear() - 2018) * 11, 
                position: 'Frontend Developer'
            },
        ],
        isLoading: true,
        avaLoaded: false,
        lang: 'en',
    },
    computed: {
        ageOld : function() {
            var age = 20;
            var currentDate = new Date();
            currentDate = {
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear()
            };
            var birthdayDate = {
                year: 1997,
                month: 12,
                day: 9,
            };
            
            age = currentDate.year - birthdayDate.year - 1;
            
            if (currentDate.month >= birthdayDate.month) {
                if (currentDate.month === birthdayDate.month) {
                    if (currentDate.day >= birthdayDate.day) {
                        age = currentDate.year - birthdayDate.year;
                    }
                } else {
                    age = currentDate.year - birthdayDate.year;
                }
            }

            return age;
        }
    },
    beforeMount: function() {
        if (~window.location.search.indexOf('lang=')) {
            let search = window.location.search;
            this.lang = search.substr(search.indexOf('lang=')+5,2);
        }
        this.$i18n.locale = this.lang;
    },
    watch: {
        lang: function(val) {
            this.$i18n.locale = val;
        }
    },
    mounted: function() {
        this.$refs.visitCard.classList.remove('app-loading');
        this.isLoading = false;
        document.body.style.overflow = 'auto';
    },
    methods: {
        scrollToWorks: function() {
            document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
        }
    }
}).$mount('#app');