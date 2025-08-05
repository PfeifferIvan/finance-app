// const lightColors = {
//   mode: "light",
//   background: "#E9F7EF",
//   primary: "#2ECC71",
//   secondary: "#27AE60",
//   income: "#2ECC71",
//   expense: "#E74C3C",
//   warning: "#F39C12",
//   info: "#3498DB",
//   text: "#2C3E50",
//   textSecondary: "#7F8C8D",
//   border: "#D5DBDB",
//   card: "#FFFFFF",
//   disabled: "#BDC3C7",
//   success: "#1ABC9C",
//   shadow: "rgba(0,0,0,0.1)",
//   gradients: {
//     background: ["#E9F7EF", "#D4EFDF"],
//     header: ["#2ECC71", "#27AE60"],
//     income: ["#A9DFBF", "#2ECC71"],
//     expense: ["#FADBD8", "#E74C3C"],
//     buttonPrimary: ["#58D68D", "#28B463"],
//     buttonSecondary: ["#85C1E9", "#3498DB"],
//   },
// };

const Colors = {
  background: "#1C1C1E",
  primary: "#27AE60",
  secondary: "#2ECC71",
  income: "#27AE60",
  expense: "#E74C3C",
  warning: "#F39C12",
  info: "#3498DB",
  text: "#ECF0F1",
  textSecondary: "#95A5A6",
  border: "#2F3640",
  card: "#2C3E50",
  disabled: "#7F8C8D",
  success: "#1ABC9C",
  shadow: "rgba(0,0,0,0.3)",
  gradients: {
    background: ["#1C1C1E", "#2C3E50"] as [string, string],
    header: ["#27AE60", "#145A32"],
    income: ["#196F3D", "#27AE60"],
    expense: ["#943126", "#E74C3C"] as [string, string],
    buttonPrimary: ["#145A32", "#28B463"],
    buttonSecondary: ["#1B4F72", "#3498DB"],
  },
  drawer: {
    background: "#1C1C1E", // Drawer background
    activeBackground: "#555ad4ff", // Background for active item
    activeText: "#ECF0F1", // Text color for active item
    inactiveText: "#95A5A6", // Text color for inactive items
    border: "#2F3640", // Border or divider color
    hover: "#2C3E50", // On press or hover (ripple) background
    disabledText: "#7F8C8D", // Disabled item text
    shadow: "rgba(0,0,0,0.3)", // Shadow under drawer or items
    gradients: {
      header: ["#27AE60", "#145A32"], // Optional header gradient
    },
  },
};

export default Colors;
