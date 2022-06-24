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
https://api.github.com/repos/Tomosuke0930/Yo/languages で repository の言語を取得できる

4: その中からできるだけ早い pull を探す
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
