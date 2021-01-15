const theme = {
  title: "default",
  colors: {
    white: "#FFFFFF",
    black: "#031019",
    gray: " #7E90A6",
    blue: "#0091FF",
    blue100: "#F0F9FF",
    blue200: "#D7EEFF",
    blue300: "#455F7E",
    blue400: "#29476A",
    green: "#00CD69",
    yellow: "#FFBA00",
    yellow100: "#FFF3D4",
  },
} as const;

export type MyTheme = typeof theme;

export default theme;