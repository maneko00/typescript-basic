export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow') // OK
  // colors.push(123) // NG
  console.log('Array array sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8) // OK
  // even.push("10") // NG
  console.log('Array array sample 2:', even)

  // 合併型を用いた配列の型定義
  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF') // OK
  ids.push(456) // OK
  console.log('Array array sample 3:', ids)

  // 型推論された配列の生成
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]として推論される
    _someArray.push('ABC') // (string | number)[]として推論される
    return _someArray
  }

  const someArray = generateSomeArray()
  // someArray.push(true) // generateSomeArray()は(string | number)[]の配列を返すと推論されるので、booleanは追加されない
  console.log('Array array sample 4:', someArray)
}
