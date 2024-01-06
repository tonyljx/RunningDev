import { create } from "zustand";

// 定义一个枚举类型表示所有的主题颜色
enum ThemeColor {
  Zinc = "theme-zinc",
  Slate = "theme-slate",
  Stone = "theme-stone",
  Gray = "theme-gray",
  Neutral = "theme-neutral",
  Red = "theme-red",
  Rose = "theme-rose",
  Orange = "theme-orange",
  Green = "theme-green",
  Blue = "theme-blue",
  Yellow = "theme-yellow",
  Violet = "theme-violet",
}

interface ColorState {
  themeColor: ThemeColor;
  changeColor: (newThemeColor: ThemeColor) => void;
}

const useColorStore = create<ColorState>()((set) => ({
  themeColor: ThemeColor.Zinc, // 使用枚举的默认值
  changeColor: (newThemeColor: ThemeColor) =>
    set((state) => ({ themeColor: newThemeColor })),
}));

export { useColorStore, ThemeColor }; // 导出枚举和store
