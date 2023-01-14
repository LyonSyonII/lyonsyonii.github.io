import { MdLocationOn, MdMail } from "react-icons/md";
import { AiFillGithub, AiFillInstagram, AiFillMediumSquare } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { CgDribbble } from "react-icons/cg";
import { RiPhoneFill } from "react-icons/ri";
import { ComponentChildren, Fragment } from "preact";
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaStackOverflow,
} from "react-icons/fa";
import { Github, skeleton } from "../../helpers/utils";
import { Social } from "../../../gitprofile.config";

const ListItem = ({ icon, title, value, link, skeleton = false }: ListItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-start py-2 px-1"
    >
      <span className="m-2 w-2">{icon}</span>
      <div className="flex-grow px-2 font-medium">{title}</div>
      <div
        className={`${skeleton ? "flex-grow" : ""} mr-2 ml-3 text-right text-sm font-normal ${
          link ? "truncate" : ""
        }`}
      >
        <div
          style={{
            wordBreak: "break-word",
          }}
        >
          {value}
        </div>
      </div>
    </a>
  );
};

const isCompanyMention = (company) => {
  return company.startsWith("@") && !company.includes(" ");
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const Details = ({ profile, loading, social, github }: DetailsProps) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: "w-4", height: "h-4" })}
          title={skeleton({ width: "w-24", height: "h-4" })}
          value={skeleton({ width: "w-full", height: "h-4" })}
        />
      );
    }

    return array;
  };

  return (
    <div className="card compact bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <ListItem
                  icon={<MdLocationOn className="mr-2" />}
                  title="Based in:"
                  value={profile.location}
                />
              )}
              {profile.company && (
                <ListItem
                  icon={<FaBuilding className="mr-2" />}
                  title="Company:"
                  value={profile.company}
                  link={
                    isCompanyMention(profile.company.trim())
                      ? companyLink(profile.company.trim())
                      : null
                  }
                />
              )}
              <ListItem
                icon={<AiFillGithub className="mr-2" />}
                title="GitHub:"
                value={github.username}
                link={`https://github.com/${github.username}`}
              />
              {social?.twitter && (
                <ListItem
                  icon={<SiTwitter className="mr-2" />}
                  title="Twitter:"
                  value={social.twitter}
                  link={`https://twitter.com/${social.twitter}`}
                />
              )}
              {social?.linkedin && (
                <ListItem
                  icon={<GrLinkedinOption className="mr-2" />}
                  title="LinkedIn:"
                  value={social.linkedin}
                  link={`https://www.linkedin.com/in/${social.linkedin}`}
                />
              )}
              {social?.dribbble && (
                <ListItem
                  icon={<CgDribbble className="mr-2" />}
                  title="Dribbble:"
                  value={social.dribbble}
                  link={`https://dribbble.com/${social.dribbble}`}
                />
              )}
              {social?.behance && (
                <ListItem
                  icon={<FaBehanceSquare className="mr-2" />}
                  title="Behance:"
                  value={social.behance}
                  link={`https://www.behance.net/${social.behance}`}
                />
              )}
              {social?.facebook && (
                <ListItem
                  icon={<FaFacebook className="mr-2" />}
                  title="Facebook:"
                  value={social.facebook}
                  link={`https://www.facebook.com/${social.facebook}`}
                />
              )}
              {social?.instagram && (
                <ListItem
                  icon={<AiFillInstagram className="mr-2" />}
                  title="Instagram:"
                  value={social.instagram}
                  link={`https://www.instagram.com/${social.instagram}`}
                />
              )}
              {social?.medium && (
                <ListItem
                  icon={<AiFillMediumSquare className="mr-2" />}
                  title="Medium:"
                  value={social.medium}
                  link={`https://medium.com/@${social.medium}`}
                />
              )}
              {social?.dev && (
                <ListItem
                  icon={<FaDev className="mr-2" />}
                  title="Dev:"
                  value={social.dev}
                  link={`https://dev.to/${social.dev}`}
                />
              )}
              {social?.stackoverflow && (
                <ListItem
                  icon={<FaStackOverflow className="mr-2" />}
                  title="Stack Overflow:"
                  value={social.stackoverflow.split("/").slice(-1)}
                  link={`https://stackoverflow.com/users/${social.stackoverflow}`}
                />
              )}
              {social?.website && (
                <ListItem
                  icon={<FaGlobe className="mr-2" />}
                  title="Website:"
                  value={social.website}
                  link={social.website}
                />
              )}
              {social?.phone && (
                <ListItem
                  icon={<RiPhoneFill className="mr-2" />}
                  title="Phone:"
                  value={social.phone}
                  link={`tel:${social.phone}`}
                />
              )}
              {social?.email && (
                <ListItem
                  icon={<MdMail className="mr-2" />}
                  title="Email:"
                  value={social.email}
                  link={`mailto:${social.email}`}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

type ListItemProps = {
  icon?: ComponentChildren;
  title?: ComponentChildren;
  value?: ComponentChildren;
  link?: string;
  skeleton?: boolean;
};

type Profile = {
  location?: string;
  company?: string;
  email?: string;
};

type DetailsProps = {
  profile?: Profile;
  loading: boolean;
  social: Social;
  github: Github;
};

export default Details;
