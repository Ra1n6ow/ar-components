// 把驼峰转换成横杠连接
export function convertToKebabCase(str: string) {
  // 使用正则表达式将大写字母前加上连字符，并转换为小写
  return str
    .replace(/[A-Z]/g, function (match) {
      return "-" + match.toLowerCase();
    })
    .replace(/^-/, ""); // 移除字符串开头可能出现的连字符
}
