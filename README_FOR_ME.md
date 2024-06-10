# 参考文献

https://www.youtube.com/watch?v=c25Ir8-NsvY


# 順序

## プロジェクト開始

```
npx create-next-app@latest . --typescript --eslint  
```

## ライブラリインストール

```
npm i --save-dev @types/bcrypt prisma
```


## prismaの初期化

```
npx prisma init --datasource-provider postgresql
```

なおvscodeでコードフォーマッタが効かないので、下記の記事を参考にフォーマットできるように設定した。
https://www.kimizuy.dev/blog/post/format-schema-prisma

上記コマンドの実行を終えると、プロジェクトに以下のファイルが作成されているので、それらを編集していく。

- `prisma/schema.prisma`
- `.env`

### テーブルの設定(`prisma/schema.prisma`)

追加・変更するテーブルの設定は`prisma/schema.prisma`に記載していく。

### DB接続情報の追加(`.env`)

### マイグレーションの実施

```
npx prisma migrate dev --name init
```

これにて、`prisma/migrations`のマイグレーションが作成される。

### prisamのクライアントの作成

prismaからDB操作を行うためのオブジェクトを生成する必要がある。

これは以下のコマンドで発行できる。

```
npx prisma generate
```

### (補足)Prisma studioによるデータベースの確認

下記コマンドを発行することで `prisma studio` が起動して、データベースの内容をブラウザ上で確認できる。

```
npx prisma studio
```　

# Next Authの設定

## `.env`への設定追加

以下の2つの設定を。

