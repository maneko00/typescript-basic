export default function callbackSample() {
  const url = 'https://api.github.com/users/deatiger'

  // コールバックで呼び出す非同期関数(fetch)
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスbodyをJSONとして読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const profile = fetchProfile()
  // 非同期処理が完了していないのでPromise<pending>が表示される
  console.log('Asynchronous Callback Sample 2:', profile)
}
