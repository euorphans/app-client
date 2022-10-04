// @ts-ignore
import style from './Privacy.module.scss';
import { Link } from 'react-router-dom';

export namespace Privacy {
  export const Head = () => {
    return (
      <>
        <div className={style.head}>
          <h1 className={style.title}>Политика конфиденциальности</h1>
          <span className={style.description}>
            Настоящая{' '}
            <Link className={style.link} to={'/privacy'}>
              Политика конфиденциальности
            </Link>{' '}
            действует в отношении всей информации, которую Администрация сайта может получить о
            Пользователе во время использования сайта -{' '}
            <Link className={style.link} to={'/'}>
              dangerzone.su
            </Link>
          </span>
        </div>
      </>
    );
  };
  export const Terminology = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>1. Терминология</h1>
          <span className={style.item}>
            <span>
              {' '}
              1.1 В настоящей{' '}
              <Link className={style.link} to={'/privacy'}>
                Политике конфиденциальности
              </Link>{' '}
              применяются следующие термины и определения:
            </span>
            <span className={style.itemPadding}>
              1.1.1. «Администрация сайта» (далее – Администрация) – уполномоченные сотрудники на
              управление сайтом{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              , которые организуют и (или) осуществляют обработку персональных данных, а также
              определяет цели обработки персональных данных, состав персональных данных, подлежащих
              обработке, действия (операции), совершаемые c персональными данными.
            </span>
            <span className={style.itemPadding}>
              1.1.2. «Пользователь сайта» (далее – Пользователь) – лицо, которое использует сайт в
              порядке, регламентированном Администрацией сайта, в том числе Пользователь в
              соответствии с{' '}
              <Link className={style.link} to={'/terms'}>
                пользовательским соглашением
              </Link>{' '}
              сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              . Пользователь является субъектом персональных данных.
            </span>
            <span className={style.itemPadding}>
              1.1.3. «Персональные данные» – любая информация, относящаяся к определенному или
              определяемому на основании такой информации физическому/юридическому лицу, необходимая
              Администрации сайта, в связи с исполнением им договорных обязательств перед
              Пользователем. Кроме того, к персональным данным относятся данные, которые
              автоматически передаются Администрации сайта в процессе их использования с помощью
              установленного на устройстве Пользователя программного обеспечения, в том числе
              IP-адрес, информация из cookie, информация о браузере пользователя (или иной программе
              с помощью которой осуществляется доступ к сайту), время доступа, адрес запрашиваемой
              страницы, местоположение и пр.
            </span>
            <span className={style.itemPadding}>
              1.1.4. «Обработка персональных данных» – сбор, запись, систематизация, накопление,
              хранение, уточнение (обновление, изменение), извлечение, использование, передача
              (распространение, предоставление, доступ), обезличивание, блокирование, удаление,
              уничтожение персональных данных Пользователя.
            </span>
            <span className={style.itemPadding}>
              1.1.5. «Субдомены» – это страницы или совокупность страниц, расположенные на доменах
              третьего уровня, принадлежащие сайту{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
            <span className={style.itemPadding}>
              1.1.6. «Cookie» – небольшой фрагмент данных, отправленный веб-сервером и хранимый на
              компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает
              веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.
            </span>
            <span className={style.itemPadding}>
              1.1.7. «IP-адрес» – уникальный сетевой адрес узла в компьютерной сети, через который
              Пользователь получает доступ к{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
          </span>
        </div>
      </>
    );
  };
  export const General = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>2. Общие положения</h1>
          <span className={style.item}>
            <span>
              2.1. Использование сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>{' '}
              Пользователем означает согласие с настоящей{' '}
              <Link className={style.link} to={'/terms'}>
                Политикой конфиденциальности
              </Link>{' '}
              и условиями обработки персональных данных Пользователя.
            </span>
            <span>
              2.2. В случае несогласия с условиями Политики конфиденциальности, Пользователь должен
              прекратить использование сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
            <span>
              2.3. Настоящая{' '}
              <Link className={style.link} to={'/privacy'}>
                Политика конфиденциальности
              </Link>{' '}
              применяется к сайту{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              . Администрация сайта не контролирует и не несет ответственность за сайты третьих лиц,
              на которые Пользователь может перейти по ссылкам, доступным на сайте{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
            <span>
              2.4. Администрация сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>{' '}
              проверяет достоверность персональных данных, предоставляемых Пользователем сайта по
              собственному усмотрению.
            </span>
            <span className={style.item}>
              <span>
                <span>2.5. Пользователь при использовании сайта </span>
                <Link className={style.link} to={'/'}>
                  dangerzone.su
                </Link>{' '}
                подтверждает, что:
              </span>
              <span className={style.itemPadding}>
                2.5.1. Согласен с{' '}
                <Link className={style.link} to={'/terms'}>
                  пользовательским соглашением
                </Link>{' '}
                и{' '}
                <Link className={style.link} to={'/privacy'}>
                  политикой конфиденциальности
                </Link>
                .
              </span>
              <span className={style.itemPadding}>
                2.5.2. Указывает достоверную информацию о себе в тех объемах, которые необходимых
                для использования услуг сайта{' '}
                <Link className={style.link} to={'/'}>
                  dangerzone.su
                </Link>
                .
              </span>
              <span className={style.itemPadding}>
                2.5.3. Осознает, что информация на сайте, размещаемая Пользователем о себе, может
                становиться доступной для третьих лиц, не оговоренных в настоящей Политике.
              </span>
            </span>
          </span>
        </div>
      </>
    );
  };
  export const Subject = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>3. Предмет политики конфиденциальности</h1>
          <span className={style.item}>
            <span>
              3.1. Настоящая{' '}
              <Link className={style.link} to={'/privacy'}>
                Политика конфиденциальности
              </Link>{' '}
              устанавливает обязательства Администрации по неразглашению и обеспечению режима защиты
              конфиденциальности персональных данных, которые Пользователь предоставляет по запросу
              Администрации при использовании сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
            <span>
              3.2. Персональные данные, разрешённые к обработке в рамках настоящей{' '}
              <Link className={style.link} to={'/privacy'}>
                Политики конфиденциальности
              </Link>
              , предоставляются Пользователем добровольно.
            </span>
            <span>3.3. Перечень персональных данных, обрабатываемых Администрацией сайта:</span>
            <span className={style.itemPadding}>3.3.1. Никнейм;</span>
            <span className={style.itemPadding}>3.3.2. Персональный токен;</span>
            <span className={style.itemPadding}>3.3.3. Адрес Электронной почты;</span>
            <span className={style.itemPadding}>
              3.3.4. Иная информация, указанная субъектом персональных данных на сайте или
              переданная Администратору сайта иным образом Пользователем.
            </span>
            <span>
              3.4. Также обрабатываются данные, автоматически передающиеся Администратору сайта в
              процессе посещения и использования Сайта с помощью установленного на устройстве
              Пользователя программного обеспечения, в том числе: IP-адрес, информация из cookie,
              информация о браузере пользователя (или иной программе, с помощью которой
              осуществляется доступ к сайту), время доступа, адрес запрашиваемой страницы и иные.
            </span>
            <span>
              3.5. Администратором сайта могут обрабатываться и иные персональные данные,
              непосредственно необходимые для выполнения целей обработки персональных данных и
              предоставленные Пользователем по своей инициативе.
            </span>
          </span>
        </div>
      </>
    );
  };
  export const Goals = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>4. Цели сбора персональной информации пользователя</h1>
          <span className={style.item}>
            <span>
              4.1. Персональные данные Пользователя Администрация сайта может использовать в целях:
            </span>
            <span className={style.itemPadding}>
              4.1.1. Идентификации зарегистрированного Пользователя на сайте{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>{' '}
              для его дальнейшей авторизации.
            </span>
            <span className={style.itemPadding}>
              4.1.2. Установления с Пользователем обратной связи, включая направление уведомлений,
              запросов, рассылок, смс рассылок, касающихся использования сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
            <span className={style.itemPadding}>
              4.1.3. Определения места нахождения Пользователя для обеспечения безопасности,
              предотвращения мошенничества.
            </span>
            <span className={style.itemPadding}>
              4.1.4. Подтверждения достоверности и полноты персональных данных, предоставленных
              Пользователем.
            </span>
            <span className={style.itemPadding}>
              4.1.5. Выполнение договорных и преддоговорных обязательств в отношении Пользователя.
            </span>
            <span className={style.itemPadding}>
              4.1.6. Предоставления Пользователю эффективной технической поддержки при возникновении
              проблем, связанных с использованием сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
            <span className={style.itemPadding}>
              4.1.7. Предоставления Пользователю с его согласия, обновлений сайта, специальных
              предложений, новостной рассылки и иных сведений от имени Администрации сайта.
            </span>
          </span>
        </div>
      </>
    );
  };
  export const Ways = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>5. Способы и сроки обработки персональной информации</h1>
          <span className={style.item}>
            <span>
              5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока,
              любым законным способом, в том числе в информационных системах персональных данных с
              использованием средств автоматизации или без использования таких средств.
            </span>
            <span>
              5.2. Персональные данные Пользователя могут быть переданы уполномоченным органам
              государственной власти Российской Федерации только по основаниям и в порядке,
              установленным законодательством Российской Федерации.
            </span>
            <span>
              5.3. При утрате или разглашении персональных данных Администрация сайта вправе не
              информировать Пользователя об утрате или разглашении персональных данных.
            </span>
            <span>
              5.4. Администрация сайта принимает необходимые организационные и технические меры для
              защиты персональной информации Пользователя от неправомерного или случайного доступа,
              уничтожения, изменения, блокирования, копирования, распространения, а также от иных
              неправомерных действий третьих лиц.
            </span>
            <span>
              5.5. Администрация сайта совместно с Пользователем принимает все необходимые меры по
              предотвращению убытков или иных отрицательных последствий, вызванных утратой или
              разглашением персональных данных Пользователя.
            </span>
          </span>
        </div>
      </>
    );
  };
  export const Responsibilities = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>6. Обязанности сторон</h1>
          <span className={style.item}>
            <span>6.1. Пользователь обязан:</span>
            <span className={style.itemPadding}>
              6.1.1. Предоставить актуальную информацию о персональных данных, необходимую для
              пользования сайтом{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              .
            </span>
            <span className={style.itemPadding}>
              6.1.2. Обновить, дополнить предоставленную Администрацией сайта информацию о
              персональных данных в случае изменения данной информации.
            </span>
            <span>6.2. Администрация сайта обязана:</span>
            <span className={style.itemPadding}>
              6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4
              настоящей Политики конфиденциальности.
            </span>
            <span className={style.itemPadding}>
              6.2.2. Принимать меры предосторожности для защиты конфиденциальности персональных
              данных Пользователя/Покупателя согласно порядку, обычно используемого для защиты
              такого рода информации в существующем деловом обороте.
            </span>
          </span>
        </div>
      </>
    );
  };
  export const Duties = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>7. Ответственность сторон</h1>
          <span className={style.item}>
            <span>
              7.1. Администрация, не исполнившая свои обязательства, несёт ответственность за
              убытки, понесённые Пользователем в связи с неправомерным использованием персональных
              данных.
            </span>
            <span>
              7.2. Администрация не несет ответственности за любые прямые или косвенные убытки,
              произошедшие из-за: использования либо невозможности использования сайта, либо
              отдельных сервисов; несанкционированного доступа к коммуникациям Пользователя;
              заявления или поведение любого третьего лица на сайте.
            </span>
            <span>
              7.3. Администрация не несет ответственности перед Пользователем за любой убыток или
              ущерб, понесенный Пользователем в результате удаления, сбоя или невозможности
              сохранения какого-либо Содержания и иных коммуникационных данных, содержащихся на
              сайте{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>{' '}
              или передаваемых через него.
            </span>
            <span>
              7.4. Пользователь несет полную ответственность за соблюдение требований
              законодательства РФ, в том числе законов о рекламе, о защите авторских и смежных прав,
              об охране товарных знаков и знаков обслуживания, но не ограничиваясь перечисленным,
              включая полную ответственность за содержание и форму материалов.
            </span>
            <span>
              7.5. Пользователь признает, что ответственность за любую информацию (в том числе, но
              не ограничиваясь: файлы с данными, тексты и т.д.), к которой он может иметь доступ как
              к части сайта{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              , несет лицо, предоставившее такую информацию.
            </span>
          </span>
        </div>
      </>
    );
  };
  export const Permission = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>8. Разрешение споров</h1>
          <span className={style.item}>
            <span>
              8.1. До обращения в суд с иском по спорам, возникающим из отношений между
              Пользователем и Администрацией, обязательным является предъявление претензии
              (письменного предложения или предложения в электронном виде о добровольном
              урегулировании спора).
            </span>
            <span>
              8.2. Получатель претензии в течение 30 календарных дней со дня получения претензии,
              письменно или в электронном виде уведомляет заявителя претензии о результатах
              рассмотрения претензии.
            </span>
            <span>
              8.3. К настоящей{' '}
              <Link className={style.link} to={'/'}>
                Политике конфиденциальности
              </Link>{' '}
              и отношениям между Пользователем и Администрацией применяется действующее
              законодательство Российской Федерации.
            </span>
          </span>
        </div>
      </>
    );
  };
  export const Additional = () => {
    return (
      <>
        <div className={style.body}>
          <h1 className={style.title}>9. Дополнительные условия</h1>
          <span className={style.item}>
            <span>
              9.1. Администрация вправе вносить изменения в настоящую{' '}
              <Link className={style.link} to={'/privacy'}>
                Политику конфиденциальности
              </Link>{' '}
              без согласия Пользователя.
            </span>
            <span>
              9.2. Новая{' '}
              <Link className={style.link} to={'/privacy'}>
                Политика конфиденциальности
              </Link>{' '}
              вступает в силу с момента ее размещения на сайте{' '}
              <Link className={style.link} to={'/'}>
                dangerzone.su
              </Link>
              , если иное не предусмотрено новой редакцией{' '}
              <Link className={style.link} to={'/privacy'}>
                Политики конфиденциальности
              </Link>
              .
            </span>
            <span>
              9.3. Все предложения или вопросы касательно настоящей{' '}
              <Link className={style.link} to={'/privacy'}>
                Политики конфиденциальности
              </Link>{' '}
              следует сообщать по адресу:{' '}
              <a className={style.link} href={'mailto:support@dangerzone.su'}>
                support@dangerzone.su
              </a>
            </span>
          </span>
        </div>
      </>
    );
  };
}