export const cssExamples = [
    {
      title: "ヘッダーテンプレート(ログイン機能なし)",
      descriptionSlug: "header-templete",
      code:`
              .site-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: #f8f9fa;
        }
        .site-header__nav-list {
            display: flex;
            list-style-type: none;
            padding: 0;
        }
        .site-header__nav-item {
            margin-right: 1rem;
        }
        .site-header__search {
            display: flex;
        }
        .site-header__search-input {
            padding: 0.5rem;
            margin-right: 0.5rem;
        }
        .site-header__search-button {
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
      `,
      html:
      `
          <header class="site-header">
        <div class="site-header__logo">
            <img src="https://placehold.jp/50x50.png" alt="ロゴ" width="100" height="50">
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
      `

    
    },
    {
      title: "ボタンデザイン",
      descriptionSlug: "button",
      code: `
  .button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #3498db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #2980b9;
  }
      `,
      html: '<button class="button">クリックしてください</button>'
    },
    {
      title: "カードデザイン",
      descriptionSlug: "card",
      code: `
  .card {
    width: 100%;
    max-width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .card-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .card-content {
    font-size: 14px;
    color: #666;
  }
      `,
      html: `
  <div class="card">
    <h2 class="card-title">カードタイトル</h2>
    <p class="card-content">これはカードの内容です。ここに説明文やその他の情報が入ります。</p>
  </div>
      `
    },
    {
      title: "アニメーションボタン",
      descriptionSlug: "animatedbutton",
      code: `
  .animated-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #e74c3c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .animated-button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }
  
  .animated-button:hover {
    background-color: #c0392b;
  }
  
  .animated-button:hover::after {
    width: 200px;
    height: 200px;
  }
      `,
      html: '<button class="animated-button">アニメーションボタン</button>'
    },
    {
      title: "通知デザイン",
      descriptionSlug: "notion",
      html: `
  <div class="cssdesignbook-body">
    <div class="cssdesignbook-container">
      <div class="cssdesignbook-notification-icon" data-count="3"></div>
      <button class="cssdesignbook-button">通知を確認</button>
    </div>
  </div>
      `,
      code: `
  .cssdesignbook-body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    margin: 0;
    font-family: Arial, sans-serif;
  }
  .cssdesignbook-container {
    text-align: center;
  }
  .cssdesignbook-notification-icon {
    position: relative;
    width: 24px;
    height: 24px;
    background-color: #4A90E2;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .cssdesignbook-notification-icon::before {
    content: "\\1F514";
    font-size: 16px;
    color: white;
  }
  .cssdesignbook-notification-icon::after {
    content: attr(data-count);
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #FF4136;
    color: white;
    border-radius: 50%;
    padding: 2px 5px;
    font-size: 12px;
  }
  .cssdesignbook-notification-icon[data-count="0"]::after {
    display: none;
  }
  .cssdesignbook-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .cssdesignbook-button:hover {
    background-color: #45a049;
  }
      `
    }
  ];