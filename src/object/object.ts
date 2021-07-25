export default function objectSample() {
  // const a: object = {
  //   name: 'Torahack',
  //   age: 28
  // }
  // a.name // aというobjectにはnameというプロパティがないとエラーが出る
  //
  // console.log("Object object sample 1:", a)

  // オブジェクトリテラル記法による型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object object sample 2:', country)
}
