import Tir from "../../image/شمش2.jpg";
import navdani from "../../image/navdan.jpg";
import milgerd from "../../image/milgerd.jpg";

export const products = [
  {
    code: "M01",
    profile: "beam",
    name: "تیرآهن و ناودانی",
    description:
      "انواع تیرآهن و ناودانی با استانداردهای بین‌المللی برای پروژه‌های صنعتی و ساختمانی",
    image: navdani,
    spec: [
      { label: "استاندارد", value: "DIN" },
      { label: "مقاومت", value: "بالا" },
      { label: "پوشش", value: "ضدخوردگی" },
    ],
  },

  {
    code: "M02",
    profile: "rebar",
    name: "میلگرد و آرماتور",
    description:
      "میلگرد آجدار و ساده با کیفیت عالی برای سازه‌های بتنی و ساختمانی",
    image: milgerd,
    spec: [
      { label: "گرید", value: "۴۰۰ / ۵۰۰" },
      { label: "نوع سطح", value: "آجدار" },
      { label: "کنترل", value: "کیفیت تضمینی" },
    ],
  },

  {
    code: "M03",
    profile: "billet",
    name: "شمش‌های فولادی",
    description: "شمش‌های فولادی در سایزها و گریدهای مختلف",
    image: Tir,
    spec: [
      { label: "سطح", value: "صیقلی" },
      { label: "ضخامت", value: "متنوع" },
      { label: "برش", value: "دقیق" },
    ],
  },
];
