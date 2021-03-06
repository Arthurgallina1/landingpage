const GET_LANDING_PAGE = `
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}
fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    header_image {
      alternativeText
      url
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    media {
      alternativeText
      url
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTechs {
    title
    techIcons {
      title
      icon{
        url
      }
    }
  }
}



query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
  }
}

`

export default GET_LANDING_PAGE
