// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

// 03.基本の型定義
// import { notExistSample, primitiveSample, anySample, unknownSample } from './basic'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 04.関数の型定義
import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2 } from './function/parameters'

logMessage('Hello TypeScript!')
isUserSignedIn('ABC', 'Torahack')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
