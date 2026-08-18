import { Award, Users, Factory, Globe2 } from "lucide-react";

import aboutImage1 from "../../image/about.jpg";
import aboutImage2 from "../../image/AboutSection.jpg";
import aboutImage3 from "../../image/shemsh.jpg";
import aboutImage4 from "../../image/HeroBg.jpg";

export const catalog = [
  {
    code: "01",
    icon: Award,
    title: "کیفیت برتر",
    description: "استانداردهای معتبر و کنترل دقیق کیفیت در تأمین تجهیزات.",
  },
  {
    code: "02",
    icon: Users,
    title: "تیم متخصص",
    description: "تجربه و دانش فنی در کنار شبکه‌ای از متخصصان صنعتی.",
  },
  {
    code: "03",
    icon: Factory,
    title: "تجهیزات صنعتی",
    description: "تأمین تجهیزات و قطعات مورد نیاز صنایع بزرگ.",
  },
  {
    code: "04",
    icon: Globe2,
    title: "ارتباطات بین‌المللی",
    description: "همکاری با تأمین‌کنندگان و شرکای تجاری معتبر.",
  },
];

export const aboutImages = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

export const mainAboutImage = aboutImage1;
