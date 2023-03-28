pub struct Github {
    username: String,
    sort_by: Option<SortBy>,
    limit: Option<usize>,
    exclude: Option<Exclude>,
}

pub enum SortBy {
    Stars,
    Updated,
}

pub struct Exclude {
    forks: Option<bool>,
    projects: Option<Vec<String>>,
}

pub struct Social {
    linkedin: Option<String>,
    twitter: Option<String>,
    facebook: Option<String>,
    instagram: Option<String>,
    dribbble: Option<String>,
    behance: Option<String>,
    medium: Option<String>,
    dev: Option<String>,
    stackoverflow: Option<String>,
    website: Option<String>,
    phone: Option<String>,
    email: Option<String>,
}

pub struct Resume {
    file_url: String,
}

pub struct Skill {
    name: String,
    image_url: Option<String>,
    url: Option<String>,
}

pub struct Project {
    title: String,
    description: String,
    link: String,
    image_url: Option<String>,
}

pub struct Experience {
    company: Option<String>,
    company_link: Option<String>,
    position: Option<String>,
    from: Option<String>,
    to: Option<String>,
}

pub struct Certification {
    body: Option<String>,
    name: String,
    year: String,
    link: String,
}

pub struct Education {
    institution: String,
    degree: String,
    from: String,
    to: String,
}

pub struct Blog {
    source: Option<String>,
    username: Option<String>,
    limit: Option<usize>,
}

pub struct Config {
    github: Github,
    social: Option<Social>,
    resume: Resume,
    skills: Vec<Skill>,
    some_experience_with: Vec<Skill>,
    main_projects: Vec<Project>,
    other_projects: Vec<Project>,
    experiences: Vec<Experience>,
    certifications: Vec<Certification>,
    education: Vec<Education>,
    blog: Option<Blog>,
}