import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Язык по умолчанию
    debug: false,
    interpolation: {
      escapeValue: false, // React сам экранирует
    },
    resources: {
      en: {
        translation: {
          header: {
            title: 'EMIR ABDURAKHIMOV',
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            contacts: 'Contacts',
            switchTo: 'Русский',
          },
          hero: {
            welcome: "Hey, I'm Emir.",
            description: 'I am a Middle Frontend Developer.',
          },
          about: {
            title: 'About Me',
            headline1: 'Frontend Developer with Passion for Clean Code',
            text1:
              'With over 2 years of experience in building scalable and efficient web applications, I specialize in using modern technologies like React, TypeScript, and Material-UI. My goal is to deliver clean, maintainable, and robust code while creating user-friendly interfaces.',
            headline2: 'Strong Skills in Team Collaboration and Problem-Solving',
            text2:
              'I thrive in team environments, contributing to collaborative efforts and solving complex challenges. My expertise includes integrating APIs, optimizing web performance, and ensuring cross-browser compatibility.',
            text3:
              'Always eager to learn new tools and frameworks, I aim to stay updated with the latest trends in frontend development. My passion lies in delivering exceptional user experiences and making impactful contributions to projects.',
          },
          experience: {
            title: 'Professional Experience',
            nextSlack: 'Frontend Developer – NextSlack',
            nextSlackTime: 'Sep 2023 – Present | Moscow, Russia',
            nextSlackDetails: [
              'Developed a face recognition system and implemented biometric authentication modules.',
              'Designed and developed CRUD admin panels for managing user activities and permissions.',
              'Created a landing page with advanced form functionalities for capturing user applications.',
              'Redesigned the user interface and improved existing chat functionality.',
            ],
            sportForum: 'Fullstack Developer – Company "СПОРТ ФОРУМ"',
            sportForumTime: 'Apr 2022 – Jun 2023 | Moscow, Russia',
            sportForumDetails: [
              'Deployed applications using Docker with Nginx and implemented CI/CD pipelines.',
              'Created multi-language support with i18n and developed custom admin panels.',
              'Built scalable forms and optimized user interfaces for fitness centers.',
              'Tested applications using React Testing Library and Jest.',
            ],
            academy: 'Frontend Development Training – Academy "ШАГ"',
            academyTime: '2021 | Moscow, Russia',
            academyDetails: [
              'Completed a professional frontend development course.',
              'Specialized in React, TypeScript, and Material-UI, focusing on responsive and accessible design.',
            ],
          },
          skills: {
            title: 'Key Skills',
            items: [
              'Frontend Development: React, Redux, TypeScript, Material-UI, React Router, Context API.',
              'Backend Integration: REST API, GraphQL, WebSocket, Axios, Node.js basics.',
              'UI/UX Optimization: Responsive design, Adaptive design, Cross-browser compatibility, Accessibility standards (WCAG).',
              'Development Tools: Docker, Git, GitHub Actions, CI/CD pipelines, ESLint, Prettier, Husky.',
              'Testing: Jest, React Testing Library, Cypress, Unit testing, Integration testing.',
              'Other: Face recognition systems, Role-based access management, State management with Redux Toolkit.',
              'Performance Optimization: Code splitting, Lazy loading, Reducing bundle size with Webpack and Vite.',
              'Design Systems: Building reusable components, implementing and maintaining design systems.',
              'Languages & Frameworks: HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Node.js basics.',
            ],
          },
          contact: {
            title: 'Get In Touch',
            telegram: 'Telegram',
            email: 'Email',
            form: {
              name: 'Your Name',
              email: 'Your Email',
              message: 'Your Message',
              submit: 'Send',
              success: 'Message sent successfully!',
              error: 'Failed to send the message. Please try again.',
            },
          },
          footer: {
            copyright: '© 2024 Emir Abdurakhimov. All rights reserved.',
            built: 'Built with React & Material-UI.',
          },
        },
      },
      ru: {
        translation: {
          header: {
            title: 'ЭМИР АБДУРАХИМОВ',
            about: 'Обо мне',
            experience: 'Опыт',
            skills: 'Навыки',
            contacts: 'Контакты',
            switchTo: 'English',
          },
          hero: {
            welcome: 'Привет, я Эмир.',
            description: 'Я являюсь Middle Frontend разработчиком.',
          },
          about: {
            title: 'Обо мне',
            headline1: 'Как Frontend-разработчик я придерживаюсь "чистого кода"',
            text1:
              'Более 2 лет опыта в создании масштабируемых и эффективных веб-приложений. Специализируюсь на современных технологиях, таких как React, TypeScript и Material-UI (подробнее в навыках). Моя цель — предоставлять чистый, поддерживаемый и надёжный код, создавая удобные интерфейсы.',
            headline2: 'Сильные навыки командной работы и решения проблем',
            text2:
              'Люблю работать в команде, внося вклад в совместные усилия и решая сложные задачи. Моя специализация включает интеграцию API, оптимизацию производительности и обеспечение совместимости между браузерами.',
            text3:
              'Всегда стремлюсь изучать новые инструменты и фреймворки, чтобы быть в курсе последних трендов в разработке. Моя страсть — предоставление исключительного пользовательского опыта и значимый вклад в проекты.',
          },
          experience: {
            title: 'Профессиональный опыт',
            nextSlack: 'Frontend-разработчик — NextSlack',
            nextSlackTime: 'Сентябрь 2023 – Настоящее время | Москва, Россия',
            nextSlackDetails: [
              'Разработал систему распознавания лиц и биометрической аутентификации.',
              'Создал CRUD панели администратора для управления действиями и правами пользователей.',
              'Разработал лендинг со сложными формами для захвата заявок.',
              'Рестайлинг интерфейса и улучшение функционала чата.',
            ],
            sportForum: 'Fullstack-разработчик — ООО "СПОРТ ФОРУМ"',
            sportForumTime: 'Апрель 2022 – Июнь 2023 | Москва, Россия',
            sportForumDetails: [
              'Развернул приложения с Docker и Nginx, настроил CI/CD.',
              'Добавил мультиязычность с i18n и разработал кастомные панели администрирования.',
              'Создал масштабируемые формы и оптимизировал интерфейсы для фитнес-центров.',
              'Проводил тестирование приложений с использованием React Testing Library и Jest.',
            ],
            academy: 'Курс Frontend-разработки — Академия "ШАГ"',
            academyTime: '2021 | Москва, Россия',
            academyDetails: [
              'Прошёл профессиональный курс Frontend-разработки.',
              'Специализировался на React, TypeScript и Material-UI, делая упор на адаптивный и доступный дизайн.',
            ],
          },
          skills: {
            title: 'Ключевые навыки',
            items: [
              'Frontend-разработка: React, Redux, TypeScript, Material-UI, React Router, Context API.',
              'Интеграция бэкенда: REST API, GraphQL, WebSocket, Axios, основы Node.js.',
              'Оптимизация UI/UX: Адаптивный и отзывчивый дизайн, доступность, кроссбраузерность.',
              'Инструменты разработки: Docker, Git, GitHub Actions, CI/CD, ESLint, Prettier, Husky.',
              'Тестирование: Jest, React Testing Library, Cypress, юнит и интеграционное тестирование.',
              'Прочее: Системы распознавания лиц, управление доступом, Redux Toolkit.',
              'Оптимизация производительности: Разделение кода, lazy loading, уменьшение размера сборки.',
              'Дизайн-системы: Разработка и поддержка компонентов.',
              'Языки и фреймворки: HTML5, CSS3, JavaScript (ES6+), TypeScript, React, основы Node.js.',
            ],
          },
          contact: {
            title: 'Свяжитесь со мной',
            telegram: 'Телеграм',
            email: 'Электронная почта',
            form: {
              name: 'Ваше имя',
              email: 'Ваша почта',
              message: 'Ваше сообщение',
              submit: 'Отправить',
              success: 'Сообщение успешно отправлено!',
              error: 'Не удалось отправить сообщение. Попробуйте ещё раз.',
            },
          },
          footer: {
            copyright: '© 2024 Эмир Абдурахимов. Все права защищены.',
            built: 'Создано с помощью React & Material-UI.',
          },
        },
      },
    },
  });

export default i18n;
