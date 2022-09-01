import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const features = [
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        Easy to Use
      </Translate>
    ),
    imageUrl: 'img/undraw_just_browsing.svg',
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Tuval framework is designed from the ground up to be easily build your apps and running quickly.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.modern-ui.title"
        description="Title of feature of Modern UI on the home page">
        Modern UI
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="homepage.features.modern-ui"
        description="Modern UI">
        {`All Tuval web components let you design modern and responsive user interfaces using a functional API`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.pluggable-extensible.title"
        description="The Virtual File System makes it possible to manage files that in client browser.">
        Virtual File System In Browser
      </Translate>
    ),
    imageUrl: 'img/undraw_text_files_au1q.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="homepage.features.pluggable-extensible"
        description="Feature __Pluggable and Extensible">
        {`The Virtual File System makes it possible to manage files that in client browser.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.connect-information.title"
        description="Title of feature of Connect your information on the home page">
        Connect your information
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="homepage.features.connect-information"
        description="Feature Connect your information">
       ...
      </Translate>
    ),
  },
  {
    title:  (
      <Translate
        id="homepage.features.customize-easy.title"
        description="Title of feature of Customize easy on the home page">
       Internationalization
      </Translate>
    ),
    imageUrl: 'img/undraw_the_world_is_mine_re_j5cr.svg',
    description: (
      <Translate
        id="homepage.features.customize-easy"
        description="Feature Customize easy">
        AWE has multiple preconfigured themes and multi-language support.
        You can add custom CSS according to your needs.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Typescript Support
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Typescript Support">
        {`Uses Spring 5 and Spring Boot 2. {autowired} is available for AWE components and layouts.`}
      </Translate>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Awe logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/tuval-logo.png')}
            />
            <span className={styles.heroTitleTextHtml}>
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  enterprise: (<b><Translate>enterprise</Translate></b>),
                  individual: (<b><Translate>individual</Translate></b>),
                  quickly: (<b><Translate>quickly</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
              }}>
                {`Open source web framework for {enterprise} and {individual} apps.`}
              </Translate>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('docs/')}>
              <Translate>Start using Tuval</Translate>
            </Link>
            <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to="http://demo.aweframework.com">
              <Translate>PLAYGROUND</Translate>
            </Link>
          </div>
        </div>
      </div>
    {/*   <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="/docs/guides/v4-migration">
                  <Translate>v3 to v4 migration guide</Translate>
                </Link>
              ),
            }}>
            {`Coming from v3? Check out our {migrationGuideLink}`}
          </Translate>
          .
        </div>
      </div> */}
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
