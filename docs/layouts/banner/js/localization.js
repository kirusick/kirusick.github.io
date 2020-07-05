    'use strict';

    var localization = {
      "en": {
        '1line': 'Keep Your Private',
        '2line': 'Photos & Videos',
        '3line': 'Secure',
        'trial': '7-Day Free Trial',
        'correct': {          
          'ipad': '4.5px',
          'iphone4': '4.5px',
          'iphone6': '4.5px',
          'iphone6plus': '4.5px'          
        }
      },
      "es": {
        '1line': 'Mantén Seguras Tus Fotos',
        '2line': 'y Vídeos',
        '3line': 'Privados',
        'trial': 'Prueba gratuita de 7 días',
        'correct': {
          'ipad': '3.1px',
          'iphone4': '3.1px',
          'iphone6': '3.1px',
          'iphone6plus': '3.2px'
        }
      },
      "de": {
        '1line': 'Halten Sie Ihre privaten',
        '2line': 'Fotos & Videos',
        '3line': 'geheim',
        'trial': '7-tägige Gratis-Version',
        'correct': {
          'ipad': '3.4px',
          'iphone4': '3.4px',
          'iphone6': '3.4px',
          'iphone6plus': '3.4px'
        }
      },
      "fr": {
        '1line': 'Protégez Vos Photos',
        '2line': 'et Vidéos',
        '3line': 'Privées',
        'trial': "7 jours d'essai gratuit",
        'correct': {
          'ipad': '3.7px',
          'iphone4': '3.7px',
          'iphone6': '3.7px',
          'iphone6plus': '3.7px'
        }
      },
      "ja": {
        '1line': 'プライベート写真と',
        '2line': '動画を安全に',
        '3line': '保つ',
        'trial': '7日間無料トライアル',
        'correct': {
          'ipad': '4.5px',
          'iphone4': '4.5px',
          'iphone6': '4.5px',
          'iphone6plus': '4.5px'
        }
      },
      "it": {
        '1line': 'Tieni al Sicuro i Tuoi',
        '2line': 'Video e Foto',
        '3line': 'Private',
        'trial': 'Prova gratuita di 7 giorni',
        'correct': {
          'ipad': '3.4px',
          'iphone4': '3.4px',
          'iphone6': '3.4px',
          'iphone6plus': '3.4px'
        }
      },
      "ru": {
        '1line': 'Держите Личные Фото и Видео',
        '2line': 'под Надежной',
        '3line': 'Защитой',
        'trial': '7-дневная пробная версия',
        'correct': {
          'ipad': '2.4px',
          'iphone4': '2.4px',
          'iphone6': '2.4px',
          'iphone6plus': '2.5px'
        }
      }
    };

    document.addEventListener('DOMContentLoaded', function () {
      var parametrsStr = location.search.substr(1, location.search.length);
      var parametrsArr = parametrsStr.split('&');
      var parametrs = {};

      parametrsArr.forEach(function (item) {
        var parametr = item.split('=');
        parametrs[parametr[0]] = parametr[1];
      });

      var lang = parametrs['lang'];

      var currLang = localization[lang];

      document.querySelector('#line-one').innerHTML = currLang['1line'];
      document.querySelector('#line-two').innerHTML = currLang['2line'];
      document.querySelector('#line-three').innerHTML = currLang['3line'];
      document.querySelector('#trial').innerHTML = currLang['trial'];
      if (currLang['correct']) {
        var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        switch (windowWidth) {
          case 768:
            if (currLang['correct']['ipad']) {
              document.documentElement.style.fontSize = currLang['correct']['ipad'];
            }
            break;
          case 375:
            if (currLang['correct']['iphone6']) {
              document.documentElement.style.fontSize = currLang['correct']['iphone6'];
            }
            break;
          case 320:
            if (currLang['correct']['iphone4']) {
              document.documentElement.style.fontSize = currLang['correct']['iphone4'];
            }
            break;
          case 414:
            if (currLang['correct']['iphone6plus']) {
              document.documentElement.style.fontSize = currLang['correct']['iphone6plus'];
            }
            break;

        }
      }
    });
