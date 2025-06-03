export type ContactItem = {
  iconName:
    | "MdEmail"
    | "FaLinkedin"
    | "FaGithub"
    | "FaTelegram"
    | "FaMapMarkerAlt";
  text: string;
  href: string | null;
  label: string;
};

export const contacts: ContactItem[] = [
  {
    iconName: "MdEmail",
    text: "sengchantheaz123@gmail.com",
    href: "mailto:sengchantheaz123@gmail.com",
    label: "Email address",
  },
  {
    iconName: "FaLinkedin",
    text: "Chanthea Seng",
    href: "https://www.linkedin.com/in/chanthea-seng-b00467280/",
    label: "LinkedIn profile",
  },
  {
    iconName: "FaTelegram",
    text: "@chantheaa",
    href: "https://t.me/chantheaa",
    label: "Telegram handle",
  },
  {
    iconName: "FaGithub",
    text: "chantheaa",
    href: "https://github.com/wh04m1-dev",
    label: "GitHub profile",
  },
  {
    iconName: "FaMapMarkerAlt",
    text: "Phnom Penh, Cambodia",
    href: null,
    label: "Location",
  },
];
