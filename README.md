pull から言語は取得完了！
あとは repository だけをもらう

User から repo を追っていくみたいなこと
1: Login する
2: 言語を選ぶ
3: Repository を探す => User repo を for で回す => その中から指定の言語を使っているプロジェクトを探す リサーチ
ユーザーの全ての repository の名前を取得したい
Owner の名前から全ての reository の名前を取得したい
https://api.github.com/users/Tomosuke0930/repos で全ての repository を取得できる
ここから"name"で名前を取得できる！！！

リストを作成する
そしてそのリストの中から言語を取得する
そしてヒットするやつがあったらそれをやる
https://api.github.com/repos/Tomosuke0930/Yo/languages で repository の言語を取得できる できた！！

その中で取得したい言語のやつだけを取得する
その repository が見つかったらその repository の中にある repo の pull 全てを取得する？

4: その中からできるだけ早い pull を探す
言語が合う。その中でも一つだけの id を取得する
5: その年代と今を比較して言語歴を計算する

条件 1: author がその人である
条件 2: 言語が指定の言語である

    // console.log(ur.user.login);
    // if (ur.user.login == "Tomosuke0930") {
    //   setUserInfo(ur.head.repo.language);
    //   setUserTimeInfo(ur.created_at);
    // } else {
    //   console.log("Error");
    // }

0: {TypeScript: 20036, JavaScript: 3649, Shell: 218}
1: {Solidity: 3012}
2: {JavaScript: 6031, HTML: 3164, CSS: 248}
3: {}
4: {TypeScript: 8482}
5: {TypeScript: 8482}
6: {}
7: {Solidity: 10535, JavaScript: 3433}
8: {TypeScript: 2966, CSS: 1973, JavaScript: 118}
9: {}
10: {JavaScript: 11092, Solidity: 4633, CSS: 656}
11: {}
12: {JavaScript: 17348, HTML: 1850, CSS: 126}
13: {Solidity: 2096}
14: {JavaScript: 609509}
15: {JavaScript: 47239, TypeScript: 1580, HTML: 408, Shell: 306, CSS: 286}
16: {HTML: 976}
17: {Solidity: 301609}
18: {TypeScript: 16516, HTML: 1573, CSS: 854, JavaScript: 687, Dockerfile: 194, …}
19: {Solidity: 2570}
20: {TypeScript: 11085, JavaScript: 118}
21: {TypeScript: 6741}
22: {JavaScript: 925}
23: {TypeScript: 11076}
24: {HTML: 3550}
25: {TypeScript: 21517, Solidity: 11404, JavaScript: 1881}
26: {}
27: {TypeScript: 39616}
28: {Solidity: 142208}
29: {TypeScript: 19241, Solidity: 11549, JavaScript: 737}

0: "2021-10-25T09:41:00Z"
1: "2022-06-24T14:07:00Z"
2: "2021-12-27T04:09:28Z"
3: "2022-01-30T09:26:16Z"
4: "2022-03-12T08:42:32Z"
5: "2022-03-16T11:07:24Z"
6: "2022-03-16T11:17:28Z"
7: "2022-06-23T04:02:14Z"
8: "2021-10-26T08:15:37Z"
9: "2022-06-24T06:21:18Z"
10: "2022-01-23T05:15:45Z"
11: "2022-04-21T03:03:24Z"
12: "2022-05-17T03:57:34Z"
13: "2022-02-06T11:04:02Z"
14: "2021-12-22T08:41:33Z"
15: "2022-01-01T06:06:20Z"
16: "2021-10-25T09:11:53Z"
17: "2021-12-28T09:33:50Z"
18: "2022-03-07T05:11:45Z"
19: "2022-03-16T03:12:22Z"
20: "2021-12-22T07:06:40Z"
21: "2022-02-26T07:39:39Z"
22: "2021-11-04T23:37:08Z"
23: "2021-11-24T06:28:29Z"
24: "2021-11-25T08:20:32Z"
25: "2021-12-24T03:39:33Z"
26: "2022-04-22T02:13:12Z"
27: "2022-01-30T08:53:35Z"
28: "2022-01-14T02:38:02Z"
29: "2022-01-23T08:52:34Z"
