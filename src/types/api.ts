export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  header_image: LogoProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: {
    alternativeText: string
    url: string
  }
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTechs: SectionTechProps
}
