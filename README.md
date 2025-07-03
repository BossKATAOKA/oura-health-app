# 🩺 Oura Health Dashboard

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://oura-health-app-3isg.vercel.app/)

Oura Ring APIを使用した健康データの可視化・分析ダッシュボードです。リアルタイムで睡眠、活動、心拍数データを美しく表示します。

## 機能

- **認証**: Personal Access Token または OAuth2認証
- **睡眠データ**: 睡眠スコア、睡眠時間、深い睡眠、REM睡眠の分析
- **活動データ**: 活動スコア、歩数、消費カロリー、活動時間の追跡
- **心拍数データ**: 心拍数の変動を可視化
- **データ可視化**: Chart.jsを使用したインタラクティブなグラフ
- **健康トレンド**: 7日間の健康データトレンド分析

## セットアップ

### 1. Oura Ring APIキーの取得

1. [Oura Cloud](https://cloud.ouraring.com/)にログイン
2. "Personal Access Tokens"ページに移動
3. "Create A New Personal Access Token"をクリック
4. トークンの用途を入力してトークンを生成
5. 生成されたトークンをコピー

### 2. バックエンドのセットアップ

```bash
cd backend
npm install
cp .env.example .env
# .envファイルを編集して必要な環境変数を設定
npm run dev
```

### 3. フロントエンドのセットアップ

```bash
cd frontend
npm install
npm run dev
```

## 使用方法

1. バックエンドサーバーを起動 (http://localhost:3000)
2. フロントエンドを起動 (http://localhost:5173)
3. ブラウザでフロントエンドにアクセス
4. Personal Access Tokenを入力して認証
5. 健康データを確認

## API エンドポイント

### 認証
- **Header**: `Authorization: Bearer <access_token>`

### エンドポイント
- `GET /api/oura/sleep/:date?` - 睡眠データ取得
- `GET /api/oura/activity/:date?` - 活動データ取得
- `GET /api/oura/heartrate/:date?` - 心拍数データ取得
- `GET /api/oura/personal-info` - 個人情報取得

## 技術スタック

### バックエンド
- Node.js + Express
- Axios (HTTP クライアント)
- CORS対応
- レート制限

### フロントエンド
- HTML5 + CSS3 + JavaScript
- Chart.js (データ可視化)
- レスポンシブデザイン

## 注意事項

- Oura Ring Gen3またはOura Ring 4のユーザーは、アクティブなOura Membershipが必要です
- APIには制限があるため、適切な間隔でリクエストを送信してください
- Personal Access Tokenは安全に管理してください

## ライセンス

MIT License