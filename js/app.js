let app = new Vue({
    el: '#app',
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
            'Адаптивная верстка',
            'Photoshop для верстки',
            'Vue',
            'Vuex',
            'Redux',
            'Aurellia'
        ],
        projects: [
            {
                title: 'Bikeshop',
                date: '9 Мая 2017',
                url:'layouts/bikeshop/index.html',
                dateTime: '2017-05-09 20:00',
                backgroundUrl: 'img/bikeshop.jpg'
            }, {
                title: 'Glow',
                dateTime: '2016-10-16 20:00',
                date: '23 Октября 2016',
                url:'layouts/3/index.html',
                backgroundUrl: 'img/glow.jpg'
            },
        ]
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
                day: 9
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
    methods: {
        scrollToWorks: function() {
            document.getElementById('works').scrollIntoView({behavior: 'smooth'});
        }
    }
});