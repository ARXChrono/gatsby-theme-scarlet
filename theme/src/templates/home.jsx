import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import { Header, Hero, Section, ProjectItem, Footer } from "../components"
import { SectionWrap, ProjectList } from "../components/styles"
import GlobalStyles from './globalStyles'

const HomeTemplate = ({pageContext}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleShort
          siteAuthor
          siteLogoText
          siteUrl
          siteLanguage
          siteDescription
          siteKeywords
        }
      }
      dataJson {
        hero {
          imageAlt
        }
        work {
          content
          heading
        }
        about {
          heading
          content
        }
      }
      allProjectsJson {
        nodes {
          name
          link
          alt
          badge
          image
        }
      }
    }
  `)
  console.log(pageContext)
  const projectsItems = data.allProjectsJson.nodes
  const { about, work, hero } = data.dataJson
  const {
    siteTitle,
    siteLogoText,
    siteDescription,
    siteLanguage,
  } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang={siteLanguage} />
        <title>{siteTitle}</title>
        <meta name="Description" content={siteDescription} />
      </Helmet>
      <GlobalStyles />
      <Header logoTxt={siteLogoText} />
      <SectionWrap>
        <Hero imageAlt={hero.imageAlt} id="hero" />
        <Section backgroundColor={theme.colors.white} id="work">
          {/* <Styled.h2>{work.heading}</Styled.h2>
          <Styled.p>{work.content}</Styled.p> */}
          {projectsItems && (
            <ProjectList>
              {projectsItems.map(({ name, link, alt, badge, image }, index) => (
                <ProjectItem
                  key={name + index}
                  image={image}
                  alt={alt}
                  name={name}
                  badge={badge}
                  link={link}
                />
              ))}
            </ProjectList>
          )}
        </Section>
        <Section
          backgroundColor={theme.colors.primary}
          id="about"
          light
          enableWave={true}
          waveBottom={false}
        >
          {/* <Styled.h2>{about.heading}</Styled.h2>
          <Styled.p>{about.content}</Styled.p> */}
        </Section>
      </SectionWrap>
      <Footer />
    </ThemeProvider>
  )
}

export default HomeTemplate
