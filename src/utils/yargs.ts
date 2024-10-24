import { PositionalOptions } from "yargs";

export interface IPositionals extends PositionalOptions {
  key: string;
  required: boolean;
  isMultiple?: boolean; // 新增isMultiple配置，控制是否允许多个参数
}
export const generateCommand = (positionals: IPositionals[]): string => {
  return `tiny ${positionals
    .map(
      (pos) =>
        pos.required
          ? `<${pos.key}${pos.isMultiple ? "..." : ""}>` // 必选参数用 <>
          : `[${pos.key}${pos.isMultiple ? "..." : ""}]` // 可选参数用 []
    )
    .join(" ")}`;
};
