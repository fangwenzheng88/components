/**
 * 从源对象中摘取指定的字段形成新对象
 * @param source 源对象
 * @param fields 要摘取的字段数组
 * @returns 返回包含摘取字段的新对象
 * @category omit/pick
 */
export default function pick<T extends object, K extends keyof T>(source: T, fields: K[]) {
  const result = {} as Pick<T, K>

  fields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(source, field)) {
      result[field] = source[field]
    }
  })

  return result
}
