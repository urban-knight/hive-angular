import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  services: any[] = [
    {
      "en": {
        "url": "system-maintenance-and-hosting",
        "name": "System Maintenance & Hosting",
        "desc": "The stability and speed of any web resource are based, first of all, on its technical component. High-quality system administration with high-end hardware will guarantee you a 24-hour system uptime with efficient load distribution. We work in a wide range of services, designing local network and system architecture, customizing equipment and providing multi-cluster SSD hosting. Our Hive admins will ensure fast and safe migration of your web service and its further round-the-clock administration.", "ext_desc": "Today&rsquo;s informed consumer is able to quickly find your website and digital marketing presence to assess your credibility and whether you&rsquo;re worthy of their time and money. Don&rsquo;t lose conversions with a broken or vulnerable website. By partnering with Hive Studio, you can be calm for the stability and security of your information resource. Our team is always ready to provide a wide-range tech support including network, hosting and digital maintenance solutions."
      },
      "uk": {
        "url":
        "systemne-obsluhovuvannia-ta-khostynh",
        "name": "Системне обслуговування та хостинг",
        "desc": "Стабільність і швидкість будь-якого веб-ресурсу базуються, насамперед, на його технічній складові. Високоякісне адміністрування систем із високотехнологічним обладнанням гарантуватиме цілодобову роботу системи з ефективним розподілом навантаження. Ми працюємо в широкому спектрі послуг, розробляємо локальну мережу та архітектуру системи, налаштовуємо устаткування та забезпечуємо багатоступеневий хостинг SSD. Адміністратори нашого вулика забезпечать швидку та безпечну переміщення веб-сервісу та подальшу його цілодобову адміністрування.", "ext_desc": "Сьогоднішній інформований споживач здатний швидко знайти ваш веб-сайт і наявність цифрового маркетингу, щоб оцінити вашу довіру і чи ви гідні свого часу та грошей. Не втрачайте конверсії зі зламаним або вразливим веб-сайтом. Партнерство з Hive Studio може бути спокійним для стабільності та безпеки вашого інформаційного ресурсу. Наша команда завжди готова надавати широкомасштабну технічну підтримку, включаючи мережеві, хостингові та цифрові рішення з технічного обслуговування."
      },
      "ru": {
        "url": "sistemnoe-obsluzhivanie-i-hosting",
        "name": "Обслуживание системы и хостинг",
        "desc": "Стабильность и скорость любого веб-ресурса основаны, прежде всего, на его технической составляющей. Высококачественное системное администрирование с высококачественным оборудованием гарантирует вам круглосуточную бесперебойную работу системы с эффективным распределением нагрузки. Мы работаем в широком спектре услуг, разрабатывая локальную сеть и архитектуру системы, настраивая оборудование и предоставляя многосерверный SSD-хостинг. Наши администраторы Hive обеспечит быструю и безопасную миграцию вашего веб-сервиса и его дальнейшее круглосуточное администрирование.", "ext_desc": "Сегодняшний информированный потребитель может быстро найти ваш сайт и присутствие в цифровом маркетинге, чтобы оценить ваш авторитет и достойны ли вы своего времени и денег. Не теряйте конверсии со сломанным или уязвимым сайтом. Благодаря партнерству с Hive Studio вы можете быть спокойны за стабильность и безопасность своего информационного ресурса. Наша команда всегда готова предоставить широкую техническую поддержку, включая сетевые, хостинг и цифровые решения для технического обслуживания."
      },
      "_id": "5a9a13f9369f0e1a30ef4933"
    },
    {
      "en": {
        "url": "fullstack-web-development",
        "name": "Fullstack Web Development",
        "desc": "Development of new web services on a turn-key basis, functional expansion of existing project and complex website modernization. For new projects, our studio offers ready-made digital products that contain all the necessary functionalities and are ready for customization. If you need to add some functionality to your resource, implement new design solutions or fix existing errors, our team of Hive developers is always ready to develop the most effective solution for your specific project.", "ext_desc": "Stunning design is great for business. We specialises in creating custom web design that are crafted to meet your brand, design and functionality needs. Our websites are easy to edit, update and manage allowing you to keep your website content fresh and relevant encouraging repeat visits and increasing traffic to your website. We ensure our websites work well on desktop computers as well as on mobile devices such as smartphones and tablets."
      },
      "uk": {
        "url": "fullstack-web-rozrobka",
        "name": "Фулстек веб розробка",
        "desc": "Hive займається розробкою нових веб-сервісів під ключ, функціональним розширенням існуючого проекту та комплексною модернізацією веб-сайту. Для нових проектів наша студія пропонує готові продукти, що містять усі необхідні функціональні можливості та повністю готові до подальшого налаштування. Якщо Вам потрібно додати певний фукціонал до свого ресурсу, реалізувати нові конструктивні рішення або виправити вже існуючі помилки, наша команда розробників завжди готова розробити найбільш ефективне рішення конкретно для Вашого проекту.", "ext_desc": "Приголомшливий дизайн чудово підходить для бізнесу. Ми спеціалізуємося на створенні власного веб-дизайну, створеного відповідно до ваших брендів, дизайну та функціональних потреб. Наші веб-сайти легко редагувати, оновлювати та керувати, дозволяючи вам зберігати вміст веб-сайту свіжим і релевантним, заохочуючи повторні відвідування та збільшення трафіку на ваш веб-сайт. Ми гарантуємо, що наші веб-сайти працюють на настільних комп'ютерах, а також на мобільних пристроях, таких як смартфони та планшети."
      },
      "ru": {
        "url": "fullstack-web-razrabotka",
        "name": "Фуллстэк веб разработка",
        "desc": "Hive занимается разработкой новых веб-сервисов под ключ, функциональным расширением существующего проекта и комплексной модернизацией сайта. Для новых проектов наша студия предлагает готовые продукты, которые содержат все необходимые функциональные возможности и полностью готовы к настройке. Если вам нужно добавить некоторые функциональные возможности к своему ресурсу, реализовать новые конструктивные решения или исправить уже существующие ошибки, наша команда разработчиков всегда готова разработать эффективное решение именно для Вашего проекта.", "ext_desc": "Потрясающий дизайн отлично подходит для бизнеса. Мы специализируемся на создании пользовательского веб-дизайна, созданного для удовлетворения потребностей вашего бренда, дизайна и функциональности. Наши веб-сайты легко редактировать, обновлять и управлять, позволяя вам поддерживать свежий контент и привлекательность вашего сайта для повторных посещений и увеличения трафика на ваш сайт. Мы гарантируем, что наши веб-сайты будут хорошо работать на настольных компьютерах, а также на мобильных устройствах, таких как смартфоны и планшеты."
      },
      "_id": "5a9b71814b0b114ca8e7b859"
    },
    {
      "en": {
        "url": "identity-design-and-branding",
        "name": "Identity Design & Branding",
        "desc": "Since the identity of business creates a first impression on potential customers, it is one of the most important aspects of branding. High-quality brand changes consumers' perceptions of seeing or hearing about your company. The team of Hive designers will create an effective and memorable branding, integrated with the latest web design. Our branding kit includes both a graphic and a polygraph component that maximizes the scope of its use in a marketing campaign.", "ext_desc": "Your brand will help distinguish you from your competitors and should always be consistent with your website. Is your current brand looking a little bit tired? Are you ready to re-launch with a refreshing new look? We will implement your ideas in the best shape and shade, while creating an exquisite look that will surely please your customers."
      },
      "uk": {
        "url": "dyzajn-ajdentyky-ta-brending", "name": "Дизайн айдентики та брендінг",
        "desc": "Дизайн створює перше враження на потенційних клієнтів, тож це один з найважливіших аспектів для брендінгу. Високоякісний бренд кардинально змінює сприйняття користувачів. Команда дизайнерів Hive створить ефективний та незабутній бренд, що буде інтегрований у креативний та сучасний веб-дизайн. Наш сервіс включає як графічний, так і поліграфічний компонент, який максимізує сферу його використання в маркетинговій кампанії.", "ext_desc": "Ваш бренд допоможе вам відрізняти вас від ваших конкурентів і завжди повинен відповідати вашому веб-сайту. Чи є ваша поточна торгова марка трохи втомленою? Чи готові ви знову запустити з освіжаючим новим виглядом? Ми будемо реалізовувати свої ідеї у найкращій формі та тіні, створюючи при цьому вишуканий вигляд, який, безсумнівно, порадує ваших клієнтів."
      },
      "ru": {
        "url": "dizajn-ajdentiki-i-brending",
        "name": "Дизайн айдентики и брендинг",
        "desc": "Дизайн создает первое впечатление для потенциальных клиентов, и это один из важнейших аспектов для брендинга. Высококачественный бренд кардинально меняет восприятие потребителей. Команда дизайнеров Hive создаст эффективный и запоминающийся бренд, интегрированный с креативным и современным веб-дизайном. Данный сервис включает как графический, так и полиграфический компонент, который максимизирует сферу его использования в маркетинговой кампании.", "ext_desc": "Ваш бренд поможет отличить вас от ваших конкурентов и всегда должен соответствовать вашему сайту. Ваш нынешний бренд выглядит немного уставшим? Готовы ли вы к новому запуску с новым освещением? Мы воплотим ваши идеи в лучшей форме и оттенке, создавая изысканный вид, который, несомненно, понравится вашим клиентам."
      },
      "_id": "5a9b74474b0b114ca8e7b85a"
    },
    {
      "en": {
        "url": "seo-and-digital-marketing",
        "name": "SEO & Digital Marketing",
        "desc": "Even the best market offers require advertising and promotion, especially at the time the company enters a new market. Search engine promotion is aimed at improving the visibility of a website in the categories for the target audience, which is subsequently converted into clients. Our SEO is supported by Digital Marketing, which uses all the complex of digital channels through which the company brand is promoted, providing to you the highest ranks on market.", "ext_desc": "Having a great website is really nice, but if nobody sees it, it&rsquo;s in vain to make you money. In today's competitive online environment, it is absolutely vital that your site appears near the top of search engine results. Search engines change the rules frequently, so we will work hard to get your site noticed, drive traffic and increase your return on investment. We can help your website search engine friendly, optimize content and even help you track conversions."
      },
      "uk": {
        "url": "seo-ta-cyfrovyj-marketing",
        "name": "SEO та цифровий маркетинг",
        "desc": "Навіть найкращі компанії на ринку потребують реклами та маркетинг-просування. Особливо ті компанії, що виходять на новий ринок. Пошукова оптимізація (SEO) спрямована на підвищення позицій в певній пошуковій системі. Ціль оптимізації - це вихід на цільову аудиторію, яка згодом перетворюється на клієнтів. Наше SEO підтримуються цифровим маркетингом, який використовує весь комплекс цифрових каналів, з допомогою яких рекламується бренд компанії, що забезпечує найвищий рейтинг на ринку.", "ext_desc": "Маючи чудовий веб-сайт дуже приємно, але якщо ніхто цього не бачить, даремно заробляти гроші. У сьогоднішньому конкурентному онлайн-середовищі абсолютно важливо, щоб ваш сайт з'явився біля вершини результатів пошукової системи. Пошукові системи часто змінюють правила, тому ми будемо працювати над тим, щоб помітити ваш сайт, збільшити трафік і підвищити рентабельність інвестицій. Ми можемо допомогти вашому веб-сайту в пошукових системах, оптимізувати вміст і навіть допомогти вам відстежувати конверсії."
      },
      "ru": {
        "url": "seo-i-cifrovoj-marketing",
        "name": "SEO и цифровой маркетинг",
        "desc": "Даже лучшие компании на рынке требуют рекламу и маркетингового продвижения. Особенно для тех компаний, которые выходят на новый рынок. Поисковая оптимизация (SEO) направлена на повышение позиций в определенной поисковой системе. Цель оптимизации --- это выход на целевую аудиторию, которая впоследствии превращается в клиентов. Наше SEO поддерживаются цифровым маркетингом, который использует весь комплекс цифровых каналов, с помощью которых рекламируется бренд компании, предоставляющей высокий рейтинг на рынке.", "ext_desc": "Отличный веб-сайт действительно хорош, но если его никто не видит, тщетно зарабатывать деньги. В сегодняшней конкурентной онлайн-среде абсолютно важно, чтобы ваш сайт отображался в верхней части результатов поисковой системы. Поисковые системы меняют правила часто, поэтому мы будем работать, чтобы ваш сайт заметил, трафик и повысить отдачу от инвестиций. Мы можем помочь вашему поисковому поиску в поисковой системе, оптимизировать контент и даже помочь вам отслеживать конверсии."
      },
      "_id": "5a9b76144b0b114ca8e7b85b"
    }]

  ngOnInit() {
  }

}
