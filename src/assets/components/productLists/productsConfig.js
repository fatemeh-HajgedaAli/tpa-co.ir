export const CATEGORIES = {
  RM: {
    label: "مواد اولیه",
    color: "#4fb3c7",
  },

  RF: {
    label: "نسوز و عایق",
    color: "#e8b84b",
  },

  EQ: {
    label: "تجهیزات و قطعات",
    color: "#e8622c",
  },

  FG: {
    label: "محصول نهایی",
    color: "#edeee8",
  },
};

export const TOKENS = {
  INK: "#edeee8",
  MUTED: "#8a94a3",
  MUTED_DIM: "#5b6472",
  BLUE: "#4fb3c7",
  HEAT: "#e8622c",
  AMBER: "#e8b84b",
  LINE: "rgba(237,238,232,0.10)",
  LINE_STRONG: "rgba(237,238,232,0.22)",
  MONO: "'JetBrains Mono', monospace",
};

export const codeFor = (id) => `M${String(id).padStart(2, "0")}`;
