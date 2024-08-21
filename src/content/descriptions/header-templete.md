## ヘッダーテンプレート
ウェブサイトを作る際、必要不可欠なものはなんだろう？
そうヘッダーである。ここではヘッダーの基本的なテンプレートデザインを示しておく
### 豆知識
下のリンクからいけるサイトからダミー画像を作成することができる！  
https://placehold.jp/  
**使い方**  
リンクが表示されるのでimgタグのsrcに設定するだけ！！
### HTML
```html
    <header class="site-header">
        <div class="site-header__logo">
            <img src="https://placehold.jp/100x50.png" alt="ロゴ" width="100" height="50">
        </div>
        <nav class="site-header__nav">
            <ul class="site-header__nav-list">
                <li class="site-header__nav-item"><a href="#home">ホーム</a></li>
                <li class="site-header__nav-item"><a href="#about">About</a></li>
                <li class="site-header__nav-item"><a href="#services">サービス</a></li>
                <li class="site-header__nav-item"><a href="#contact">お問い合わせ</a></li>
            </ul>
        </nav>
        <search class="site-header__search">
            <input class="site-header__search-input" type="search" placeholder="検索..." aria-label="サイト内検索">
            <button class="site-header__search-button" type="submit">検索</button>
        </search>
    </header>
```